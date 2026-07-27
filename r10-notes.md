# Round 10 working notes

## Bug fix: blank /book on iPhone in-app browser (DONE)
Root cause: Book.tsx had its own local useReveal adding class `in`, but CSS expects `.rise.in-view` → all .rise content stayed opacity:0 forever on the user's device. Fixes applied:
1. Book.tsx now imports shared `useReveal` from @/hooks/useReveal (adds `in-view`).
2. useReveal.ts: fallback when IntersectionObserver undefined + 1800ms failsafe timeout revealing all .rise.
3. index.css: hide-state now opt-in via `html.js .rise:not(.in-view)`; main.tsx adds `js` class to <html>. No JS → content visible.
Verified mobile 375px: /book and / render fully.

## Image weight audit (TODO)
v4 service PNGs are 1920x1920 4.7–5.5MB each — too heavy for thumbnails on iOS WebViews ("images not loading"). Plan: use compressed webp variants for ALL images in site.ts. Generated images have compressed webp URLs; need to recover/produce them (e.g., ffmpeg/sharp convert local files in /home/ubuntu/webdev-static-assets and re-upload via manus-upload-file --webdev).

## New images to generate (user request)
1. Classic/volume/lift menu photos: keep v4 composition BUT add freckles, small moles, flyaway lashes, slight asymmetry, mild under-eye texture — must not look AI-perfect. Keep v4 infill (user approved: /manus-storage/oriana-v4-service-infill_e6b2bfc4.png).
2. Replace hand-drawn eye image (IMG.sketch = pencil-sketch-eye_7aed8257.png, used on Home "First a pencil. Now a lash." section + maybe Studio) with detailed SCENERY concept art (landscape concept art, pencil/mixed detail, shows Chesa's detail + concept range).

## Where images are referenced
site.ts IMG map + SERVICES[].photo. Home.tsx uses IMG.sketch/drawing section. Check Studio.tsx too.

## v4 asset URLs (current, in site.ts)
- classic: /manus-storage/oriana-v4-service-classic_191aac08.png (replace)
- volume: /manus-storage/oriana-v4-service-volume_641f5d04.png (replace)
- lift: /manus-storage/oriana-v4-service-lift_65f5cb1a.png (replace)
- infill: /manus-storage/oriana-v4-service-infill_e6b2bfc4.png (KEEP)

## R10 progress (updated)
DONE:
- /book bug fixed (shared useReveal + IO fallback + failsafe + html.js opt-in CSS).
- v5 images generating: classic /manus-storage/oriana-v5-service-classic_88d784c7.png, volume /manus-storage/oriana-v5-service-volume_4b5179d4.png, lift /manus-storage/oriana-v5-service-lift_606a5603.png, scenery concept /manus-storage/oriana-v5-scenery-concept_d8c637fe.png (local files in /home/ubuntu/webdev-static-assets/oriana-v5-*.png).
- Compressed ALL referenced images to webp (~40–420KB) via /home/ubuntu/compress-oriana.sh, uploaded; site.ts IMG map fully rewritten to webp URLs + v5 photos. Infill now webp: /manus-storage/oriana-v4-service-infill_219fdd48.webp.
- Home.tsx "same hand" section: scenery concept art is now the big image, drawing photo is the small overlay. Studio.tsx overlay uses sketch (=scenery) with alt+lazy.

TODO:
- Add decoding="async" everywhere; hero images (Home macroEyeF, Services s.photo top?, Layout glyph) keep eager + add fetchpriority high on Home hero.
- Consider compressing v5 pngs to webp after generation completes (same script pattern), swap URLs.
- Verify pages (desktop+375) after images finish (~5min); check scenery art looks right in section.
- Checkpoint, push GitHub (repo marcustayye93/oriana-studio, clone at /tmp/oriana-gh; rsync website/, copy assets, commit push).
- Todo.md R10 items to tick.
## v5 verification (viewed)
- classic: freckles/moles, real skin pores, wispy Korean-natural set — GOOD.
- volume: freckled skin, mole above brow, textured wet-look volume — GOOD.
- scenery concept: pencil kampung valley study with annotations, value scale, thumbnail — exactly "concept art showing detail/process" — GOOD.
- Next: compress v5 pngs (1200px webp q82; scenery 1600px q82), upload, swap URLs in site.ts (IMG.svcClassic/svcVolume/svcLift/sketch + SERVICES photos), then screenshots.
## Screenshot pass 1 (desktop, after webp swap)
- Home: OK — hero, menu thumbs (v5), scenery concept art section all render. Menu row thumbs look good.
- Services: OK — all four service photos render (v5 classic/volume/lift + v4 infill webp).
- Book: FIXED — form renders with service cards + photos (was blank on mobile).
- Aftercare, Contact: OK.
- Studio: PROBLEM — top section images (IMG.studioLight, IMG.stillLife) show as blank space; artist portrait section also appears empty except overlay sketch line. Investigate Studio.tsx image containers (possibly reveal/opacity or aspect wrapper heights) — could be images inside `rise` still hidden in full-page shot, or broken layout.
- Note: Home "Wubbles" image area next to studio-light also blank? (bottom of one-chair section shows text but wubbles panel looked light). Check.
## Screenshot pass 2 (mobile 375px)
- /studio: all images now render (studio light, still life, artist, Wubbles). Earlier blanks were lazy-load timing in full-page capture, not broken URLs (curl -L → 200 image/webp).
- / (Home mobile): renders end-to-end; hero, menu, pencil section, one-chair, Wubbles crop, closing CTA all fine.
- /book?service=First+Light at 375px: FIXED — full form renders with preselected First Light, service photos load. The user's blank-page bug is resolved.
- Remaining: tick todo.md R10, checkpoint, GitHub push, deliver.
