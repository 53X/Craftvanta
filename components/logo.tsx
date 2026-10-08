export function Logo({ variant = "mark" }: { variant?: "mark" | "lockup" }) {
  const lockup = variant === "lockup";

  if (lockup) {
    return (
      <span className="neo inline-flex bg-white p-2">
        <img
          src="/craftvanta-logo.png"
          alt="Craftvanta"
          width={1024}
          height={1024}
          className="h-40 w-40 object-cover"
        />
      </span>
    );
  }

  return (
    <span className="neo-sm inline-flex shrink-0 bg-[#071433]">
      <img
        src="/craftvanta-logo.png"
        alt="Craftvanta"
        width={1024}
        height={1024}
        className="h-[72px] w-[72px] object-contain"
      />
    </span>
  );
}
