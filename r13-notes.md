# Round 13 — Next highest-priority usability item from Grok audit

## Status sweep of Grok's top-15 (post R11/R12)
- Ranks 1,2,3,5,6,9: DONE in Round 11. Rank 4: modified (first-20 framing). Ranks 7,10,12,13,14,15: no site change / user actions / deferred.
- Rank 8: "Ensure every service card on /book shows full descriptor" — /book cards show name + descriptor + price/duration, but NOT the note or anatomy summary. Partially done.
- Rank 11: CTA wording test — rejected in R11 (no A/B infra, brand asset).
- Residual friction from §1: "no visible refund/redo ... near booking" — policies added R11 but no redo/guarantee line.
- U6 alt-text sweep: done R11.

## Selection: Rank 8 — /book usability upgrade (highest remaining usability item)
Grok's remaining usability gap is the /book decision moment. Implement as one coherent usability pass on /book:
1. Service cards: add the one-line `body`/note detail so users can decide on /book without bouncing back to /services (the audit's "full descriptor" point).
2. Add "How it works" 3-step strip (Send your request → We confirm within hours → Your hour is held) — sets expectations for WhatsApp-based booking; was also a suggested next step accepted by trajectory.
3. Selected-service state made clearer (check + price recap near CTA).

## Files: client/src/pages/Book.tsx (+ site.ts if constants needed)

## Implementation (done)
- Cards: aria-pressed, check badge top-right, body+note expand smoothly only for the selected card (keeps grid compact for 5 services).
- Left column: 3-step "How it works" (Send/MessageCircle/CalendarCheck lucide icons, sage ring).
- Footer: dynamic guidance ("Start by picking a service" → "Now pick the days" → …) and a full recap (service · price · duration; days · window · name) when ready.
- Verified desktop full page + preselect state + 375px mobile. tsc clean.
