import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const letter = `My dearest ဘေဘီ,

ဒီတစ်နှစ်တာဟာ ကိုကို့ဘဝမှာ အလှဆုံးနှစ်တစ်နှစ်ပဲ။
ဘေဘီရဲ့အပြုံးတိုင်းက ကိုကို့နေ့ရက်တွေကို လင်းစေတယ်။
ဘေဘီရဲ့ရယ်သံတိုင်းက ကိုကို့အတွက် သီချင်းဖြစ်တယ်။

ဘေဘီနဲ့အတူ ရှိခြင်းဟာ ကိုကို့အတွက် ကံကောင်းမှုတစ်ခုပါ။
ရှေ့ဆက်နှစ်ပေါင်းများစွာ — အတူတူ၊ လက်တွဲပြီး၊ ချစ်ခြင်းနဲ့။

Forever yours,
ကိုကို 🤍`;

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
    <section ref={ref} className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-4xl text-primary sm:text-6xl"
        >
          A Letter for ဘေဘီ ✍️
        </motion.h2>
        <p className="mb-8 text-center text-sm text-muted-foreground sm:mb-10 sm:text-base">From ကိုကို's heart, to ဘေဘီ.</p>

        <div className="rounded-3xl bg-card/90 p-5 shadow-xl backdrop-blur sm:p-10">
          <pre className="font-display whitespace-pre-wrap text-xl leading-relaxed text-foreground sm:text-3xl">
            <span className="cursor-blink">{text}</span>
          </pre>
        </div>
      </div>
    </section>
  );
}
