/* ORIANA STUDIO layout — v2.0. Italiana wordmark lockup (ORIANA / STUDIO). Header is white over the dark hero at top of page, switches to the solid bar once scrolling. Umber footer with inclusive tagline. */
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { NAV_LINKS, WA_DEFAULT, IMG, LOCATION } from "@/lib/site";

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col items-start leading-none">
      <span
        className={`wordmark text-[1.2rem] md:text-[1.35rem] ${light ? "text-primary-foreground" : "text-foreground"}`}
      >
        Oriana
      </span>
      <span
        className={`wordmark mt-1 text-[0.58rem] tracking-[0.58em] ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}
      >
        Studio
      </span>
    </div>
  );
}

export function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  // At the very top the header floats over the page hero, so all header
  // elements render white. Once scrolled (or the mobile menu is open), the
  // solid bar takes over and elements use the normal foreground colors.
  // Only Home has a dark full-bleed hero; every other page opens on a light
  // ground, so the header is solid there from the start.
  const overHero = location === "/" && !scrolled && !open;
  const solid = !overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-5">
        <Link href="/" aria-label="Oriana — home">
          <span className="flex items-center gap-3">
            <img decoding="async"
              src={IMG.glyph}
              alt=""
              className={`h-5 w-auto hidden sm:block transition-[filter,opacity] duration-300 ${solid ? "" : "brightness-0 invert opacity-90"}`}
            />
            <Wordmark light={!solid} />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`link-grow text-sm tracking-wide transition-colors duration-300 ${solid ? "text-foreground/80 hover:text-[var(--sage)]" : "text-white/90 hover:text-white"}`}
              data-active={location === l.href}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className={`btn-pill !px-6 !py-3 ${solid ? "bg-primary text-primary-foreground hover:bg-[oklch(0.26_0.024_60)]" : "bg-white/95 text-[oklch(0.24_0.02_60)] hover:bg-white"}`}
          >
            Hold your hour <span className="btn-arrow">→</span>
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-px w-6 transition-[transform,background-color] duration-200 ${solid ? "bg-foreground" : "bg-white"} ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-[opacity,background-color] duration-200 ${solid ? "bg-foreground" : "bg-white"} ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-[transform,background-color] duration-200 ${solid ? "bg-foreground" : "bg-white"} ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background px-6 pb-8 pt-4 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-2xl text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book" className="font-display text-2xl text-foreground">
            Book
          </Link>
          <Link
            href="/book"
            className="btn-pill mt-2 justify-center bg-primary text-primary-foreground"
          >
            Hold your hour <span className="btn-arrow">→</span>
          </Link>
        </nav>
      )}
    </header>
  );
}

/* Sticky mobile booking bar — appears after the visitor scrolls past the hero,
   hidden on /book itself. The single most direct path to a booking on mobile. */
export function MobileBookBar() {
  const [location] = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location === "/book") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs leading-snug text-muted-foreground">
          Sets from S$60
          <br />
          <span className="text-foreground">Reply within the day</span>
        </p>
        <Link
          href="/book"
          className="btn-pill shrink-0 bg-primary text-primary-foreground"
        >
          Hold your hour <span className="btn-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Wordmark light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              A private, one-client-at-a-time beauty studio in Singapore.
              Beauty, for absolutely anyone.
              <br />
              <em className="font-display italic">Noticed, not announced.</em>
            </p>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/50">The Lash Line</p>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>First Light — the signature set</li>
              <li>Full Gold — the volume set</li>
              <li>The Lift — lash lift &amp; tint</li>
              <li>The Return — the infill</li>
            </ul>
            <p className="mt-5 text-xs italic leading-relaxed text-primary-foreground/45">
              Today, the lash line. The house will grow — quietly, one craft at
              a time.
            </p>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/50">Visit</p>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>By appointment only</li>
              <li>{LOCATION.short}</li>
              <li>Near Woodlands South MRT · Block 587</li>
              <li>Resident greeter: Wubbles the Cavapoo</li>
              <li>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow"
                >
                  WhatsApp — hold your hour
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/oriana.studio.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow"
                >
                  Instagram @oriana.studio.sg
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-primary-foreground/50">
            HDB home-based business · Certified &amp; insured lash artist
          </p>
          <p className="hand text-base text-primary-foreground/60">
            not too much, not too little — just right
          </p>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Oriana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBookBar />
    </div>
  );
}
