import { motion } from "framer-motion";

const events = [
  {
    date: "ပထမဆုံးတွေ့ခဲ့တဲ့နေ့",
    title: "First Meeting 👀",
    caption: "မင်းကိုပထမဆုံးတွေ့တုန်းက နှလုံးသား ခုန်တာ မရပ်တော့ဘူး။",
    img: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&q=80",
  },
  {
    date: "ပထမဆုံး Date",
    title: "Our First Date 🍰",
    caption: "Coffee တစ်ခွက်နဲ့စတင်ခဲ့တဲ့ ကျွန်တော်တို့ရဲ့ပထမဆုံးပုံပြင်။",
    img: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&q=80",
  },
  {
    date: "First 'I love you' 💌",
    title: "ပထမဆုံးပြောခဲ့တဲ့စကား",
    caption: "မင်းကိုချစ်တယ်လို့ပြောခဲ့တဲ့အခိုက်အတန့်ကို ဘယ်တော့မှမမေ့ပါဘူး။",
    img: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&q=80",
  },
  {
    date: "Adventures Together 🌍",
    title: "အမှတ်တရခရီးများ",
    caption: "မင်းနဲ့အတူရှိရင် နေရာတိုင်းက အိမ်လိုခံစားရတယ်။",
    img: "https://images.unsplash.com/photo-1529635509242-960e7b9ce39c?w=800&q=80",
  },
  {
    date: "1 Year Together 🎉",
    title: "ဒီနေ့",
    caption: "နှစ်တစ်နှစ်ပြည့်ပြီ။ ရှေ့ဆက်ပြီးတော့လည်း မင်းနဲ့ပဲ။",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
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
        <p className="mb-16 text-center text-muted-foreground">
          ကျွန်တော်တို့ရဲ့ပုံပြင်လေး...
        </p>

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
                className={`relative mb-12 flex flex-col items-start sm:items-center ${
                  left ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="ml-12 w-full sm:ml-0 sm:w-1/2 sm:px-8">
                  <div className="rounded-3xl bg-card/80 p-5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
                    <img
                      src={e.img}
                      alt={e.title}
                      loading="lazy"
                      className="mb-4 h-48 w-full rounded-2xl object-cover"
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
