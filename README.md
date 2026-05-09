# Anniversary Web App 💕

An interactive, romantic one-year anniversary website — a personal gift built as a single-page experience with a love story timeline, photo gallery, mini games, promises, a love letter, and a final surprise.

## ✨ Features

- 🌸 **Romantic Landing** — soft animations & floating hearts
- 📅 **Timeline** — the journey, month by month
- 🖼️ **Gallery** — favorite memories
- 🤍 **Promises** — heartfelt commitments
- 🎮 **Mini Games**
  - 🎡 Spin The Wheel — romantic & funny rewards
  - ❓ Love Quiz
  - 🧠 Memory Match
- 💌 **Love Letter**
- 🎉 **Final Surprise** — hidden message + confetti
- 🎵 **Background Music** — auto-replay with toggle
- 📱 **Fully Responsive** — phone, tablet, desktop

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

Update content (names, dates, photos, messages) inside the components in
`src/components/anniversary/`. Background music track id lives in
`src/routes/index.tsx`.

## 📜 License

Private — a personal gift project.
