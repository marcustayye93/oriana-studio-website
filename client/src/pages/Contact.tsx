/*
  ORIANA — Hold Your Hour (contact). WhatsApp-first booking, conversation not form.
  Editorial layout, FAQ as quiet accordion-free list.
  Round 3: sage accent for interactive/labels, Petit Formal Script sizing, witty-classy copy.
*/
import { Link } from "wouter";
import { useReveal } from "@/hooks/useReveal";
import { IMG, LOCATION, WA_DEFAULT } from "@/lib/site";

const FAQS = [
  {
    q: "Where exactly is the studio?",
    a: "Block 587, Woodlands — a short walk from Woodlands South MRT, through the garden and past the tennis court. The full unit address is shared on WhatsApp once your appointment is confirmed.",
  },
  {
    q: "How far ahead should I book?",
    a: "A few days for weekdays; about a week for weekends.",
  },
  {
    q: "I've never had extensions. Where do I start?",
    a: "Say that in your message. Most first-timers book First Light; if you're unsure about extensions, The Lift. The consultation settles it.",
  },
  {
    q: "Do you work on men?",
    a: "Yes — absolutely anyone. Men most often book The Lift or a natural First Light.",
  },
  {
    q: "What if I'm allergic or sensitive?",
    a: "Tell us before your hour. Patch tests are available 48 hours ahead; sensitive-eye adhesive is standard stock.",
  },
  {
    q: "Can I request a dog-free visit?",
    a: "Yes — mention it at booking and Wobbles stays elsewhere. The lash room itself is always dog-free.",
  },
  {
    q: "Do you take walk-ins?",
    a: "No — every hour is an appointment. One client at a time is the whole premise.",
  },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* Opening + WhatsApp */}
      <section className="container pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow rise text-muted-foreground">Contact</p>
            <h1 className="mega rise mt-6 text-6xl md:text-8xl">
              Hold your hour
            </h1>
            <p className="rise mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Booking happens on WhatsApp. Write with your name and what you
              have in mind — Chesa replies within the day.
            </p>
            <div className="rise mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="btn-pill bg-primary text-primary-foreground hover:bg-[oklch(0.26_0.024_60)]"
              >
                Hold your hour <span className="btn-arrow">→</span>
              </Link>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-outline text-[var(--sage)] hover:bg-[var(--sage)] hover:text-white"
              >
                Message on WhatsApp <span className="btn-arrow">→</span>
              </a>
            </div>
            <p className="rise mt-6 text-xs tracking-wide text-muted-foreground">
              Or follow the work first:{" "}
              <a
                href="https://instagram.com/oriana.studio.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="link-grow text-[var(--sage)]"
              >
                @oriana.studio.sg
              </a>
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="rise mb-6 aspect-[16/7] w-full overflow-hidden rounded-xl">
              <img decoding="async"
                src={IMG.studioLight}
                alt="The room your hour happens in — linen bed, warm window light"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rise border border-border p-8 md:p-10">
              <p className="eyebrow text-muted-foreground">How it works</p>
              <ol className="mt-6 space-y-6">
                {[
                  {
                    n: "I",
                    d: "Send your name, the service (or 'not sure'), and two or three times that suit you.",
                  },
                  {
                    n: "II",
                    d: "You'll get a confirmed hour, the address, and anything worth knowing beforehand.",
                  },
                  {
                    n: "III",
                    d: "Arrive as you are. Tea, consultation, then your hour.",
                  },
                ].map((s) => (
                  <li key={s.n} className="flex gap-5">
                    <span className="font-display text-lg italic text-[oklch(0.62_0.11_75)]">
                      {s.n}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {s.d}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                <p>By appointment only · Tue–Sat</p>
                <p className="mt-1">{LOCATION.short} · near Woodlands South MRT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-[var(--sand)]/40">
        <div className="container py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow rise text-[var(--sage)]">
                Asked quietly
              </p>
              <h2 className="font-display rise mt-5 text-4xl leading-tight">
                Questions, answered plainly
              </h2>
              <div className="gold-rule rise mt-8" />
            </div>
            <div className="md:col-span-8">
              <dl className="divide-y divide-border border-y border-border">
                {FAQS.map((f) => (
                  <div key={f.q} className="rise py-8">
                    <dt className="font-display text-xl md:text-2xl">{f.q}</dt>
                    <dd className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Final line */}
      <section className="container py-24 text-center md:py-32">
        <p className="hand rise mx-auto max-w-xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
          "your hour is held — see you (and maybe Wobbles) soon"
        </p>
        <Link
          href="/book"
          className="btn-pill rise mt-10 bg-primary text-primary-foreground hover:bg-[oklch(0.26_0.024_60)]"
        >
          Hold your hour <span className="btn-arrow">→</span>
        </Link>
      </section>
    </div>
  );
}
