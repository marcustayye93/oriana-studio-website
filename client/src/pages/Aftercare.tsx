/*
  ORIANA — Keep the Light (aftercare). Care styled as a short morning-and-evening rite.
  Editorial single-column measures, sand section alternation.
  Round 12: elegant thin-stroke step icons, larger classier hero (v6 editorial),
  Keepsake Kit product photo properly featuring the products.
*/
import { Link } from "wouter";
import {
  Droplets,
  Brush,
  Sparkles,
  Waves,
  Feather,
  Moon,
  Clock,
  FlaskRound,
  Hand,
  Scissors,
  CircleDashed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { IMG } from "@/lib/site";

/* Elegant step row: thin-stroke icon in an airy ring, then the text */
function Step({
  icon: Icon,
  children,
  tone = "light",
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const ring =
    tone === "dark"
      ? "border-primary-foreground/25 text-[oklch(0.85_0.07_85)]"
      : "border-[var(--sage)]/40 text-[var(--sage)]";
  return (
    <li className="flex items-start gap-4">
      <span
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${ring}`}
      >
        <Icon className="h-4 w-4" strokeWidth={1.25} />
      </span>
      <span className="pt-1.5">{children}</span>
    </li>
  );
}

export default function Aftercare() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* Opening */}
      <section className="container pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-[65ch] text-center">
          <p className="eyebrow rise text-muted-foreground">Aftercare</p>
          <h1 className="mega rise mt-6 text-6xl md:text-8xl">
            Keep the Light
          </h1>
          <p className="hand rise mt-6 text-xl text-muted-foreground md:text-2xl">
            two habits, thirty seconds each
          </p>
        </div>
      </section>

      {/* Editorial hero — larger, classier (v6) */}
      <section className="container pb-24 md:pb-36">
        <div className="rise mb-8 w-full overflow-hidden rounded-xl md:mb-10">
          <img
            decoding="async"
            src="/manus-storage/oriana-v6-aftercare-hero_6133439f.webp"
            alt="A gold spoolie brushing a natural wispy lash set in warm morning light"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/8] md:aspect-[16/7]"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rise border border-border p-10 md:p-14">
            <p className="font-display text-lg italic text-[oklch(0.62_0.11_75)]">
              At first light
            </p>
            <h2 className="font-display mt-3 text-3xl">The morning rite</h2>
            <ul className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              <Step icon={Droplets}>
                Rinse the lash line with water only — no oil, no rubbing.
              </Step>
              <Step icon={Brush}>
                Brush once, root to tip, with the spoolie from your kit.
              </Step>
              <Step icon={Sparkles}>
                If you wear skincare, keep oils and heavy creams below the
                orbital bone.
              </Step>
            </ul>
          </div>
          <div className="rise bg-primary p-10 text-primary-foreground md:p-14">
            <p className="font-display text-lg italic text-primary-foreground/70">
              At day's end
            </p>
            <h2 className="font-display mt-3 text-3xl">The evening rite</h2>
            <ul className="mt-8 space-y-6 text-sm leading-relaxed text-primary-foreground/75 md:text-base">
              <Step icon={Waves} tone="dark">
                Cleanse with a lash-safe foam cleanser — every evening you wore
                makeup, every second evening otherwise.
              </Step>
              <Step icon={Feather} tone="dark">
                Pat dry with a lint-free tissue; never a towel's rub.
              </Step>
              <Step icon={Moon} tone="dark">
                Sleep on your back or side if you can — a silk pillowcase is
                the quiet luxury that pays for itself.
              </Step>
            </ul>
          </div>
        </div>
      </section>

      {/* What to avoid + the first 24 hours */}
      <section className="grad-veil grain relative border-y border-border">
        <div className="container relative z-10 grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-6">
            <p className="eyebrow rise text-muted-foreground">
              The first 24 hours
            </p>
            <h2 className="font-display rise mt-5 text-3xl md:text-4xl">
              Let the bond set
            </h2>
            <ul className="rise mt-6 max-w-md space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              <Step icon={Clock}>
                Keep the lash line dry for the first 24 hours — no steam, hot
                yoga, swimming, or long hot showers. After that, live normally.
              </Step>
            </ul>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow rise text-[var(--sage)]">Always avoid</p>
            <ul className="rise mt-6 space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              <Step icon={FlaskRound}>
                Oil-based cleansers and waterproof mascara at the lash line
              </Step>
              <Step icon={Hand}>Rubbing, picking, or pulling — ever</Step>
              <Step icon={Scissors}>
                Lash curlers — you already paid for the curl
              </Step>
              <Step icon={CircleDashed}>
                Cotton pads near the extensions (fibres catch)
              </Step>
            </ul>
          </div>
        </div>
      </section>

      {/* The Keepsake Kit + The Return */}
      <section className="container py-24 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="rise w-full overflow-hidden rounded-xl">
              <img
                decoding="async"
                src="/manus-storage/oriana-v6-keepsake-kit_01359d9a.webp"
                alt="The Keepsake Kit — Oriana lash foam cleanser, gold spoolie brush, lint-free cloth and the Keep the Light card on ivory linen"
                loading="lazy"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
            <p className="hand rise mt-4 text-center text-lg text-muted-foreground">
              your kit — cleanser, spoolie, cloth, card
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow rise text-[var(--sage)]">The Return</p>
            <h2 className="font-display rise mt-5 text-3xl leading-tight md:text-4xl">
              Your window is three weeks
            </h2>
            <p className="rise mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              You naturally shed about a quarter of your lashes every three
              weeks. Book the Return within that window and your set is
              restored at infill pricing — most clients book before leaving
              the chair.
            </p>
            <Link
              href="/book?service=The%20Return"
              className="btn-pill rise mt-10 bg-primary text-primary-foreground hover:bg-[oklch(0.26_0.024_60)]"
            >
              Book your Return <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
