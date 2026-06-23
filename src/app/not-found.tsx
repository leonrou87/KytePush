import Link from "next/link";

export const metadata = { title: "Signal lost — 404" };

export default function NotFound() {
  return (
    <div className="relative min-h-[82vh] flex items-center justify-center overflow-hidden scanlines vignette">
      <div className="absolute inset-0 z-0 tech-grid opacity-30" />
      <div
        className="nebula animate-nebula w-[36rem] h-[36rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ background: "radial-gradient(circle, rgba(90,162,255,0.20), transparent 60%)" }}
      />
      <div className="relative z-10 text-center px-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">// 404 — Signal lost</span>
        <h1 className="font-display text-7xl sm:text-9xl font-extrabold tracking-tight text-foreground mt-6 mb-4 animate-gradient-text text-glow">
          404
        </h1>
        <p className="text-muted text-lg max-w-sm mx-auto mb-10">
          This system isn&apos;t on the grid. The page you&apos;re looking for moved, shipped, or never existed.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-3 px-8 py-3.5 bg-accent text-background font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-accent-bright transition-colors duration-300"
        >
          Return to base
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
