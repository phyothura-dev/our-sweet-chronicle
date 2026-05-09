import { motion } from "framer-motion";

const promises = [
  { icon: "🤝", text: "ဘယ်အချိန်မဆို ဘေဘီ့ဘေးမှာရှိနေပါ့မယ်" },
  { icon: "👂", text: "ဘေဘီပြောတာတွေကို စိတ်ရှည်ရှည်နဲ့နားထောင်ပေးမယ်" },
  { icon: "🤗", text: "စိတ်ညစ်တဲ့အချိန် အရင်ဆုံးပွေ့ဖက်ပေးမယ်" },
  { icon: "😄", text: "နေ့တိုင်း အပြုံးတစ်ပွင့်လောက်ပေးနိုင်အောင်ကြိုးစားမယ်" },
];

export function Promises() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl text-primary sm:text-5xl"
        >
          ကိုကိုရဲ့ ကတိတွေ 🤍
        </motion.h2>


        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {promises.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="flex items-center gap-3 rounded-2xl bg-card/80 p-4 shadow-md backdrop-blur sm:gap-4 sm:p-5"
            >
              <span className="text-3xl sm:text-4xl">{p.icon}</span>
              <p className="text-sm sm:text-lg">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
