import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Branding",
    body: "Names, logos, color, type, voice, and the rules that keep them together. Packaging, guidelines, and campaigns that still look like you.",
    tone: "bg-ink text-yellow",
    tag: "Brand",
  },
  {
    title: "Website building",
    body: "New sites from the first page to launch. A clear offer, pages people finish, and a way to get in touch that actually gets used.",
    tone: "bg-pink text-white",
    tag: "Build",
  },
  {
    title: "Website optimization",
    body: "Speed, structure, and search on the site you already have. Tighten the pages so people stay and Google can read them.",
    tone: "bg-blue text-white",
    tag: "Fix",
  },
  {
    title: "AI content creation",
    body: "Images and video for the brand. Product stills, campaign frames, short films, and posts. You approve before anything goes out.",
    tone: "bg-yellow",
    tag: "Make",
  },
  {
    title: "Social media",
    body: "Facebook and Instagram. The calendar, the captions, the replies. A feed that looks like one studio made it.",
    tone: "bg-green",
    tag: "Post",
  },
  {
    title: "Google and Meta ads",
    body: "Search ads and paid social with a budget you can see. Creative, audiences, and a weekly read on what spent and what came back.",
    tone: "bg-orange text-white",
    tag: "Spend",
  },
];

export function Services() {
  return (
    <section id="services" className="dot-grid scroll-mt-24 border-b-[3px] border-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em]">Services</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
          The brand, built loud.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/80">
          Six jobs. Hire the identity, the site, the content, or the ads. Or run them so they all say the same thing.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05} className="h-full">
            <article
              className={`neo h-full p-5 ${service.tone}`}
            >
              <p className="inline-block border-[3px] border-ink bg-white px-2 py-0.5 font-display text-xs font-black text-ink">
                {service.tag}
              </p>
              <h3 className="mt-4 font-display text-2xl font-black leading-none sm:text-3xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed sm:text-base">{service.body}</p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
