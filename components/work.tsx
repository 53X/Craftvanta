import { Reveal } from "@/components/reveal";

export const pieces = [
  {
    name: "Agentomatic",
    url: "https://agentomatic.in",
    host: "agentomatic.in",
    kind: "AI SaaS",
    tag: "bg-cyan",
    summary:
      "AI SaaS. The live site says what the product does: an AI front desk for the team, with a handoff to a person. Open agentomatic.in.",
  },
  {
    name: "Bsbasil",
    url: "https://bsbasil.vercel.app",
    host: "bsbasil.vercel.app",
    kind: "E-commerce",
    tag: "bg-pink text-white",
    summary:
      "E-commerce. Baby clothes for ages 0–3. The live shop is organized by age, from rompers to winter wear. Open bsbasil.vercel.app.",
  },
  {
    name: "TaxSimpl",
    url: "https://www.taxsimpl.com",
    host: "taxsimpl.com",
    kind: "Finance",
    tag: "bg-green",
    summary:
      "Finance. Tax, GST, accounting, and advisory, including Virtual CFO, on the live site. Open taxsimpl.com.",
  },
];

export function LiveSiteFrame({ host }: { host: string }) {
  return (
    <div className="border-b-[3px] border-ink bg-paper">
      <div className="flex items-center gap-2 border-b-[3px] border-ink bg-white px-3 py-2">
        <span className="size-2.5 shrink-0 border-2 border-ink bg-white" aria-hidden />
        <span className="size-2.5 shrink-0 border-2 border-ink bg-white" aria-hidden />
        <span className="size-2.5 shrink-0 border-2 border-ink bg-yellow" aria-hidden />
        <span className="ml-1 truncate font-display text-xs font-bold">{host}</span>
      </div>
      <div className="px-4 py-6">
        <p className="break-words font-display text-2xl font-black leading-tight">{host}</p>
        <p className="mt-2 text-sm font-medium">Live site.</p>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b-[3px] border-ink bg-paper text-ink">
      <div className="palette-bar h-2" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <Reveal>
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-pink">Portfolio</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            Brands, out in the open.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/80">
            Selected work from Craftvanta. Three sites are live. Open them.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pieces.map((piece, index) => (
            <Reveal key={piece.name} delay={index * 0.08} className="h-full">
              <article className="neo flex h-full flex-col bg-white text-ink">
                <LiveSiteFrame host={piece.host} />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-3xl font-black">{piece.name}</h3>
                    <span className={`border-[3px] border-ink px-2 py-0.5 font-display text-xs font-black ${piece.tag}`}>
                      {piece.kind}
                    </span>
                  </div>
                  <p className="mt-2 font-display text-sm font-bold">{piece.host}</p>
                  <p className="mt-3 text-[15px] leading-relaxed">{piece.summary}</p>
                  <a
                    href={piece.url}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-sm press mt-6 inline-flex w-fit bg-ink px-4 py-2 font-display font-extrabold text-yellow focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4"
                  >
                    Visit {piece.host} →
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
