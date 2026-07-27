# Oriana — Website Design Spec (ideas.md)

This project implements an already-approved brand identity. The ground-truth spec lives in
`/home/ubuntu/lash-brand/oriana-guidelines/DESIGN.md` (tokens) and Doc 01 (brand guidelines).
No alternative approaches are explored: the brand strategy was approved by the client (Chesa)
across three naming/positioning rounds. The chosen approach is recorded here as the contract.

## Chosen Approach: "The Golden Hour" — Golden-Hour Editorial

- **Design Movement**: Aesop-style literary editorial, warmed. Print-book restraint; quiet luxury.
- **Core Principles**:
  1. Noticed, not announced — nothing shouts; no urgency, no discounts, no emoji.
  2. One gold accent per section — Honey Gold is seasoning, never the dish.
  3. The page scrolls like a well-set book — generous negative space (≥40%), editorial asymmetry.
  4. Photography carries warmth; type carries authority.
- **Colors**: Ivory Hour #F6F0E6 (ground ~60%), Umber #3B2F26 (ink ~30%), Honey Gold #C9963F (≤5%, never body text), Blush Sand #E4CDBA (support). No pure white/black.
- **Layout Paradigm**: editorial asymmetry — offset heroes, two-column staggered sections, single-column ~65ch prose; max width 1100–1200px; big spacing jumps (48/96/160px).
- **Signature Elements**: the gold sun-point glyph (rising sun/eye), thin gold rule lines, letterspaced serif eyebrow labels, hairline umber borders (15–20% opacity).
- **Typography**: Cormorant Garamond (display, sentence case; all-caps letterspaced only for wordmark + eyebrows) / Inter (body, UI, prices — prices always sans).
- **Shapes**: zero border-radius everywhere (printed page, not app). Exception: circular glyph badge.
- **Depth**: flat; depth via color-plane shifts (ivory → sand → umber) and photography. No drop shadows.
- **Interaction/Animation**: slow fade-and-rise entrances (staggered 30–80ms), underline-grow link hovers, button scale(0.97) active; everything <300ms except section reveals (~500ms ease-out); respect prefers-reduced-motion.
- **Brand Essence**: A private, one-client-at-a-time lash studio built like the golden hour — for women who want lashes people assume are theirs.
- **Brand Voice**: editorial register on the site (no "hi love"); world-words: the hour, first light, held, the Return. Tagline: *Noticed, not announced.*
- **Wordmark**: ORIANA letterspaced Cormorant caps over "PRIVATE LASH STUDIO" sans eyebrow, gold rule between.
- **Signature Brand Color**: Honey Gold #C9963F.

## Pages

1. `/` Home — hero (golden-hour portrait), promise, the world intro, services preview, the ritual, studio, journal note, CTA band.
2. `/services` The Menu — First Light, Full Gold, The Lift, The Return, Keepsake Kit; prices plain; policies note.
3. `/studio` The Studio & About — the room, the artist (Chesa), the craft story (Korean-technique lineage lives HERE only), the dog policy, trust line (HDB-registered, insured).
4. `/aftercare` Keep the Light — the rite, morning/evening care, what to avoid, Return window explainer.
5. `/contact` Hold Your Hour — WhatsApp-first booking flow, how it works, location (area only), FAQ.

All CTAs route to WhatsApp (placeholder number, clearly marked for Chesa to replace).
"Korean" never appears in nav/headlines/lockup; it lives in the studio craft paragraph + meta tags.
