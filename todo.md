# Round 4 — Moodboard identity evolution (Oriana Studio)

(GitHub upload completed; repo: marcustayye93/oriana-studio, public)

## Moodboard synthesis (locked with Chesa)
- Grainy gradients: peach/pink/gold/powder-blue WITH GREEN woven in
- Real skin, real imperfections: freckles, texture, pores — celebrated, macro
- Bright, alive color against softness
- Thin elegant serif typography (Her-glow style); VERY CLEAR wordmark
- Inclusive: men AND women — "beauty for absolutely anyone"
- Descriptor: "Oriana Studio" (expansion-ready: brows, skin, hair, spa later)

## 1. Guidelines update
- [x] 01-brand-guidelines: new palette (gradient-grain system + green), thin serif type, Oriana Studio lockup, beauty-house architecture
- [x] 06-photography-standards: imperfection-forward, macro lash/eye, inclusive casting
- [x] DESIGN.md: new tokens

## 2. Imagery generation
- [x] Macro eye/lash close-ups w/ freckles (female + male)
- [x] Grainy gradient textures (with green)
- [x] Male grooming/lash subject
- [x] Portraits (female + male) + studio light scene
- [x] Assets served from /manus-storage (no manual upload needed)

### v2 asset URLs (use exactly as-is)
- Macro eye female (16:9 hero): /manus-storage/oriana-v2-macro-eye-female_04cb66c1.png
- Macro eye male (16:9): /manus-storage/oriana-v2-macro-eye-male_b1dc91a5.png
- Gradient hero grain (16:9): /manus-storage/oriana-v2-gradient-hero_18f41c14.png
- Gradient soft wash (3:4): /manus-storage/oriana-v2-gradient-soft_c613524d.png
- Hands craft macro (4:3): /manus-storage/oriana-v2-hands-craft_cf9b3dce.png
- Portrait female (3:4): /manus-storage/oriana-v2-portrait-female_f7b0fe36.png
- Portrait male (3:4): /manus-storage/oriana-v2-portrait-male_2872847a.png
- Studio light (16:9): /manus-storage/oriana-v2-studio-light_6d0c9657.png

## 3. Site redesign
- [x] index.css: new tokens (gradient-grain surfaces, green accent evolution)
- [x] index.html: thin serif font (high-contrast Didone or similar)
- [x] Wordmark: clear ORIANA Studio lockup in header/footer
- [x] All 5 pages: gradient-grain surfaces, macro imagery, inclusive copy
- [x] "For absolutely anyone" messaging thread
- [x] Screenshots + checkpoint

## 4. Ship
- [x] Push updated package to GitHub
- [x] Deliver to Chesa

# Round 5 — Copy tightening + header fix

- [x] Header: white logo/nav over hero at top of Home, switch to solid bar style once scrolling
- [x] Home menu: each set states what it is immediately — short, concise, pointed
- [x] Trim fluffy copy on Home (hero sub, sections, CTA)
- [x] Trim fluffy copy on Services page descriptions
- [x] Quick pass on Studio/Aftercare/Contact for overwrought lines
- [x] Screenshot verify
- [x] Checkpoint + push to GitHub + deliver (version 8845606f)

# Round 6 — Menu photos, clear rounded buttons, page imagery, location

- [x] Generate 4 small service result photos (classic, volume, lift, infill) per v2 photography standards
- [x] Menu (Home + Services): small result photo per service so people know what to expect
- [x] ALL buttons rounded (pill) + clearly navigational (arrow affordance): hero CTA, HOLD YOUR HOUR, BOOK THIS, Read Keep the Light, footer/header CTAs
- [x] Studio / Contact / Aftercare: add small concise images without lengthening scroll
- [x] Location update everywhere: Woodlands South MRT / Block 587 (done)
- [x] Screenshot verify, checkpoint (824795b2), push to GitHub, deliver

# Round 7 — Hero CTA, S$60 pricing, authentic lash photos

- [x] Regenerate 4 service photos: authentic, human, imperfect (v3 assets generating; URLs wired in)
- [x] Hero: "Explore our services" pill button smooth-scrolls to #menu section
- [x] Pricing restructure: First Light S$60, The Lift S$68, Full Gold S$98, The Return from S$45 — "opening rate" notes
- [x] Sweep price mentions: hero sub "Sets from S$60", menu header "opening rates — from S$60", Services intro updated
- [x] Swap v3 photo URLs into site.ts (svcClassic/svcVolume/svcLift/svcInfill + SERVICES.photo)
- [x] Screenshot verify Round 7 changes (photos may still be generating)

# Round 8 — OVERNIGHT UI/UX CONVERSION AUDIT (goal: bookings + lead generation)

## Phase 0 — Business WhatsApp wiring (user request)
- [x] Set WHATSAPP_NUMBER to 6580252620 in site.ts
- [x] waServiceLink helper added (service + price in the first message for the WhatsApp AI)
- [x] All CTAs route through waLink → real number

