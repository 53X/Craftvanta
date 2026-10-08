"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const questions = [
  {
    q: "Do you only build websites?",
    a: "No. Craftvanta is a creative marketing agency. Branding sits beside website building and optimization, AI images and video, Facebook and Instagram, and Google and Meta ads. Hire one, or run them as one brand.",
  },
  {
    q: "What does branding cover?",
    a: "The identity: name, logo, color, type, and voice, plus guidelines so the site, the posts, and the ads stay in the same family. Campaigns and packaging when the brand needs them.",
  },
  {
    q: "Can you work on a site we already have?",
    a: "Yes. Optimization covers speed, structure, and the words on the page. If the site needs to be replaced, we say so and build the new one.",
  },
  {
    q: "What does AI content include?",
    a: "Still images and video. Product shots, campaign frames, short films, and social posts. You see the work and approve it before it is published.",
  },
  {
    q: "Which social accounts do you handle?",
    a: "Facebook and Instagram. That means the calendar, the captions, the creative, and replies. Other networks can be talked through if you need them.",
  },
  {
    q: "How do the ads work?",
    a: "We run Google ads and Meta ads. The offer on the ad matches the page it lands on. You see the budget, and you get a plain read on what it did.",
  },
  {
    q: "How do we start?",
    a: "Send a note with what you sell and which jobs you want. We reply with a plan and a scope. No deck required to get the first conversation.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-b-[3px] border-ink bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
        <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
          The questions worth asking.
        </h2>
        <div className="mt-8 border-[3px] border-ink">
          {questions.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q} className={index > 0 ? "border-t-[3px] border-ink" : ""}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-display text-lg font-extrabold"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : index)}
                >
                  {item.q}
                  <span className="grid size-8 shrink-0 place-items-center border-[3px] border-ink bg-yellow text-xl leading-none">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-5 pr-16 leading-relaxed text-ink/80">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
