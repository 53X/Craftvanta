import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Agency",
    links: [
      { href: "/#services", label: "Services" },
      { href: "/work", label: "Portfolio" },
      { href: "/#process", label: "Process" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#start", label: "Start a project" },
    ],
  },
  {
    title: "Selected work",
    links: [
      { href: "https://agentomatic.in", label: "Agentomatic", external: true },
      { href: "https://bsbasil.vercel.app", label: "Bsbasil", external: true },
      { href: "https://www.taxsimpl.com", label: "TaxSimpl", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="palette-bar h-2" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="/" className="inline-flex" aria-label="Craftvanta">
            <Logo variant="lockup" />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/80">
            A creative marketing agency for branding, websites, AI images and video, social, and ads.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="font-display text-sm font-black uppercase tracking-[0.14em]">{column.title}</h2>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t-[3px] border-ink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-sm">
          <p>© 2026 Craftvanta. All rights reserved.</p>
          <a className="font-display font-bold" href="mailto:hello@craftvanta.com">
            hello@craftvanta.com
          </a>
        </div>
      </div>
    </footer>
  );
}
