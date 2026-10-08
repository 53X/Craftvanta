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
    <span className="neo-sm relative block size-[52px] shrink-0 overflow-hidden bg-[#071433]">
      <img
        src="/craftvanta-logo.png"
        alt=""
        className="absolute top-[-14%] left-1/2 w-[205%] max-w-none -translate-x-1/2"
      />
    </span>
  );
}
