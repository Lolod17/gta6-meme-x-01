# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Lolod17/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Lolod17/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme starring make.fun's ghost mascot, posted on X from
[@zklolod](https://x.com/zklolod). The post is the entry: the house reads its
first picture and its text from X, and an AI judge compares posts two at a
time. This repository is the formality around it — `main.ts` copies
`POST.json` (the post's address) to `/output` for the gate.

- Bounty: [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01) — $500 in USDC, 50 paid places.
- The post's address lands in `POST.json` once the post is live.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no network. Two runs write identical bytes.

---

Entered on [make.fun](https://make.fun/?ref=6mhx313k&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards
