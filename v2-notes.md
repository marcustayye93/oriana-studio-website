# Round 4 (v2.0) redesign working notes — Oriana Studio

## New v2 asset URLs (use exactly as-is in code)
- Macro eye female (16:9 hero): /manus-storage/oriana-v2-macro-eye-female_04cb66c1.png
- Macro eye male (16:9): /manus-storage/oriana-v2-macro-eye-male_b1dc91a5.png
- Gradient hero grain (16:9): /manus-storage/oriana-v2-gradient-hero_18f41c14.png
- Gradient soft wash (3:4): /manus-storage/oriana-v2-gradient-soft_c613524d.png
- Hands craft macro (4:3): /manus-storage/oriana-v2-hands-craft_cf9b3dce.png
- Portrait female (3:4): /manus-storage/oriana-v2-portrait-female_f7b0fe36.png
- Portrait male (3:4): /manus-storage/oriana-v2-portrait-male_2872847a.png
- Studio light (16:9): /manus-storage/oriana-v2-studio-light_6d0c9657.png

## Old round-3 assets still valid (in lib/site.ts IMG)
glyph, wubbles, sketch, drawing, aftercare, artist, stillLife — keep. hero/eyes/macro/studio/craft/reveal → replace with v2 where appropriate.

## v2 design decisions (from guidelines 2.0 / DESIGN.md)
- Ground: Cream Hour #FAF4EA (brighter). Ink: Umber #3B2F26. Gold #C9963F, Eucalyptus #7E9C7B, Coral #E8785A (max 1/surface).
- Gradient-grain stops: peach #F6C9A8, pink #EFB7B0, gold #EBCE8F, green #B7C9AC, blue #C3D3DC; always grained (SVG turbulence overlay 4-8%), always green in blend; never behind body copy or in wordmark.
- Type: Cormorant Garamond LIGHT 300 display (was 500/600); wordmark in Italiana wide-tracked; Inter body; Petit Formal Script only for Chesa's words.
- Wordmark lockup: ORIANA / STUDIO (retire "Private Lash Studio" descriptor). Very clear.
- Inclusive copy thread: "beauty, for absolutely anyone" — men and women; footer keeps HDB registered + insured.
- Beauty-house: lash line today; Brow/Skin/Hair/Spa reserved — a quiet "the house will grow" hint OK but no fake services.
- Photography: macro freckle-forward hero, male + female imagery on every key page.
- Keep: zero radius, hairline borders, WhatsApp CTA "Hold your hour", prices in sans, no emoji, no urgency.

## File map (client/src)
- index.html: fonts line 18 — add Italiana + Cormorant 300 weight; update title/meta to "Oriana Studio".
- index.css: tokens at :root (background 0.955 0.017 85 → brighter cream ~0.965 0.019 90); add gradient-grain utilities (.grain-gradient with SVG noise), wordmark → Italiana, .mega/.font-display weight 300/400.
- lib/site.ts: IMG map (add v2 keys), VOICE bank, SERVICES array (4 services with anatomy), NAV_LINKS. Add ANYONE copy const.
- components/Layout.tsx: Wordmark component (lines 6-21, descriptor "Private Lash Studio" → "STUDIO"), Header, Footer (footer menu lists 4 services, visit info, HDB line).
- pages/Home.tsx: hero uses IMG.eyes full-bleed w/ dark gradient; marquee; promise section (IMG.macro); menu list; pencil section (IMG.drawing + sketch); room + Wubbles; closing CTA (IMG.reveal).
- pages/Services.tsx: menu long-form list w/ anatomy accordion; Keepsake Kit section (IMG.aftercare); quiet policies.
- pages/Studio.tsx: opener; imagery band (studio + stillLife); Chesa section (artist + sketch, dark umber bg, "Korean natural-lash trained" line kept in craft story); Wubbles feature; practical notes 3-col.
- pages/Contact.tsx: booking + how-it-works card; FAQ list (6 items); final line. WhatsApp number placeholder 6580000000.
- pages/Aftercare.tsx: opener; morning/evening rites cards; first-24h + avoid list; Return window CTA w/ IMG.aftercare.
- pages/NotFound.tsx: off-brand (slate/blue shadcn) — restyle to brand.

