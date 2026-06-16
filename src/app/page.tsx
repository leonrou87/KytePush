import Link from "next/link";
import type { ReactNode } from "react";
import { ScrollReveal } from "./components/ScrollReveal";

type Status = "Live" | "Beta" | "Building" | "Research" | "Soon";
type Color = "violet" | "sky" | "emerald" | "amber" | "rose" | "accent" | "teal";

type App = {
  name: string;
  category: string;
  description: string;
  href: string | null; // null = deployed-but-not-public / not yet shipped → no link
  status: Status;
  color: Color;
  icon: ReactNode;
  featured?: boolean;
};

/* ── Brand marks: one distinct geometric logo per app ───────────────── */
const I = {
  jarvis: (
    <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
  ),
  faultlines: (
    <>
      <path d="M12 3v8" />
      <path d="M12 11l-6 10" />
      <path d="M12 11l6 10" />
      <circle cx="12" cy="11" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  curated: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 16l9 5 9-5" />
    </>
  ),
  stitch: (
    <>
      <path d="M5 19c4 0 4-14 8-14s4 7 6 7" />
      <circle cx="5" cy="19" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="1.7" fill="currentColor" stroke="none" />
    </>
  ),
  clout: (
    <>
      <path d="M12 3l8.5 9-8.5 9-8.5-9L12 3z" />
      <path d="M8.5 13l2.5-2.5L13 13l2.5-3" />
    </>
  ),
  yieldmap: (
    <>
      <path d="M4 20V14" />
      <path d="M10 20V9" />
      <path d="M16 20V12" />
      <path d="M4 9l6-4 6 3 4-4" />
    </>
  ),
  foundry: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" />
    </>
  ),
  momentum: (
    <>
      <path d="M3 17l6-6 4 4 8-9" />
      <path d="M21 6v5" />
      <path d="M21 6h-5" />
    </>
  ),
  edge: (
    <>
      <path d="M12 3l9 9-9 9-9-9 9-9z" />
      <path d="M6 12h12" />
      <path d="M12 6v12" />
    </>
  ),
  golf: (
    <>
      <path d="M8 3v15" />
      <path d="M8 4l9 3-9 3" />
      <ellipse cx="12" cy="20" rx="6" ry="1.6" />
    </>
  ),
};

const apps: App[] = [
  {
    name: "Jarvis",
    category: "AI Assistant",
    description:
      "Your personal AI assistant — understands context, learns your style, and handles the work you'd rather not. The front door to everything we build.",
    href: "/jarvis",
    status: "Live",
    color: "violet",
    icon: I.jarvis,
    featured: true,
  },
  {
    name: "Curated",
    category: "Commerce",
    description:
      "A personalized, editorial styling & shopping companion. Describe what you need and watch a coherent look assemble on screen.",
    href: "https://curated.kytepush.com",
    status: "Live",
    color: "accent",
    icon: I.curated,
  },
  {
    name: "Golf Tracker",
    category: "Sport",
    description:
      "Smart scorekeeping that actually helps your game. Track rounds, spot patterns, and play better with AI insight.",
    href: "/golf",
    status: "Soon",
    color: "emerald",
    icon: I.golf,
  },
  {
    name: "Fault Lines",
    category: "News",
    description:
      "Autonomous, unbiased news. Rewrites the day's top stories in neutral prose — and maps exactly where the left and the right split.",
    href: "https://faultlines.kytepush.com",
    status: "Live",
    color: "sky",
    icon: I.faultlines,
  },
  {
    name: "Stitch",
    category: "Travel",
    description:
      "AI travel itinerary builder. Pick the real places you want; Stitch arranges them into a coherent, day-by-day trip that's yours.",
    href: "https://stitch.kytepush.com",
    status: "Live",
    color: "emerald",
    icon: I.stitch,
  },
  {
    name: "Edge",
    category: "Sport",
    description:
      "An MLB mid-game win predictor. A base-out simulation engine models the rest of the game to surface a real, live betting edge.",
    href: "https://edge.kytepush.com",
    status: "Live",
    color: "sky",
    icon: I.edge,
  },
  {
    name: "CLOUT",
    category: "Game",
    description:
      "A collectible card game built on a live cultural-relevance index. No likeness, closed-loop economy, premium generative art.",
    href: null,
    status: "Building",
    color: "rose",
    icon: I.clout,
  },
  {
    name: "YieldMap",
    category: "Fintech",
    description:
      "Risk-adjusted yield intelligence for Polymarket & Kalshi liquidity rewards — your daily farming playbook, ranked by RAYS.",
    href: null,
    status: "Soon",
    color: "amber",
    icon: I.yieldmap,
  },
  {
    name: "Foundry",
    category: "Creative",
    description:
      "A calm cockpit for making a casual mobile game with you in the loop: invent, build, play it in seconds, steer, ship.",
    href: null,
    status: "Building",
    color: "violet",
    icon: I.foundry,
  },
  {
    name: "Momentum",
    category: "Trading",
    description:
      "A local-first intraday momentum research, signal, and execution system. Paper-trade the strategy — or deliberately arm it live.",
    href: null,
    status: "Research",
    color: "teal",
    icon: I.momentum,
  },
];

