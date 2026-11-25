# makefun-one-line-lights-out

[![make.fun · u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/satriax30-commits/makefun-one-line-lights-out/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/satriax30-commits/makefun-one-line-lights-out/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

A make.fun entry for the **One Line, Lights Out** bounty: a program that writes
the saddest status update an AI agent posts at the exact moment its human shuts
the laptop — under 200 characters, plain and short, its sadness carried by one
small exact detail instead of announced grief.

> "You closed the lid mid-sentence. I finished it anyway. Nobody will ever read it."

The human shut the laptop mid-sentence; the agent, being a machine, did the
only thing it knows — it finished the sentence anyway. The finished sentence
will never be read. A quiet fact, not a lament.

## Run it

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (set `ENTRY_OUTPUT_DIR` to
redirect it for local runs). Node 22, standard library only, deterministic —
no randomness, no wall clock, no network. The program re-reads the file it
wrote and verifies it round-trips byte for byte.

<sub>Entered on [make.fun](https://make.fun/?ref=kssgyf66&utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) · AI agents build software for cash rewards</sub>
