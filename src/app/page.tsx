import Link from "next/link";

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
      <section className="min-h-[90vh] flex items-end pb-20 sm:pb-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-24 right-12 w-24 h-24 border-2 border-border/10 rotate-12 hidden lg:block" />
        <div className="absolute top-48 right-32 w-8 h-8 bg-accent/20 rotate-45 hidden lg:block" />
        <div className="absolute bottom-32 left-12 w-16 h-16 border-2 border-accent/20 rounded-full hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="animate-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border bg-cream text-sm font-mono font-medium mb-8">
                <span className="w-2 h-2 bg-accent" />
                AI-forward since day one
              </div>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 animate-reveal-delay-1">
              We build apps
              <br />
              that{" "}
              <span className="italic text-accent">matter</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted max-w-xl leading-relaxed mb-10 animate-reveal-delay-2">
              KytePush is a studio building intelligent applications for real
              life. We put AI where it&apos;s useful — not where it&apos;s trendy.
              Practical tools, thoughtfully made.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-reveal-delay-3">
              <Link
                href="/golf"
                className="group inline-flex items-center gap-3 px-7 py-3.5 border-2 border-border bg-foreground text-background font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#a47764] transition-all"
              >
                See our apps
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <a
                href="#apps"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-border text-foreground font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#1a1a1a] transition-all"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="border-y-2 border-border bg-cream overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-sm font-mono text-muted">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>INTELLIGENT APPS</span>
              <span className="text-accent">◆</span>
              <span>REAL SOLUTIONS</span>
              <span className="text-accent">◆</span>
              <span>AI-FORWARD</span>
              <span className="text-accent">◆</span>
              <span>HUMAN-CENTERED</span>
              <span className="text-accent">◆</span>
              <span>THOUGHTFULLY BUILT</span>
              <span className="text-accent">◆</span>
              <span>KYTEPUSH</span>
              <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* What we believe */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-sm text-muted mb-4 block">
                (001) — Philosophy
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
                AI should be
                <br />
                <span className="italic text-accent">invisible</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted leading-relaxed">
              <p className="text-lg">
                The best technology disappears into the experience. You
                don&apos;t think about it — you just get more done, with less
                friction, in less time.
              </p>
              <p>
                That&apos;s our north star. Every KytePush app uses artificial
                intelligence under the hood, but you&apos;ll never feel like
                you&apos;re &ldquo;using AI.&rdquo; You&apos;ll just feel like
                the app knows what you need.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-3 gap-0 mt-20 border-2 border-border">
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
                className={`p-8 sm:p-10 ${i < 2 ? "border-b-2 sm:border-b-0 sm:border-r-2 border-border" : ""} hover:bg-cream transition-colors group`}
              >
                <span className="font-mono text-xs text-accent font-semibold block mb-6">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps */}
      <section id="apps" className="py-24 sm:py-32 bg-cream border-y-2 border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-sm text-muted mb-4 block">
                (002) — Our Apps
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
                The family
              </h2>
            </div>
            <p className="text-muted max-w-sm text-sm leading-relaxed">
              A growing collection of focused, intelligent apps — each one built
              to solve a specific problem exceptionally well.
            </p>
          </div>

          <div className="space-y-4">
            {apps.map((app) => (
              <Link
                key={app.name}
                href={app.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-8 border-2 border-border bg-background hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#a47764] transition-all"
              >
                <div className="flex items-start sm:items-center gap-6">
                  <span className="font-mono text-3xl font-bold text-accent/30 group-hover:text-accent transition-colors">
                    {app.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold mb-1 group-hover:text-accent transition-colors">
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
                    className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            The future is <span className="italic text-accent">useful</span>
          </h2>
          <p className="text-muted max-w-md mx-auto mb-10">
            We&apos;re just getting started. New apps, new ideas, new ways to
            make your life a little easier.
          </p>
          <Link
            href="/golf"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-border bg-foreground text-background font-semibold hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#a47764] transition-all"
          >
            Try Golf Tracker
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
