/*
  ORIANA STUDIO — Home, round 4 (v2.0 gradient-grain identity).
  Macro freckled-eye hero (imperfection-forward), grain overlay on gradients,
  Cormorant Garamond 300 display, inclusive "for absolutely anyone" section with
  a male client portrait, marquee kept, Wubbles kept. Gradients never behind body copy.
*/
import { Link } from "wouter";
import { useReveal } from "@/hooks/useReveal";
import { IMG, LOCATION, SERVICES, VOICE } from "@/lib/site";

const MARQUEE = [
  "not too much",
  "not too little",
  "just right",
  "what lashes do to me is light",
  "it feels natural",
  "for absolutely anyone",
];

export default function Home() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* ——— Hero: full-bleed image, mega type over it ——— */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img decoding="async"
          fetchPriority="high"
          src={IMG.macroEyeF}
          alt="Macro portrait — a freckled eye with fine natural lash extensions catching golden light"
          className="kenburns absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.02_60)]/85 via-[oklch(0.22_0.02_60)]/25 to-transparent" />
        <div className="container relative flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:pb-28">
          <p className="eyebrow rise text-white/70">
            A private beauty studio · Singapore
          </p>
          <h1 className="mega rise mt-6 max-w-5xl text-[17vw] text-white sm:text-[13vw] md:text-[9.5rem] lg:text-[11rem]">
            Light,
            <em className="italic text-[oklch(0.85_0.09_80)]"> worn </em>
            quietly.
          </h1>
          <div className="rise mt-8 flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-sm text-base leading-relaxed text-white/90 md:text-lg">
              Natural-first lash extensions and lifts. One client at a time, by
              appointment, in Woodlands. Sets from S$60.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-pill bg-white text-[oklch(0.24_0.02_60)] hover:bg-[oklch(0.92_0.03_85)]"
              >
                Explore our services <span className="btn-arrow">↓</span>
              </a>
              <Link
                href="/book"
                className="btn-pill-outline border-white/60 text-white hover:bg-white hover:text-[oklch(0.24_0.02_60)]"
              >
                Hold your hour <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Marquee of Chesa's words ——— */}
      <section
        aria-hidden
        className="overflow-hidden border-y border-border bg-background py-5"
      >
        <div className="marquee-track">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center">
              {MARQUEE.map((w) => (
                <span
                  key={`${half}-${w}`}
                  className="font-display mx-8 flex items-center gap-16 text-2xl italic text-muted-foreground/80 md:text-3xl"
                >
                  {w}
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--sage)]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ——— The promise: macro image + seven words ——— */}
      <section className="container grid items-center gap-10 py-24 md:grid-cols-12 md:py-36">
        <div className="md:col-span-7">
          <div className="rise relative aspect-[3/2] w-full overflow-hidden">
            <img decoding="async"
              src={IMG.handsCraft}
              alt="Macro detail — a single lash extension being placed"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <p className="hand absolute bottom-4 right-5 rotate-[-2deg] text-lg text-white/95 drop-shadow-md md:text-xl">
              one lash at a time. promise.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 md:pl-6">
          <h2 className="mega rise text-5xl md:text-6xl lg:text-7xl">
            Not too much.
            <br />
            Not too little.
            <br />
            <em className="italic text-[oklch(0.62_0.11_75)]">Just right.</em>
          </h2>
          <p className="rise mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
            Every set is mapped to your eye shape and applied one lash at a
            time. The result reads as yours, not as extensions.
          </p>
        </div>
      </section>

      {/* ——— For absolutely anyone: inclusive statement, gradient-grain panel ——— */}
      <section className="grad-dawn grain relative overflow-hidden">
        <div className="container relative z-10 grid items-center gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <div className="rise grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img decoding="async"
                  src={IMG.portraitF}
                  alt="A client with a soft natural lash set, three-quarter portrait"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-10 aspect-[3/4] overflow-hidden">
                <img decoding="async"
                  src={IMG.portraitM}
                  alt="A male client after a lash lift, relaxed in studio light"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow rise text-[oklch(0.32_0.026_60)]/70">
              The only door policy
            </p>
            <h2 className="mega rise mt-6 text-5xl text-[oklch(0.28_0.026_60)] md:text-7xl">
              Beauty, for
              <br />
              <em className="italic">absolutely anyone.</em>
            </h2>
            <div className="rise mt-8 max-w-md bg-[oklch(0.966_0.018_88)]/85 p-6 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Women, men, anyone. The mapping is done to your face — nothing
                else about you matters in the chair.
              </p>
              <p className="hand mt-4 text-lg text-[var(--sage)]">
                come as you are
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— The menu: numbers + names, price only ——— */}
      <section id="menu" className="scroll-mt-20 border-b border-border bg-[var(--sand)]/40">
        <div className="container py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="mega rise text-5xl md:text-7xl">The menu</h2>
            <p className="hand rise text-lg text-muted-foreground md:text-xl">
              opening rates — held for our first 20 clients
            </p>
          </div>
          <ul className="mt-14 divide-y divide-border border-y border-border">
            {SERVICES.map((s, i) => (
              <li key={s.name} className="rise">
                <Link
                  href={`/book?service=${encodeURIComponent(s.name)}`}
                  className="group flex items-center gap-5 py-6 transition-colors sm:gap-8"
                >
                  <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-32">
                    <img decoding="async"
                      src={s.photo}
                      alt={s.photoAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="grid min-w-0 flex-1 gap-1 sm:grid-cols-11 sm:items-baseline sm:gap-2">
                    <span className="font-display hidden text-lg italic text-[oklch(0.62_0.11_75)] sm:col-span-1 sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--sage)] sm:col-span-5 md:text-4xl">
                      {s.name}
                    </h3>
                    <p className="text-xs text-muted-foreground sm:col-span-3 sm:text-sm">
                      {s.descriptor}
                    </p>
                    <p className="text-sm font-medium tracking-wide sm:col-span-2 sm:text-right">
                      {s.price}
                    </p>
                  </div>
                  <span className="btn-arrow hidden text-[var(--sage)] sm:inline-block">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="rise mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/services"
              className="btn-pill-outline text-[var(--sage)] hover:bg-[var(--sage)] hover:text-white"
            >
              See the full menu <span className="btn-arrow">→</span>
            </Link>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Tap any set to book it · Certified &amp; insured · One client at
              a time · HDB home-based, registered
            </p>
          </div>
        </div>
      </section>

      {/* ——— The hand: drawing origin, image-led ——— */}
      <section className="bg-primary text-primary-foreground">
        <div className="container grid items-center gap-12 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-6">
            <div className="rise relative aspect-[3/2] w-full">
              <img decoding="async"
                src={IMG.sketch}
                alt="Chesa's pencil concept art — a detailed misty valley scenery study with process notes"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <img decoding="async"
                src={IMG.drawing}
                alt=""
                loading="lazy"
                className="absolute -bottom-10 -right-6 hidden w-40 rotate-3 border border-[var(--gold)]/40 bg-white shadow-lg md:block"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow rise text-primary-foreground/50">
              The same hand
            </p>
            <h2 className="mega rise mt-6 text-5xl text-primary-foreground md:text-6xl">
              First a pencil.
              <br />
              Now a <em className="italic text-[var(--gold)]">lash.</em>
            </h2>
            <p className="hand rise mt-8 max-w-sm text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              "{VOICE.pencil}"
            </p>
            <Link
              href="/studio"
              className="btn-pill-outline rise mt-10 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Meet Chesa &amp; the studio <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ——— The room + Wubbles cameo ——— */}
      <section className="container py-24 md:py-36">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="rise md:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img decoding="async"
                src={IMG.studioLight}
                alt="The Oriana studio — linen lash bed in warm window light"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <h2 className="mega absolute bottom-6 left-6 max-w-md text-4xl text-white md:bottom-8 md:left-8 md:text-5xl">
                One chair. One hour. Yours.
              </h2>
            </div>
          </div>
          <div className="rise md:col-span-4">
            <div className="relative h-full min-h-[320px] overflow-hidden">
              <img decoding="async"
                src={IMG.wubbles}
                alt="Wubbles the Cavapoo, resident greeter"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="hand absolute bottom-5 left-5 rotate-[-2deg] text-xl leading-snug text-white">
                Wubbles.
                <br />
                <span className="text-sm text-white/85">
                  head of first impressions. banned from the lash room
                </span>
              </p>
            </div>
          </div>
        </div>
        <p className="rise mx-auto mt-12 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
          A private home studio: tea first, then your hour. Most clients fall
          asleep. Wubbles stays in the lounge — or elsewhere, if you ask.{" "}
          {LOCATION.block}, near Woodlands South MRT.
        </p>
      </section>

      {/* ——— Closing CTA ——— */}
      <section className="relative overflow-hidden border-t border-border">
        <img decoding="async"
          src={IMG.macroEyeM}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-[oklch(0.22_0.02_60)]/70" />
        <div className="container relative py-28 text-center md:py-40">
          <h2 className="mega rise mx-auto max-w-3xl text-5xl text-white md:text-7xl">
            Come as you are.
          </h2>
          <p className="hand rise mt-6 text-lg text-white/85 md:text-xl">
            leave a little lighter
          </p>
          <Link
            href="/book"
            className="btn-pill rise mt-10 bg-white text-[oklch(0.24_0.02_60)] hover:bg-[oklch(0.92_0.03_85)]"
          >
            Hold your hour <span className="btn-arrow">→</span>
          </Link>
          <p className="rise mt-5 text-xs text-white/70">
            Three taps on the next page — we reply on WhatsApp within the day.
          </p>
        </div>
      </section>
    </div>
  );
}
