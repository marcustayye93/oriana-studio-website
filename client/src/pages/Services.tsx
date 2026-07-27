/*
  ORIANA — The Menu. Editorial price list: serif world-names, sans descriptors & prices,
  hairline borders, gold for metallic details, sage accent for interactive/labels, zero radius.
  Round 3: each service carries an "anatomy" breakdown (what's applied, materials, mapping, lasts, for who).
*/
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/useReveal";
import { Link } from "wouter";
import { IMG, REMOVAL_NOTE, SERVICES } from "@/lib/site";

const ANATOMY_LABELS: Record<string, string> = {
  applied: "What goes on",
  materials: "What it's made of",
  mapping: "How it's mapped",
  lasts: "How long it lasts",
  forWho: "Who it suits",
};

export default function Services() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* Page opening */}
      <section className="container pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow rise text-muted-foreground">The menu</p>
            <h1 className="mega rise mt-6 text-6xl md:text-8xl">
              The menu
            </h1>
            <p className="hand rise mt-6 text-2xl text-muted-foreground md:text-3xl">
              opening rates — held for our first 20 clients
            </p>
            <p className="rise mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Extensions, hybrid, volume, a lift, and the infill — from S$45,
              at opening rates while we're new. Undecided? Say so in your
              message — the consultation settles it.
            </p>
            <p className="rise mt-4 text-xs tracking-wide text-muted-foreground/80">
              Certified &amp; insured · one client at a time · HDB home-based,
              registered · by appointment
            </p>
          </div>
          <div className="hidden items-end justify-end md:col-span-5 md:flex">
            <div className="gold-rule rise w-24" />
          </div>
        </div>
      </section>

      {/* The services, long-form */}
      <section className="container pb-24 md:pb-36">
        <div className="divide-y divide-border border-y border-border">
          {SERVICES.map((s, i) => (
            <article
              key={s.name}
              className="rise grid gap-6 py-12 md:grid-cols-12 md:py-16"
            >
              <div className="md:col-span-3">
                <span className="font-display text-lg italic text-[oklch(0.62_0.11_75)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 aspect-[4/3] w-full max-w-[280px] overflow-hidden rounded-xl">
                  <img decoding="async"
                    src={s.photo}
                    alt={s.photoAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="font-display text-3xl md:text-4xl">{s.name}</h2>
                <p className="eyebrow mt-3 text-muted-foreground">
                  {s.descriptor}
                </p>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.body}
                </p>
                <p className="mt-4 text-xs tracking-wide text-muted-foreground/80">
                  {s.note}
                </p>
                <Accordion type="single" collapsible className="mt-6">
                  <AccordionItem value="anatomy" className="border-b-0">
                    <AccordionTrigger className="py-2 text-xs uppercase tracking-[0.16em] text-[var(--sage)] hover:no-underline">
                      What's actually in it
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <dl className="space-y-4">
                        {Object.entries(s.anatomy).map(([key, value]) => (
                          <div key={key}>
                            <dt className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[var(--sage)]">
                              {ANATOMY_LABELS[key]}
                            </dt>
                            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex flex-row flex-wrap items-center gap-6 md:col-span-2 md:flex-col md:items-end md:gap-2 md:text-right">
                <p className="text-base font-medium tracking-wide">{s.price}</p>
                <p className="text-xs text-muted-foreground">{s.duration}</p>
                <Link
                  href={`/book?service=${encodeURIComponent(s.name)}`}
                  className="btn-pill mt-0 bg-primary text-primary-foreground hover:bg-[oklch(0.26_0.024_60)] md:mt-4"
                >
                  Book this <span className="btn-arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="rise mt-8 text-xs leading-relaxed tracking-wide text-muted-foreground/80">
          {REMOVAL_NOTE}
        </p>
      </section>

      {/* Keepsake kit + policies */}
      <section className="border-t border-border bg-[var(--sand)]/40">
        <div className="container grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <div className="rise aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-xl">
              <img decoding="async"
                src={IMG.aftercare}
                alt="The Keepsake Kit — Oriana lash foam cleanser, gold spoolie brush, lint-free cloth and the Keep the Light card"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow rise text-muted-foreground">
              The Keepsake Kit
            </p>
            <h2 className="mega rise mt-5 text-4xl md:text-5xl">
              What you take home
            </h2>
            <p className="rise mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Every first set includes the Keep the Light aftercare card. The
              Keepsake Kit — lash cleanser and soft brush — is S$38.
            </p>
            <div className="rise mt-10 border-t border-border pt-8">
              <h3 className="eyebrow text-muted-foreground">Quiet policies</h3>
              <ul className="mt-5 max-w-md space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  24 hours' notice to reschedule, please. No deposit needed.
                </li>
                <li>
                  Infills are S$45 within three weeks of your last set, S$55
                  within four; after that, a new set works better.
                </li>
                <li>
                  Sensitive-eye adhesive is the house standard, and a free
                  patch test is available 48 hours ahead. Tools are single-use
                  or hospital-grade sterilised between clients.
                </li>
                <li>
                  Arrive with clean lashes if you can — if not, the cleanse is
                  part of your hour.
                </li>
              </ul>
            </div>
            <Link
              href="/aftercare"
              className="btn-pill-outline rise mt-8 text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              Read Keep the Light <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
