# Round 8 — Conversion-focused UI/UX audit (overnight exercise)

Goal: bookings + lead generation via WhatsApp (+65 8025 2620, AI-assisted).
Method: heuristic review, full-page screenshots desktop (1280) + mobile (375), funnel walkthrough as a first-time visitor.

## Pros (working well — keep)
- Distinct, cohesive brand: Italiana lockup, thin serif, gradient-grain, warm palette. Not template-like.
- Clear menu with photos, plain prices, durations; anatomy accordions answer objections in place.
- /book page: 3-tap request → structured WhatsApp message; no account, no deposit — very low friction.
- Pointed copy after Round 5; location directions concrete (Block 587, garden, tennis court).
- Trust: certified & insured line, HDB registered, one-client-at-a-time, Wubbles personality.
- Header white-over-hero fix works; solid on scroll and inner pages.

## Cons (fix this round)
### Funnel
1. Home menu rows are not clickable — no path from a service row to booking. (HIGH)
2. Mixed booking destinations: some CTAs → raw WhatsApp, some → /book. Inconsistent next step. Unify: primary CTAs → /book; keep direct WhatsApp in footer + Contact. (HIGH)
3. No persistent mobile booking CTA; after the hero, the only fixed path is scrolling back up. Sticky bottom bar needed on mobile, hidden on /book. (HIGH)
4. /book not in main nav; "Hold your hour" pill goes there but nav lacks a "Book" item on mobile menu list. (MED)
5. Aftercare "Book your return" and Studio CTAs bypass /book — lose structured data for the WhatsApp AI. (MED)
### Trust & clarity
6. Certified/insured only in footer + Studio; not visible near prices where the decision happens. Add quiet trust line under menu + on /book. (MED)
7. Prices: "from S$45" infill reads cheapest first in grid order on /book — fine, but Home menu shows S$60 opener correctly. Keep ladder narrative "opening rates". (LOW)
8. No social proof allowed (no fake reviews — policy). Use factual signals only: training, insured, one-client-at-a-time. (INFO)
### Mobile UX
9. Marquee band on Home: small low-contrast strip, reads as decoration; acceptable, but check it doesn't push CLS. (LOW)
10. Book page service card descriptors truncate ("one per n..."); allow 2-line clamp. (MED)
11. Tap targets: day/time chips OK (44px+); menu rows need whole-row tap area once linked. (MED)
### Technical/SEO
12. Images missing loading="lazy" below the fold; hero should stay eager. (MED)
13. index.html lacks OG tags + LocalBusiness JSON-LD (name, area, phone, hours) — helps share cards & local search. (MED)
14. Meta description exists but review wording for "lash extensions Woodlands Singapore" intent. (LOW)
15. Footer Instagram links to instagram.com root placeholder — point to real handle URL or leave visibly placeholder. (LOW)

## Fix plan (Phase 4)
A. site.ts: ensure helpers; Home menu rows → Link /book?service=; whole-row tappable with arrow affordance.
B. Layout.tsx: sticky mobile bottom bar (Book on WhatsApp → /book) after 600px scroll, hidden on /book; add /book to mobile menu.
C. Unify CTAs: Studio, Aftercare, Home closing, Contact hero → /book (Contact keeps direct WhatsApp too).
D. Trust line under Home menu + /book footer note (certified & insured · one client at a time · opening rates).
E. Book.tsx: 2-line clamp descriptors; preselect scroll; ensure chips wrap nicely.
F. index.html: OG tags + JSON-LD LocalBusiness (phone +65 8025 2620, Woodlands South, Tue–Sat).
G. lazy-loading + alt pass on below-fold imgs.
H. Instagram href placeholder note kept (no fake handle) — leave as is with @oriana.studio.sg text but real URL https://instagram.com/oriana.studio.sg.
I. Final screenshots, checkpoint, GitHub push, report.
