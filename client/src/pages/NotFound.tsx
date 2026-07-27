/* ORIANA STUDIO — 404, on brand: cream ground, thin serif, quiet humour, one way home. */
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow text-muted-foreground">Four-oh-four</p>
      <h1 className="mega mt-6 text-6xl md:text-8xl">
        This page is
        <br />
        <em className="italic text-[oklch(0.62_0.11_75)]">not on the menu.</em>
      </h1>
      <p className="hand mt-8 text-lg text-muted-foreground md:text-xl">
        wobbles ate the link, probably. he denies everything
      </p>
      <Link
        href="/"
        className="btn-pill mt-10 bg-primary text-primary-foreground hover:bg-[oklch(0.26_0.024_60)]"
      >
        Back to the studio <span className="btn-arrow">→</span>
      </Link>
    </div>
  );
}
