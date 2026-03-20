import Link from "next/link";
import { ScrollReveal } from "./components/ScrollReveal";

const apps = [
  {
    name: "Golf Tracker",
    description:
      "Smart scorekeeping that actually helps your game. Track rounds, spot patterns, play better.",
    href: "/golf",
    tag: "Live",
    number: "01",
  },
  {
    name: "Coming Soon",
    description:
      "The next KytePush app is in the works. We're always building.",
    href: "#",
    tag: "2026",
    number: "02",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-end pb-16 sm:pb-20 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-20 right-12 w-20 h-20 border-2 border-border/10 rotate-12 animate-float hidden lg:block" />
        <div className="absolute top-40 right-36 w-6 h-6 bg-accent/20 rotate-45 animate-float-delay hidden lg:block" />
        <div className="absolute bottom-24 left-12 w-14 h-14 border-2 border-accent/15 rounded-full animate-float hidden lg:block" />
        <div className="absolute top-32 left-1/2 w-3 h-3 bg-teal/20 animate-float-delay hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="animate-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-border bg-cream text-sm font-mono font-medium mb-6">
                <span className="w-2 h-2 bg-accent animate-pulse" />
                AI-forward since day one
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.95] mb-6 animate-letter-spread">
              We build apps
              <br />
              that{" "}
              <span className="italic text-accent relative">
                matter
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent/30 animate-line-grow" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-8 animate-reveal-delay-2">
              KytePush is a studio building intelligent applications for real
              life. We put AI where it&apos;s useful — not where it&apos;s trendy.
              Practical tools, thoughtfully made.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 animate-reveal-delay-3">
              <Link
                href="/golf"
                className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-border bg-foreground text-background font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#a47764] active:translate-y-0 active:shadow-none transition-all duration-200"
              >
                See our apps
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
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="border-y-2 border-border bg-cream overflow-hidden py-2.5">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-sm font-mono text-muted">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="flex gap-8 items-center">
              <span>INTELLIGENT APPS</span>
              <span className="text-accent text-xs">◆</span>
              <span>REAL SOLUTIONS</span>
              <span className="text-accent text-xs">◆</span>
              <span>AI-FORWARD</span>
              <span className="text-accent text-xs">◆</span>
              <span>HUMAN-CENTERED</span>
              <span className="text-accent text-xs">◆</span>
              <span>THOUGHTFULLY BUILT</span>
              <span className="text-accent text-xs">◆</span>
              <span>KYTEPUSH</span>
              <span className="text-accent text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* What we believe */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ScrollReveal animation="left">
              <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
                001 — Philosophy
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
                AI should be{" "}
                <span className="italic text-accent relative inline-block">
                  invisible
                  <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-accent/30" />
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
                },
                {
                  number: "02",
                  title: "Built for people",
                  desc: "Tools should feel obvious the first time you touch them. If it needs a tutorial, we redesign it.",
                },
                {
                  number: "03",
                  title: "Always evolving",
                  desc: "Our apps get smarter the more you use them. Your data works for you, not the other way around.",
                },
              ].map((pillar, i) => (
                <div
                  key={pillar.number}
                  className={`p-7 sm:p-8 ${i < 2 ? "border-b-2 sm:border-b-0 sm:border-r-2 border-border" : ""} hover:bg-cream transition-all duration-300 group cursor-default`}
                >
                  <span className="font-mono text-xs text-accent font-semibold block mb-4 transition-transform duration-300 group-hover:translate-x-1">
                    {pillar.number}
                  </span>
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
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
            {apps.map((app, i) => (
              <ScrollReveal key={app.name} delay={i * 100} animation="scale">
                <Link
                  href={app.href}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 border-2 border-border bg-background hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#a47764] active:translate-y-0 active:shadow-none transition-all duration-200"
                >
                  <div className="flex items-start sm:items-center gap-5">
                    <span className="font-display text-3xl font-extrabold text-accent/20 group-hover:text-accent transition-colors duration-300">
                      {app.number}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-1 group-hover:text-accent transition-colors duration-200">
                        {app.name}
                      </h3>
                      <p className="text-sm text-muted max-w-md">
                        {app.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <span
                      className={`font-mono text-xs font-semibold px-3 py-1.5 border-2 border-border ${
                        app.tag === "Live"
                          ? "bg-accent text-white"
                          : "bg-surface text-muted"
                      }`}
                    >
                      {app.tag}
                    </span>
                    <svg
                      className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200"
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <ScrollReveal className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            The future is <span className="italic text-accent">useful</span>
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8 text-sm">
            We&apos;re just getting started. New apps, new ideas, new ways to
            make your life a little easier.
          </p>
          <Link
            href="/golf"
            className="inline-flex items-center gap-3 px-7 py-3.5 border-2 border-border bg-foreground text-background font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#a47764] active:translate-y-0 active:shadow-none transition-all duration-200"
          >
            Try Golf Tracker
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
