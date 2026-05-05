import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export function Surprise() {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(true);
    const fire = (origin: { x: number; y: number }) =>
      confetti({
        particleCount: 120,
        spread: 80,
        origin,
        colors: ["#ffb6c1", "#ffd1dc", "#ffdab9", "#e6e0f8", "#ff8fab"],
        scalar: 1.1,
        shapes: ["circle", "square"],
      });
    fire({ x: 0.2, y: 0.6 });
    fire({ x: 0.8, y: 0.6 });
    setTimeout(() => fire({ x: 0.5, y: 0.4 }), 250);
    setTimeout(() => fire({ x: 0.3, y: 0.5 }), 600);
    setTimeout(() => fire({ x: 0.7, y: 0.5 }), 900);
  };

  return (
    <section className="px-4 pb-32 pt-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-5xl text-primary sm:text-6xl"
        >
          One More Surprise... 🎁
        </motion.h2>
        <p className="mb-10 text-muted-foreground">အောက်က button လေးနှိပ်ကြည့်ပါ ✨</p>

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div key="closed" exit={{ scale: 0, opacity: 0 }}>
              <motion.button
                onClick={open}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ y: { repeat: Infinity, duration: 2 } }}
                className="rounded-full bg-gradient-to-br from-primary to-accent p-12 shadow-2xl"
              >
                <Gift className="h-24 w-24 text-primary-foreground" />
              </motion.button>
              <p className="mt-6 text-sm text-muted-foreground">Click to open 💝</p>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="rounded-3xl bg-gradient-to-br from-card via-card to-primary/20 p-8 shadow-2xl sm:p-12"
            >
              <p className="text-6xl">💍✨</p>
              <h3 className="mt-6 text-4xl text-primary sm:text-5xl">
                I Love You, <br />Forever & Always 💕
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                ဒီတစ်နှစ်တာဟာ စတင်တာပဲရှိသေးတယ်။ <br />
                ရှေ့ဆက်ပြီး ၁၀ နှစ်၊ ၂၀ နှစ်၊ နှစ်ပေါင်းများစွာ — <br />
                <span className="font-display text-2xl text-primary">မင်းနဲ့အတူ ငါရှိနေချင်တယ်။</span>
              </p>
              <p className="mt-8 text-sm text-muted-foreground">
                Happy 1st Anniversary, my love 🤍
              </p>
              <Button
                onClick={open}
                variant="outline"
                className="mt-6 rounded-full"
              >
                More confetti! 🎊
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
