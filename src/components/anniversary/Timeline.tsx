import { motion } from "framer-motion";

const events = [
  {
    date: "ပထမဆုံးတွေ့ခဲ့တဲ့နေ့",
    title: "First Meeting 👀",
    caption: "ဘေဘီကိုပထမဆုံးတွေ့တုန်းက ကိုကိုနှလုံးသား ခုန်တာ မရပ်တော့ဘူး။",
    img: "/timelines/timeline1.jpg",
  },
  {
    date: "ပထမဆုံး Zoo Date",
    title: "Our Zoo Date 🐘",
    caption: "Zoo မှာ လျှောက်လည်ပြီး တိရစ္ဆာန်လေးတွေကြည့်ရင်း အတူရယ်မောခဲ့တဲ့ ပထမဆုံး Date လေး။",
    img: "/timelines/timeline2.jpg",
  },
  {
    date: "First 'I love you' 💌",
    title: "ပထမဆုံးပြောခဲ့တဲ့စကား",
    caption: "ဘေဘီကိုချစ်တယ်လို့ပြောခဲ့တဲ့အခိုက်အတန့်ကို ကိုကိုဘယ်တော့မှမမေ့ပါဘူး။",
    img: "/timelines/timeline3.jpg",
  },
  {
    date: "Our Little Moments ✨",
    title: "အမှတ်တရ အခိုက်အတန့်လေးတွေ",
    caption: "ခရီးမသွားရသေးပေမယ့် အတူနေရတဲ့နေ့စဉ်လေးတွေ၊ မက်ဆေ့ချ်လေးတွေ၊ ဓာတ်ပုံလေးတွေကပဲ အမှတ်တရအကြီးဆုံးတွေ ဖြစ်နေပြီ။",
    img: "/timelines/timeline4.jpg",
  },
  {
    date: "1 Year Together 🎉",
    title: "ဒီနေ့",
    caption: "နှစ်တစ်နှစ်ပြည့်ပြီ။ ရှေ့ဆက်ပြီးတော့လည်း ဘေဘီနဲ့ပဲ။",
    img: "/timelines/timeline5.jpg",
  },
];

export function Timeline() {
  return (
    <section id="journey" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl text-primary sm:text-6xl"
        >
          Our Journey 💞
        </motion.h2>
        <p className="mb-16 text-center text-muted-foreground">ကိုကိုနဲ့ဘေဘီရဲ့ပုံပြင်လေး...</p>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-primary via-accent to-secondary sm:left-1/2 sm:-translate-x-1/2" />

          {events.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={`relative mb-1 flex flex-col items-start sm:items-center ${
                  left ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="ml-12 w-full sm:ml-0 sm:w-1/2 sm:px-8">
                  <div className="rounded-3xl bg-card/80 p-5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
                    <img
                      src={e.img}
                      alt={e.title}
                      loading="lazy"
                      className="mb-4 h-52 w-full rounded-2xl object-cover"
                    />
                    <p className="text-sm font-semibold text-primary">{e.date}</p>
                    <h3 className="mt-1 text-3xl">{e.title}</h3>
                    <p className="mt-2 text-muted-foreground">{e.caption}</p>
                  </div>
                </div>
                <div className="absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-background sm:left-1/2">
                  💗
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