## Redesign plan per file
1. index.html: fonts + meta ("Oriana Studio — a private beauty studio in Singapore").
2. index.css: v2 tokens + .grain utility + thinner display weights + gradient surface classes.
3. site.ts: add IMG v2 entries; add nav unchanged; tweak footer copy consts if needed.
4. Layout.tsx: new lockup ORIANA·STUDIO; footer tagline "Beauty, for absolutely anyone."; house-lines hint.
5. Home.tsx: gradient-grain hero with macro female eye; inclusive section w/ male portrait ("for absolutely anyone"); keep marquee/menu/pencil/Wubbles; swap imagery to v2.
6. Services.tsx: restyle accents (green labels), gradient wash band behind Keepsake; copy tweaks inclusive.
7. Studio.tsx: swap studio image to v2 studio-light; keep Chesa/Wubbles; add house-growth line.
8. Contact.tsx: minor restyle, add FAQ "Do you lash men?" → yes, absolutely anyone.
9. Aftercare.tsx: restyle accents + gradient wash.
10. NotFound.tsx: brand restyle.

## Ship
- GitHub repo: marcustayye93/oriana-studio (public), guidelines live in /home/ubuntu/lash-brand/oriana-guidelines (copied into repo package on push).
- Client name: Chesa. User agreed: proceed with all Round 4 points, lean "Oriana Studio" for expansion.

## Status after screenshot pass (Jul 26)
All 5 pages verified visually. v2 implemented: Italiana ORIANA/STUDIO lockup in header+footer, macro freckled-eye hero, gradient-grain "Beauty for absolutely anyone" panel on Home (works well), grad-veil bands on Services (Keepsake) + Aftercare (first-24h), Studio uses v2 studioLight image + house-growth line, Contact has "Do you work on men?" FAQ, NotFound restyled, meta/title updated to Oriana Studio.
Remaining: (1) save checkpoint, (2) push updated code + v2.0 guidelines to GitHub repo marcustayye93/oriana-studio, (3) deliver.
Note: header still shows old glyph image (IMG.glyph) beside wordmark — acceptable, gold eye-line glyph kept per guidelines.

## Round 5 (Jul 26, later) — copy tightening + header fix
User feedback: too much fluffy copy; home menu must state what each set IS immediately; header logo/menu invisible at top of Home — wanted white at top, solid bar on scroll.
Done: Layout.tsx header now white-over-hero ONLY on Home at scroll top (wordmark light, nav white, glyph inverted, white CTA); solid bar on all other pages and once scrolled. site.ts SERVICES descriptors/bodies rewritten pointed ("Classic extensions — one per natural lash", etc). Home hero sub now factual; promise/inclusive/menu/room copy trimmed. Services intro + policies trimmed. Studio Wubbles trimmed. Contact FAQ + how-it-works trimmed. Aftercare trimmed.
Push flow: clone repo to /tmp/oriana-push, copy website via tar (exclude .git, node_modules, .manus-logs, v2-notes.md, todo.md, ideas.md, BUILD-STATUS.md, REDESIGN-NOTES.md, .gitkeep, .project-config.json), commit+push.

## Round 6 (Jul 26) — menu photos, rounded clear buttons, page imagery, location
User asks: (1) menu shows small pictures per service; (2) ALL buttons rounded + clearly navigational (arrow); (3) other pages get small concise images, no long scroll; (4) location = Woodlands South MRT, short walk through the garden, past the tennis court, up to Block 587.
New service photo URLs (use exactly as-is, generating in bg):
- classic: /manus-storage/oriana-v2-service-classic_16012626.png
- volume: /manus-storage/oriana-v2-service-volume_29717c64.png
- lift: /manus-storage/oriana-v2-service-lift_f2e9ddee.png
- infill: /manus-storage/oriana-v2-service-infill_1a8f150d.png
Plan:
- index.css: add `.btn-pill` shared CTA class (rounded-full pill, arrow via ::after "→" translate on hover) OR just apply rounded-full + arrow spans inline; keep zero-radius brand for cards but pill buttons per user demand.
- site.ts: add img key per service (photo field in SERVICES), swap IMG additions, LOCATION strings: short "Woodlands South, Singapore" + long "Woodlands South MRT — a short walk through the garden, past the tennis court, up to Block 587."
- Home menu list (Home.tsx lines ~162-191): add small thumbnail per row (h-20 w-28 object-cover rounded); hero CTA + closing CTA → pill with arrow; "Full menu" link → pill outline.
- Services.tsx: add photo per service article (aspect 4:3 col); BOOK THIS → pill button; Read Keep the Light → pill; hero sub location unchanged.
- Layout.tsx: header CTA + mobile CTA pill; footer Visit: "Woodlands South, Singapore · Block 587"; Home hero sub "in Woodlands".
- Studio.tsx: Getting here card → new directions text; CTA pill; Wubbles book link → pill outline.
- Contact.tsx: FAQ "Where exactly" → new directions; info card location line; CTAs pill; small image beside FAQ or in opening right column (use IMG.studioLight small) — keep concise.
- Aftercare.tsx: add one small image (IMG.macro or aftercare) in morning/evening area, CTA pill.
- Then screenshots, checkpoint, push (flow above), deliver.
- Then screenshots, checkpoint, push (flow above), deliver.

