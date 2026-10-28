import Link from "next/link";

const checks = [
  "A brand people can name, picture, and repeat",
  "Sites built new, or tuned so the offer is easy to find",
  "AI images and video that look like this brand",
  "Facebook, Instagram, Google, and Meta, still on-brand",
];

export function Hero() {
  return (
    <section className="dot-grid relative overflow-hidden border-b-[3px] border-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 border-[3px] border-ink bg-white px-3 py-1 font-display text-sm font-bold">
            <span className="size-2.5 bg-pink" aria-hidden />
            Creative and digital marketing agency
          </p>
          <h1 className="max-w-xl font-display text-[2.7rem] font-black leading-[0.92] tracking-tight sm:text-6xl lg:max-w-none lg:text-[4.35rem]">
            One studio for
            <br />
            the look and the
            <br />
            <span className="marker marker-draw">launch.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 md:text-xl">
            Branding and websites, then the posts and ads that match. Facebook, Instagram, Google, and Meta. Bring the rough idea.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#start" scroll={false} className="neo press bg-yellow px-5 py-3 font-display text-lg font-extrabold">
              Start a project →
            </Link>
            <Link href="/work" className="neo press bg-white px-5 py-3 font-display text-lg font-extrabold">
              See the work
            </Link>
          </div>
          <ul className="mt-8 space-y-3">
            {checks.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[15px] font-medium md:text-base">
                <span
                  className={`mt-0.5 grid size-6 shrink-0 place-items-center border-[3px] border-ink text-xs font-black ${["bg-green", "bg-pink text-white", "bg-cyan", "bg-orange text-white"][index]}`}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto min-h-[26rem] w-full sm:min-h-[28rem]">
            <div className="studio-stamp studio-stamp-1 absolute left-0 top-6 z-10 w-36 sm:w-40">
              <div className="neo -rotate-6 bg-paper p-3">
                <div className="grid aspect-square place-items-center border-[3px] border-ink bg-white">
                  <span className="font-display text-5xl font-black leading-none tracking-tight">Cv</span>
                </div>
                <p className="mt-2 font-display text-xs font-bold">Mark</p>
              </div>
            </div>

            <div className="studio-stamp studio-stamp-2 absolute left-20 top-0 z-20 w-56 sm:left-28 sm:w-72">
              <div className="neo bg-white">
                <div className="flex items-center gap-1.5 border-b-[3px] border-ink bg-paper px-2.5 py-2">
                  <span className="size-2.5 border-2 border-ink bg-white" aria-hidden />
                  <span className="size-2.5 border-2 border-ink bg-white" aria-hidden />
                  <span className="size-2.5 border-2 border-ink bg-yellow" aria-hidden />
                  <span className="ml-1 h-5 flex-1 border-[3px] border-ink bg-white" />
                </div>
                <div className="space-y-2 p-4">
                  <p className="w-fit font-display text-xl font-black leading-none">The offer</p>
                  <span className="block h-2.5 w-full bg-ink/15" />
                  <span className="block h-2.5 w-4/5 bg-ink/15" />
                  <span className="block h-2.5 w-2/3 bg-ink/15" />
                </div>
              </div>
            </div>

            <div className="studio-stamp studio-stamp-3 absolute right-0 top-36 z-30 w-36 sm:top-40 sm:w-44">
              <div className="neo rotate-3 bg-paper p-3">
                <div className="aspect-square border-[3px] border-ink bg-white p-2">
                  <div className="h-1/2 border-[3px] border-ink bg-yellow" />
                  <div className="mt-2 h-2 w-full bg-ink" />
                  <div className="mt-1.5 h-2 w-3/4 bg-ink/20" />
                </div>
                <p className="mt-2 font-display text-xs font-bold">Post</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
