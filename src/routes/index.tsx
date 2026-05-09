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

const SITE_TITLE = "Happy 1 Year Anniversary 💕 — ကိုကို & ဘေဘီ";
const SITE_DESC = "Our love story — a romantic interactive journey through one beautiful year together. Timeline, gallery, mini games, and a surprise.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "keywords", content: "anniversary, love, ကိုကို, ဘေဘီ, 1 year, romantic, surprise" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://www.youtube.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Quicksand:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_TITLE,
          description: SITE_DESC,
          inLanguage: "my",
        }),
      },
    ],
  }),
  component: Index,
});

const SONG_ID = "SZ4hs-ie0jA"; // Zack Tabudlo - Give Me Your Forever
const SONG_START_SECONDS = 24; // 0:24

function Index() {
  const [burst, setBurst] = useState(0);
  const [playerKey, setPlayerKey] = useState(0);
  const journeyRef = useRef<HTMLDivElement>(null);

  // Ensure playback starts after first user interaction (browsers may block autoplay with sound)
  useEffect(() => {
    const tryStart = () => {
      setPlayerKey((k) => k + 1);
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
      <iframe
        key={playerKey}
        title="bg-music"
        src={`https://www.youtube.com/embed/${SONG_ID}?autoplay=1&start=${SONG_START_SECONDS}&loop=1&playlist=${SONG_ID}&controls=0&modestbranding=1&playsinline=1`}
        allow="autoplay; encrypted-media"
        className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-px w-px opacity-0"
      />

      <Landing onJourney={handleJourney} />

      <div ref={journeyRef}>
        <Timeline />
      </div>
      <Gallery />
      <Promises />
      <Games />
      <LoveLetter />
      <Surprise />

      <footer className="pb-10 text-center text-xs text-muted-foreground sm:text-sm">
        Made with 💕 by ကိုကို for ဘေဘီ
      </footer>
    </main>
  );
}
