# Happy 1 Year Anniversary 💕

A romantic, interactive one-year anniversary website built with love — featuring a love story timeline, photo gallery, mini games (Spin The Wheel, Quiz, Memory Match), promises, a love letter, and a final surprise with confetti.

> Made with 💕 by **ကိုကို** for **ဘေဘီ**

## ✨ Features

- 🌸 **Romantic Landing** — soft animations & floating hearts
- 📅 **Timeline** — our journey, month by month
- 🖼️ **Gallery** — favorite memories
- 🤍 **Promises** — ကိုကိုရဲ့ ကတိတွေ
- 🎮 **Mini Games**
  - 🎡 Spin The Wheel — romantic & funny rewards
  - ❓ Love Quiz
  - 🧠 Memory Match
- 💌 **Love Letter**
- 🎉 **Final Surprise** — hidden message + confetti
- 🎵 **Background Music** — Zack Tabudlo · *Give Me Your Forever* (auto-replay)
- 📱 **Fully Responsive** — looks beautiful on phone, tablet, desktop

## 🛠️ Tech Stack

- **Framework:** TanStack Start (React 19 + Vite 7)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion
- **Confetti:** canvas-confetti
- **Deployment:** Cloudflare Workers (Edge)

## 🚀 Getting Started

```bash
bun install
bun run dev
```

Open http://localhost:5173

### Build

```bash
bun run build
```

## 📁 Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root layout + global SEO
│   └── index.tsx           # Anniversary homepage
├── components/anniversary/
│   ├── Landing.tsx
│   ├── Timeline.tsx
│   ├── Gallery.tsx
│   ├── Promises.tsx
│   ├── Games.tsx
│   ├── SpinWheel.tsx
│   ├── Quiz.tsx
│   ├── MemoryGame.tsx
│   ├── LoveLetter.tsx
│   ├── Surprise.tsx
│   └── Hearts.tsx
└── styles.css              # Theme tokens & custom scrollbar
```

## 💝 Personalization

Nicknames are used throughout:
- **ဘေဘီ** — her
- **ကိုကို** — me

To customize, search & replace in `src/components/anniversary/`.

## 📜 License

Private — made for one special person 💕
