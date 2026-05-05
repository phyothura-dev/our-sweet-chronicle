import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Music, VolumeX, Heart } from "lucide-react";

interface Props {
  onJourney: () => void;
  musicOn: boolean;
  toggleMusic: () => void;
}

export function Landing({ onJourney, musicOn, toggleMusic }: Props) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <button
        onClick={toggleMusic}
        aria-label="Toggle music"
        className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm shadow-md backdrop-blur transition hover:scale-105"
      >
        {musicOn ? <Music className="h-4 w-4 text-primary" /> : <VolumeX className="h-4 w-4" />}
        <span>{musicOn ? "Music On" : "Music Off"}</span>
      </button>

      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
        className="mb-6"
      >
        <Heart className="h-20 w-20 fill-primary text-primary drop-shadow-lg" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-5xl leading-tight text-foreground sm:text-7xl md:text-8xl"
      >
        Happy 1 Year <br />
        <span className="text-primary">Anniversary</span> ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
      >
        ၃၆၅ ရက်တာ ပျော်ရွှင်မှု၊ ရယ်မောမှု၊ နဲ့ ချစ်ခြင်းမေတ္တာအတွက် ကျေးဇူးတင်ပါတယ်။ <br />
        <span className="font-display text-2xl text-primary">My love, this is for you. 💕</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="mt-10"
      >
        <Button
          size="lg"
          onClick={onJourney}
          className="rounded-full bg-primary px-8 py-6 text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
        >
          Our Journey ကိုစတင်ကြမယ် ✨
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 text-sm text-muted-foreground"
      >
        ↓ scroll down ↓
      </motion.div>
    </section>
  );
}
