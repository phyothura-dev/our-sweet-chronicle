import { motion } from "framer-motion";

const reasons = [
  { icon: "🍟", text: "ငါ့အစားတွေခိုးစားနိုင်တာကြောင့်" },
  { icon: "😊", text: "အမြဲတမ်းအပြုံးပေးနိုင်တာကြောင့်" },
  { icon: "🤗", text: "စိတ်ညစ်တဲ့အချိန် တကယ်နားလည်ပေးတာကြောင့်" },
  { icon: "😴", text: "မင်းအိပ်တုန်း မျက်နှာက ပိုချစ်စရာဖြစ်နေတာကြောင့်" },
  { icon: "🎵", text: "ဆိုးဆိုးဝါးဝါး ပျော်ပျော်ပါးပါး သီချင်းဆိုနိုင်တာကြောင့်" },
  { icon: "💪", text: "ငါ့ကို ပိုကောင်းတဲ့လူဖြစ်အောင်လုပ်ပေးတာကြောင့်" },
  { icon: "🌧️", text: "မိုးရွာတဲ့နေ့မှာ ပိုမိုနွေးထွေးစေတာကြောင့်" },
  { icon: "♾️", text: "နောက်ဆုံးတော့... မင်းဟာမင်းဖြစ်လို့ပဲ။" },
];

export function Reasons() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl text-primary sm:text-6xl"
        >
          ဘာကြောင့်ချစ်တာလဲ 💌
        </motion.h2>
        <p className="mb-12 text-center text-muted-foreground">Reasons I love you...</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.08, type: "spring" }}
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-4 rounded-2xl bg-card/80 p-5 shadow-md backdrop-blur"
            >
              <span className="text-4xl">{r.icon}</span>
              <p className="text-base sm:text-lg">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
