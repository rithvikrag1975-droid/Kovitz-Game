import { LEVELS, DIFFICULTIES, QUESTIONS_PER_LEVEL, CHECKPOINT_EVERY, PASS_PERCENT } from './questions.js';
import { createGame, act, currentQuestion, levelScore, totalScore, serializeGame, restoreGame } from './engine.js';

const screen = document.querySelector('#screen');
const track = document.querySelector('#level-track');
const status = document.querySelector('#status');
const SAVE_KEY = 'programming-basics-arcade-v1';
const sceneNames = { strings: ['Signal station', 'Cassette decoder', 'Arcade terminal'], lists: ['Inventory slots', 'Supply conveyor', 'Bonus chest'], tuples: ['Coordinate grid', 'Locked cartridge', 'Waypoint station'], dictionaries: ['Key vault', 'Player database', 'Portal map'] };
const sceneDescriptions = {
  strings: ['Pixel-art terminal transmitting a string of letters among the stars.', 'Retro cassette player and a colorful text signal.', 'Pixel arcade cabinet with a glowing text display.'],
  lists: ['Pixel-art inventory with a row of collectible items.', 'Retro conveyor belt carrying inventory crates.', 'Pixel-art treasure chest and inventory slots.'],
  tuples: ['Pixel-art spaceship on a coordinate grid.', 'Retro cartridge protected by a pixel padlock.', 'Pixel-art waypoints connected on a space map.'],
  dictionaries: ['Retro vault with colored keys and matching chests.', 'Pixel-art player database with connected record cards.', 'Retro portal map linking colored keys to destinations.']
};
let game = null;
let savedGame = null;
let startingDifficulty = 0;
let storageFailed = false;
try { savedGame = restoreGame(localStorage.getItem(SAVE_KEY)); } catch { storageFailed = true; }

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const button = (label, action, ghost = false, primary = false) => `<button class="btn${ghost ? ' ghost' : ''}" data-action="${action}"${primary ? ' data-primary' : ''}>${label}</button>`;
function save() {
  try { localStorage.setItem(SAVE_KEY, serializeGame(game)); }
  catch { storageFailed = true; }
}
function art(level, scene = 0, className = '') {
  return `<figure class="retro-scene ${className}"><img src="./${level.id}-${scene}.svg" width="480" height="240" alt="${sceneDescriptions[level.id][scene]}"/><figcaption><span>${sceneNames[level.id][scene]}</span><span aria-hidden="true">● LIVE</span></figcaption></figure>`;
}
function renderTrack() {
  track.innerHTML = LEVELS.map((level, i) => `<li class="${game && (i < game.level || game.phase === 'complete') ? 'done' : game && i === game.level ? 'current' : ''}"${game && i === game.level && game.phase !== 'complete' ? ' aria-current="step"' : ''}><span class="track-number">0${i + 1}</span> ${level.title}<span class="sr-only">${game && (i < game.level || game.phase === 'complete') ? ', cleared' : ''}</span></li>`).join('');
}
function mount(html, focus = true, resetScroll = true) {
  screen.innerHTML = html;
  renderTrack();
  if (resetScroll) window.scrollTo({ top: 0, behavior: "instant" });
  if (focus) screen.querySelector('[data-focus]')?.focus({ preventScroll: true });
}
function intro(focus = true) {
  game = null;
  status.textContent = '';
  mount(`<div class="intro enter">
    <div class="hero"><div><p class="eyebrow">INSERT CURIOSITY · PRESS START</p><h1 data-focus tabindex="-1">Programming<br><span class="hl">Basics<span class="cursor">_</span></span></h1><p class="lede">A little Python. A little pixel magic.<br>Play your way from first steps to boss-level code.</p><div class="hero-tags"><span>4 WORLDS</span><span>240 QUESTIONS</span><span>YOUR PACE</span></div></div>${art(LEVELS[0], 2, 'hero-art')}</div>
    <div class="level-grid">${LEVELS.map((level, i) => `<div class="level-card"><span class="num">WORLD 0${i + 1}</span><span class="glyph">${escape(level.glyph)}</span><span class="name">${level.title}</span></div>`).join('')}</div>
    <fieldset class="difficulty-picker"><legend>Choose your starting difficulty</legend><div class="difficulty-options">${DIFFICULTIES.map((name, i) => `<label class="difficulty-option"><input type="radio" name="difficulty" value="${i}"${i === startingDifficulty ? ' checked' : ''}><span><b>${name}</b><small>${['Learn the basics', 'Trace the code', 'Untangle the tricky bits'][i]}</small></span></label>`).join('')}</div><p class="difficulty-help">Two correct in a row → harder questions. Two misses → a gentler challenge.</p></fieldset>
    <ul class="rules"><li>Up to ${QUESTIONS_PER_LEVEL} questions per world. A checkpoint every ${CHECKPOINT_EVERY}.</li><li>Reach ${PASS_PERCENT}% to unlock the next world, or stay and practice.</li><li>Earn 100 / 150 / 200 XP for Easy / Medium / Hard answers. No timer.</li></ul>
    <div class="actions">${savedGame && savedGame.phase !== 'complete' ? button('Resume saved game ▸', 'resume', false, true) : ''}${button(savedGame && savedGame.phase !== 'complete' ? 'Start a new game' : 'Let’s play ▸', 'start', !!savedGame && savedGame.phase !== 'complete', !savedGame || savedGame.phase === 'complete')}</div>
    <p class="save-note">${storageFailed ? 'Saving is unavailable in this browser. You can still play this session.' : 'Progress saves on this device. Pick up where you left off.'}</p>
  </div>`, focus);
}
function pips() {
  return `<div class="pips" aria-label="${game.answers.length} of ${QUESTIONS_PER_LEVEL} answered">${Array.from({ length: QUESTIONS_PER_LEVEL }, (_, i) => `<span class="pip ${game.answers[i] ? game.answers[i].correct ? 'right' : 'wrong' : i === game.answers.length && game.phase === 'question' ? 'now' : ''} ${(i + 1) % CHECKPOINT_EVERY === 0 ? 'checkpoint' : ''}" aria-hidden="true"></span>`).join('')}</div>`;
}
function questionView(focus = true) {
  const level = LEVELS[game.level];
  const q = currentQuestion(game);
  const answered = game.phase === 'feedback';
  const last = answered ? game.answers.at(-1) : null;
  const score = levelScore(game);
  const qNumber = answered ? game.answers.length : game.answers.length + 1;
  const feedback = answered ? `<section class="feedback ${last.correct ? 'good' : 'bad'}" aria-label="Answer feedback"><div class="feedback-copy"><strong>${last.correct ? `Correct! +${last.points} XP` : 'Not quite — keep going!'}</strong>${!last.correct ? `<p class="correct-answer">Correct answer: <code>${escape(q.choices[q.answer])}</code></p>` : ''}<p>${escape(q.explanation)}</p>${game.notice ? `<p class="difficulty-change ${game.notice}">${game.notice === 'up' ? '↑ LEVEL UP! Two in a row.' : '↓ Let’s build back up.'} Your next question will be ${DIFFICULTIES[game.difficulty]}.</p>` : ''}</div>${button(game.answers.length % CHECKPOINT_EVERY === 0 ? 'See checkpoint ▸' : 'Next question ▸', 'continue', false, true)}</section>` : '';
  mount(`<div class="quiz">
    <div class="world-heading"><p class="eyebrow">WORLD 0${game.level + 1} / ${level.title.toUpperCase()}</p><button class="text-btn" data-action="home">Save & exit</button></div>
    <div class="q-head"><div class="q-count">QUESTION <b>${String(qNumber).padStart(2,'0')}</b> / ${QUESTIONS_PER_LEVEL}</div><div class="q-score">ACCURACY <b>${score.correct} / ${score.answered}</b><span>${game.xp.toLocaleString()} XP</span></div></div>${pips()}
    <div class="question-layout"><div class="question-main"><div class="question-labels"><span class="difficulty-badge tier-${q.difficulty}" data-testid="difficulty">${DIFFICULTIES[q.difficulty]}</span><span class="streak">${game.streak ? `✦ ${game.streak} in a row` : 'NEW CHALLENGE'}</span></div><h1 class="question" data-focus tabindex="-1" data-question-id="${q.id}">${escape(q.prompt)}</h1>${q.code ? `<pre class="code-block" aria-label="Python code"><span class="code-label">PYTHON 3.9+ · FIND THE FINAL VALUE</span><code>${escape(q.code)}</code></pre>` : ''}
    <div class="choices" role="group" aria-label="Answer choices">${game.current.order.map((original, i) => {
      const correct = answered && original === q.answer;
      const wrong = answered && original === last.selected && !last.correct;
      return `<button class="choice${correct ? ' correct' : wrong ? ' incorrect' : answered ? ' dim' : ''}" data-answer="${i}" aria-keyshortcuts="${'ABCD'[i]}"${answered ? ' disabled' : ''}><span class="key" aria-hidden="true">${'ABCD'[i]}</span><span class="choice-text">${escape(q.choices[original])}</span><span class="mark">${correct ? '✓ correct' : wrong ? '✕ chosen' : ''}</span></button>`;
    }).join('')}</div></div>
    <aside class="arcade-side" aria-label="Retro artwork">${art(level,q.scene)}<div class="companion"><img src="./robot.svg" width="80" height="80" alt="Pixel robot quiz companion"><div><b>BYTE, YOUR CO-PILOT</b><p>${answered ? last.correct ? 'Nice move, player!' : 'Every miss is a new clue.' : ['One question at a time.', 'You’ve got this, player.', 'Boss brain: activated.'][q.difficulty]}</p></div></div><div class="adaptive-note"><span class="status-dot"></span> ADAPTIVE MODE ON<p>Two correct answers raise the challenge. Two misses ease it back.</p></div></aside></div>${feedback}
    <p class="save-note">${storageFailed ? 'Progress could not be saved. Keep this tab open to finish.' : 'Progress saved · No timer, take your time'}</p></div>`, focus, !answered);
  if (answered && focus) {
    screen.querySelector('[data-primary]')?.focus({ preventScroll: true });
    screen.querySelector('.feedback')?.scrollIntoView({ block: "nearest", behavior: "instant" });
  }
}
function checkpointView() {
  const score = levelScore(game);
  const end = score.answered === QUESTIONS_PER_LEVEL;
  const last = game.level === LEVELS.length - 1;
  mount(`<div class="checkpoint enter"><p class="eyebrow">WORLD 0${game.level + 1} / ${LEVELS[game.level].title.toUpperCase()}</p><h1 class="result-heading" data-focus tabindex="-1">${score.passed ? 'Checkpoint<br><span class="hl">cleared!</span>' : end ? 'Another<br><span class="hl">round?</span>' : 'Keep on<br><span class="hl">learning.</span>'}</h1><section class="panel" data-tag="${end ? 'WORLD RESULTS' : 'PROGRESS CHECK'}"><div class="meter-row"><div class="big-pct ${score.passed ? 'pass' : 'fail'}">${score.percent}%</div><div><div class="meter ${score.passed ? '' : 'fail'}"><div class="fill" style="--p:${score.percent/100}"></div><span class="bar80"></span></div><p class="meter-caption">${score.correct} correct / ${score.answered} answered · ${QUESTIONS_PER_LEVEL - score.answered} remaining</p></div></div><p class="lede">${score.passed ? last ? 'You’ve cleared this world. Finish your run or keep practicing.' : 'Next world unlocked! Move on or stay for more practice.' : end ? 'You need 80% to unlock the next world. Try a fresh round with what you’ve learned.' : 'Keep practicing to reach 80%. You can check in again after five more questions.'}</p><p>Next challenge: <b>${DIFFICULTIES[game.difficulty]}</b> · ${game.xp} XP earned this run</p></section><div class="actions">${score.passed ? button(last ? 'Finish game ▸' : `Next world: ${LEVELS[game.level + 1].title} ▸`, 'advance', false, true) : ''}${!end ? button('Keep practicing ▸', 'practice', score.passed, !score.passed) : !score.passed ? button('Retry this world ▸', 'retry', false, true) : ''}${button('Save & exit', 'home', true)}</div></div>`);
}
function completeView() {
  const total = totalScore(game);
  const percent = Math.round(total.correct / total.answered * 100);
  mount(`<div class="complete enter"><p class="eyebrow">ALL FOUR WORLDS CLEARED</p><h1 class="result-heading" data-focus tabindex="-1">You’ve got<br><span class="hl">the code!</span></h1><div class="victory"><img src="./robot.svg" width="100" height="100" alt="Your pixel robot companion"><p>${percent >= 90 ? 'An arcade-worthy performance.' : 'A new personal programming milestone.'}<br><b>${game.xp.toLocaleString()} XP</b> · Best streak: ${game.bestStreak}</p></div><table class="scoreboard"><caption class="sr-only">Results from each cleared world</caption><thead><tr><th scope="col">World</th><th scope="col">Correct / answered</th></tr></thead><tbody>${game.completed.map(entry => `<tr><th scope="row">${LEVELS[entry.level].title}</th><td>${entry.correct} / ${entry.answered} <span class="note">${entry.percent}%</span></td></tr>`).join('')}<tr class="total"><th scope="row">TOTAL</th><td>${total.correct} / ${total.answered} <span class="note">${percent}%</span></td></tr></tbody></table><p class="lede">You practiced strings, lists, tuples, and dictionaries. Come back for a fresh mix of questions.</p><div class="actions">${button('Play again ▸', 'home', false, true)}</div></div>`);
}
function render(focus = true) {
  if (game.phase === 'question' || game.phase === 'feedback') questionView(focus);
  else if (game.phase === 'checkpoint') checkpointView();
  else completeView();
}
function dispatch(action, answer) {
  if (action === 'start') {
    startingDifficulty = Number(screen.querySelector('input[name="difficulty"]:checked')?.value ?? startingDifficulty);
    game = createGame(startingDifficulty);
    save(); render(); return;
  }
  if (action === 'resume' && savedGame) { game = savedGame; render(); return; }
  if (action === 'home' && game) { save(); savedGame = game; intro(); return; }
  if (!game || !act(game, action, answer)) return;
  save();
  if (action === 'answer') {
    const last = game.answers.at(-1);
    status.textContent = `${last.correct ? 'Correct' : 'Incorrect'}. ${currentQuestion(game).explanation}${game.notice ? ` Next question: ${DIFFICULTIES[game.difficulty]}.` : ''}`;
  } else status.textContent = '';
  render();
}
screen.addEventListener('click', event => {
  const target = event.target.closest('button');
  if (!target || target.disabled) return;
  if (target.dataset.answer !== undefined) dispatch('answer', Number(target.dataset.answer));
  else if (target.dataset.action) dispatch(target.dataset.action);
});
screen.addEventListener('change', event => {
  if (event.target.name === 'difficulty') startingDifficulty = Number(event.target.value);
});
document.addEventListener('keydown', event => {
  if (event.repeat || event.ctrlKey || event.metaKey || event.altKey || event.target.isContentEditable || event.target.matches('textarea, select, input:not([type="radio"])')) return;
  const key = event.key.toLowerCase();
  if (game?.phase === 'question' && /^[a-d]$/.test(key)) { event.preventDefault(); dispatch('answer', 'abcd'.indexOf(key)); }
  else if (event.key === 'Enter' && !event.target.closest('button, a')) {
    const primary = screen.querySelector('[data-primary]');
    if (primary) { event.preventDefault(); primary.click(); }
  }
});
intro(false);
