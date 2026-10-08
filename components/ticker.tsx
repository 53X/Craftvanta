import { Reveal } from "@/components/reveal";

const items = [
  { label: "Branding", dot: "bg-yellow" },
  { label: "Identity", dot: "bg-pink" },
  { label: "Website builds", dot: "bg-blue" },
  { label: "Website optimization", dot: "bg-cyan" },
  { label: "AI images", dot: "bg-violet" },
  { label: "AI video", dot: "bg-orange" },
  { label: "Facebook", dot: "bg-green" },
  { label: "Instagram", dot: "bg-pink" },
  { label: "Google ads", dot: "bg-yellow" },
  { label: "Meta ads", dot: "bg-mint" },
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <Reveal className="overflow-hidden border-b-[3px] border-ink bg-ink text-white">
      <div className="ticker-track flex w-max py-4">
        {row.map((item, index) => (
          <span key={`${item.label}-${index}`} className="flex items-center gap-4 px-4 font-display text-lg font-extrabold">
            {item.label}
            <span className={`size-3 border-2 border-white ${item.dot}`} aria-hidden />
          </span>
        ))}
      </div>
    </Reveal>
  );
}
