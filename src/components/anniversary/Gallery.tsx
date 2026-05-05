import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", caption: "Forever yours 💕" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80", caption: "Sunshine days ☀️" },
  { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80", caption: "My favorite person 🥰" },
  { src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80", caption: "Adventures with you 🌍" },
  { src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=800&q=80", caption: "Quiet moments 🤍" },
  { src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&q=80", caption: "Always laughing 😂" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl text-primary sm:text-6xl"
        >
          Our Memories 📸
        </motion.h2>
        <p className="mb-12 text-center text-muted-foreground">Polaroid moments together</p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
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
