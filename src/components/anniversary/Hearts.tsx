import { useEffect, useState } from "react";

type Heart = { id: number; left: number; emoji: string; duration: number };

export function HeartBurst({ trigger }: { trigger: number }) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const emojis = ["❤️", "💖", "💕", "💗", "💓", "🌸", "✨"];
    const newHearts: Heart[] = Array.from({ length: 24 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      duration: 3 + Math.random() * 2,
    }));
    setHearts((h) => [...h, ...newHearts]);
    const t = setTimeout(() => {
      setHearts((h) => h.filter((x) => !newHearts.includes(x)));
    }, 5000);
    return () => clearTimeout(t);
  }, [trigger]);

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-float"
          style={{ left: `${h.left}%`, animationDuration: `${h.duration}s` }}
        >
          {h.emoji}
        </span>
      ))}
    </>
  );
}

export function FloatingBackgroundHearts() {
  const items = Array.from({ length: 12 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {items.map((_, i) => (
        <span
          key={i}
          className="absolute opacity-30 gentle-float"
          style={{
            left: `${(i * 8.3) % 100}%`,
            top: `${(i * 17) % 100}%`,
            fontSize: `${1 + (i % 3)}rem`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${5 + (i % 4)}s`,
          }}
        >
          {["💗", "🌸", "✨", "💕"][i % 4]}
        </span>
      ))}
    </div>
  );
}
