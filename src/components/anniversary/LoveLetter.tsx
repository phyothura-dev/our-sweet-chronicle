import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const letter = `My dearest love,

ဒီတစ်နှစ်တာဟာ ကျွန်တော့်ဘဝမှာ အလှဆုံးနှစ်တစ်နှစ်ပဲ။
မင်းရဲ့အပြုံးတိုင်းက ငါ့နေ့ရက်တွေကို လင်းစေတယ်။
မင်းရဲ့ရယ်သံတိုင်းက ငါ့အတွက် သီချင်းဖြစ်တယ်။

မင်းနဲ့အတူ ရှိခြင်းဟာ ငါ့အတွက် ကံကောင်းမှုတစ်ခုပါ။
ရှေ့ဆက်နှစ်ပေါင်းများစွာ — အတူတူ၊ လက်တွဲပြီး၊ ချစ်ခြင်းနဲ့။

Forever yours,
🤍`;

export function LoveLetter() {
  const [text, setText] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(letter.slice(0, i));
      if (i >= letter.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, [started]);

  return (
    <section ref={ref} className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl text-primary sm:text-6xl"
        >
          A Letter for You ✍️
        </motion.h2>
        <p className="mb-10 text-center text-muted-foreground">From my heart, to yours.</p>

        <div className="rounded-3xl bg-card/90 p-8 shadow-xl backdrop-blur sm:p-10">
          <pre className="font-display whitespace-pre-wrap text-2xl leading-relaxed text-foreground sm:text-3xl">
            <span className="cursor-blink">{text}</span>
          </pre>
        </div>
      </div>
    </section>
  );
}
