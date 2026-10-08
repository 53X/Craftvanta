import { Reveal } from "@/components/reveal";

export function WorkTeaser() {
  return (
    <section className="border-b-[3px] border-ink bg-violet text-white">
      <div className="palette-bar h-2" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-end md:py-16">
        <Reveal>
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-yellow">Portfolio</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl">
            Proof has its own page.
          </h2>
          <p className="mt-4 max-w-lg text-white/85">
            Agentomatic, Bsbasil, and TaxSimpl live apart from the pitch, so you can open the brands themselves.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            <li className="border-[3px] border-ink bg-cyan px-2 py-1 font-display text-xs font-black text-ink">AI SaaS</li>
            <li className="border-[3px] border-ink bg-pink px-2 py-1 font-display text-xs font-black text-white">E-commerce</li>
            <li className="border-[3px] border-ink bg-green px-2 py-1 font-display text-xs font-black text-ink">Finance</li>
          </ul>
        </Reveal>
        <Reveal delay={0.08} className="shrink-0">
          <a href="/work" className="neo press inline-flex bg-yellow px-5 py-3 font-display text-lg font-extrabold text-ink">
            Open the portfolio →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
