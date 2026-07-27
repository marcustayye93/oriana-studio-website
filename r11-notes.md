# Round 11 notes — Grok audit implementation

Evaluation written to grok-audit-evaluation.md. Accepted: hybrid SKU, infill pricing fix (S$45 ≤3wk / S$55 ≤4wk), removal S$20, first-20 framing (instead of extra discount), /book policy block, trust strips, Studio hygiene line, alt sweep. Rejected: CTA A/B (U4), extra intro discount (P4 as-is).

## Hybrid image
- Generating: /manus-storage/oriana-v5-service-hybrid_e144d8d8.png (local /home/ubuntu/webdev-static-assets/oriana-v5-service-hybrid.png). AFTER generation: compress to webp 1200px q82 (see /home/ubuntu/compress-oriana.sh pattern), upload via `manus-upload-file --webdev`, swap URL in site.ts (IMG.svcHybrid + Soft Hybrid photo).

## Done so far
- site.ts: Soft Hybrid SKU (S$78, 2.25 hrs, 2nd position), infill = S$45 note "within 3 wks · S$55 within 4", OPENING_NOTE, TRUST_LINE, POLICIES[3], REMOVAL_NOTE consts.
- Services.tsx: first-20 hand line, removal footnote under menu list, quiet policies updated (no deposit, infill windows, patch test + sterilisation).
- Book.tsx: POLICIES block under form.
- Home.tsx: menu hand line → first-20; trust strip near menu prices.

## Remaining
- DONE Studio hygiene line, hybrid webp swap (/manus-storage/oriana-v5-service-hybrid_5fc0bbc6.webp), tsc OK.
- Screenshots verified desktop (/,/services,/book,/studio) + mobile 375 (/services,/book): hybrid card renders, 5-card Book grid orphan looks fine, policy blocks visible.
- Alt attributes already descriptive on all meaningful images (checked during R10 sweep).
- Left: checkpoint, push both GitHub repos, deliver with grok-audit-evaluation.md attached.
