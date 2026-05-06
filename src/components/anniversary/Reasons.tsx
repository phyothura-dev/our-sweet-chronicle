import { motion } from "framer-motion";

const reasons = [
  { icon: "🍟", text: "ကိုကိုရဲ့အစားတွေခိုးစားနိုင်တာကြောင့်" },
  { icon: "😊", text: "အမြဲတမ်းအပြုံးပေးနိုင်တာကြောင့်" },
  { icon: "🤗", text: "စိတ်ညစ်တဲ့အချိန် တကယ်နားလည်ပေးတာကြောင့်" },
  { icon: "😴", text: "ဘေဘီအိပ်တုန်း မျက်နှာက ပိုချစ်စရာဖြစ်နေတာကြောင့်" },
  { icon: "🎵", text: "ဆိုးဆိုးဝါးဝါး ပျော်ပျော်ပါးပါး သီချင်းဆိုနိုင်တာကြောင့်" },
  { icon: "💪", text: "ကိုကိုကို ပိုကောင်းတဲ့လူဖြစ်အောင်လုပ်ပေးတာကြောင့်" },
  { icon: "🌧️", text: "မိုးရွာတဲ့နေ့မှာ ပိုမိုနွေးထွေးစေတာကြောင့်" },
  { icon: "♾️", text: "နောက်ဆုံးတော့... ဘေဘီဟာဘေဘီဖြစ်လို့ပဲ။" },
];

export function Reasons() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-4xl text-primary sm:text-6xl"
        >
          ဘေဘီကိုဘာကြောင့်ချစ်တာလဲ 💌
        </motion.h2>
        <p className="mb-10 text-center text-sm text-muted-foreground sm:text-base">
          Reasons ကိုကို loves ဘေဘီ...
        </p>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="flex items-center gap-3 rounded-2xl bg-card/80 p-4 shadow-md backdrop-blur sm:gap-4 sm:p-5"
            >
              <span className="text-3xl sm:text-4xl">{r.icon}</span>
              <p className="text-sm sm:text-lg">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
