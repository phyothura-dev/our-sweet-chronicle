import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const questions = [
  {
    q: "ကိုကိုအကြိုက်ဆုံးအစားအစာက ဘာလဲ?",
    options: ["Pizza 🍕", "Sushi 🍣", "Mohinga 🍜", "Ice cream 🍦"],
    answer: 2,
  },
  {
    q: "ကိုကိုနဲ့ဘေဘီ ပထမဆုံးတွေ့ခဲ့တဲ့နေရာက?",
    options: ["Coffee shop ☕", "School 🏫", "Park 🌳", "Online 💻"],
    answer: 0,
  },
  {
    q: "ကိုကို့အကြိုက်ဆုံးအရောင်က?",
    options: ["Pink 💗", "Blue 💙", "Black 🖤", "Green 💚"],
    answer: 0,
  },
  {
    q: "ကိုကို့အကြိုက်ဆုံးရာသီက?",
    options: ["နွေ ☀️", "မိုး 🌧️", "ဆောင်း ❄️", "နွေဦး 🌸"],
    answer: 1,
  },
];

export function Quiz() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const pick = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === questions[i].answer) setScore((s) => s + 1);
    setTimeout(() => {
      if (i + 1 < questions.length) {
        setI(i + 1);
        setPicked(null);
      } else {
        setDone(true);
      }
    }, 900);
  };

  const reset = () => {
    setI(0);
    setScore(0);
    setPicked(null);
    setDone(false);
  };

  return (
    <div className="rounded-3xl bg-card/90 p-6 shadow-xl backdrop-blur sm:p-8">
      <h3 className="mb-2 text-2xl text-primary sm:text-3xl">ကိုကို့ကို ဘေဘီဘယ်လောက်သိလဲ? 🤔</h3>
      <p className="mb-6 text-sm text-muted-foreground">A little quiz about ကိုကို 💕</p>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
            <p className="mb-1 text-xs text-muted-foreground">Question {i + 1} / {questions.length}</p>
            <p className="mb-5 text-xl font-medium">{questions[i].q}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {questions[i].options.map((opt, idx) => {
                const correct = idx === questions[i].answer;
                const show = picked !== null;
                return (
                  <button
                    key={idx}
                    onClick={() => pick(idx)}
                    className={`rounded-2xl border-2 p-4 text-left transition ${
                      show
                        ? correct
                          ? "border-primary bg-primary/20"
                          : picked === idx
                          ? "border-destructive bg-destructive/10"
                          : "border-border opacity-60"
                        : "border-border hover:border-primary hover:bg-primary/10"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center">
            <p className="text-6xl">🎀</p>
            <p className="mt-4 text-2xl">Score: {score} / {questions.length}</p>
            <p className="mt-2 text-muted-foreground">
              {score === questions.length ? "Perfect! ဘေဘီက ကိုကို့ကို အသိဆုံးပဲ 💖" : "ပိုပြီးနီးကပ်ဖို့ အချိန်တွေအများကြီးရှိသေးတယ် 🥰"}
            </p>
            <Button onClick={reset} className="mt-6 rounded-full">Play again</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
