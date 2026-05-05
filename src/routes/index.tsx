import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Landing } from "@/components/anniversary/Landing";
import { Timeline } from "@/components/anniversary/Timeline";
import { Gallery } from "@/components/anniversary/Gallery";
import { Reasons } from "@/components/anniversary/Reasons";
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

function Index() {
  const [musicOn, setMusicOn] = useState(false);
  const [burst, setBurst] = useState(0);
  const journeyRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) audioRef.current.play().catch(() => setMusicOn(false));
    else audioRef.current.pause();
  }, [musicOn]);

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

      {/* Optional bg music — replace src with your file */}
      <audio ref={audioRef} loop preload="none">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

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

      <footer className="pb-10 text-center text-sm text-muted-foreground">
        Made with 💕 just for you
      </footer>
    </main>
  );
}
