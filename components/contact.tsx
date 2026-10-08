"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/reveal";

const jobs = [
  { label: "Branding", tone: "bg-yellow" },
  { label: "Website building", tone: "bg-pink text-white" },
  { label: "Website optimization", tone: "bg-blue text-white" },
  { label: "AI images and video", tone: "bg-violet text-white" },
  { label: "Facebook and Instagram", tone: "bg-green" },
  { label: "Google and Meta ads", tone: "bg-orange text-white" },
];

const EMAIL = "hello@craftvanta.com";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const note = String(data.get("note") || "").trim();
    const picked = data.getAll("job").map(String);

    if (!name || !email || picked.length === 0) {
      setError("Add your name, email, and at least one job.");
      setSent(false);
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      business ? `Business: ${business}` : "",
      `Jobs: ${picked.join(", ")}`,
      "",
      note || "(No extra note)",
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Project inquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setError("");
    setSent(true);
    window.location.href = href;
  }

  return (
    <section id="start" className="scroll-mt-24 border-b-[3px] border-ink bg-yellow dot-grid-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            Bring the rough idea.
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            A name, a product, a feeling. We come back with the brand, the pages, and what it takes to put it in public.
          </p>
          <p className="mt-6 font-display text-sm font-bold">
            Or email{" "}
            <a className="underline decoration-[3px] underline-offset-4" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
        <form onSubmit={onSubmit} className="neo bg-white p-5 sm:p-6" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
          </div>
          <div className="mt-4">
            <Field label="Business" name="business" autoComplete="organization" required={false} />
          </div>
          <fieldset className="mt-4">
            <legend className="font-display text-sm font-extrabold">What do you need?</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {jobs.map((job) => (
                <label key={job.label} className={`flex items-center gap-2 border-[3px] border-ink px-3 py-2 text-sm font-medium ${job.tone}`}>
                  <input type="checkbox" name="job" value={job.label} className="size-4 accent-ink" />
                  {job.label}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="mt-4 block font-display text-sm font-extrabold">
            Anything else
            <textarea
              name="note"
              rows={4}
              className="mt-1 w-full border-[3px] border-ink bg-white px-3 py-2 font-sans text-base font-medium outline-none focus:bg-yellow/40"
            />
          </label>
          {error ? (
            <p className="mt-3 border-[3px] border-ink bg-pink px-3 py-2 text-sm font-bold text-white" role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p className="mt-3 border-[3px] border-ink bg-mint px-3 py-2 text-sm font-medium" role="status">
              Your email app should be open with the note filled in. Send it and we&apos;ll take it from there.
            </p>
          ) : null}
          <button type="submit" className="neo-sm press mt-5 bg-ink px-5 py-3 font-display text-lg font-extrabold text-yellow">
            Send the note →
          </button>
        </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block font-display text-sm font-extrabold">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1 w-full border-[3px] border-ink bg-white px-3 py-2 font-sans text-base font-medium outline-none focus:bg-yellow/40"
      />
    </label>
  );
}
