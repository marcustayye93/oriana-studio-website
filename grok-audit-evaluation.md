# Evaluation of Grok's Pre-Launch Audit (Round 11)

Verdict per recommendation. Accept = implement now. Modify = implement with changes. Defer = valid but not now. Reject = disagree.

## Pricing & Menu
| # | Grok recommendation | Verdict | Reasoning |
|---|---|---|---|
| P1 | Keep opening rates; step to S$78/S$118 after 20–30 clients | Accept (no site change) | Sensible; site already says "opening rates". Future price step is a business decision, not a code change. |
| P2 | Add named "Soft Hybrid / Wispy" SKU at S$78–88 | Accept — add at S$78 | Real demand signal: wispy/hybrid/Korean-natural is what clients search; our own R9 research confirmed this. S$78 sits cleanly between First Light S$60 and Full Gold S$98. Needs user's photo later; v5 pipeline can generate one now. |
| P3 | Fixed removal price + explicit infill window | Accept — Removal S$20; infill "S$45 within 3 weeks, S$55 within 4" | Kills the ambiguous "from S$45". Removal as a small named line item builds honesty and captures a service competitors monetize. |
| P4 | First-20 intro offer (S$10 off or S$55 First Light/Lift) | Modify — frame existing rates as the intro | Current S$60 is ALREADY below market per Grok's own table; stacking another discount erodes the quiet-luxury positioning. Instead: label opening rates explicitly as "first 20 clients" to add urgency without cutting further. |
| P5 | No deposit yet; monitor no-shows | Accept (no site change) | Matches current setup. |
| P6 | Loyalty/referral after 40 clients | Defer | Agree with Grok's own timing: not at launch. |
| P7 | Keep four-service menu tight | Superseded by P2 | Adding one hybrid SKU (5 services) is worth the trade; still tight. |

## UI/UX
| # | Finding | Verdict | Reasoning |
|---|---|---|---|
| U1 | Infill pricing clarity (Major) | Accept | Same as P3. |
| U2 | Policy block near /book form (Major) | Accept | 3 short lines under form: patch test, reschedule notice, certified & insured. Cheap, high-trust. |
| U3 | Hybrid missing from menu (Major) | Accept | Same as P2. |
| U4 | Test "Book your set" vs "Hold your hour" | Reject | Static site, no A/B infra; "Hold your hour" is a signature brand asset used everywhere. Diluting it for a hypothetical lift isn't worth it. |
| U5 | Contact keeps raw WhatsApp path | Accept as-is | Grok agrees: keep both. |
| U6 | Descriptive alt on meaningful photos | Accept | Quick sweep. |
| U7 | Hand-font contrast | No action | Grok: none urgent. |
| U8 | Trust signals near price points (rank 5) | Accept | Add "Certified & insured · one client at a time" line by menu headers on Home/Services. |
| U9 | Hygiene sentence on Studio page (rank 9) | Accept | One concrete line in "What to expect". |
| U10 | Confirm Instagram URL live (rank 12) | User action | Flag to user — can't verify account contents from here. |
| U11 | Gallery page not required (rank 15) | Agree — no action | |

## Implementation list (Round 11)
1. site.ts: add Soft Hybrid service (S$78, 2.25 hrs, wispy/Korean-natural descriptor) + photo (generate v5-style hybrid image).
2. site.ts: The Return → "S$45 within 3 weeks · S$55 within 4"; add Removal S$20 as menu footnote (not a full card).
3. Copy: "opening rates — first 20 clients" phrasing on Home menu header + Services intro.
4. Book.tsx: policy block under form (patch test 48h, 24h reschedule, certified & insured, sensitive-eye adhesive).
5. Home + Services: one-line trust strip near menu ("Certified & insured · one client at a time · HDB-registered").
6. Studio.tsx: concrete hygiene sentence in What to expect.
7. Alt-text sweep for meaningful images.
