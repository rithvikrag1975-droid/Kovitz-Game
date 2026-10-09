import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { LEVELS, DIFFICULTIES, QUESTIONS_PER_LEVEL } from '../public/questions.js';
import { createGame, act, currentQuestion, levelScore, totalScore, serializeGame, restoreGame } from '../public/engine.js';

function answer(game, correct = true) {
  const q = currentQuestion(game);
  const slot = game.current.order.findIndex(i => correct ? i === q.answer : i !== q.answer);
  assert.equal(act(game, 'answer', slot), true);
}
function next(game) { assert.equal(act(game, 'continue'), true); }
function checkpoint(game, count = 5, correctCount = count) {
  for (let i = 0; i < count; i++) {
    answer(game, i < correctCount); next(game);
    if (game.phase === 'checkpoint' && i < count - 1) assert.equal(act(game, 'practice'), true);
  }
}

test('all 240 questions have valid unique IDs, choices, explanations, and local artwork', () => {
  const ids = new Set();
  const codeCases = [];
  for (const level of LEVELS) {
    assert.equal(level.questions.length, 60);
    for (let tier = 0; tier < DIFFICULTIES.length; tier++) assert.equal(level.questions.filter(q => q.difficulty === tier).length, 20);
    for (const q of level.questions) {
      assert.ok(!ids.has(q.id)); ids.add(q.id);
      assert.equal(q.choices.length, 4);
      assert.equal(new Set(q.choices).size, 4);
      assert.ok(q.answer >= 0 && q.answer <= 3);
      assert.ok(q.explanation.length > 15);
      assert.ok(q.prompt.length > 10);
      assert.ok(existsSync(new URL(`../public/assets/${level.id}-${q.scene}.svg`, import.meta.url)));
      if (q.code) codeCases.push(q);
    }
  }
  assert.equal(ids.size, 240);
  assert.equal(codeCases.length, 160);
});

test('starting difficulty selects the matching pool; questions and choices vary across seeds', () => {
  for (let tier = 0; tier < 3; tier++) assert.equal(currentQuestion(createGame(tier, 42)).difficulty, tier);
  const games = Array.from({length:40}, (_, i) => createGame(0, i * 931));
  assert.ok(new Set(games.map(g => g.current.id)).size > 10);
  assert.ok(new Set(games.map(g => g.current.order.join(''))).size > 10);
});

test('two correct answers raise difficulty, which changes the next selected question', () => {
  const game = createGame(0, 55);
  answer(game); assert.equal(game.difficulty, 0); next(game);
  answer(game); assert.equal(game.difficulty, 1); assert.equal(game.notice, 'up'); next(game);
  assert.equal(currentQuestion(game).difficulty, 1);
  answer(game); next(game); answer(game); assert.equal(game.difficulty, 2); next(game);
  assert.equal(currentQuestion(game).difficulty, 2);
  answer(game); next(game); assert.equal(game.phase, 'checkpoint');
  assert.equal(game.xp, 700);
});

test('two misses ease difficulty; a single miss does not; tiers stay bounded', () => {
  const game = createGame(2, 7);
  answer(game, false); assert.equal(game.difficulty, 2); next(game);
  answer(game, false); assert.equal(game.difficulty, 1); assert.equal(game.notice, 'down'); next(game);
  assert.equal(currentQuestion(game).difficulty, 1);
  answer(game, false); next(game); answer(game, false); next(game);
  assert.equal(game.difficulty, 0);
  answer(game, false); next(game);
  assert.equal(act(game, 'practice'), true);
  answer(game, false); next(game);
  assert.equal(game.difficulty, 0);
  assert.equal(game.xp, 0);
});

test('double submissions, invalid transitions and invalid choices never change scores', () => {
  const game = createGame(0, 11);
  assert.equal(act(game, 'advance'), false);
  assert.equal(act(game, 'continue'), false);
  assert.equal(act(game, 'answer', -1), false);
  assert.equal(act(game, 'answer', 4), false);
  answer(game);
  const saved = serializeGame(game);
  assert.equal(act(game, 'answer', 0), false);
  assert.equal(act(game, 'practice'), false);
  assert.equal(serializeGame(game), saved);
});

