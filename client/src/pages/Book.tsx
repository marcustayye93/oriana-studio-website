/* ORIANA STUDIO — v2.0 gradient-grain identity.
   Book page: a one-screen booking request that composes a structured
   WhatsApp message (parsed by the studio's WhatsApp AI). Quiet, warm,
   thin-serif accents, pill buttons, no long scroll. */
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import { SERVICES, waLink, LOCATION, POLICIES } from "@/lib/site";
import { useReveal } from "@/hooks/useReveal";

const DAYS = ["Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const WINDOWS = ["Morning (10–1)", "Afternoon (1–5)", "Evening (5–8)"] as const;

export default function Book() {
  const ref = useReveal();
  const [location] = useLocation();

  // Preselect service from ?service= query (linked from menu cards)
  const preselect = useMemo(() => {
    if (typeof window === "undefined") return "";
    const q = new URLSearchParams(window.location.search).get("service");
    return q ?? "";
  }, [location]);

  const [service, setService] = useState<string>("");
  const [days, setDays] = useState<string[]>([]);
  const [window_, setWindow] = useState<string>("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (preselect && SERVICES.some((s) => s.name === preselect)) {
      setService(preselect);
    }
  }, [preselect]);

  const chosen = SERVICES.find((s) => s.name === service);
  const ready = service && days.length > 0 && window_ && name.trim().length > 1;

  const message = useMemo(() => {
    const lines = [
      "BOOKING REQUEST — Oriana Studio",
      `Service: ${service}${chosen ? ` (${chosen.price}, ${chosen.duration})` : ""}`,
      `Preferred days: ${days.join(", ")}`,
      `Preferred time: ${window_}`,
      `Name: ${name.trim()}`,
    ];
    if (note.trim()) lines.push(`Note: ${note.trim()}`);
    return lines.join("\n");
  }, [service, chosen, days, window_, name, note]);

  const toggleDay = (d: string) =>
    setDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2.5 text-sm transition-all duration-200 press ${
      active
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border bg-transparent text-foreground hover:border-primary/50"
    }`;

  return (
    <div ref={ref}>
      <section className="container pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: intro */}
          <div className="lg:col-span-4">
            <p className="eyebrow rise text-muted-foreground">Book</p>
            <h1 className="mega rise mt-5 text-5xl md:text-6xl">
              Hold your hour
            </h1>
            <p className="hand rise mt-4 text-xl text-muted-foreground md:text-2xl">
              three taps, one message
            </p>
            <p className="rise mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Pick what suits you — we'll open WhatsApp with your request
              written and ready to send. Chesa confirms your exact hour within
              the day.
            </p>
            <p className="rise mt-4 text-xs text-muted-foreground/80">
              Tue–Sat, by appointment · {LOCATION.short}
            </p>
          </div>

          {/* Right: the form */}
          <div className="lg:col-span-8">
            <div className="rise space-y-10 border border-border bg-card/60 p-6 md:p-10">
              {/* 1 · Service */}
              <div>
                <p className="eyebrow text-[oklch(0.52_0.06_150)]">
                  01 · The service
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setService(s.name)}
                      className={`flex items-center gap-3 border p-3 text-left transition-all duration-200 press ${
                        service === s.name
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <img decoding="async"
                        src={s.photo}
                        alt={s.photoAlt}
                        loading="lazy"
                        className="h-14 w-14 shrink-0 rounded-full object-cover"
                      />
                      <span className="min-w-0">
                        <span className="block font-display text-lg leading-tight">
                          {s.name}
                        </span>
                        <span className="block text-xs leading-snug text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                          {s.descriptor}
                        </span>
                        <span className="mt-0.5 block text-xs font-medium">
                          {s.price} · {s.duration}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2 · Days */}
              <div>
                <p className="eyebrow text-[oklch(0.52_0.06_150)]">
                  02 · Days that work (pick any)
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {DAYS.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => toggleDay(d)}
                      className={chip(days.includes(d))}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3 · Time window */}
              <div>
                <p className="eyebrow text-[oklch(0.52_0.06_150)]">
                  03 · Time of day
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {WINDOWS.map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setWindow(w)}
                      className={chip(window_ === w)}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 · Name + note */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-[oklch(0.52_0.06_150)]">
                    04 · Your name
                  </p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="So we know who's coming"
                    className="mt-4 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <p className="eyebrow text-muted-foreground">
                    Anything else? (optional)
                  </p>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="First time, allergies, 'not sure'…"
                    className="mt-4 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              {/* Send */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {ready
                    ? "Your request is ready — sends via WhatsApp."
                    : "Pick a service, days, time, and your name."}
                </p>
                <a
                  href={ready ? waLink(message) : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!ready}
                  onClick={(e) => {
                    if (!ready) e.preventDefault();
                  }}
                  className={`btn-pill ${
                    ready
                      ? "bg-primary text-primary-foreground hover:bg-[oklch(0.26_0.024_60)]"
                      : "cursor-not-allowed bg-muted text-muted-foreground"
                  }`}
                >
                  Send on WhatsApp <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>

            <p className="rise mt-5 text-xs text-muted-foreground/80">
              No account, no deposit. You'll get a confirmed hour and the exact
              address by reply — usually within the day. Certified &amp;
              insured lash artist · one client at a time.
            </p>

            {/* The quiet fine print — trust at the decision moment (R11) */}
            <ul className="rise mt-4 space-y-1.5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground/80">
              {POLICIES.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
