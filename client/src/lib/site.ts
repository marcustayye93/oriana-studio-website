/* ORIANA STUDIO — shared site constants. v2.0 gradient-grain identity: quiet, literary, inclusive. */

// Business WhatsApp — bookings are handled here (WhatsApp AI assisted).
export const WHATSAPP_NUMBER = "6580252620";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Hello Oriana — I'd like to hold an hour. My name is ",
);

/* Per-service booking links — structured so the WhatsApp AI can parse
   service, price, and intent from the first message. */
export const waServiceLink = (serviceName: string, price: string) =>
  waLink(
    `Hello Oriana — I'd like to book ${serviceName} (${price}). My name is `,
  );

/* All images use compressed WebP variants (~100–400KB each) so pages stay
   light and load reliably on mobile / in-app browsers. Round 10. */
export const IMG = {
  hero: "/manus-storage/hero-golden-hour_cba9cbc1.webp",
  studio: "/manus-storage/iphone-studio-room_9b11fe2d.webp",
  craft: "/manus-storage/craft-hands_ce6292b0.webp",
  reveal: "/manus-storage/reveal-mirror_c0dcaab5.webp",
  artist: "/manus-storage/artist-portrait_64e1b0db.webp",
  aftercare: "/manus-storage/oriana-v6-keepsake-kit_01359d9a.webp",
  glyph: "/manus-storage/glyph-crop_7df0bbb4.webp",
  // iPhone-realism assets (compressed)
  wubbles: "/manus-storage/iphone-wubbles_eb76cb88.webp",
  // Round-10: pencil eye replaced by detailed scenery concept art
  sketch: "/manus-storage/oriana-v5-scenery-concept_6c0dd486.webp",
  macro: "/manus-storage/iphone-lash-macro_c4758816.webp",
  drawing: "/manus-storage/iphone-hands-drawing_f0eb67e9.webp",
  eyes: "/manus-storage/iphone-hero-portrait_f7ffd2c5.webp",
  stillLife: "/manus-storage/iphone-still-life_7d46f431.webp",
  // v2.0 assets — imperfection-forward, inclusive, gradient-grain (compressed)
  macroEyeF: "/manus-storage/oriana-v2-macro-eye-female_9e9d0de2.webp",
  macroEyeM: "/manus-storage/oriana-v2-macro-eye-male_5f07ba0f.webp",
  gradHero: "/manus-storage/oriana-v2-gradient-hero_aa982823.webp",
  gradSoft: "/manus-storage/oriana-v2-gradient-soft_dce64fa6.webp",
  handsCraft: "/manus-storage/oriana-v2-hands-craft_f6901955.webp",
  portraitF: "/manus-storage/oriana-v2-portrait-female_814e377e.webp",
  portraitM: "/manus-storage/oriana-v2-portrait-male_ca6c61e3.webp",
  studioLight: "/manus-storage/oriana-v2-studio-light_e78a92cf.webp",
  // Round-10 v5 service photos — editorial but authentically imperfect skin
  svcClassic: "/manus-storage/oriana-v5-service-classic_c64e3012.webp",
  svcVolume: "/manus-storage/oriana-v5-service-volume_e33b303b.webp",
  svcLift: "/manus-storage/oriana-v5-service-lift_ce8c6fa6.webp",
  svcInfill: "/manus-storage/oriana-v4-service-infill_219fdd48.webp",
  // Round-11: Soft Hybrid — wispy Korean-natural hybrid set (Grok audit P2)
  svcHybrid: "/manus-storage/oriana-v5-service-hybrid_5fc0bbc6.webp",
};

/* Location — Woodlands South. Short form for footers/cards, long form for directions. */
export const LOCATION = {
  short: "Woodlands South, Singapore",
  block: "Block 587, Woodlands",
  directions:
    "From Woodlands South MRT it's a short walk — through the garden, past the tennis court, and up to Block 587.",
} as const;

