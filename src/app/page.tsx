import Link from "next/link";
import type { ReactNode } from "react";
import { ScrollReveal } from "./components/ScrollReveal";

type Status = "Live" | "In studio" | "Soon";
type Color = "violet" | "sky" | "emerald" | "amber" | "rose" | "accent" | "teal";

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

/* ── House marks ─────────────────────────────────────────────────────── */
function Kite({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 2.5 L20 9 L12 21.5 L4 9 Z" />
      <path d="M12 2.5 V21.5 M4 9 H20" strokeWidth={1} opacity="0.6" />
      <path d="M12 21.5 l-2.4 1.6 M12 21.5 l2.4 1.6" strokeWidth={1} opacity="0.5" />
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
  { name: "Jarvis", category: "Intelligence", line: "The assistant that learns your mind. The front door to the house.", href: "/jarvis", status: "Live", color: "violet", icon: I.jarvis, featured: true },
  { name: "Curated", category: "Commerce", line: "Editorial styling that assembles a look from a sentence.", href: "https://curated.kytepush.com", status: "Live", color: "accent", icon: I.curated },
  { name: "Fault Lines", category: "Media", line: "Unbiased news that maps where the country splits — and why.", href: "https://faultlines.kytepush.com", status: "Live", color: "sky", icon: I.faultlines },
  { name: "Stitch", category: "Travel", line: "A trip that's actually yours, arranged day by day.", href: "https://stitch.kytepush.com", status: "Live", color: "emerald", icon: I.stitch },
  { name: "Edge", category: "Sport", line: "A live MLB model that simulates the rest of the game.", href: "https://edge.kytepush.com", status: "Live", color: "sky", icon: I.edge },
  { name: "Golf", category: "Sport", line: "Scorekeeping that quietly makes you a better player.", href: "/golf", status: "Soon", color: "emerald", icon: I.golf },
  { name: "CLOUT", category: "Play", line: "A collectible card game built on live cultural momentum.", href: null, status: "In studio", color: "rose", icon: I.clout },
  { name: "YieldMap", category: "Finance", line: "Risk-adjusted yield intelligence for prediction markets.", href: null, status: "In studio", color: "amber", icon: I.yieldmap },
  { name: "Foundry", category: "Creative", line: "Make a game by talking to it — invent, play, ship.", href: null, status: "In studio", color: "violet", icon: I.foundry },
  { name: "Momentum", category: "Markets", line: "A local-first intraday momentum research desk.", href: null, status: "In studio", color: "teal", icon: I.momentum },
];

const text: Record<Color, string> = { violet:"text-violet", sky:"text-sky", emerald:"text-emerald", amber:"text-amber", rose:"text-rose", accent:"text-accent", teal:"text-teal" };
const tint: Record<Color, string> = { violet:"bg-violet/10", sky:"bg-sky/10", emerald:"bg-emerald/10", amber:"bg-amber/10", rose:"bg-rose/10", accent:"bg-accent/10", teal:"bg-teal/10" };
const ring: Record<Color, string> = { violet:"border-violet/25", sky:"border-sky/25", emerald:"border-emerald/25", amber:"border-amber/25", rose:"border-rose/25", accent:"border-accent/25", teal:"border-teal/25" };
const hoverText: Record<Color, string> = { violet:"group-hover:text-violet", sky:"group-hover:text-sky", emerald:"group-hover:text-emerald", amber:"group-hover:text-amber", rose:"group-hover:text-rose", accent:"group-hover:text-accent", teal:"group-hover:text-teal" };
const hoverBorder: Record<Color, string> = { violet:"hover:border-violet/40", sky:"hover:border-sky/40", emerald:"hover:border-emerald/40", amber:"hover:border-amber/40", rose:"hover:border-rose/40", accent:"hover:border-accent/40", teal:"hover:border-teal/40" };
const glow: Record<Color, string> = {
  violet:"hover:shadow-[0_10px_60px_-14px_rgba(167,139,250,0.5)]",
  sky:"hover:shadow-[0_10px_60px_-14px_rgba(56,189,248,0.5)]",
  emerald:"hover:shadow-[0_10px_60px_-14px_rgba(52,211,153,0.5)]",
  amber:"hover:shadow-[0_10px_60px_-14px_rgba(251,191,36,0.5)]",
  rose:"hover:shadow-[0_10px_60px_-14px_rgba(251,113,133,0.5)]",
  accent:"hover:shadow-[0_10px_60px_-14px_rgba(205,172,122,0.5)]",
  teal:"hover:shadow-[0_10px_60px_-14px_rgba(45,212,191,0.5)]",
};
const statusStyle: Record<Status, string> = {
  Live: "text-emerald border-emerald/30 bg-emerald/5",
  "In studio": "text-muted border-border bg-white/[0.02]",
  Soon: "text-accent border-accent/30 bg-accent/5",
};

function AppCard({ app }: { app: App }) {
  const live = app.href !== null;
  const inner = (
    <>
      <div className="flex items-start justify-between mb-7">
        <div className={`w-14 h-14 border ${ring[app.color]} ${tint[app.color]} ${text[app.color]} flex items-center justify-center transition-all duration-500 group-hover:scale-105`}>
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">{app.icon}</svg>
        </div>
        <span className={`font-mono text-[10px] font-medium tracking-wider px-2.5 py-1 border ${statusStyle[app.status]}`}>
          {app.status === "Live" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald mr-1.5 align-middle pulse-dot" />}
          {app.status.toUpperCase()}
        </span>
      </div>
      <div className="flex items-baseline gap-3 mb-2">
        <h3 className={`font-display text-[1.7rem] leading-none font-semibold tracking-tight text-foreground transition-colors duration-300 ${hoverText[app.color]}`}>
          {app.name}
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim">{app.category}</span>
      </div>
      <p className="text-[15px] text-muted leading-relaxed max-w-md">{app.line}</p>
      <div className={`mt-7 flex items-center gap-2 text-[13px] font-medium tracking-wide ${live ? text[app.color] : "text-muted-dim"}`}>
        <span>{live ? "Enter" : "In the studio"}</span>
        {live && <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>}
      </div>
    </>
  );

  const base = `group relative block h-full p-8 border ${ring[app.color]} bg-surface/40 backdrop-blur-sm transition-all duration-500 ${app.featured ? "sm:col-span-2 sm:p-10" : ""}`;
  if (live) {
    return (
      <Link href={app.href!} className={`${base} ${hoverBorder[app.color]} ${glow[app.color]} hover:-translate-y-1 hover:bg-surface/70`}>
        {inner}
      </Link>
    );
  }
  return <div className={`${base} opacity-80`}>{inner}</div>;
}

export default function Home() {
  const liveCount = apps.filter((a) => a.href !== null).length;
  return (
    <div className="flex flex-col">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="aurora animate-aurora w-[42rem] h-[42rem] -top-40 -right-32" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.30), transparent 65%)" }} />
          <div className="aurora animate-aurora-slow w-[38rem] h-[38rem] top-1/3 -left-40" style={{ background: "radial-gradient(circle, rgba(56,189,248,0.22), transparent 65%)" }} />
          <div className="aurora animate-aurora w-[30rem] h-[30rem] bottom-0 right-1/4" style={{ background: "radial-gradient(circle, rgba(205,172,122,0.18), transparent 65%)" }} />
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 50% 0%, transparent 50%, rgba(9,9,12,0.85) 100%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-28">
          <div className="rise inline-flex items-center gap-3 mb-9">
            <span className="text-accent animate-glow"><Kite className="w-5 h-5" /></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-muted">A house of AI-native products</span>
          </div>

          <h1 className="font-display font-medium tracking-tight leading-[0.92] text-foreground max-w-5xl">
            <span className="block text-5xl sm:text-7xl lg:text-[6.5rem] rise-1">The house of</span>
            <span className="block text-5xl sm:text-7xl lg:text-[6.5rem] rise-2">
              <span className="italic sheen">intelligent</span> things.
            </span>
          </h1>

          <p className="rise-3 mt-9 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
            We don&apos;t ship apps. We build a family of intelligent things — each its
            own world, all under one roof. Software with a point of view, for the
            people who want the future early.
          </p>

          {/* Brand-jewel constellation */}
          <div className="rise-4 mt-10 flex flex-wrap items-center gap-3">
            {apps.slice(0, 8).map((app) => (
              <span key={app.name} title={app.name} className={`w-11 h-11 border ${ring[app.color]} ${tint[app.color]} ${text[app.color]} flex items-center justify-center transition-transform duration-300 hover:-translate-y-1`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">{app.icon}</svg>
              </span>
            ))}
            <span className="font-mono text-[11px] text-muted-dim tracking-wider ml-1">+ {apps.length - 8} more</span>
          </div>

          <div className="rise-5 mt-11 flex flex-col sm:flex-row items-start gap-4">
            <a href="#collection" className="group inline-flex items-center gap-3 px-7 py-3.5 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-accent transition-colors duration-300">
              Enter the collection
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <Link href="/jarvis" className="inline-flex items-center gap-3 px-7 py-3.5 border border-border text-foreground font-medium text-sm tracking-wide hover:border-accent/50 hover:text-accent transition-colors duration-300">
              Meet Jarvis
            </Link>
          </div>
        </div>

        {/* Bottom hairline that draws in */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" style={{ animation: "hairline 1.4s cubic-bezier(0.16,1,0.3,1) 0.8s both" }} />
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────── */}
      <div className="border-b border-border overflow-hidden py-3 bg-background-2">
        <div className="animate-marquee whitespace-nowrap flex gap-10 text-[11px] font-mono uppercase tracking-[0.3em] text-muted-dim">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="flex gap-10 items-center">
              <span>Intelligence</span><span className="text-accent">✦</span>
              <span>Commerce</span><span className="text-violet">✦</span>
              <span>Media</span><span className="text-sky">✦</span>
              <span>Travel</span><span className="text-emerald">✦</span>
              <span>Play</span><span className="text-rose">✦</span>
              <span>Markets</span><span className="text-amber">✦</span>
              <span>Sport</span><span className="text-teal">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── ETHOS ────────────────────────────────────────────────────── */}
      <section id="ethos" className="relative py-28 sm:py-36 border-b border-border overflow-hidden">
        <div className="aurora w-[36rem] h-[36rem] -bottom-40 -right-32 opacity-30" style={{ background: "radial-gradient(circle, rgba(205,172,122,0.18), transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-dim">001 — Ethos</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.8rem] leading-[1.08] font-normal tracking-tight mt-8 max-w-4xl text-foreground/95">
              Technology should feel like{" "}
              <span className="italic text-accent">luxury</span> — effortless,
              intentional, and a little bit{" "}
              <span className="italic animate-gradient-text">magic</span>.
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-px mt-20 bg-border border border-border">
            {[
              { n: "I", t: "One house, many worlds", d: "Every product shares a soul but lives its own life. A family, not a portfolio." },
              { n: "II", t: "Taste is the algorithm", d: "We sweat the feeling. If it isn't beautiful and obvious, it isn't finished." },
              { n: "III", t: "Built for the early", d: "For people who want their software to feel like where the world is going next." },
            ].map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 120} animation="scale">
                <div className="bg-background p-9 h-full group hover:bg-background-2 transition-colors duration-500">
                  <span className="font-display text-3xl italic text-accent/70 group-hover:text-accent transition-colors">{p.n}</span>
                  <h3 className="font-display text-xl font-semibold mt-5 mb-2 text-foreground">{p.t}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE COLLECTION ───────────────────────────────────────────── */}
      <section id="collection" className="relative py-28 sm:py-36 overflow-hidden">
        <div className="aurora w-[40rem] h-[40rem] top-20 -left-40 opacity-25" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.20), transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-dim">002 — The Collection</span>
                <h2 className="font-display text-4xl sm:text-6xl font-medium tracking-tight mt-7 text-foreground">
                  Ten houses.
                  <br />
                  <span className="italic text-accent">One</span> roof.
                </h2>
              </div>
              <div className="flex items-center gap-8 font-mono text-xs text-muted">
                <div><span className="block text-3xl font-display not-italic text-emerald mb-1">{liveCount}</span>live now</div>
                <div><span className="block text-3xl font-display not-italic text-foreground mb-1">{apps.length}</span>in the house</div>
                <div><span className="block text-3xl font-display not-italic text-accent mb-1">∞</span>coming</div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {apps.map((app, i) => (
              <ScrollReveal key={app.name} delay={(i % 3) * 100} animation="scale" className={app.featured ? "sm:col-span-2" : ""}>
                <AppCard app={app} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section className="relative py-32 sm:py-44 border-t border-border overflow-hidden">
        <div className="absolute inset-0">
          <div className="aurora animate-aurora w-[44rem] h-[44rem] -top-24 left-1/2 -translate-x-1/2" style={{ background: "radial-gradient(circle, rgba(205,172,122,0.22), transparent 60%)" }} />
        </div>
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-accent inline-block mb-8 animate-glow"><Kite className="w-9 h-9 mx-auto" /></span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.02] text-foreground">
            Come live in the{" "}
            <span className="italic sheen">future</span>.
          </h2>
          <p className="text-muted max-w-xl mx-auto mt-7 mb-12 text-lg leading-relaxed">
            Ten products today, a new one every month. Step inside the house and
            start with the one that learns your mind.
          </p>
          <Link href="/jarvis" className="group inline-flex items-center gap-3 px-9 py-4 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-accent transition-colors duration-300">
            Start with Jarvis
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
