export function Logo({ variant = "mark" }: { variant?: "mark" | "lockup" }) {
  const lockup = variant === "lockup";

  return (
    <span className={lockup ? "neo inline-flex bg-white p-2" : "neo-sm inline-flex shrink-0 bg-white"}>
      <img
        src="/craftvanta-logo.png"
        alt="Craftvanta"
        width={1024}
        height={1024}
        className={lockup ? "h-40 w-40 object-contain" : "h-[72px] w-[72px] object-contain"}
      />
    </span>
  );
}
