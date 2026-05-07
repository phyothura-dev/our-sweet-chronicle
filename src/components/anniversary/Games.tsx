import { useState } from "react";
import { motion } from "framer-motion";
import { Quiz } from "./Quiz";
import { MemoryGame } from "./MemoryGame";
import { SpinWheel } from "./SpinWheel";

type Tab = "quiz" | "memory" | "wheel";

export function Games() {
  const [tab, setTab] = useState<Tab>("wheel");

  const tabs: { id: Tab; label: string }[] = [
    { id: "wheel", label: "Spin Wheel 🎡" },
    { id: "quiz", label: "Quiz 💭" },
    { id: "memory", label: "Memory 🧠" },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-4xl text-primary sm:text-6xl"
        >
          Fun Time 🎮
        </motion.h2>
        <p className="mb-6 text-center text-sm text-muted-foreground sm:mb-8 sm:text-base">ကိုကိုနဲ့ဘေဘီ အတူကစားကြမယ် 💕</p>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 ${
                tab === t.id
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-card text-muted-foreground hover:bg-card/80"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "quiz" && <Quiz />}
        {tab === "memory" && <MemoryGame />}
        {tab === "wheel" && <SpinWheel />}
      </div>
    </section>
  );
}
