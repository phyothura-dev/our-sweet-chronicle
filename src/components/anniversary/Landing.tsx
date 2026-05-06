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
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6">
      <button
        onClick={toggleMusic}
        aria-label="Toggle music"
        className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-card/80 px-3 py-1.5 text-xs shadow-md backdrop-blur transition hover:scale-105 sm:right-4 sm:top-4 sm:px-4 sm:py-2 sm:text-sm"
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
        <Heart className="h-16 w-16 fill-primary text-primary drop-shadow-lg sm:h-20 sm:w-20" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-4xl leading-tight text-foreground sm:text-7xl md:text-8xl"
      >
        Happy 1 Year <br />
        <span className="text-primary">Anniversary</span> ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-5 max-w-xl text-base text-muted-foreground sm:mt-6 sm:text-xl"
      >
        ဘေဘီနဲ့အတူ ၃၆၅ ရက်တာ ပျော်ရွှင်မှု၊ ရယ်မောမှု၊ နဲ့ ချစ်ခြင်းမေတ္တာအတွက် ကိုကို ကျေးဇူးတင်ပါတယ်။ <br />
        <span className="font-display text-xl text-primary sm:text-2xl">For my baby, with all my love. 💕</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="mt-8 sm:mt-10"
      >
        <Button
          size="lg"
          onClick={onJourney}
          className="rounded-full bg-primary px-6 py-5 text-base shadow-xl transition-all hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-6 sm:text-lg"
        >
          ကိုကိုနဲ့ဘေဘီရဲ့ Journey ကိုစတင်ကြမယ် ✨
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 text-xs text-muted-foreground sm:bottom-8 sm:text-sm"
      >
        ↓ scroll down ↓
      </motion.div>
    </section>
  );
}