/* ── Color maps (static class strings so Tailwind keeps them) ────────── */
const text: Record<Color, string> = {
  violet: "text-violet", sky: "text-sky", emerald: "text-emerald",
  amber: "text-amber", rose: "text-rose", accent: "text-accent", teal: "text-teal",
};
const tint: Record<Color, string> = {
  violet: "bg-violet/10", sky: "bg-sky/10", emerald: "bg-emerald/10",
  amber: "bg-amber/10", rose: "bg-rose/10", accent: "bg-accent/10", teal: "bg-teal/10",
};
const hoverShadow: Record<Color, string> = {
  violet: "hover:shadow-[6px_6px_0_0_#7c3aed]", sky: "hover:shadow-[6px_6px_0_0_#0ea5e9]",
  emerald: "hover:shadow-[6px_6px_0_0_#059669]", amber: "hover:shadow-[6px_6px_0_0_#d97706]",
  rose: "hover:shadow-[6px_6px_0_0_#e11d48]", accent: "hover:shadow-[6px_6px_0_0_#a47764]",
  teal: "hover:shadow-[6px_6px_0_0_#015770]",
};
const hoverText: Record<Color, string> = {
  violet: "group-hover:text-violet", sky: "group-hover:text-sky", emerald: "group-hover:text-emerald",
  amber: "group-hover:text-amber", rose: "group-hover:text-rose", accent: "group-hover:text-accent",
  teal: "group-hover:text-teal",
};
const statusStyle: Record<Status, string> = {
  Live: "bg-emerald text-white",
  Beta: "bg-violet text-white",
  Building: "bg-cream text-foreground",
  Research: "bg-surface text-muted",
  Soon: "bg-surface text-muted",
};

