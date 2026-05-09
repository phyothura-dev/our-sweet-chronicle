import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  { src: "public/galleries/gallary1.jpg", caption: "Forever yours 💕" },
  { src: "public/galleries/gallary2.jpg", caption: "Sunshine days ☀️" },
  { src: "public/galleries/gallary3.jpg", caption: "My favorite person 🥰" },
  { src: "public/galleries/gallary4.jpg", caption: "Adventures with you 🌍" },
  { src: "public/galleries/gallary5.jpg", caption: "Quiet moments 🤍" },
  { src: "public/galleries/gallary6.jpg", caption: "Always laughing 😂" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-4xl text-primary sm:text-6xl"
        >
          Our Memories 📸
        </motion.h2>
        <p className="mb-10 text-center text-sm text-muted-foreground sm:text-base">ကိုကို နဲ့ ဘေဘီ ရဲ့ Polaroid moments</p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {photos.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -2 : 2 }}
              onClick={() => setActive(i)}
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
              className="group rounded-md bg-card p-3 pb-8 shadow-xl transition"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="aspect-square w-full rounded-sm object-cover"
              />
              <p className="mt-3 text-center font-display text-xl text-foreground">{p.caption}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl rounded-3xl bg-card p-4 shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute -right-3 -top-3 rounded-full bg-primary p-2 text-primary-foreground shadow-lg"
              >
                <X className="h-4 w-4" />
              </button>
              <img src={photos[active].src} alt="" className="max-h-[70vh] w-full rounded-2xl object-contain" />
              <p className="mt-3 text-center font-display text-2xl">{photos[active].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
