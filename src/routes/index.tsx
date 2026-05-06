import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Landing } from "@/components/anniversary/Landing";
import { Timeline } from "@/components/anniversary/Timeline";
import { Gallery } from "@/components/anniversary/Gallery";
import { Promises } from "@/components/anniversary/Promises";
import { Games } from "@/components/anniversary/Games";
import { LoveLetter } from "@/components/anniversary/LoveLetter";
import { Surprise } from "@/components/anniversary/Surprise";
import { HeartBurst, FloatingBackgroundHearts } from "@/components/anniversary/Hearts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy 1 Year Anniversary 💕" },
      { name: "description", content: "Our love story — a romantic journey through one beautiful year together." },
      { property: "og:title", content: "Happy 1 Year Anniversary 💕" },
      { property: "og:description", content: "A little surprise built with love, just for you." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Quicksand:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const SONG_ID = "5HZ9qeFjhYk"; // Zack Tabudlo - Give Me Your Forever

function Index() {
  const [musicOn, setMusicOn] = useState(true);
  const [burst, setBurst] = useState(0);
  const journeyRef = useRef<HTMLDivElement>(null);

  // Try to auto-start music after first user interaction (browsers block autoplay with sound)
  useEffect(() => {
    const tryStart = () => {
      setMusicOn(true);
      window.removeEventListener("click", tryStart);
      window.removeEventListener("touchstart", tryStart);
      window.removeEventListener("keydown", tryStart);
    };
    window.addEventListener("click", tryStart, { once: true });
    window.addEventListener("touchstart", tryStart, { once: true });
    window.addEventListener("keydown", tryStart, { once: true });
    return () => {
      window.removeEventListener("click", tryStart);
      window.removeEventListener("touchstart", tryStart);
      window.removeEventListener("keydown", tryStart);
    };
  }, []);

  const handleJourney = () => {
    setBurst((b) => b + 1);
    setTimeout(() => {
      journeyRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <main className="relative overflow-hidden">
      <FloatingBackgroundHearts />
      <HeartBurst trigger={burst} />

      {/* Hidden YouTube player for background music — auto loops */}
      {musicOn && (
        <iframe
          title="bg-music"
          src={`https://www.youtube.com/embed/${SONG_ID}?autoplay=1&loop=1&playlist=${SONG_ID}&controls=0&modestbranding=1&playsinline=1`}
          allow="autoplay"
          className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-px w-px opacity-0"
        />
      )}

      <Landing
        onJourney={handleJourney}
        musicOn={musicOn}
        toggleMusic={() => setMusicOn((m) => !m)}
      />

      <div ref={journeyRef}>
        <Timeline />
      </div>
      <Gallery />
      <Reasons />
      <Games />
      <LoveLetter />
      <Surprise />

      <footer className="pb-10 text-center text-xs text-muted-foreground sm:text-sm">
        Made with 💕 by ကိုကို for ဘေဘီ
      </footer>
    </main>
  );
}
