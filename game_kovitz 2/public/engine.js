import { LEVELS, QUESTIONS_PER_LEVEL, CHECKPOINT_EVERY, PASS_PERCENT } from './questions.js';

export const SAVE_VERSION = 1;
export const QUESTION_MAP = new Map(LEVELS.flatMap(level => level.questions.map(q => [q.id, q])));
const ACTIONS = new Set(['answer', 'continue', 'practice', 'advance', 'retry']);

function random(game) {
  game.randomState = (Math.imul(1664525, game.randomState) + 1013904223) >>> 0;
  return game.randomState / 4294967296;
}
function shuffled(values, game) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random(game) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function pickQuestion(game) {
  const pool = LEVELS[game.level].questions.filter(q => q.difficulty === game.difficulty && !game.seen.includes(q.id));
  if (!pool.length) throw new Error('No fresh questions remain in this tier.');
  const question = pool[Math.floor(random(game) * pool.length)];
  game.current = { id: question.id, order: shuffled([0, 1, 2, 3], game) };
  game.seen.push(question.id);
  game.phase = 'question';
}
function startLevel(game) {
  game.answers = [];
  game.seen = [];
  game.current = null;
  game.correctChain = 0;
  game.missChain = 0;
  game.streak = 0;
  game.notice = '';
  pickQuestion(game);
}
export function createGame(difficulty = 0, seed = Date.now() >>> 0) {
  if (!Number.isInteger(difficulty) || difficulty < 0 || difficulty > 2) throw new Error('Invalid difficulty');
  if (!Number.isInteger(seed) || seed < 0 || seed > 0xffffffff) throw new Error('Invalid seed');
  const game = { initialDifficulty: difficulty, seed, randomState: seed, difficulty, level: 0,
    phase: 'question', completed: [], answers: [], seen: [], current: null,
    streak: 0, bestStreak: 0, correctChain: 0, missChain: 0, xp: 0, notice: '', events: [] };
  startLevel(game);
  return game;
}
export function levelScore(game) {
  const correct = game.answers.filter(a => a.correct).length;
  const answered = game.answers.length;
  const percent = answered ? Math.round(correct / answered * 100) : 0;
  return { correct, answered, percent, passed: answered >= CHECKPOINT_EVERY && correct * 100 >= PASS_PERCENT * answered };
}
export function currentQuestion(game) { return QUESTION_MAP.get(game.current?.id); }
export function totalScore(game) {
  return game.completed.reduce((sum, entry) => ({ correct: sum.correct + entry.correct, answered: sum.answered + entry.answered }), { correct: 0, answered: 0 });
}

// Every state transition is guarded, so rapid clicks and held keys cannot double-score.
export function act(game, action, value) {
  if (!ACTIONS.has(action) || game.phase === 'complete') return false;
  if (action === 'answer') {
    if (game.phase !== 'question' || !Number.isInteger(value) || value < 0 || value > 3) return false;
    const question = currentQuestion(game);
    const selected = game.current.order[value];
    const correct = selected === question.answer;
    const oldDifficulty = game.difficulty;
    const points = correct ? [100, 150, 200][question.difficulty] : 0;
    game.answers.push({ id: question.id, selected, correct, difficulty: question.difficulty, points });
    game.xp += points;
    game.streak = correct ? game.streak + 1 : 0;
    game.bestStreak = Math.max(game.bestStreak, game.streak);
    game.correctChain = correct ? game.correctChain + 1 : 0;
    game.missChain = correct ? 0 : game.missChain + 1;
    game.notice = '';
    if (game.correctChain >= 2) {
      game.difficulty = Math.min(2, game.difficulty + 1);
      game.correctChain = 0;
    }
    if (game.missChain >= 2) {
      game.difficulty = Math.max(0, game.difficulty - 1);
      game.missChain = 0;
    }
    if (game.difficulty > oldDifficulty) game.notice = 'up';
    if (game.difficulty < oldDifficulty) game.notice = 'down';
    game.phase = 'feedback';
  } else if (action === 'continue') {
    if (game.phase !== 'feedback') return false;
    if (game.answers.length % CHECKPOINT_EVERY === 0) game.phase = 'checkpoint';
    else pickQuestion(game);
  } else if (action === 'practice') {
    if (game.phase !== 'checkpoint' || game.answers.length >= QUESTIONS_PER_LEVEL) return false;
    pickQuestion(game);
  } else if (action === 'advance') {
    if (game.phase !== 'checkpoint' || !levelScore(game).passed) return false;
    game.completed.push({ ...levelScore(game), level: game.level });
    if (game.level === LEVELS.length - 1) game.phase = 'complete';
    else { game.level++; startLevel(game); }
  } else if (action === 'retry') {
    if (game.phase !== 'checkpoint' || game.answers.length < QUESTIONS_PER_LEVEL || levelScore(game).passed) return false;
    startLevel(game);
  }
  game.events.push(value === undefined ? [action] : [action, value]);
  return true;
}

// Store a seed and valid player actions. Replaying reconstructs and validates the
// exact question order, answers and checkpoints without trusting stored scores.
export function serializeGame(game) {
  return JSON.stringify({ version: SAVE_VERSION, difficulty: game.initialDifficulty, seed: game.seed, events: game.events });
}
export function restoreGame(raw) {
  try {
    if (typeof raw !== 'string' || raw.length > 250000) return null;
    const saved = JSON.parse(raw);
    if (saved.version !== SAVE_VERSION || !Number.isInteger(saved.difficulty) || !Number.isInteger(saved.seed) || !Array.isArray(saved.events) || saved.events.length > 10000) return null;
    const game = createGame(saved.difficulty, saved.seed);
    for (const event of saved.events) {
      if (!Array.isArray(event) || event.length !== (event[0] === 'answer' ? 2 : 1) || !act(game, ...event)) return null;
    }
    return game;
  } catch { return null; }
}
