import { useState } from "react";
import { motion } from "framer-motion";
import { Quiz } from "./Quiz";
import { MemoryGame } from "./MemoryGame";

export function Games() {
  const [tab, setTab] = useState<"quiz" | "memory">("quiz");

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

        <div className="mb-6 flex justify-center gap-2">
          <button
            onClick={() => setTab("quiz")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              tab === "quiz" ? "bg-primary text-primary-foreground shadow" : "bg-card text-muted-foreground"
            }`}
          >
            Quiz 💭
          </button>
          <button
            onClick={() => setTab("memory")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              tab === "memory" ? "bg-primary text-primary-foreground shadow" : "bg-card text-muted-foreground"
            }`}
          >
            Memory Match 🧠
          </button>
        </div>

        {tab === "quiz" ? <Quiz /> : <MemoryGame />}
      </div>
    </section>
  );
}