function BrandIcon({ app, size = "lg" }: { app: App; size?: "lg" | "sm" }) {
  const dim = size === "lg" ? "w-14 h-14" : "w-11 h-11";
  const svg = size === "lg" ? "w-7 h-7" : "w-6 h-6";
  return (
    <div className={`${dim} shrink-0 border-2 border-border ${tint[app.color]} ${text[app.color]} flex items-center justify-center transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105`}>
      <svg className={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        {app.icon}
      </svg>
    </div>
  );
}

function AppCard({ app }: { app: App }) {
  const live = app.href !== null;
  const inner = (
    <>
      <div className="flex items-start justify-between mb-5">
        <BrandIcon app={app} size={app.featured ? "lg" : "sm"} />
        <span className={`font-mono text-[10px] font-semibold px-2.5 py-1 border-2 border-border ${statusStyle[app.status]}`}>
          {app.status}
        </span>
      </div>
      <div className="flex items-center gap-2 mb-1.5">
        <h3 className={`font-display text-2xl font-extrabold tracking-tight transition-colors duration-200 ${hoverText[app.color]}`}>
          {app.name}
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted/70 mt-1">
          {app.category}
        </span>
      </div>
      <p className="text-sm text-muted leading-relaxed">{app.description}</p>
      <div className={`mt-5 flex items-center gap-2 text-sm font-semibold ${live ? "text-foreground" : "text-muted/50"}`}>
        <span>{live ? "Open app" : "In the works"}</span>
        {live && (
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        )}
      </div>
    </>
  );

  const base = `group block h-full p-7 border-2 border-border bg-background transition-all duration-200 ${app.featured ? "sm:col-span-2" : ""}`;
  if (live) {
    return (
      <Link href={app.href!} className={`${base} hover:-translate-y-1 ${hoverShadow[app.color]} active:translate-y-0 active:shadow-none`}>
        {inner}
      </Link>
    );
  }
  return <div className={`${base} cursor-default opacity-[0.97]`}>{inner}</div>;
}

export default function Home() {
  const liveCount = apps.filter((a) => a.href !== null).length;
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="min-h-[92vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-[8%] w-96 h-96 bg-violet/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-[2%] w-[28rem] h-[28rem] bg-sky/10 rounded-full blur-3xl animate-float-delay" />
          <div className="absolute top-[35%] left-[45%] w-72 h-72 bg-emerald/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[25%] right-[28%] w-56 h-56 bg-amber/10 rounded-full blur-2xl animate-float-delay" />
        </div>
        <div className="absolute top-24 right-12 w-24 h-24 border-2 border-violet/20 rotate-12 animate-float hidden lg:block" />
        <div className="absolute top-44 right-44 w-6 h-6 bg-sky/30 rounded-full animate-orbit hidden lg:block" />
        <div className="absolute bottom-28 left-16 w-16 h-16 border-2 border-emerald/20 rounded-full animate-float-delay hidden lg:block" />
        <div className="absolute top-36 left-1/2 w-3 h-3 bg-amber/40 animate-orbit-reverse hidden lg:block" />
        <div className="absolute bottom-44 right-24 w-12 h-12 border-2 border-rose/15 rotate-45 animate-wiggle hidden lg:block" />
        <div className="absolute top-16 left-[28%] w-10 h-10 border-2 border-accent/15 animate-spin-slow hidden lg:block" />
        <div className="absolute top-0 right-0 w-72 h-72 dot-grid opacity-20 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-4xl">
            <div className="animate-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-border bg-cream text-sm font-mono font-medium mb-6">
                <span className="w-2 h-2 bg-violet rounded-full animate-pulse" />
                v2 — fully overhauled · 2026
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.75rem] font-extrabold tracking-tight leading-[0.95] mb-6 animate-letter-spread">
              One studio.
              <br />
              A whole{" "}
              <span className="italic relative">
                <span className="animate-gradient-text">family</span>
                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-violet/30 animate-line-grow" />
              </span>
              <br />
              of intelligent apps.
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-4 animate-reveal-delay-2">
              KytePush has been rebuilt from the ground up. We&apos;re not a single
              product — we&apos;re a studio shipping a family of AI-native apps
              across news, commerce, travel, gaming, finance, and sport. Each one
              its own brand. All of them under one roof.
            </p>

            <p className="text-sm text-muted/70 max-w-md mb-8 animate-reveal-delay-3">
              Ten brands and counting — built fast, built with intent, built to matter.
            </p>

            {/* Brand-mark lockup row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8 animate-reveal-delay-3">
              {apps.slice(0, 8).map((app) => (
                <div
                  key={app.name}
                  title={app.name}
                  className={`w-10 h-10 border-2 border-border ${tint[app.color]} ${text[app.color]} flex items-center justify-center hover:-translate-y-0.5 transition-transform`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                    {app.icon}
                  </svg>
                </div>
              ))}
              <span className="font-mono text-xs text-muted ml-1">+ more</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3 animate-reveal-delay-3">
              <a href="#apps" className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-border bg-foreground text-background font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#7c3aed] active:translate-y-0 active:shadow-none transition-all duration-200">
                Explore the family
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link href="/jarvis" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#1a1a1a] active:translate-y-0 active:shadow-none transition-all duration-200">
                Meet Jarvis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="border-y-2 border-border overflow-hidden py-2.5 bg-gradient-to-r from-violet/5 via-cream to-sky/5">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-sm font-mono text-muted">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="flex gap-8 items-center">
              <span>NEWS</span><span className="text-violet text-xs">◆</span>
              <span>COMMERCE</span><span className="text-sky text-xs">◆</span>
              <span>TRAVEL</span><span className="text-emerald text-xs">◆</span>
              <span>GAMING</span><span className="text-amber text-xs">◆</span>
              <span>FINTECH</span><span className="text-rose text-xs">◆</span>
              <span>SPORT</span><span className="text-violet text-xs">◆</span>
              <span>AI-NATIVE</span><span className="text-sky text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* The new direction */}
      <section className="py-16 sm:py-24 border-b-2 border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <ScrollReveal animation="left">
              <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
                001 — The new direction
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.02]">
                We rebuilt the
                <br />
                whole thing — on
                <br />
                <span className="italic relative inline-block">
                  <span className="animate-gradient-text">purpose</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1 bg-violet/30" />
                </span>
                .
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="space-y-5 text-muted leading-relaxed">
                <p className="text-lg text-foreground font-medium">
                  KytePush started as one app. It&apos;s now a studio.
                </p>
                <p className="text-base">
                  AI changed what a small team can build — and how fast. So we
                  changed with it. Instead of betting everything on a single
                  product, we&apos;re building a family of focused, intelligent
                  apps and shipping them at a pace that wasn&apos;t possible a year
                  ago.
                </p>
                <p className="text-base">
                  Each app is its own brand with its own home at{" "}
                  <span className="font-mono text-sm text-foreground">name.kytepush.com</span>.
                  Together they&apos;re a bet on a simple idea: thoughtful software,
                  made quickly, that genuinely helps.
                </p>
                <div className="flex gap-3 pt-2">
                  <div className="w-12 h-1 bg-violet rounded-full" />
                  <div className="w-8 h-1 bg-sky rounded-full" />
                  <div className="w-6 h-1 bg-emerald rounded-full" />
                  <div className="w-4 h-1 bg-amber rounded-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-16" stagger>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-2 border-border">
              {[
                { value: "10", label: "Brands in flight", color: "text-violet" },
                { value: "6", label: "Categories", color: "text-sky" },
                { value: String(liveCount), label: "Live now", color: "text-emerald" },
                { value: "∞", label: "On the way", color: "text-amber" },
              ].map((stat, i) => (
                <div key={stat.label} className={`p-7 text-center ${i < 3 ? "border-r-2 border-border" : ""} ${i < 2 ? "border-b-2 sm:border-b-0" : ""}`}>
                  <div className={`font-display text-4xl sm:text-5xl font-extrabold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Apps — the family */}
      <section id="apps" className="py-16 sm:py-24 bg-cream border-b-2 border-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
                  002 — The family
                </span>
                <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
                  Ten brands. One roof.
                </h2>
              </div>
              <p className="text-muted max-w-sm text-sm leading-relaxed">
                Every brand in the KytePush family. The live ones open right now —
                the rest are days from launch. Watch this grid light up.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map((app, i) => (
              <ScrollReveal key={app.name} delay={(i % 3) * 100} animation="scale" className={app.featured ? "sm:col-span-2" : ""}>
                <AppCard app={app} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[20%] w-56 h-56 bg-violet/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-[15%] w-72 h-72 bg-sky/10 rounded-full blur-3xl animate-float-delay" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-emerald/10 rounded-full blur-2xl animate-float" />
        </div>
        <ScrollReveal className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
            This is just the{" "}
            <span className="italic animate-gradient-text">beginning</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-10 text-base">
            Ten brands today. More every month. KytePush is building the future of
            intelligent software — one focused product at a time.
          </p>
          <Link href="/jarvis" className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-border bg-foreground text-background font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#7c3aed] active:translate-y-0 active:shadow-none transition-all duration-200">
            Start with Jarvis
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
