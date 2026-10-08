const items = [
  "Branding",
  "Identity",
  "Website builds",
  "Website optimization",
  "AI images",
  "AI video",
  "Facebook",
  "Instagram",
  "Google ads",
  "Meta ads",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-b-[3px] border-ink bg-ink text-white">
      <div className="ticker-track flex w-max py-4">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-4 px-4 font-display text-lg font-extrabold">
            {item}
            <span className="size-3 bg-yellow" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