/* Chesa's own words — the voice bank. Use verbatim or lightly shaped. */
export const VOICE = {
  light: "Even without makeup, what lashes do to me is light.",
  justRight: "Not too much, not too little. Just right.",
  natural: "It feels natural.",
  pencil:
    "I've loved beauty since I was young — drawing, colour, the mechanical pencil across the flow of paper. Lashes are the same hand, a finer line.",
  room: "Quiet, calm, a little cheery. Never too much.",
  wubbles:
    "Wobbles, resident Cavapoo. Professional greeter, terrible receptionist.",
  anyone: "Beauty, for absolutely anyone.",
  house:
    "Today, the lash line. The house will grow — quietly, one craft at a time.",
} as const;

/* Opening pricing — new-studio rates. Entry set starts at S$60; the ladder steps up from there. */
/* Round 11 (Grok audit): opening rates are explicitly for the first 20 clients;
   infill pricing made explicit (S$45 ≤3wk / S$55 ≤4wk); removal priced at S$20. */
export const OPENING_NOTE =
  "Opening rates — held for the studio's first 20 clients." as const;

export const TRUST_LINE =
  "Certified & insured · one client at a time · HDB home-based, registered" as const;

export const POLICIES = [
  "Sensitive-eye adhesive is the house standard; a free patch test is available 48 hours ahead.",
  "Life happens — 24 hours' notice to reschedule is all we ask. No deposit needed.",
  "Certified & insured lash artist. Tools are single-use or hospital-grade sterilised between clients.",
] as const;

export const REMOVAL_NOTE =
  "Gentle removal of an existing set — S$20, or complimentary before any new Oriana set." as const;

