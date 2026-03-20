import Link from "next/link";
import { ScrollReveal } from "./components/ScrollReveal";

const apps = [
  {
    name: "Jarvis",
    description:
      "Your personal AI assistant — understands context, learns your style, and helps you do more than you thought possible.",
    href: "/jarvis",
    tag: "Live",
    number: "01",
    color: "violet",
  },
  {
    name: "Golf Tracker",
    description:
      "Smart scorekeeping that actually helps your game. Track rounds, spot patterns, play better.",
    href: "/golf",
    tag: "Coming Soon",
    number: "02",
    color: "teal",
  },
  {
    name: "More on the way",
    description:
      "The next KytePush app is in the works. We're always building.",
    href: "#",
    tag: "2026",
    number: "03",
    color: "accent",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-[10%] w-80 h-80 bg-violet/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-sky/5 rounded-full blur-3xl animate-float-delay" />
          <div className="absolute top-[40%] left-[50%] w-64 h-64 bg-emerald/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[30%] right-[30%] w-48 h-48 bg-amber/5 rounded-full blur-2xl animate-float-delay" />
        </div>

        {/* Floating geometric decorations */}
        <div className="absolute top-20 right-12 w-20 h-20 border-2 border-violet/15 rotate-12 animate-float hidden lg:block" />
        <div className="absolute top-40 right-36 w-6 h-6 bg-sky/25 rounded-full animate-orbit hidden lg:block" />
        <div className="absolute bottom-24 left-12 w-14 h-14 border-2 border-emerald/15 rounded-full animate-float-delay hidden lg:block" />
        <div className="absolute top-32 left-1/2 w-3 h-3 bg-amber/30 animate-orbit-reverse hidden lg:block" />
        <div className="absolute bottom-40 right-20 w-10 h-10 border-2 border-rose/10 rotate-45 animate-wiggle hidden lg:block" />
        <div className="absolute top-[55%] left-20 w-4 h-4 bg-violet/20 rounded-full animate-particle hidden lg:block" />
        <div className="absolute top-16 left-[30%] w-8 h-8 border-2 border-accent/10 animate-spin-slow hidden lg:block" />

        {/* Dot grid */}
        <div className="absolute top-0 right-0 w-64 h-64 dot-grid opacity-15 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-4xl">
            <div className="animate-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-border bg-cream text-sm font-mono font-medium mb-6">
                <span className="w-2 h-2 bg-violet rounded-full animate-pulse" />
                AI-forward since day one
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.95] mb-6 animate-letter-spread">
              We build apps
              <br />
              that{" "}
              <span className="italic relative">
                <span className="animate-gradient-text">matter</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-violet/30 animate-line-grow" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-4 animate-reveal-delay-2">
              KytePush is a studio building intelligent applications for real
              life. We put AI where it&apos;s useful — not where it&apos;s trendy.
              Practical tools, thoughtfully made.
            </p>

            <p className="text-sm text-muted/60 max-w-md mb-8 animate-reveal-delay-3">
              Starting with Jarvis — the AI assistant that&apos;s changing how people work, think, and create.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 animate-reveal-delay-3">
              <Link
                href="/jarvis"
                className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-border bg-foreground text-background font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#7c3aed] active:translate-y-0 active:shadow-none transition-all duration-200"
              >
                Meet Jarvis
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="#apps"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#1a1a1a] active:translate-y-0 active:shadow-none transition-all duration-200"
              >
                See all apps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="border-y-2 border-border overflow-hidden py-2.5 bg-gradient-to-r from-violet/5 via-cream to-sky/5">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-sm font-mono text-muted">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="flex gap-8 items-center">
              <span>INTELLIGENT APPS</span>
              <span className="text-violet text-xs">◆</span>
              <span>AI ASSISTANT</span>
              <span className="text-sky text-xs">◆</span>
              <span>AI-FORWARD</span>
              <span className="text-emerald text-xs">◆</span>
              <span>HUMAN-CENTERED</span>
              <span className="text-amber text-xs">◆</span>
              <span>THOUGHTFULLY BUILT</span>
              <span className="text-rose text-xs">◆</span>
              <span>KYTEPUSH</span>
              <span className="text-violet text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Featured: Jarvis spotlight */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
              Featured
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Introducing{" "}
              <span className="animate-gradient-text italic">Jarvis</span>
            </h2>
            <p className="text-muted max-w-2xl text-base leading-relaxed mb-10">
              The AI assistant that doesn&apos;t just respond — it <span className="text-foreground font-medium">understands</span>.
              Built for real people with real problems, Jarvis brings leading-edge intelligence
              to your fingertips. No learning curve. No setup. Just results.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🧠", label: "Deep Understanding", desc: "Context-aware conversations that feel natural", color: "violet" },
              { icon: "⚡", label: "Lightning Fast", desc: "Instant responses powered by cutting-edge AI", color: "amber" },
              { icon: "🔒", label: "Private & Secure", desc: "Your conversations stay yours — always", color: "emerald" },
              { icon: "🎯", label: "Laser Focused", desc: "Gets to the point — no fluff, no filler", color: "sky" },
            ].map((item, i) => {
              const shadowMap: Record<string, string> = {
                violet: "hover:shadow-[5px_5px_0_0_#7c3aed]",
                amber: "hover:shadow-[5px_5px_0_0_#d97706]",
                emerald: "hover:shadow-[5px_5px_0_0_#059669]",
                sky: "hover:shadow-[5px_5px_0_0_#0ea5e9]",
              };
              return (
                <ScrollReveal key={item.label} delay={i * 100} animation="scale">
                  <div className={`p-5 border-2 border-border bg-background hover:-translate-y-1 ${shadowMap[item.color]} active:translate-y-0 active:shadow-none transition-all duration-200 cursor-default h-full`}>
                    <span className="text-2xl mb-3 block">{item.icon}</span>
                    <h3 className="font-display font-bold text-sm mb-1">{item.label}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="mt-8">
            <Link
              href="/jarvis"
              className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-violet/30 text-violet font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#7c3aed] hover:bg-violet/5 active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              Learn more about Jarvis
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-16 sm:py-20 border-t-2 border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ScrollReveal animation="left">
              <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
                001 — Philosophy
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
                AI should be{" "}
                <span className="italic relative inline-block">
                  <span className="animate-gradient-text">invisible</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-violet/30" />
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="space-y-4 text-muted leading-relaxed">
                <p className="text-base">
                  The best technology disappears into the experience. You
                  don&apos;t think about it — you just get more done, with less
                  friction, in less time.
                </p>
                <p className="text-sm">
                  That&apos;s our north star. Every KytePush app uses artificial
                  intelligence under the hood, but you&apos;ll never feel like
                  you&apos;re &ldquo;using AI.&rdquo; You&apos;ll just feel like
                  the app knows what you need.
                </p>
                <div className="flex gap-3 pt-2">
                  <div className="w-12 h-1 bg-violet rounded-full" />
                  <div className="w-8 h-1 bg-sky rounded-full" />
                  <div className="w-6 h-1 bg-emerald rounded-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Pillars */}
          <ScrollReveal className="mt-14" stagger>
            <div className="grid sm:grid-cols-3 gap-0 border-2 border-border">
              {[
                {
                  number: "01",
                  title: "Practical intelligence",
                  desc: "We put AI where it helps, not where it impresses. Every feature earns its complexity.",
                  color: "violet",
                },
                {
                  number: "02",
                  title: "Built for people",
                  desc: "Tools should feel obvious the first time you touch them. If it needs a tutorial, we redesign it.",
                  color: "sky",
                },
                {
                  number: "03",
                  title: "Always evolving",
                  desc: "Our apps get smarter the more you use them. Your data works for you, not the other way around.",
                  color: "emerald",
                },
              ].map((pillar, i) => {
                const colorMap: Record<string, string> = {
                  violet: "group-hover:text-violet",
                  sky: "group-hover:text-sky",
                  emerald: "group-hover:text-emerald",
                };
                const numColorMap: Record<string, string> = {
                  violet: "text-violet",
                  sky: "text-sky",
                  emerald: "text-emerald",
                };
                const bgMap: Record<string, string> = {
                  violet: "hover:bg-violet/5",
                  sky: "hover:bg-sky/5",
                  emerald: "hover:bg-emerald/5",
                };
                return (
                  <div
                    key={pillar.number}
                    className={`p-7 sm:p-8 ${i < 2 ? "border-b-2 sm:border-b-0 sm:border-r-2 border-border" : ""} ${bgMap[pillar.color]} transition-all duration-300 group cursor-default`}
                  >
                    <span className={`font-mono text-xs ${numColorMap[pillar.color]} font-semibold block mb-4 transition-transform duration-300 group-hover:translate-x-1`}>
                      {pillar.number}
                    </span>
                    <h3 className={`font-display text-lg font-bold mb-2 ${colorMap[pillar.color]} transition-colors duration-300`}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Apps */}
      <section id="apps" className="py-16 sm:py-20 bg-cream border-y-2 border-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
                  002 — Our Apps
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                  The family
                </h2>
              </div>
              <p className="text-muted max-w-sm text-sm leading-relaxed">
                A growing collection of focused, intelligent apps — each one built
                to solve a specific problem exceptionally well.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {apps.map((app, i) => {
              const shadowMap: Record<string, string> = {
                violet: "hover:shadow-[6px_6px_0_0_#7c3aed]",
                teal: "hover:shadow-[6px_6px_0_0_#015770]",
                accent: "hover:shadow-[6px_6px_0_0_#a47764]",
              };
              const tagBg = app.tag === "Live" ? "bg-violet text-white" : "bg-surface text-muted";
              return (
                <ScrollReveal key={app.name} delay={i * 100} animation="scale">
                  <Link
                    href={app.href}
                    className={`group flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 border-2 border-border bg-background hover:-translate-y-1 ${shadowMap[app.color]} active:translate-y-0 active:shadow-none transition-all duration-200`}
                  >
                    <div className="flex items-start sm:items-center gap-5">
                      <span className="font-display text-3xl font-extrabold text-violet/20 group-hover:text-violet transition-colors duration-300">
                        {app.number}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-1 group-hover:text-violet transition-colors duration-200">
                          {app.name}
                        </h3>
                        <p className="text-sm text-muted max-w-md">
                          {app.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                      <span
                        className={`font-mono text-xs font-semibold px-3 py-1.5 border-2 border-border ${tagBg}`}
                      >
                        {app.tag}
                      </span>
                      <svg
                        className="w-5 h-5 text-muted group-hover:text-violet group-hover:translate-x-1 transition-all duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[20%] w-48 h-48 bg-violet/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-[15%] w-64 h-64 bg-sky/5 rounded-full blur-3xl animate-float-delay" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald/5 rounded-full blur-2xl animate-float" />
        </div>
        <ScrollReveal className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
            The future is{" "}
            <span className="italic animate-gradient-text">personal</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-10 text-base">
            We&apos;re building AI tools that feel like magic. Jarvis is just the beginning.
          </p>
          <Link
            href="/jarvis"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-border bg-foreground text-background font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#7c3aed] active:translate-y-0 active:shadow-none transition-all duration-200"
          >
            Try Jarvis Now
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
