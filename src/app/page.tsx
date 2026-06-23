import Link from "next/link";
import type { ReactNode } from "react";
import { ScrollReveal } from "./components/ScrollReveal";
import { Hero3D } from "./components/Hero3D";
import { Tilt } from "./components/Tilt";

type Status = "Live" | "In dev" | "Soon";
type Color = "accent" | "violet" | "sky" | "emerald" | "amber" | "rose" | "teal";

type App = {
  name: string;
  category: string;
  line: string;
  href: string | null;
  status: Status;
  color: Color;
  icon: ReactNode;
  featured?: boolean;
};

function Kite({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 2.5 L20 9 L12 21.5 L4 9 Z" />
      <path d="M12 2.5 V21.5 M4 9 H20" strokeWidth={0.9} opacity="0.55" />
      <path d="M12 21.5 l-2.2 1.5 M12 21.5 l2.2 1.5" strokeWidth={0.9} opacity="0.5" />
    </svg>
  );
}

const I = {
  jarvis: <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />,
  curated: (<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 12l9 5 9-5" /><path d="M3 16l9 5 9-5" /></>),
  golf: (<><path d="M8 3v15" /><path d="M8 4l9 3-9 3" /><ellipse cx="12" cy="20" rx="6" ry="1.6" /></>),
  faultlines: (<><path d="M12 3v8" /><path d="M12 11l-6 10" /><path d="M12 11l6 10" /><circle cx="12" cy="11" r="1.5" fill="currentColor" stroke="none" /></>),
  stitch: (<><path d="M5 19c4 0 4-14 8-14s4 7 6 7" /><circle cx="5" cy="19" r="1.6" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none" /></>),
  edge: (<><path d="M12 3l9 9-9 9-9-9 9-9z" /><path d="M6 12h12" /><path d="M12 6v12" /></>),
  clout: (<><path d="M12 3l8.5 9-8.5 9-8.5-9L12 3z" /><path d="M8.5 13l2.5-2.5L13 13l2.5-3" /></>),
  yieldmap: (<><path d="M4 20V14" /><path d="M10 20V9" /><path d="M16 20V12" /><path d="M4 9l6-4 6 3 4-4" /></>),
  foundry: (<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" /></>),
  momentum: (<><path d="M3 17l6-6 4 4 8-9" /><path d="M21 6v5" /><path d="M21 6h-5" /></>),
};

const apps: App[] = [
  { name: "JARVIS", category: "Intelligence", line: "An assistant that learns your mind. The command center for everything we build.", href: "/jarvis", status: "Live", color: "accent", icon: I.jarvis, featured: true },
  { name: "CURATED", category: "Commerce", line: "Editorial styling that assembles a full look from a single sentence.", href: "https://curated.kytepush.com", status: "Live", color: "violet", icon: I.curated },
  { name: "FAULT LINES", category: "Media", line: "Autonomous, unbiased news that maps exactly where the country splits.", href: "https://faultlines.kytepush.com", status: "Live", color: "sky", icon: I.faultlines },
  { name: "STITCH", category: "Travel", line: "A trip that's actually yours — arranged, paced, day by day.", href: "https://stitch.kytepush.com", status: "Live", color: "emerald", icon: I.stitch },
  { name: "EDGE", category: "Sport", line: "A live MLB model simulating the rest of the game, pitch by pitch.", href: "https://edge.kytepush.com", status: "Live", color: "sky", icon: I.edge },
  { name: "GOLF", category: "Sport", line: "Scorekeeping that quietly engineers a better player.", href: "/golf", status: "Soon", color: "emerald", icon: I.golf },
  { name: "CLOUT", category: "Play", line: "A collectible card game built on a live cultural-momentum index.", href: null, status: "In dev", color: "rose", icon: I.clout },
  { name: "YIELDMAP", category: "Finance", line: "Risk-adjusted yield intelligence for prediction-market liquidity.", href: null, status: "In dev", color: "amber", icon: I.yieldmap },
  { name: "FOUNDRY", category: "Creative", line: "Build a game by talking to it — invent, play, ship in minutes.", href: null, status: "In dev", color: "violet", icon: I.foundry },
  { name: "MOMENTUM", category: "Markets", line: "A local-first intraday momentum research and execution desk.", href: null, status: "In dev", color: "teal", icon: I.momentum },
];

const statusStyle: Record<Status, string> = {
  Live: "text-live border-live/30",
  "In dev": "text-muted border-border",
  Soon: "text-accent border-accent/30",
};

function FleetCard({ app, index }: { app: App; index: number }) {
  const live = app.href !== null;
  const id = String(index + 1).padStart(2, "0");
  const inner = (
    <>
      {/* corner ticks */}
      <span className="absolute top-3 left-3 w-2.5 h-2.5 border-l border-t border-border group-hover:border-accent/60 transition-colors" />
      <span className="absolute top-3 right-3 w-2.5 h-2.5 border-r border-t border-border group-hover:border-accent/60 transition-colors" />
      <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-l border-b border-border group-hover:border-accent/60 transition-colors" />
      <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-r border-b border-border group-hover:border-accent/60 transition-colors" />

      <div className="flex items-start justify-between mb-7">
        <div className="w-14 h-14 border border-border bg-surface text-foreground/80 flex items-center justify-center transition-all duration-500 group-hover:text-accent group-hover:border-accent/40">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">{app.icon}</svg>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="font-mono text-[10px] text-muted-dim tracking-widest">SYS_{id}</span>
          <span className={`font-mono text-[10px] font-medium tracking-wider px-2 py-0.5 border ${statusStyle[app.status]} uppercase`}>
            {app.status === "Live" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-live mr-1.5 align-middle pulse-dot" />}
            {app.status}
          </span>
        </div>
      </div>

      <div className="flex items-baseline gap-3 mb-2.5">
        <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">{app.name}</h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim">{app.category}</span>
      </div>
      <p className="text-[14px] text-muted leading-relaxed max-w-md">{app.line}</p>
      <div className={`mt-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] ${live ? "text-accent" : "text-muted-dim"}`}>
        <span>{live ? "Launch ▸" : "In development"}</span>
        {live && <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>}
      </div>
    </>
  );

  const base = `group relative block h-full p-8 border border-border bg-surface/40 backdrop-blur-sm transition-all duration-500 ${app.featured ? "sm:col-span-2 sm:p-10" : ""}`;
  if (live) {
    return (
      <Link href={app.href!} className={`${base} hover:border-accent/40 hover:bg-surface-2 hover:-translate-y-1 hover:shadow-[0_12px_60px_-16px_rgba(90,162,255,0.45)]`}>
        {inner}
      </Link>
    );
  }
  return <div className={`${base} opacity-75`}>{inner}</div>;
}

export default function Home() {
  const liveCount = apps.filter((a) => a.href !== null).length;
  return (
    <div className="flex flex-col">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden scanlines vignette">
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>
        <div className="absolute inset-0 z-[1] tech-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(120% 80% at 50% 45%, transparent 30%, rgba(0,0,4,0.55) 75%, rgba(0,0,4,0.9) 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-28">
          <div className="rise inline-flex items-center gap-3 mb-9 px-4 py-1.5 border border-border bg-background/40 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-live pulse-dot" />
            <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted">An AI workhouse · Est. MMXXVI</span>
          </div>

          <h1
            className="font-display font-extrabold uppercase tracking-[-0.02em] leading-[0.9] text-foreground"
            style={{ fontSize: "clamp(1.7rem, 7vw, 7rem)" }}
          >
            <span className="block rise-1">We engineer</span>
            <span className="block rise-2 animate-gradient-text text-glow">intelligence</span>
            <span className="block rise-3">at scale.</span>
          </h1>

          <p className="rise-4 mt-9 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            KYTEPUSH is an AI workhouse building a fleet of intelligent products —
            each one pushing what software can do. Ten systems online. A new one
            shipping every week.
          </p>

          <div className="rise-5 mt-11 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#fleet" className="group inline-flex items-center gap-3 px-8 py-3.5 bg-accent text-background font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-accent-bright transition-colors duration-300">
              View the fleet
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <Link href="/jarvis" className="inline-flex items-center gap-3 px-8 py-3.5 border border-border text-foreground font-semibold text-[13px] uppercase tracking-[0.14em] hover:border-accent/50 hover:text-accent transition-colors duration-300">
              Meet Jarvis
            </Link>
          </div>

          {/* Telemetry strip */}
          <div className="rise-5 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px max-w-2xl mx-auto border border-border bg-border/50">
            {[
              { v: String(liveCount).padStart(2, "0"), l: "Systems online" },
              { v: String(apps.length), l: "In the fleet" },
              { v: "07", l: "Domains" },
              { v: "∞", l: "Roadmap" },
            ].map((s) => (
              <div key={s.l} className="bg-background/80 backdrop-blur-sm py-5 px-3">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">{s.v}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-dim mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/30 animate-sweep z-10" />
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────── */}
      <div className="border-b border-border overflow-hidden py-3 bg-background-2 relative z-10">
        <div className="animate-marquee whitespace-nowrap flex gap-10 text-[11px] font-mono uppercase tracking-[0.3em] text-muted-dim">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="flex gap-10 items-center">
              <span>Intelligence</span><span className="text-accent">◇</span>
              <span>Commerce</span><span className="text-accent">◇</span>
              <span>Media</span><span className="text-accent">◇</span>
              <span>Travel</span><span className="text-accent">◇</span>
              <span>Markets</span><span className="text-accent">◇</span>
              <span>Sport</span><span className="text-accent">◇</span>
              <span>Play</span><span className="text-accent">◇</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── MISSION ──────────────────────────────────────────────────── */}
      <section id="mission" className="relative py-28 sm:py-36 border-b border-border overflow-hidden">
        <div className="nebula w-[36rem] h-[36rem] -bottom-40 -right-32 opacity-40 z-0" style={{ background: "radial-gradient(circle, rgba(90,162,255,0.18), transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">// 001 — Mission</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.6rem] font-extrabold uppercase tracking-tight leading-[1.05] mt-8 max-w-4xl text-foreground">
              Build the products that drag{" "}
              <span className="animate-gradient-text">the future</span> forward —
              and ship them faster than anyone thinks possible.
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-px mt-20 bg-border border border-border">
            {[
              { n: "01", t: "Engineer, don't decorate", d: "Every product is a machine with a job. We build for capability first, polish relentlessly second." },
              { n: "02", t: "Ship at the edge", d: "Frontier models, frontier pace. We'd rather launch a tenth product than perfect the first." },
              { n: "03", t: "One workhouse", d: "Shared infrastructure, shared standards. Each system makes the next one faster to build." },
            ].map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 120} animation="scale">
                <div className="bg-background p-9 h-full group hover:bg-background-2 transition-colors duration-500">
                  <span className="font-mono text-sm text-accent tracking-widest">{p.n}</span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight mt-5 mb-2 text-foreground">{p.t}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE FLEET ────────────────────────────────────────────────── */}
      <section id="fleet" className="relative py-28 sm:py-36 overflow-hidden">
        <div className="nebula w-[40rem] h-[40rem] top-20 -left-40 opacity-30 z-0" style={{ background: "radial-gradient(circle, rgba(90,162,255,0.16), transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">// 002 — The Fleet</span>
                <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-7 text-foreground">
                  Ten systems.<br /><span className="animate-gradient-text">One workhouse.</span>
                </h2>
              </div>
              <p className="text-muted max-w-sm text-sm leading-relaxed font-mono tracking-wide">
                Live systems launch on click. The rest are in active development —
                shipping continuously.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {apps.map((app, i) => (
              <ScrollReveal key={app.name} delay={(i % 3) * 100} animation="scale" className={app.featured ? "sm:col-span-2" : ""}>
                <Tilt>
                  <FleetCard app={app} index={i} />
                </Tilt>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section className="relative py-32 sm:py-44 border-t border-border overflow-hidden scanlines">
        <div className="absolute inset-0 z-0 tech-grid opacity-50" />
        <div className="nebula animate-nebula w-[46rem] h-[46rem] -top-24 left-1/2 -translate-x-1/2 z-0" style={{ background: "radial-gradient(circle, rgba(90,162,255,0.22), transparent 60%)" }} />
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-accent inline-block mb-8 animate-glow"><Kite className="w-10 h-10 mx-auto" /></span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-foreground">
            The future is<br /><span className="animate-gradient-text text-glow">being built.</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto mt-7 mb-12 text-lg leading-relaxed">
            Ten systems today, a new one every week. Step into the workhouse and
            start with the one that learns your mind.
          </p>
          <Link href="/jarvis" className="group inline-flex items-center gap-3 px-9 py-4 bg-accent text-background font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-accent-bright transition-colors duration-300">
            Start with Jarvis
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
