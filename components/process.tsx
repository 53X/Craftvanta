import { Reveal } from "@/components/reveal";

const steps = [
  {
    n: "01",
    title: "Tell us the job",
    body: "What you sell, who it is for, and how the brand should feel. A new identity, a site, content, social, ads, or the lot.",
    tone: "bg-green",
  },
  {
    n: "02",
    title: "We map it",
    body: "Pages, posts, and campaigns on one board. You see the plan before anyone starts making things.",
    tone: "bg-pink text-white",
  },
  {
    n: "03",
    title: "We make it",
    body: "The site, the images, the videos, the captions. You review. We revise. Nothing goes live half-finished.",
    tone: "bg-orange text-white",
  },
  {
    n: "04",
    title: "It stays moving",
    body: "Facebook and Instagram keep posting. Google and Meta ads keep running. You get a short note, not a maze.",
    tone: "bg-blue text-white",
  },
];

const slow = [
  "A website project with no date",
  "Stock photos that could belong to anyone",
  "Posting when someone remembers",
  "Ads switched on with no page to land on",
  "A report you need a meeting to read",
];

const withUs = [
  "A site with a launch day on the calendar",
  "Images and video made for this brand",
  "Facebook and Instagram on a schedule",
  "Google and Meta ads tied to a real offer",
  "A plain read on what spent and what came back",
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-b-[3px] border-ink bg-yellow">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em]">How it works</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
          Blank brief. Finished brand.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.06} className="h-full">
            <article className={`neo h-full ${step.tone} p-5`}>
              <p className="font-display text-sm font-black">{step.n}</p>
              <h3 className="mt-3 font-display text-2xl font-black leading-none">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{step.body}</p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="border-t-[3px] border-ink bg-cyan">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl">
              Half-made brands
              <span className="marker"> stop here.</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink/80">
              Marketing falls apart in the gaps between the site, the posts, and the ads. We hold those pieces together.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border-[3px] border-ink bg-paper p-4">
              <h3 className="font-display text-lg font-black">The slow way</h3>
              <ul className="mt-3 space-y-3 text-sm">
                {slow.map((item) => (
                  <li key={item} className="flex gap-2 text-ink/70">
                    <span aria-hidden>✕</span>
                    <span className="line-through decoration-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-[3px] border-ink bg-mint p-4">
              <h3 className="font-display text-lg font-black">With Craftvanta</h3>
              <ul className="mt-3 space-y-3 text-sm font-medium">
                {withUs.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