## Phase 0b — Booking-request page (user request; no external calendar at 1–2 clients/week)
- [x] /book page built: service cards w/ photos → day chips (Tue–Sat) → time windows → name + note
- [x] Composes structured "BOOKING REQUEST" WhatsApp message (AI-parseable)
- [x] Route added; header + mobile menu "Hold your hour" → /book; Services "Book this" → /book?service=X
- [x] One-screen, verified on desktop screenshot

## Phase A — Audit (as UI/UX professional)
- [x] Screenshot every page, desktop 1280px AND mobile 375px
- [x] Heuristic review: booking funnel, CTA visibility/hierarchy, friction points
- [x] Trust & credibility assessment (new studio, no reviews allowed — use policy/guarantee/artist signals)
- [x] Document pros/cons in audit file (audit-round8.md)

## Phase B — Conversion funnel fixes
- [x] Sticky/persistent mobile booking CTA (thumb reach)
- [x] Pre-filled WhatsApp messages per service (deep-link with service name)
- [x] Reduce path-to-booking: price → book in one tap everywhere
- [x] Clear "what happens after you message" expectation setting

## Phase C — Trust, clarity, mobile UX fixes
- [x] Trust signals: certification/training, hygiene, patch-test policy, opening-rate honesty
- [x] Contrast/legibility pass (marquee, hand-script sizes on mobile)
- [x] Tap target sizes, spacing rhythm on mobile
- [x] Performance: image loading attributes, layout shift

## Phase D — Ship
- [x] Full screenshot verification (all pages, both viewports)
- [x] Checkpoint (93ad6121), push to GitHub
- [x] Deliver audit report (pros/cons/changes) to user

# Round 9 — Editorial lash photography (menu photos)

- [x] R9: Research trending lash styles (Korean natural, wet-look, hybrid, manga) + how top studios photograph them
- [x] R9: Save findings to lash-photo-research.md
- [x] R9: Generate 4 stylized editorial photos (First Light, Full Gold, The Lift, The Return) — photogenic, unique, lash style + fullness unmistakably clear
- [x] R9: Swap v4 photo URLs into site.ts, verify Home/Services/Book
- [x] R9: Checkpoint, push to GitHub, deliver

# Round 10 — Authentic photos, scenery concept art, mobile /book bug, site weight

- [x] R10: Diagnose blank /book?service=First+Light page on mobile — root cause: reveal animation left content at opacity:0 when IntersectionObserver misfired in iOS in-app browsers. Fixed: shared useReveal + IO fallback + 1.2s failsafe + CSS hidden-state now opt-in via html.js class (content visible even if JS fails)
- [x] R10: Recheck entire code for broken/heavy images — all URLs curl-verified 200; decoding="async" everywhere; hero preloaded with fetchpriority=high
- [x] R10: Regenerate 3 menu photos (classic, volume, lift) with freckles, moles, real skin texture (v5); keep infill (v4)
- [x] R10: Replace hand-drawn eye with detailed scenery concept art (kampung valley pencil study w/ annotations) on Home + Studio
- [x] R10: Optimize site weight — ALL images re-encoded to WebP: page payloads dropped from ~5MB/image to 40–455KB/image (~97% smaller)
- [x] R10: Verify all pages desktop + mobile (375px), incl. /book with service param — renders correctly
- [x] R10: Checkpoint, push to GitHub, deliver

# Round 11 — Grok audit evaluation + implementation

- [x] R11: Evaluate Grok report → grok-audit-evaluation.md (accept/modify/reject with reasons)
- [x] R11: Generate hybrid/wispy service photo (v5 authentic-skin style)
- [x] R11: site.ts — add Soft Hybrid S$78 SKU; fix infill pricing (S$45 ≤3wk / S$55 ≤4wk); Removal S$20 footnote
- [x] R11: Copy — "opening rates · first 20 clients" on Home menu + Services intro
- [x] R11: Book.tsx — policy block under form (patch test, 24h reschedule, certified & insured)
- [x] R11: Trust strip near menu on Home + Services; hygiene line on Studio
- [x] R11: Alt-text sweep (verified — all meaningful images carry descriptive alts from R10)
- [x] R11: Verify desktop + mobile, checkpoint (118b0891), push to GitHub, deliver evaluation + changes

# Round 12 — Aftercare page elevation

- [ ] R12: Read Aftercare.tsx — map current steps, images, layout
- [ ] R12: Generate classier aftercare hero image (mood-board tone: warm gold light, editorial, real skin)
- [ ] R12: Generate Keepsake Kit product photo properly featuring the products (branded cleanser bottle + soft lash brush)
- [ ] R12: Add elegant thin-stroke icons to every aftercare step (lucide-react, sage/gold accent)
- [ ] R12: Make the aftercare image larger in the layout
- [ ] R12: Compress new images to WebP, upload, swap URLs (site.ts + Services keepsake section)
- [ ] R12: Verify desktop + mobile, checkpoint, push both GitHub repos, deliver
