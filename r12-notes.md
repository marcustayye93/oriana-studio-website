# Round 12 notes — Aftercare page elevation

User asks: (1) elegant icons for each aftercare step (many steps, need visual guidance), (2) make the aftercare image BIGGER + classier (revisit mood board), (3) Keepsake Kit image must properly feature the PRODUCTS (cleanser bottle + soft brush), not "a letter and a tweezer" (current IMG.aftercare shows the card).

## Current Aftercare.tsx map (read, in context)
- Opening: "Keep the Light" mega, centered.
- Band image: IMG.macro at aspect-[16/6] max-w-4xl — the one to make bigger/classier.
- Morning rite card (3 steps: rinse water only / brush spoolie / oils below orbital bone) + Evening rite card dark (3 steps: foam cleanse / pat dry lint-free / sleep back-side, silk pillowcase).
- "First 24 hours" (dry, no steam/yoga/swim) + "Always avoid" list (oil cleansers+waterproof mascara / rubbing-picking / lash curlers / cotton pads).
- "The Return" section uses IMG.aftercare (card photo) — this is where kit product photo goes, or Services keepsake section.
- Services.tsx Keepsake section also uses IMG.aftercare ("Keep the Light aftercare card on ivory linen") — swap BOTH to new kit product photo.

## Image plan (generate 2)
1. oriana-v6-aftercare-hero.png (16:9): classier mood-board editorial — macro closed eye w/ clean lash set being brushed by gold spoolie OR serene profile in warm gold window light, linen; real skin texture w/ freckles; thin-serif brand tone. Use full-bleed or aspect-[16/7] max-w-6xl.
2. oriana-v6-keepsake-kit.png (4:3): product still life — amber/cream lash foam cleanser pump bottle with minimal ORIANA label, soft lash brush/spoolie w/ gold handle, folded "Keep the Light" card partially visible, ivory linen, warm window light, editorial styling.

## Icon plan (lucide-react, already a dep via shadcn)
Thin stroke (strokeWidth 1.25–1.5), sage for morning/avoid, gold on dark evening card. Mapping:
- Morning: Droplets (rinse), Brush/Wand (spoolie brush), CircleSlash/FlaskConical (oils below orbital) → use Droplets, Paintbrush, ShieldAlert? Prefer: Droplets, Brush, Sparkles.
- Evening: Waves/Bubbles (foam cleanse) → Bubbles n/a, use CloudFog? pick: Droplet, Feather (pat dry), Moon (sleep).
- First 24h: Clock. Avoid list: FlaskRound (oil), Hand (no touch), Minus? use Ban-style with elegant thin icons.
Layout: each <li> becomes flex gap-3 with icon in a small circle border (border-[var(--sage)]/30) — elegant, not bulky.

## Workflow reminders
- WebP pipeline: PIL thumbnail 1600px q82 → /home/ubuntu/webdev-static-assets/webp/ → `manus-upload-file --webdev` → swap URL in site.ts (IMG.aftercare, maybe new IMG.kit + IMG.aftercareHero).
- IMG map lives in client/src/lib/site.ts (IMG.macro, IMG.aftercare used on Aftercare; IMG.aftercare also on Services keepsake).
- Push BOTH repos after checkpoint: /tmp/oriana-new (marcustayye93/oriana-studio-website) and /tmp/oriana-gh (marcustayye93/oriana-studio); rsync from /home/ubuntu/oriana-studio excluding .git/node_modules/.manus-logs/assets.
- v5 photo prompt style ref: lash-photo-research.md + r10-notes.md (candid macro, warm gold light, freckles/moles, matte real skin).
## Verification (v6 images) — BOTH APPROVED
- Hero (2560x1440): profile, gold spoolie mid-brush on wispy set, freckles + mole visible, linen curtain light, Kinfolk tone. Good.
- Kit (2176x1632): amber pump bottle labelled "ORIANA / lash foam cleanser" (spelling correct), gold spoolie on ceramic tray, folded cloth, "Keep the Light — LASH AFTERCARE — ORIANA" card. Products are clearly the heroes. Good.
- Next: compress both PNG→WebP (PIL 1600px q82) → webp dir → manus-upload-file --webdev → swap the two PNG URLs (Aftercare.tsx hero, site.ts IMG.aftercare) to webp URLs. Then screenshots /aftercare + /services desktop & 375.
## Final verification
- /aftercare desktop full-page: bigger hero (editorial spoolie profile) renders; morning/evening rite cards with icon steps; "Let the bond set" + "Always avoid" icon lists; kit photo lazy-loads (blank only in desktop full-page capture timing, renders fine at mobile). Mobile 375: everything renders incl. kit photo.
- /services desktop: keepsake section now shows the v6 product still life. All 5 menu photos load.
- Done: checkpoint + push both repos + deliver.
