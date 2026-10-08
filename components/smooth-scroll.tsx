"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import gsap from "gsap";

const ScrollLockContext = createContext<{
  lockRef: RefObject<boolean>;
  setLocked: (locked: boolean) => void;
} | null>(null);

export function useScrollLock() {
  const ctx = useContext(ScrollLockContext);
  return ctx?.setLocked ?? (() => {});
}

const HEADER = 96;

const scrollListeners = new Set<(y: number) => void>();

export function subscribeSmoothScroll(listener: (y: number) => void) {
  scrollListeners.add(listener);
  return () => {
    scrollListeners.delete(listener);
  };
}

function offsetWithin(node: HTMLElement, root: HTMLElement) {
  let y = 0;
  let el: HTMLElement | null = node;
  while (el && el !== root) {
    y += el.offsetTop;
    el = el.offsetParent as HTMLElement | null;
  }
  return y;
}

export function ScrollRoot({ children }: { children: ReactNode }) {
  const lockRef = useRef(false);
  const setLocked = useCallback((locked: boolean) => {
    lockRef.current = locked;
    document.documentElement.style.overflow = locked ? "hidden" : "";
  }, []);

  return (
    <ScrollLockContext.Provider value={{ lockRef, setLocked }}>
      {children}
    </ScrollLockContext.Provider>
  );
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const ctx = useContext(ScrollLockContext);
  const lockRef = ctx?.lockRef;
  const pathname = usePathname();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !finePointer) return;

    let target = window.scrollY;
    let current = target;
    const setY = gsap.quickSetter(root, "y", "px");
    const bar = barRef.current;

    const resize = () => {
      const height = `${root.offsetHeight}px`;
      document.documentElement.style.height = height;
      document.body.style.height = height;
    };

    const onScroll = () => {
      if (lockRef?.current) return;
      target = window.scrollY;
    };

    const tick = () => {
      if (lockRef?.current) return;
      current += (target - current) * 0.085;
      if (Math.abs(target - current) < 0.4) current = target;
      setY(-current);

      const max = Math.max(1, root.offsetHeight - window.innerHeight);
      if (bar) bar.style.transform = `scaleX(${Math.min(1, current / max)})`;
      scrollListeners.forEach((listener) => listener(current));
    };

    root.style.position = "fixed";
    root.style.top = "0";
    root.style.left = "0";
    root.style.width = "100%";
    root.style.zIndex = "0";
    document.documentElement.style.scrollBehavior = "auto";

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const raw = anchor.getAttribute("href");
      if (!raw || raw.startsWith("mailto:") || raw.startsWith("http")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const node = document.getElementById(url.hash.slice(1));
      if (!node) return;
      event.preventDefault();
      const top = Math.max(0, offsetWithin(node, root) - HEADER);
      history.pushState(null, "", `${url.pathname}${url.hash}`);
      target = top;
      window.scrollTo(0, top);
    };

    resize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("click", onClick);
    const observer = new ResizeObserver(resize);
    observer.observe(root);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      document.removeEventListener("click", onClick);
      observer.disconnect();
      document.documentElement.style.height = "";
      document.body.style.height = "";
      document.documentElement.style.scrollBehavior = "";
      root.style.position = "";
      root.style.transform = "";
      root.style.width = "";
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const id = window.location.hash.replace("#", "");
    const jump = () => {
      if (!root || !id) {
        window.scrollTo(0, 0);
        return;
      }
      const node = document.getElementById(id);
      if (!node) {
        window.scrollTo(0, 0);
        return;
      }
      window.scrollTo(0, Math.max(0, offsetWithin(node, root) - HEADER));
    };
    const frame = requestAnimationFrame(jump);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <>
      <div
        ref={barRef}
        className="pointer-events-none fixed top-0 left-0 z-50 h-[3px] w-full origin-left bg-yellow"
        style={{ transform: "scaleX(0)" }}
      />
      <div ref={rootRef}>
        <div className="pt-24">{children}</div>
      </div>
    </>
  );
}