### Round 6 implementation status
- index.css: added .btn-pill / .btn-pill-outline (rounded-full, arrow slides on hover).
- site.ts: photo/photoAlt per service, LOCATION const (Woodlands South / Block 587 / garden-tennis-court directions).
- Home: menu rows now thumbnail + name + descriptor + price + arrow; hero says "in Woodlands"; all CTAs pill; room caption mentions Block 587 near Woodlands South MRT.
- Services: 4:3 photo per service article, Book this pill, Read Keep the Light pill-outline.
- Layout: header + mobile CTAs pill; footer Visit = Woodlands South + Block 587 line.
- Studio: Getting here = LOCATION.directions; Wubbles link + final CTA pill.
- Contact: FAQ location answer updated; studioLight image above How-it-works card; CTAs pill; info card location line updated.
- Aftercare: wide slim macro image above rites; Return CTA pill. NotFound: pill.
- No Serangoon references remain. Next: screenshots (/, /services, /studio, /contact, /aftercare), checkpoint, GitHub push, deliver.

### Round 8 Phase 4 progress (fixes applied so far)
- Home.tsx: menu rows → /book?service= (whole row tappable), hero outline CTA → Link /book, closing CTA → Link /book (+ "three taps" microcopy), trust line under menu ("Tap any set to book it · Certified & insured · One client at a time"), loading="lazy" on all below-fold imgs. WA_DEFAULT import removed from Home.
- Layout.tsx: MobileBookBar sticky bottom bar (shows after 560px scroll, hidden on /book, md:hidden, safe-area padding), added to Layout root; "Book" item in mobile menu; footer Instagram → https://instagram.com/oriana.studio.sg.
- DONE (C,D,E,G): Studio CTAs → Link /book + lazy imgs; Aftercare Return → /book?service=The%20Return + lazy; Contact primary → /book + secondary WhatsApp outline + real IG URL + lazy; Book.tsx 2-line clamp + trust note; Services lazy imgs + trust line under intro.
- REMAINING: F. index.html OG tags + LocalBusiness JSON-LD (+65 8025 2620, Woodlands South, Tue–Sat 10–20); typecheck; final screenshots desktop+mobile; checkpoint; GitHub push (/tmp/oriana-push flow); deliver report from audit-round8.md.

## ROUND 8 STATE (overnight UI/UX audit — user asleep, full permission to run long)

### Done so far (Round 7 + Round 8 phases 1–2):
- WHATSAPP_NUMBER = 6580252620 (real business number) wired in client/src/lib/site.ts; waLink/waServiceLink helpers
- Pricing ladder: First Light S$60 / The Lift S$68 / Full Gold S$98 / The Return from S$45 — "opening rates" noted on Home menu + Services intro; hero says sets from S$60
- Hero: "Explore our services" pill CTA smooth-scrolls to #menu on Home; second outline CTA
- v3 authentic service photos live: /manus-storage/oriana-v3-service-classic_88c866d1.png, oriana-v3-service-volume_c2a89060.png, oriana-v3-service-lift_9f33f050.png, oriana-v3-service-infill_edbee0eb.png (check exact names in site.ts — DO NOT guess, read site.ts)
- /book page (pages/Book.tsx): service cards w/ photos, day chips Tue–Sat, time windows (Morning 10–1 / Afternoon 1–5 / Evening 5–8), name + optional note, composes structured "BOOKING REQUEST" wa.me message for the WhatsApp AI; ?service= preselect supported
- App.tsx has /book route; header + mobile menu "Hold your hour" → /book; Services "Book this" → /book?service=NAME
- /book verified via desktop screenshot — renders correctly

### Audit backlog (Phase 3→4 fixes):
1. Mobile 375x812 screenshots of all 6 pages (/, /services, /studio, /aftercare, /contact, /book) → write audit-round8.md with pros/cons
2. Home menu rows → deep-link each to /book?service= (currently only /services)
3. Unify remaining direct waLink CTAs (Studio "Book a visit", Aftercare "Book your return", Home closing, Contact) → route to /book (keep ONE direct WhatsApp link in footer + Contact "Message on WhatsApp")
4. Sticky mobile bottom booking bar (Layout) — thumb-friendly, appears after scroll, hidden on /book
5. Trust strip on Home (certified & insured, one-client-at-a-time, opening rates)
6. SEO: meta description update, OG tags, LocalBusiness JSON-LD in index.html
7. img loading="lazy" + alt audit
8. Marquee band contrast check on mobile
9. Final: screenshots desktop+mobile, checkpoint, GitHub push (clone marcustayye93/oriana-studio to /tmp/oriana-push, tar-copy website excluding .git/node_modules/.manus-logs/notes files, commit push), deliver audit-round8.md + checkpoint