export const SERVICES = [
  {
    name: "First Light",
    descriptor: "Classic extensions — one per natural lash",
    body: "Classic extensions, one per natural lash. A natural set mapped to your eye shape — fuller lash line, no makeup look. Best first set.",
    duration: "2 hrs",
    price: "S$60",
    note: "Opening rate — includes consultation & mapping",
    photo: "/manus-storage/oriana-v5-service-classic_c64e3012.webp",
    photoAlt: "Result of First Light — a natural classic lash set, eyes open",
    anatomy: {
      applied:
        "Single classic extensions — one extension per natural lash, never clusters. Around 80–120 per eye depending on what you grew yourself.",
      materials:
        "Featherweight PBT silk fibres, 0.10–0.12mm diameter, matte black. Light enough that your natural lash never notices the passenger.",
      mapping:
        "Custom-mapped in consultation: C or CC curl, 8–12mm lengths graduated to follow your eye shape — longer where your eye opens, shorter where it rests.",
      lasts:
        "3–4 weeks before an infill, moving with your natural lash cycle.",
      forWho:
        "First-timers, minimalists, and anyone whose office has opinions.",
    },
  },
  {
    name: "Soft Hybrid",
    descriptor: "Hybrid — wispy, Korean-natural texture",
    body: "The in-between set: classic lashes and small handmade fans mixed for a wispy, Korean-natural texture. Fuller than classic, softer than volume — the most-asked-for look right now.",
    duration: "2.25 hrs",
    price: "S$78",
    note: "Opening rate — the studio's signature texture",
    photo: "/manus-storage/oriana-v5-service-hybrid_5fc0bbc6.webp",
    photoAlt:
      "Result of Soft Hybrid — a wispy Korean-natural lash set mixing classic lashes and soft fans",
    anatomy: {
      applied:
        "A deliberate mix — single classic extensions alternated with small 2–3D handmade fans, building soft spikes and airy criss-cross texture along the lash line.",
      materials:
        "0.07mm fans and 0.10mm classics in matte black PBT — the contrast between the two is what makes the wisp read.",
      mapping:
        "Spike-mapped: slightly longer closed points spaced between shorter fluff, following your eye shape. Never spidery — the gaps are the design.",
      lasts:
        "3–4 weeks before an infill, same rhythm as a classic set.",
      forWho:
        "Anyone who screenshots 'wispy' or 'Korean natural' sets — this is that, mapped to your eye.",
    },
  },
  {
    name: "Full Gold",
    descriptor: "Volume — handmade fans, 3–5 per lash",
    body: "Volume extensions: handmade fans of 3–5 ultra-fine lashes per natural lash. Noticeably fuller and darker, still lightweight. For sparse lashes or more impact.",
    duration: "2.5 hrs",
    price: "S$98",
    note: "Opening rate — recommended after a First Light consultation",
    photo: "/manus-storage/oriana-v5-service-volume_e33b303b.webp",
    photoAlt: "Result of Full Gold — a fuller, darker volume lash set",
    anatomy: {
      applied:
        "Hand-crafted volume fans — 3 to 5 ultra-fine extensions fanned per natural lash, made on the spot, not pre-glued from a packet.",
      materials:
        "0.05–0.07mm PBT fibres — so fine that a 4-fan weighs about the same as one classic extension. Matte finish; shine is for cars.",
      mapping:
        "Density-mapped: fuller through the outer two-thirds, softer at the inner corner. C/CC curls, 8–13mm graduated lengths.",
      lasts:
        "4 weeks before an infill; fans hold their shape as they grow out.",
      forWho:
        "Sparse natural lashes, event seasons, and people done pretending mascara does this.",
    },
  },
  {
    name: "The Lift",
    descriptor: "Lash lift & tint — no extensions",
    body: "Lash lift and tint. Your own lashes curled from the root and tinted dark — no extensions, no adhesive. Lasts 6–8 weeks, zero upkeep.",
    duration: "1 hr",
    price: "S$68",
    note: "Opening rate — best first visit if you're unsure about extensions",
    photo: "/manus-storage/oriana-v5-service-lift_ce8c6fa6.webp",
    photoAlt: "Result of The Lift — natural lashes curled and tinted, no extensions",
    anatomy: {
      applied:
        "A keratin lift — your natural lashes set over a silicone shield at the root — followed by a tint several shades deeper than your own.",
      materials:
        "Low-tension keratin lifting lotion and a gentle oxidative tint. No extensions, no adhesive, no fibre in sight.",
      mapping:
        "Shield size chosen to your lash length: smaller for a dramatic curl, larger for a soft bend. Decided together, not by default.",
      lasts:
        "6–8 weeks, then your lashes quietly return to their old opinions.",
      forWho:
        "Extension-hesitant, swimmers, and owners of already-long lashes that point stubbornly down.",
    },
  },
  {
    name: "The Return",
    descriptor: "Infill — refresh an existing set",
    body: "The infill. Outgrown extensions replaced, your set restored to day one. S$45 within 3 weeks of your last set, S$55 within 4 — past that, we start fresh.",
    duration: "1.5 hrs",
    price: "S$45",
    note: "Within 3 weeks of your last set · S$55 within 4 weeks",
    photo: "/manus-storage/oriana-v4-service-infill_219fdd48.webp",
    photoAlt: "Result of The Return — an infilled set restored to day one",
    anatomy: {
      applied:
        "Outgrown extensions removed, new ones placed on the lashes that have grown in since. Typically 40–60% of the set refreshed.",
      materials:
        "Matched exactly to your original set — same fibre, curl, and map. Your card on file remembers so you don't have to.",
      mapping:
        "Your original map, re-balanced for how your lashes actually grew. Small edits welcome; this is the appointment to go slightly bolder.",
      lasts:
        "Resets the 3–4 week clock. Kept on schedule, a set lasts indefinitely.",
      forWho:
        "Anyone with an Oriana set under four weeks old — S$45 within three weeks, S$55 within four. Past that, we start fresh — honestly, it's better work.",
    },
  },
] as const;

export const NAV_LINKS = [
  { href: "/services", label: "The Menu" },
  { href: "/studio", label: "The Studio" },
  { href: "/aftercare", label: "Aftercare" },
  { href: "/contact", label: "Contact" },
] as const;
