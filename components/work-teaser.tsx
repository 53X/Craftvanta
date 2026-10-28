import { Reveal } from "@/components/reveal";
import { LiveSiteFrame, pieces } from "@/components/work";

export function WorkTeaser() {
  return (
    <section className="border-b-[3px] border-ink bg-paper">
      <div className="palette-bar h-2" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <Reveal>
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em]">Portfolio</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            Three live sites. Open them.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/80">
            Agentomatic is an AI SaaS. Bsbasil sells baby clothes, ages 0–3. TaxSimpl is a finance firm. The sites are live.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pieces.map((piece, index) => (
            <Reveal key={piece.name} delay={index * 0.08} className="h-full">
              <a
                href={piece.url}
                target="_blank"
                rel="noreferrer"
                className="neo flex h-full flex-col bg-white text-ink focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4"
              >
                <LiveSiteFrame host={piece.host} />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-3xl font-black">{piece.name}</h3>
                    <span className={`border-[3px] border-ink px-2 py-0.5 font-display text-xs font-black ${piece.tag}`}>
                      {piece.kind}
                    </span>
                  </div>
                  <p className="mt-2 font-display text-sm font-bold">{piece.host}</p>
                  <span className="neo-sm mt-6 inline-flex w-fit bg-yellow px-4 py-2 font-display font-extrabold">
                    Visit {piece.host} →
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
