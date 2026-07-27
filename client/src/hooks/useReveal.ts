import { useEffect, useRef } from "react";

/** Adds `.in-view` to elements with `.rise` when they enter the viewport (staggered by DOM order). */
export function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".rise"));
    if (els.length === 0) return;

    // Fallback: some in-app WebViews lack or throttle IntersectionObserver.
    // Never allow content to stay permanently hidden.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const siblings = els.filter(
              (e) => e.parentElement === el.parentElement,
            );
            const idx = Math.max(0, siblings.indexOf(el));
            el.style.transitionDelay = `${Math.min(idx * 70, 350)}ms`;
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => io.observe(el));

    // Safety net: if for any reason the observer never fires (WebView quirks),
    // reveal everything after a short grace period.
    const failsafe = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in-view"));
      io.disconnect();
    }, 1800);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);

  return ref;
}
