import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const emojis = ["💖", "🌸", "🐻", "🍓", "🌙", "✨"];

type Card = { id: number; emoji: string; flipped: boolean; matched: boolean };

function buildDeck(): Card[] {
  const deck = [...emojis, ...emojis]
    .map((e, i) => ({ id: i, emoji: e, flipped: false, matched: false }))
    .sort(() => Math.random() - 0.5)
    .map((c, i) => ({ ...c, id: i }));
  return deck;
}

export function MemoryGame() {
  const [deck, setDeck] = useState<Card[]>(() => buildDeck());
  const [picks, setPicks] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const won = useMemo(() => deck.every((c) => c.matched), [deck]);

  useEffect(() => {
    if (picks.length !== 2) return;
    setMoves((m) => m + 1);
    const [a, b] = picks;
    if (deck[a].emoji === deck[b].emoji) {
      setDeck((d) => d.map((c, i) => (i === a || i === b ? { ...c, matched: true } : c)));
      setPicks([]);
    } else {
      const t = setTimeout(() => {
        setDeck((d) => d.map((c, i) => (i === a || i === b ? { ...c, flipped: false } : c)));
        setPicks([]);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [picks, deck]);

  const flip = (i: number) => {
    if (picks.length === 2 || deck[i].flipped) return;
    setDeck((d) => d.map((c, idx) => (idx === i ? { ...c, flipped: true } : c)));
    setPicks((p) => [...p, i]);
  };

  const reset = () => {
    setDeck(buildDeck());
    setPicks([]);
    setMoves(0);
  };

  return (
    <div className="rounded-3xl bg-card/90 p-6 shadow-xl backdrop-blur sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-3xl text-primary">Memory Match 🧠💞</h3>
          <p className="text-sm text-muted-foreground">Moves: {moves}</p>
        </div>
        <Button variant="outline" onClick={reset} className="rounded-full">Reset</Button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {deck.map((c, i) => (
          <motion.button
            key={c.id}
            onClick={() => flip(i)}
            whileTap={{ scale: 0.95 }}
            className="relative aspect-square"
          >
            <motion.div
              animate={{ rotateY: c.flipped || c.matched ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              className="relative h-full w-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl text-primary-foreground shadow-md"
                style={{ backfaceVisibility: "hidden" }}
              >
                💗
              </div>
              <div
                className={`absolute inset-0 flex items-center justify-center rounded-2xl bg-card text-4xl shadow-md ${
                  c.matched ? "ring-2 ring-primary" : ""
                }`}
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                {c.emoji}
              </div>
            </motion.div>
          </motion.button>
        ))}
      </div>

      {won && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center text-xl font-display text-primary"
        >
          🎉 ဘေဘီနိုင်ပြီ! {moves} moves နဲ့ပြီးသွားပြီ ✨
        </motion.p>
      )}
    </div>
  );
}
