/*
  ORIANA — Keep the Light (aftercare). Care styled as a short morning-and-evening rite.
  Editorial single-column measures, sand section alternation.
  Round 3: sage accents, Petit Formal Script sizing, witty-classy trims.
*/
import { Link } from "wouter";
import { useReveal } from "@/hooks/useReveal";
import { IMG } from "@/lib/site";

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

      {/* Morning / Evening rites */}
      <section className="container pb-24 md:pb-36">
        <div className="rise mx-auto mb-6 aspect-[16/6] w-full max-w-4xl overflow-hidden rounded-xl">
          <img decoding="async"
            src={IMG.macro}
            alt="What a kept set looks like — clean, brushed lash extensions up close"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rise border border-border p-10 md:p-14">
            <p className="font-display text-lg italic text-[oklch(0.62_0.11_75)]">
              At first light
            </p>
            <h2 className="font-display mt-3 text-3xl">The morning rite</h2>
            <ul className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>
                Rinse the lash line with water only — no oil, no rubbing.
              </li>
              <li>Brush once, root to tip, with the spoolie from your kit.</li>
              <li>
                If you wear skincare, keep oils and heavy creams below the
                orbital bone.
              </li>
            </ul>
          </div>
          <div className="rise bg-primary p-10 text-primary-foreground md:p-14">
            <p className="font-display text-lg italic text-primary-foreground/70">
              At day's end
            </p>
            <h2 className="font-display mt-3 text-3xl">The evening rite</h2>
            <ul className="mt-8 space-y-5 text-sm leading-relaxed text-primary-foreground/75 md:text-base">
              <li>
                Cleanse with a lash-safe foam cleanser — every evening you wore
                makeup, every second evening otherwise.
              </li>
              <li>Pat dry with a lint-free tissue; never a towel's rub.</li>
              <li>
                Sleep on your back or side if you can — a silk pillowcase is
                the quiet luxury that pays for itself.
              </li>
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
            <p className="rise mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Keep the lash line dry for the first 24 hours — no steam, hot
              yoga, swimming, or long hot showers. After that, live normally.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow rise text-[var(--sage)]">Always avoid</p>
            <ul className="rise mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>Oil-based cleansers and waterproof mascara at the lash line</li>
              <li>Rubbing, picking, or pulling — ever</li>
              <li>Lash curlers — you already paid for the curl</li>
              <li>Cotton pads near the extensions (fibres catch)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Return */}
      <section className="container py-24 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="rise aspect-[4/3] w-full">
              <img decoding="async"
                src={IMG.aftercare}
                alt="The Keep the Light aftercare card"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
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
