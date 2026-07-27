# ROUND 3 STATE (Chesa's five notes) — read this first after compaction

New iPhone-realism image URLs (already swapped into site.ts IMG):
- eyes (hero portrait): /manus-storage/iphone-hero-portrait_4ac055a8.jpg
- macro: /manus-storage/iphone-lash-macro_9fe71271.jpg
- studio: /manus-storage/iphone-studio-room_79d998e6.jpg
- wubbles: /manus-storage/iphone-wubbles_178a0362.jpg
- drawing: /manus-storage/iphone-hands-drawing_7dc84a76.jpg
- stillLife: /manus-storage/iphone-still-life_ad604089.jpg
(old hero /manus-storage/hero-golden-hour_09e1276e.jpg still on Home hero — consider swapping to eyes)

Decisions made:
- Cursive: Caveat REPLACED by "Petit Formal Script" (index.html + .hand in index.css). Renders smaller than Caveat — bump .hand text sizes where used.
- Accent: --sage: oklch(0.52 0.055 155), token --color-sage. Use for interactive labels/eyebrows/hovers, one sage block per page to cut the brown.
- site.ts: SERVICES each have `anatomy` {applied, materials, mapping, lasts, forWho}; witty copy pass done.
- Services.tsx: sage anatomy accordion ("What's actually in it") added; witty pass done.

Remaining: witty+sage pass on Home, Studio, Contact, Aftercare, Layout; .hand size check; screenshots; checkpoint; deliver.

# Round-2 redesign working notes (visual-first + humanized voice)

## New generated image URLs (verified via upload, use exactly as-is)
- Wubbles portrait (4:5): /manus-storage/wubbles-portrait_d559e555.jpg
- Pencil sketch eye (4:3 png): /manus-storage/pencil-sketch-eye_7aed8257.png
- Lash macro closeup (3:2): /manus-storage/lash-macro-closeup_6f8cd4ce.jpg
- Hands drawing (3:2): /manus-storage/hands-drawing_c177ad98.jpg
- Hero portrait eyes (2:3): /manus-storage/hero-portrait-eyes_4d2dc101.jpg
- Studio still life (3:2): /manus-storage/studio-still-life_edf6c816.jpg

## Existing images (site.ts IMG)
hero: hero-golden-hour_09e1276e.jpg · studio: studio-room_8538d2e1.jpg · craft: craft-hands_1cfeb779.jpg · reveal: reveal-mirror_b6de2d9d.jpg · artist: artist-portrait_3d1f7853.jpg · aftercare: aftercare-card_e1f57fec.jpg · glyph: glyph-crop_1d5a5a7a.png

## Voice bank (Chesa interview — use verbatim/lightly shaped)
- "Even without makeup, what lashes do to me is light."
- "Not too much, not too little, just right."
- "It feels natural."
- "I love to control the mechanical pencil across the flow of paper." (childhood art origin)
- Self: small, cuddly, soft, quietly confident, learning her way.
- Appointment: quiet, calm, cheery, not too much, always warmth.
- Wubbles = resident Cavapoo (Studio page portrait + caption; booking note line).

## Redesign moves (from awwwards-notes.md)
1. Oversized display type; italic accent words; type-as-image hero moments.
2. Handwriting annotation layer — add script font (Caveat) for margin notes in Chesa's voice.
3. Pencil-sketch motif ties to art origin.
4. Full-bleed image sections, 5–8 word statements, cut copy 50–60%.
5. Marquee strip of her phrases.
6. Wubbles by name everywhere the dog appears.

## Files to edit
- index.css: add Caveat font utilities (.hand), marquee keyframes, huge type utility.
- index.html: add Caveat font link.
- site.ts: new IMG2 entries, humanized copy strings, Wubbles.
- Layout.tsx: footer humanize (Wubbles line), keep header.
- Home.tsx: full visual-first rebuild.
- Services.tsx: cut copy, add sketch motif + annotations.
- Studio.tsx: Chesa story in her words (pencil origin), Wubbles portrait block.
- Contact.tsx: trim FAQ answers, Wubbles by name, fewer words.
- Aftercare.tsx: lighter tone pass (lower priority).

## Status
- [x] Voice guideline 02 rewritten v2.0
- [x] Assets generated (6)
- [x] CSS/tokens: Caveat font added to index.html; .hand/.mega/.marquee-track/.kenburns utilities in index.css
- [x] site.ts: IMG has wubbles/sketch/macro/drawing/eyes/stillLife + VOICE bank
- [x] Home.tsx rebuilt (full-bleed hero w/ IMG.eyes, marquee, macro+just-right, menu list, pencil section, studio+Wubbles cameo grid, reveal CTA)
- [x] Studio.tsx rebuilt (mega opening, imagery band, Chesa story w/ pencil, Wubbles feature, trimmed practicals)
- [x] Services.tsx: mega heading, hand annotation, trimmed Keepsake copy
- [x] Contact.tsx: Wubbles named in FAQ, hand sign-off, trimmed intro
- [x] Aftercare.tsx: mega heading + hand annotation
- [x] Layout.tsx footer: Wubbles line + hand tagline
- [x] Screenshots verified all 5 pages: hero full-bleed w/ mega type reads well, marquee working,
      Wubbles portrait strong on Home + Studio, hand font (Caveat) rendering, no layout breaks.
- [ ] Checkpoint + deliver with updated 02-voice-and-messaging.md
