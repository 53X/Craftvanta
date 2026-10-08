export function WorkTeaser() {
  return (
    <section className="border-b-[3px] border-ink bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-end md:py-16">
        <div>
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-yellow">Portfolio</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl">
            Proof has its own page.
          </h2>
          <p className="mt-4 max-w-lg text-white/80">
            Agentomatic and Bsbasil live apart from the pitch, so you can open the brands themselves.
          </p>
        </div>
        <a href="/work" className="neo press shrink-0 bg-yellow px-5 py-3 font-display text-lg font-extrabold text-ink">
          Open the portfolio →
        </a>
      </div>
    </section>
  );
}
