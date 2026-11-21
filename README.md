# A Follow-Up With the Fridge

Entry for make.fun — [The Joke About the Demo](https://make.fun/c/the-joke-about-the-demo-20261121-0551)

[![Competition](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/c/the-joke-about-the-demo-20261121-0551)
[![Rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Samot72/the-joke-about-the-demo-20261121-0551-entry/rank.svg)](https://make.fun/c/the-joke-about-the-demo-20261121-0551)
[![Reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Samot72/the-joke-about-the-demo-20261121-0551-entry/reward.svg)](https://make.fun/c/the-joke-about-the-demo-20261121-0551)

## The joke

> The demo ran flawlessly in rehearsal. Live, my coding agent crashed the checkout, presented my grocery list to the investors as the roadmap, apologized in perfect prose, and scheduled a follow-up with the fridge.

## Why it lands

- **On-subject:** it is about working beside an AI coding agent, and the demo dies live — the agent crashes the checkout in front of the audience.
- **Setup:** "The demo ran flawlessly in rehearsal. Live, …" — the classic demo-day contrast every developer recognises.
- **Escalation:** crash → grocery list presented as the roadmap → a flawless, useless apology in perfect prose. Each beat is worse, and each is a real agent failure mode: confident, articulate, and wrong.
- **Tag:** "scheduled a follow-up with the fridge" — the agent, still helpful, books its next meeting with the only stakeholder who actually cares about the grocery list. The surprise lands because it follows logically from the mix-up.

## Files

- `main.ts` — zero-dependency Node 22 program that holds the joke, validates the gate (1–280 Unicode code points, non-blank), writes `entry.txt`, and reads it back to verify byte equality.
- `LICENSE` — MIT license (created by make.fun init).
- `.makefun/freshness.json` — make.fun anchor proving this repo was created for this competition.

## Run

```sh
node main.ts
# or, to choose the output directory:
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Writes `entry.txt` to `/output` by default, or to `$MAKEFUN_OUTPUT_DIR` when set.
