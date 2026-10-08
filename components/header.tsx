"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { useScrollLock } from "@/components/smooth-scroll";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const setScrollLock = useScrollLock();

  useEffect(() => {
    setScrollLock(open);
    return () => setScrollLock(false);
  }, [open, setScrollLock]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b-[3px] border-ink bg-paper/95 backdrop-blur-sm">
      <div className="palette-bar absolute inset-x-0 top-0 h-1.5" aria-hidden />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-yellow focus:px-3 focus:py-2 focus:font-display focus:font-bold"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2.5 font-display text-xl font-black tracking-tight">
          <Logo />
          <span>Craftvanta</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-display text-[15px] font-bold hover:underline hover:decoration-[3px] hover:underline-offset-4 ${
                link.href === "/work" && pathname === "/work" ? "underline decoration-[3px] underline-offset-4" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#start"
            className="neo-sm press bg-yellow px-4 py-2 font-display text-[15px] font-extrabold"
          >
            Start a project →
          </a>
        </nav>

        <button
          type="button"
          className="neo-sm press grid size-11 place-items-center bg-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span className={`h-[3px] bg-ink transition ${open ? "translate-y-[4.5px] rotate-45" : ""}`} />
            <span className={`h-[3px] bg-ink transition ${open ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t-[3px] border-ink bg-paper px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="neo bg-white px-4 py-3 font-display text-lg font-extrabold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#start"
              onClick={() => setOpen(false)}
              className="neo press bg-yellow px-4 py-3 text-center font-display text-lg font-extrabold"
            >
              Start a project →
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
