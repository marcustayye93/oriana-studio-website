# Prompt for Grok — Oriana Studio Audit

Copy everything below the line and paste it into Grok.

---

You are acting as two experts in one: (A) a beauty-industry market analyst who knows the Singapore home-based lash studio scene, and (B) a senior UI/UX auditor specializing in conversion for small service businesses. I need a thorough, evidence-based audit of my upcoming private lash studio, **Oriana Studio**, before launch.

## Context

- **Business:** Oriana Studio — a private, one-client-at-a-time, home-based lash studio in **Woodlands South, Singapore** (near Woodlands South MRT, Block 587). HDB home-based business, certified and insured lash artist, bookings via WhatsApp (no deposit, by appointment, Tue–Sat).
- **Positioning:** quiet, natural-first luxury; "beauty for absolutely anyone" (women and men); opening rates while the studio builds its first client base (1–2 clients/week initially).
- **Current menu and opening prices:**
  | Service | What it is | Duration | Price |
  |---|---|---|---|
  | First Light | Classic extensions — one per natural lash | 2 hrs | S$60 |
  | Full Gold | Volume — handmade fans, 3–5 per lash | 2.5 hrs | S$98 |
  | The Lift | Lash lift & tint — no extensions | 1 hr | S$68 |
  | The Return | Infill — refresh an existing set | 1.5 hrs | from S$45 |
- **Full source code of the website (public repo):** https://github.com/marcustayye93/oriana-studio-website — you have access to my GitHub, so read the actual code. Key paths: `client/src/pages/` (Home, Services, Studio, Aftercare, Contact, Book), `client/src/lib/site.ts` (all copy, pricing, service data, image URLs), `client/src/components/Layout.tsx` (header/footer/nav), `client/src/index.css` (design tokens). Supporting docs in the repo root: `todo.md` (build history), `audit-round8.md` (a previous internal conversion audit — critique it too), `lash-photo-research.md`.
- The site is a static React SPA. The booking flow is: any CTA → `/book` → pick service, days, time window, name → generates a pre-filled WhatsApp message to the studio.

## Part 1 — Market & Pricing Audit (Singapore, Woodlands focus)

1. Identify 8–12 comparable **home-based lash studios in Singapore**, prioritizing **Woodlands / Sembawang / Admiralty / Yishun (the North)**, then other heartland areas. Use real, verifiable studios (Instagram, Carousell, Google Maps, Tiktok, booking platforms like Salonkee/Beauty Undercover listings). For each: name/handle, location, price for classic full set, volume full set, lash lift, and infill, plus any first-timer promo.
2. Build a comparison table of their prices vs Oriana's opening rates. Flag where Oriana is cheaper, at par, or more expensive, and by how much (S$ and %).
3. Assess the **service menu itself**: are there gaps competitors monetize that Oriana lacks (hybrid sets, wispy/Korean natural sets as named options, lash removal, brow services, touch-up guarantee windows, loyalty/referral schemes, first-timer bundles)? Which are worth adding at launch vs later?
4. Evaluate the **pricing architecture**: is S$60 classic / S$98 volume / S$68 lift / S$45+ infill coherent for a new no-review studio in Woodlands? Comment on price anchoring, the infill "from" pricing, absence of deposits (no-show risk), and whether an intro promo or bundle would accelerate the first 20 clients. Recommend specific numbers, not vague advice.

## Part 2 — UI/UX & Cogency Audit of the Website

Audit the actual code and content in the repo (do not invent pages that don't exist).

1. **Ease of use:** walk the primary job-to-be-done — "a Woodlands resident wants lashes done this week" — from landing to sent WhatsApp message. Count taps, flag friction, dead ends, ambiguity. Assess mobile ergonomics (this audience is ~90% mobile).
2. **Cogency:** does the site hang together as one argument — who it's for, what it costs, why trust a new home studio, what to do next? Flag any copy that is vague, overwrought, or missing (e.g., artist credentials specificity, hygiene protocol, patch-test policy, exact location clarity, refund/redo policy).
3. **Information architecture:** are Home / The Menu / The Studio / Aftercare / Contact / Book the right pages? Anything that should merge, split, or be added (FAQ? Gallery? Policies?).
4. **Trust for a zero-review studio:** evaluate how the site builds credibility WITHOUT fabricated testimonials (never suggest fake reviews — that's a hard constraint). What legitimate trust signals are missing?
5. **Conversion details:** CTA hierarchy and wording, the /book form's field order and defaults, WhatsApp handoff copy, price visibility, sticky mobile CTA behavior.
6. **Accessibility & performance quick pass:** contrast of the script/hand fonts, tap target sizes, image alt text, anything in the code that looks like a performance or SEO liability (meta tags, titles, Open Graph, semantic HTML).

## Output format (strict)

Produce a single Markdown report titled **"Oriana Studio Pre-Launch Audit"** with:

1. **Executive summary** — max 10 bullet points, the highest-impact findings only.
2. **Competitor pricing table** — with source links for every studio cited.
3. **Pricing & menu recommendations** — numbered list; each item states the recommendation, the reasoning, and a confidence level (High/Medium/Low).
4. **UI/UX findings** — numbered list grouped by severity (Critical / Major / Minor); each item states: the issue, where it is (file or page), why it matters, and a concrete fix.
5. **Prioritized action plan** — a table of the top 15 recommendations ranked by (impact × ease), each tagged [Pricing], [Menu], [Copy], [UX], [Trust], or [Tech].

Rules: cite sources for every market claim; say "could not verify" instead of guessing; never recommend fake reviews or testimonials; keep the total report under ~3,000 words so it stays actionable. I will hand this report to another engineer to evaluate and implement, so make every recommendation specific enough to act on without asking you follow-up questions.
