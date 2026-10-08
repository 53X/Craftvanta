"use client";

import { motion } from "framer-motion";

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const checks = [
  "A brand people can name, picture, and repeat",
  "Sites built new, or sharpened until they convert",
  "AI images and video that look like this brand",
  "Facebook, Instagram, Google, and Meta, still on-brand",
];

export function Hero() {
  return (
    <section className="dot-grid relative overflow-hidden border-b-[3px] border-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          <motion.p variants={rise} className="mb-5 inline-flex items-center gap-2 border-[3px] border-ink bg-white px-3 py-1 font-display text-sm font-bold">
            <span className="size-2.5 bg-pink" aria-hidden />
            Creative marketing agency
          </motion.p>
          <motion.h1 variants={rise} className="font-display text-[3.15rem] font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.4rem]">
            Make them
            <br />
            <span className="marker">look twice.</span>
          </motion.h1>
          <motion.p variants={rise} className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 md:text-xl">
            Branding, websites, AI images and video, then Facebook, Instagram, Google, and Meta.
            The look and the launch, from one agency.
          </motion.p>
          <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/#start" className="neo press bg-yellow px-5 py-3 font-display text-lg font-extrabold">
              Start a project →
            </a>
            <a
              href="/work"
              className="neo press bg-white px-5 py-3 font-display text-lg font-extrabold"
            >
              See the work
            </a>
          </motion.div>
          <motion.ul variants={rise} className="mt-8 space-y-3">
            {checks.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] font-medium md:text-base">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center border-[3px] border-ink bg-green text-xs font-black">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div data-parallax="0.06" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="neo rotate-[-1.5deg] bg-white">
            <div className="flex items-center gap-2 border-b-[3px] border-ink bg-paper px-3 py-2">
              <span className="size-3 border-[2px] border-ink bg-pink" />
              <span className="size-3 border-[2px] border-ink bg-yellow" />
              <span className="size-3 border-[2px] border-ink bg-green" />
              <span className="ml-2 font-display text-xs font-bold">this-week.board</span>
            </div>
            <div className="space-y-3 p-4">
              <div className="border-[3px] border-ink bg-blue p-4 text-white">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-yellow">Brand system</p>
                <p className="mt-1 font-display text-2xl font-black leading-none">Name, mark, voice</p>
                <p className="mt-2 text-sm text-white/90">One look, from the logo to the landing page.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="border-[3px] border-ink bg-pink p-3 text-white">
                  <p className="font-display text-3xl font-black leading-none">12</p>
                  <p className="mt-1 text-sm font-medium">posts queued for Instagram</p>
                </div>
                <div className="border-[3px] border-ink bg-yellow p-3">
                  <p className="font-display text-3xl font-black leading-none">2</p>
                  <p className="mt-1 text-sm font-medium">ad sets on Meta this week</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-[3px] border-ink bg-mint px-3 py-3">
                <div>
                  <p className="font-display text-sm font-extrabold">Google search ads</p>
                  <p className="text-sm">Spend visible. Offer matches the page.</p>
                </div>
                <span className="border-[3px] border-ink bg-white px-2 py-1 font-display text-xs font-black">
                  ON
                </span>
              </div>
            </div>
          </div>
          <div className="neo-sm absolute -left-3 -top-4 hidden bg-orange px-3 py-2 font-display text-sm font-extrabold text-white sm:block">
            Logo in review
          </div>
          <div className="neo-sm absolute -bottom-4 -right-2 bg-ink px-3 py-2 font-display text-sm font-extrabold text-yellow">
            Then we launch it
          </div>
        </div>
      </div>
    </section>
  );
}
