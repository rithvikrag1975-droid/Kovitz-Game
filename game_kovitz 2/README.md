# Programming Basics — Adaptive Arcade

A static Python quiz. Netlify serves **public/** directly. No build command, package installation, API key, database, or backend is required.

## Run locally

From this folder, run:

```sh
python3 -m http.server 4173 --directory public --bind 127.0.0.1
```

Open http://127.0.0.1:4173 in your browser. Use a static server; opening index.html directly cannot load ES modules reliably.

## Deploy to the existing Netlify site

- For a repository deployment, keep the project root and the included `netlify.toml`. The publish directory remains `public`; leave the build command empty.
- For a manual deployment, upload the extracted **public/** folder to the existing site's deploy area. Upload the whole folder, including `engine.js`, `questions.js`, and `assets/`.

This package has not been deployed to the live site. It is a replacement project, prepared because write access to the original iCloud project folder was not granted. The original local files remain unchanged.

## Play

- Pick Easy, Medium, or Hard as your starting challenge.
- Two consecutive correct answers raise the next question's tier. Two consecutive misses lower it. Difficulty stays within Easy–Hard.
- Each topic has 20 questions at each tier: **240 questions total**, covering Strings, Lists, Tuples, and Dictionaries. Questions and choices are shuffled. A question never repeats within a 20-question attempt.
- Checkpoints occur every five answers. At 80% or better, advance or keep practicing. At 20 questions below 80%, retry the current world.
- Difficulty carries into the next world. Streaks reset at the start of each world or retry. The best streak records the longest streak within any world.
- Correct answers earn 100 / 150 / 200 XP by difficulty. XP includes practice and retry attempts; the final accuracy table includes the successful attempt for each world and counts only questions actually answered.
- Every question has a topic-themed retro scene and a pixel robot companion. There are twelve original local SVG scenes and one companion asset.
- Press A–D to answer and Enter to continue, or use the buttons. There is no timer.
- Save & exit returns to the start screen. Resume restores the exact question, shuffled answers, feedback, and progress after a reload on the same browser/device. If browser storage is unavailable, the session still works and displays a saving notice.

Code-output questions use Python 3.9+ semantics. The 160 code answers were checked with Python during authoring. The original `game.py` console game is retained as a legacy version; the expanded web bank is in `public/questions.js`.

## Files

- `public/index.html`: document shell and fonts
- `public/app.js`: screens, keyboard controls, rendering, and local saving
- `public/engine.js`: question selection, difficulty, scoring, and validated save replay
- `public/questions.js`: question bank with explanations
- `public/styles.css`: retro desktop and mobile styles
- `public/assets/`: bundled original illustrations
- `tests/engine.test.js`: logic and data validation tests

## Verification

With Node.js installed, run `npm test`. No npm install is needed. Node is only needed for these optional development tests, not for hosting.

Validation completed:

- 12 passing tests, including 500 simulated 20-question attempts, an 80-question completion, 80% checkpoint boundaries, retries, question uniqueness, exact save replay, and malformed-save rejection.
- Browser playthrough across all four worlds, early checkpoint completion, a 20-question failed attempt and retry, Hard-mode selection, promotion/demotion, keyboard use, reload/resume, and final scores.
- Desktop and 390-/320-pixel frame layouts. Images load; no horizontal overflow in the checked mobile screens.
- No console warnings or errors in the updated app during testing.
- All deployed asset paths checked via a local static server.

The original live site's start and answer-feedback flow was also checked. Its deployed app.js contained working code; the original local app.js was empty. The updated engine restores the local app and fixes the old final scoreboard's denominator when advancing early.

When changing question ordering or save semantics in a future release, increment `SAVE_VERSION` in `engine.js` so older saved action sequences are not replayed against a different question bank.
