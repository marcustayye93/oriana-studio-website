/*
  ORIANA — The Studio & Chesa, round 3. Visual-first, humanized:
  her pencil origin in her own words, handwritten annotations, Wubbles by name.
  Round 3: Petit Formal Script .hand (smaller sizes), sage accent, witty/classy copy.
*/
import { Link } from "wouter";
import { useReveal } from "@/hooks/useReveal";
import { IMG, LOCATION, VOICE } from "@/lib/site";

export default function Studio() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* Opening — mega type + annotation */}
      <section className="container pb-14 pt-36 md:pb-20 md:pt-44">
        <p className="eyebrow rise text-muted-foreground">The studio</p>
        <h1 className="mega rise mt-6 text-6xl md:text-8xl">
          A quiet room.
          <br />A <em className="italic text-[oklch(0.62_0.11_75)]">warm</em>{" "}
          welcome.
        </h1>
        <p className="hand rise mt-8 text-xl text-muted-foreground md:text-2xl">
          "{VOICE.room}"
        </p>
      </section>

      {/* Imagery band — staggered */}
      <section className="container pb-24 md:pb-32">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="rise md:col-span-7">
            <div className="aspect-[4/3] w-full">
              <img decoding="async"
                src={IMG.studioLight}
                alt="The lash room — linen bed, warm wood, window light"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="rise md:col-span-5 md:mt-24">
            <div className="aspect-[3/4] w-full">
              <img decoding="async"
                src={IMG.stillLife}
                alt="Studio still life — tools, linen, and window light"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="hand mt-3 text-lg text-[var(--sage)]">
              tea first, always
            </p>
          </div>
        </div>
      </section>

      {/* Chesa — her words, the pencil thread */}
      <section className="bg-primary text-primary-foreground">
        <div className="container grid items-center gap-12 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-5">
            <div className="rise relative aspect-[3/4] w-full max-w-[440px]">
              <img decoding="async"
                src={IMG.artist}
                alt="Chesa, the artist behind Oriana, in the studio"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <img decoding="async"
                src={IMG.sketch}
                alt="A corner of Chesa's pencil scenery concept art"
                loading="lazy"
                className="absolute -bottom-8 -right-6 hidden w-36 rotate-3 border border-[var(--gold)]/40 bg-white shadow-lg md:block"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow rise text-primary-foreground/50">
              Hi, I'm Chesa
            </p>
            <h2 className="mega rise mt-5 text-5xl text-primary-foreground md:text-6xl">
              The same hand,
              <br />a <em className="italic text-[var(--gold)]">finer line.</em>
            </h2>
            <div className="rise mt-8 space-y-6 text-sm leading-relaxed text-primary-foreground/75 md:text-base">
              <p>
                I've loved beauty since I was young — drawing, colour, the
                mechanical pencil moving across the flow of paper. Lashes feel
                like the same art to me, just on a smaller canvas that blinks.
              </p>
              <p>
                I did over a hundred practice sets before opening this door,
                because the look I believe in is the hardest one to fake:{" "}
                <em className="font-display italic">
                  not too much, not too little, just right.
                </em>{" "}
                Even without makeup, what lashes do to me is light — and that's
                what I want to hand you in the mirror.
              </p>
              <p>
                One chair on purpose. When you're the only person on the
                calendar, nothing gets hurried — and the difference shows at
                the lash line.
              </p>
            </div>
            <p className="rise mt-8 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              Certified &amp; insured · Korean natural-lash trained · Singapore
            </p>
            <p className="hand rise mt-6 text-lg text-primary-foreground/60">
              today, the lash line. the house will grow — quietly
            </p>
          </div>
        </div>
      </section>

      {/* Wubbles — full feature */}
      <section className="container py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="order-2 md:order-1 md:col-span-5">
            <p className="eyebrow rise text-muted-foreground">
              Resident greeter
            </p>
            <h2 className="mega rise mt-5 text-5xl md:text-6xl">
              Meet <em className="italic text-[oklch(0.62_0.11_75)]">Wubbles.</em>
            </h2>
            <p className="rise mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Cavapoo, head of first impressions. He greets in the lounge if
              you like dogs — say the word at booking and he's elsewhere.
            </p>
            <p className="hand rise mt-6 text-lg text-[var(--sage)] md:text-xl">
              the lash room stays dog-free, always
            </p>
            <Link
              href="/book"
              className="btn-pill-outline rise mt-8 text-[var(--sage)] hover:bg-[var(--sage)] hover:text-white"
            >
              Book a visit — Wubbles included <span className="btn-arrow">→</span>
            </Link>
          </div>
          <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
            <div className="rise aspect-[4/5] w-full max-w-[520px] md:ml-auto">
              <img decoding="async"
                src={IMG.wubbles}
                alt="Wubbles the Cavapoo sitting in warm window light"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practical notes — trimmed */}
      <section className="border-t border-border bg-[var(--sand)]/40">
        <div className="container py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                t: "A registered home studio",
                d: "Certified and insured under Singapore's home-based business scheme. The address is shared privately once your hour is held.",
              },
              {
                t: "What to expect",
                d: "Tea, a consultation, about two quiet hours. Most clients fall asleep; we consider it feedback. You wake to the reveal.",
              },
              {
                t: "Getting here",
                d: LOCATION.directions,
              },
            ].map((c) => (
              <div key={c.t} className="rise border-t border-border pt-8">
                <h3 className="font-display text-2xl">{c.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
          <div className="rise mt-16 text-center">
            <Link
              href="/book"
              className="btn-pill bg-primary text-primary-foreground hover:bg-[oklch(0.26_0.024_60)]"
            >
              Hold your hour <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
