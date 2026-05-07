import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const rewards = [
  { label: "နမ်းတစ်ချက် 💋", color: "#ffb6c1" },
  { label: "ဖက်တစ်ချက် 🤗", color: "#ffd1dc" },
  { label: "Free Massage 💆‍♀️", color: "#ffdab9" },
  { label: "Movie Date 🎬", color: "#e6e0f8" },
  { label: "Ice Cream 🍦", color: "#ffc8dd" },
  { label: "Love Coupon 💌", color: "#fcd5ce" },
  { label: "Surprise Gift 🎁", color: "#cdb4db" },
  { label: "Forever Love 💕", color: "#ff8fab" },
];

const SEG = 360 / rewards.length;

export function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const spin = () => {
    if (spinning) return;
    setResult(null);
    setSpinning(true);
    const winner = Math.floor(Math.random() * rewards.length);
    const turns = 5 + Math.random() * 2;
    const target = rotation + turns * 360 + (360 - winner * SEG - SEG / 2);
    setRotation(target);
    setTimeout(() => {
      setSpinning(false);
      setResult(rewards[winner].label);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ffb6c1", "#ffd1dc", "#ffdab9", "#e6e0f8", "#ff8fab"],
      });
    }, 4200);
  };

  // Build conic-gradient for wheel
  const gradient = `conic-gradient(${rewards
    .map((r, i) => `${r.color} ${i * SEG}deg ${(i + 1) * SEG}deg`)
    .join(", ")})`;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        {/* Pointer */}
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-2">
          <div className="h-0 w-0 border-l-[14px] border-r-[14px] border-t-[24px] border-l-transparent border-r-transparent border-t-primary drop-shadow-md" />
        </div>

        {/* Wheel */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-72 w-72 rounded-full border-8 border-primary/40 shadow-[0_10px_40px_-10px_rgba(255,143,171,0.6)] sm:h-80 sm:w-80"
          style={{ background: gradient }}
        >
          {rewards.map((r, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 origin-left text-xs font-semibold text-foreground/80 sm:text-sm"
              style={{
                transform: `rotate(${i * SEG + SEG / 2}deg) translateX(20px)`,
                width: "120px",
              }}
            >
              {r.label}
            </div>
          ))}
          {/* Center dot */}
          <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-card shadow-inner ring-4 ring-primary/40 flex items-center justify-center text-2xl">
            💖
          </div>
        </motion.div>
      </div>

      <button
        onClick={spin}
        disabled={spinning}
        className="rounded-full bg-gradient-to-r from-primary via-accent to-secondary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg transition hover:scale-105 disabled:opacity-60"
      >
        {spinning ? "Spinning... 🌀" : "Spin The Wheel 🎡"}
      </button>

      <AnimatePresence>
        {result && !spinning && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="rounded-2xl bg-gradient-to-br from-card to-primary/20 px-6 py-4 text-center shadow-md"
          >
            <p className="text-sm text-muted-foreground">ဘေဘီ ရရှိသည် 🎉</p>
            <p className="mt-1 font-display text-2xl text-primary sm:text-3xl">{result}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