test('exactly 80% unlocks a checkpoint and 60% does not', () => {
  const passing = createGame(0, 1); checkpoint(passing, 5, 4);
  assert.deepEqual(levelScore(passing), { correct: 4, answered: 5, percent: 80, passed: true });
  assert.equal(act(passing, 'advance'), true); assert.equal(passing.level, 1);
  const failing = createGame(0, 2); checkpoint(failing, 5, 3);
  assert.equal(levelScore(failing).passed, false);
  assert.equal(act(failing, 'advance'), false);
  assert.equal(act(failing, 'practice'), true);
});

test('complete all four worlds early; final denominator matches actual questions answered', () => {
  const game = createGame(0, 101);
  for (let world = 0; world < 4; world++) {
    assert.equal(game.level, world); checkpoint(game);
    assert.equal(act(game, 'advance'), true);
  }
  assert.equal(game.phase, 'complete');
  assert.deepEqual(totalScore(game), {correct:20, answered:20});
  assert.equal(game.completed.length, 4);
  assert.equal(act(game, 'advance'), false);
  assert.deepEqual(restoreGame(serializeGame(game)), game);
});

test('full 80-question game with all correct answers never repeats or exhausts a pool', () => {
  const game = createGame(0, 492);
  for (let world = 0; world < 4; world++) {
    checkpoint(game, 20);
    assert.equal(game.answers.length, 20);
    assert.equal(new Set(game.answers.map(a => a.id)).size, 20);
    assert.equal(act(game, 'practice'), false);
    assert.equal(act(game, 'advance'), true);
  }
  assert.equal(game.phase, 'complete');
  assert.deepEqual(totalScore(game), {correct:80, answered:80});
});

test('twenty wrong answers allow retry without unlocking a world or repeating within the attempt', () => {
  const game = createGame(0, 400);
  checkpoint(game, 20, 0);
  assert.equal(new Set(game.answers.map(a => a.id)).size, QUESTIONS_PER_LEVEL);
  assert.equal(act(game, 'advance'), false);
  assert.equal(act(game, 'practice'), false);
  assert.equal(act(game, 'retry'), true);
  assert.equal(game.level, 0); assert.equal(game.phase, 'question');
  assert.equal(game.answers.length, 0); assert.equal(game.seen.length, 1);
  assert.equal(game.xp, 0);
});

test('saving and resuming exactly restores question, answer order, feedback and checkpoint', () => {
  const game = createGame(1, 7287);
  assert.deepEqual(restoreGame(serializeGame(game)), game);
  for (let i = 0; i < 5; i++) {
    answer(game, i !== 1);
    assert.deepEqual(restoreGame(serializeGame(game)), game);
    next(game);
    assert.deepEqual(restoreGame(serializeGame(game)), game);
  }
});

test('corrupt, incompatible and impossible saved games are ignored', () => {
  for (const bad of [null, '', '{', 'null', '{}', '{"version":1,"events":[]}', '{"version":2}', JSON.stringify({version:1,difficulty:4,seed:2,events:[]}), JSON.stringify({version:1,difficulty:0,seed:2,events:[['advance']]}), JSON.stringify({version:1,difficulty:0,seed:2,events:[['answer',2,'extra']]})]) assert.equal(restoreGame(bad), null);
});

test('500 varied game simulations preserve tier bounds, unique questions and scoring invariants', () => {
  for (let seed = 0; seed < 500; seed++) {
    const game = createGame(seed % 3, seed * 1907);
    for (let i = 0; i < 20; i++) {
      const expectedTier = game.difficulty;
      assert.equal(currentQuestion(game).difficulty, expectedTier);
      answer(game, ((seed + i * 13) % 7) > 1); next(game);
      assert.ok(game.difficulty >= 0 && game.difficulty <= 2);
      if (game.phase === 'checkpoint' && i < 19) act(game, 'practice');
    }
    assert.equal(new Set(game.answers.map(a => a.id)).size, 20);
    assert.equal(game.xp, game.answers.reduce((sum,a) => sum+a.points,0));
    assert.deepEqual(restoreGame(serializeGame(game)),game);
  }
});
