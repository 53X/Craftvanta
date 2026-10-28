import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Branding",
    body: "Names, logos, color, type, voice, and the rules that keep them together. Packaging, guidelines, and campaigns that still look like you.",
    tone: "bg-ink text-yellow",
    tag: "Brand",
    artifact: "mark",
  },
  {
    title: "Website building",
    body: "New sites from the first page to launch. A clear offer, pages people finish, and a way to get in touch that actually gets used.",
    tone: "bg-pink text-white",
    tag: "Build",
    artifact: "browser",
  },
  {
    title: "Website optimization",
    body: "Speed, structure, and search on the site you already have. Tighten the pages so people stay and Google can read them.",
    tone: "bg-blue text-white",
    tag: "Fix",
    artifact: "marked",
  },
  {
    title: "AI images and video",
    body: "Images and video for the brand. Product stills, campaign frames, short films, and posts. You approve before anything goes out.",
    tone: "bg-yellow",
    tag: "Make",
    artifact: "still",
  },
  {
    title: "Facebook and Instagram",
    body: "Facebook and Instagram. The calendar, the captions, the replies. A feed that looks like one studio made it.",
    tone: "bg-green",
    tag: "Post",
    artifact: "post",
  },
  {
    title: "Google and Meta ads",
    body: "Google search ads and Meta ads. You see the budget. The ad matches the page it lands on.",
    tone: "bg-orange text-white",
    tag: "Spend",
    artifact: "search",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="dot-grid scroll-mt-24 border-b-[3px] border-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <Reveal>
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em]">Services</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            The look, and the launch.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/80">
            Six jobs. Hire the brand, the site, the images, the posts, or the ads. Or run them from one studio.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05} className="h-full">
              <article className="neo flex h-full flex-col bg-white p-5 text-ink">
                <ServiceArtifact kind={service.artifact} />
                <p className={`mt-4 inline-block w-fit border-[3px] border-ink px-2 py-0.5 font-display text-xs font-black ${service.tone}`}>
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

function ServiceArtifact({ kind }: { kind: (typeof services)[number]["artifact"] }) {
  if (kind === "mark") return <MarkArtifact />;
  if (kind === "browser") return <BrowserArtifact />;
  if (kind === "marked") return <BrowserArtifact marked />;
  if (kind === "still") return <StillArtifact />;
  if (kind === "post") return <PostArtifact />;
  return <SearchArtifact />;
}

function MarkArtifact() {
  return (
    <div className="grid size-16 place-items-center border-[3px] border-ink bg-paper" aria-hidden>
      <span className="font-display text-3xl font-black leading-none">Cv</span>
    </div>
  );
}

function BrowserArtifact({ marked = false }: { marked?: boolean }) {
  return (
    <div className="border-[3px] border-ink bg-white" aria-hidden>
      <div className="flex items-center gap-1.5 border-b-[3px] border-ink bg-paper px-2 py-1.5">
        <span className="size-2 border-2 border-ink bg-white" />
        <span className="size-2 border-2 border-ink bg-white" />
        <span className="size-2 border-2 border-ink bg-white" />
        <span className="ml-1 h-4 flex-1 border-2 border-ink bg-white" />
      </div>
      <div className="space-y-1.5 p-2">
        <p className={`w-fit font-display text-sm font-black leading-none ${marked ? "marker" : ""}`}>Offer</p>
        <span className="block h-2 w-full bg-ink/15" />
        <span className="block h-2 w-4/5 bg-ink/15" />
      </div>
    </div>
  );
}

function StillArtifact() {
  return (
    <div className="size-24 border-[3px] border-ink bg-paper p-2" aria-hidden>
      <div className="h-10 border-[3px] border-ink bg-yellow" />
      <div className="mt-2 h-2 w-full bg-ink" />
      <div className="mt-1 h-2 w-2/3 bg-ink/25" />
    </div>
  );
}

function PostArtifact() {
  return (
    <div className="w-16 border-[3px] border-ink bg-white" aria-hidden>
      <div className="h-24 border-b-[3px] border-ink bg-paper p-2">
        <div className="h-10 border-[3px] border-ink bg-ink" />
      </div>
      <div className="space-y-1 p-1.5">
        <span className="block h-1.5 w-full bg-ink" />
        <span className="block h-1.5 w-2/3 bg-ink/30" />
      </div>
    </div>
  );
}

function SearchArtifact() {
  return (
    <div className="space-y-2" aria-hidden>
      <div className="flex h-8 items-center border-[3px] border-ink bg-white px-2">
        <span className="h-2 w-2/3 bg-ink/20" />
      </div>
      <div className="border-[3px] border-ink bg-paper p-2">
        <span className="inline-block border-2 border-ink bg-yellow px-1 font-display text-[10px] font-black leading-none">Ad</span>
        <span className="mt-1.5 block h-2 w-4/5 bg-ink" />
        <span className="mt-1 block h-2 w-full bg-ink/20" />
      </div>
    </div>
  );
}
