import { Reveal } from "@/components/reveal";

const pieces = [
  {
    name: "Agentomatic",
    url: "https://agentomatic.in",
    host: "agentomatic.in",
    kind: "AI SaaS",
    tag: "bg-violet text-white",
    summary:
      "An AI front desk that picks up phone, WhatsApp, and email, then hands the thread to a person when it matters. The site says that in one breath.",
    points: ["Product story", "Clear offer", "Multi-channel front desk"],
    frame: "agent",
  },
  {
    name: "Bsbasil",
    url: "https://bsbasil.vercel.app",
    host: "bsbasil.vercel.app",
    kind: "E-commerce",
    tag: "bg-pink text-white",
    summary:
      "Premium baby clothes for 0–3 years. Soft product pages, shopping by age, and a storefront that feels as careful as the clothes.",
    points: ["Shop by age", "Rompers to winter wear", "Calm product story"],
    frame: "shop",
  },
  {
    name: "TaxSimpl",
    url: "https://www.taxsimpl.com",
    host: "taxsimpl.com",
    kind: "Finance",
    tag: "bg-green",
    summary:
      "A financial site for tax, GST, accounting, and advisory. The offer is plain: compliance that stays on time, for founders and growing businesses.",
    points: ["Income tax", "GST and company work", "Virtual CFO"],
    frame: "finance",
  },
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b-[3px] border-ink bg-paper text-ink">
      <div className="palette-bar h-2" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-pink">Portfolio</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
          Brands, out in the open.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/80">
          Selected work from Craftvanta. Three sites are live. Open them.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pieces.map((piece, index) => (
            <Reveal key={piece.name} delay={index * 0.08} className="h-full">
              <article className="neo flex h-full flex-col bg-white text-ink">
                <div className="h-96 shrink-0 border-b-[3px] border-ink">
                  {piece.frame === "agent" ? <AgentFrame /> : null}
                  {piece.frame === "shop" ? <ShopFrame /> : null}
                  {piece.frame === "finance" ? <FinanceFrame /> : null}
                </div>
                <div className="flex h-96 shrink-0 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-3xl font-black">{piece.name}</h3>
                    <span className={`border-[3px] border-ink px-2 py-0.5 font-display text-xs font-black ${piece.tag}`}>
                      {piece.kind}
                    </span>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed">{piece.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {piece.points.map((point) => (
                      <li key={point} className="border-[3px] border-ink bg-paper px-2 py-1 text-sm font-medium">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={piece.url}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-sm press mt-auto inline-flex w-fit bg-ink px-4 py-2 font-display font-extrabold text-yellow"
                  >
                    Visit {piece.host} →
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

function AgentFrame() {
  return (
    <div className="flex h-full flex-col bg-ink p-5 text-white sm:p-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cyan">agentomatic</p>
      <p className="mt-3 min-h-[5.7rem] max-w-sm font-display text-3xl font-black leading-[0.95]">
        your ai front desk.
      </p>
      <p className="mt-3 max-w-sm text-sm text-white/80">
        Routine calls handled. A warm handoff when it matters. For the team, not instead of them.
      </p>
      <div className="mt-auto flex flex-wrap gap-2 pt-4 text-xs font-bold">
        {["Phone", "WhatsApp", "Email", "17 languages"].map((item) => (
          <span key={item} className="border border-white/40 px-2 py-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ShopFrame() {
  return (
    <div className="flex h-full flex-col bg-[#f6efe6] p-5 text-ink sm:p-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-pink">Bsbasil · 0–3 years</p>
      <p className="mt-3 min-h-[5.7rem] max-w-sm font-display text-3xl font-black leading-[0.95]">
        Premium comfort for precious little ones.
      </p>
      <p className="mt-3 max-w-sm text-sm">Soft all day, from the first feed to the last cuddle.</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-4 text-xs font-bold">
        {["Rompers", "Sets", "Sleepwear", "Winter wear"].map((item) => (
          <span key={item} className="border-[3px] border-ink bg-white px-2 py-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function FinanceFrame() {
  return (
    <div className="flex h-full flex-col bg-blue p-5 text-white sm:p-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-yellow">taxsimpl</p>
      <p className="mt-3 min-h-[5.7rem] max-w-sm font-display text-3xl font-black leading-[0.95]">
        Clarity for the books.
      </p>
      <p className="mt-3 max-w-sm text-sm text-white/85">
        Tax, GST, and company work, written so a founder can see the next step.
      </p>
      <div className="mt-auto flex flex-wrap gap-2 pt-4 text-xs font-bold">
        {["Income tax", "GST", "Accounting", "Virtual CFO"].map((item) => (
          <span key={item} className="border border-white/50 bg-white/10 px-2 py-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
