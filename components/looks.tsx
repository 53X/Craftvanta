"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const looks = [
  {
    id: "clinic",
    name: "Neighborhood clinic",
    tags: "Brand · New site · Google ads",
    kicker: "Appointments this week",
    headline: "The visit starts on the homepage.",
    note: "A short site, a booking link, and search ads for the services people already type.",
    swatch: "bg-blue text-white",
  },
  {
    id: "shop",
    name: "Product launch",
    tags: "AI stills · Instagram · Meta ads",
    kicker: "Drop week",
    headline: "The photos, the posts, the paid push.",
    note: "Campaign images and a short video, then Instagram and Meta ads pointed at the product page.",
    swatch: "bg-pink text-white",
  },
  {
    id: "local",
    name: "Local service",
    tags: "Site tune-up · Facebook",
    kicker: "Already in business",
    headline: "The old site, made useful.",
    note: "Faster pages, clearer services, and a Facebook calendar so the phone keeps ringing.",
    swatch: "bg-orange text-white",
  },
  {
    id: "studio",
    name: "Studio or practice",
    tags: "Instagram · AI video",
    kicker: "Show the work",
    headline: "A feed that looks like the room.",
    note: "Short films and stills in the brand’s colors, posted on Instagram with replies handled.",
    swatch: "bg-green",
  },
];

export function Looks() {
  const [active, setActive] = useState(looks[0].id);
  const current = looks.find((look) => look.id === active) ?? looks[0];

  return (
    <section className="dot-grid-soft border-b-[3px] border-ink bg-mint">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em]">Who it&apos;s for</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
          Every business, dressed on purpose.
        </h2>
        <p className="mt-4 max-w-2xl text-lg">
          A clinic, a shop, a local service, a studio. The mix changes. The way we work does not.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-3" role="tablist" aria-label="Example clients">
            {looks.map((look) => {
              const selected = look.id === active;
              return (
                <button
                  key={look.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(look.id)}
                  className={`neo press px-4 py-3 text-left ${selected ? "bg-ink text-yellow" : "bg-white"}`}
                >
                  <span className="block font-display text-lg font-black">{look.name}</span>
                  <span className={`mt-1 block text-sm ${selected ? "text-white/80" : "text-ink/70"}`}>
                    {look.tags}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="relative min-h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                role="tabpanel"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={`neo absolute inset-0 p-6 sm:p-8 ${current.swatch}`}
              >
                <p className="inline-block border-[3px] border-ink bg-white px-2 py-1 font-display text-xs font-black text-ink">
                  {current.kicker}
                </p>
                <h3 className="mt-5 font-display text-4xl font-black leading-[0.95] sm:text-5xl">{current.headline}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed">{current.note}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
