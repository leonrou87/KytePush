import Link from "next/link";
import type { Metadata } from "next";
import { ScrollReveal } from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Golf Tracker — KytePush",
  description:
    "Smart golf scorekeeping that learns your game. Track rounds, spot patterns, lower your scores.",
};

const features = [
  {
    number: "01",
    title: "Live Scoring",
    desc: "Hole-by-hole scorekeeping with a clean, glanceable interface built for the course — not the couch.",
  },
  {
    number: "02",
    title: "Stats & Trends",
    desc: "Fairways, greens in regulation, putts per round. See how your game is actually trending over time.",
  },
  {
    number: "03",
    title: "Course Library",
    desc: "Search and save courses with full hole-by-hole par and yardage data. Your courses, always ready.",
  },
  {
    number: "04",
    title: "Group Rounds",
    desc: "Play with friends, track everyone's score in one place. Settle debates with data.",
  },
  {
    number: "05",
    title: "Handicap Tracking",
    desc: "Automatic handicap index calculation. Always know where your game stands.",
  },
  {
    number: "06",
    title: "AI Insights",
    desc: "Pattern recognition across your rounds. Find the strokes you're leaving out there.",
  },
];

export default function GolfHome() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="min-h-[75vh] flex items-end pb-16 sm:pb-20 relative overflow-hidden">
        {/* Animated decorative */}
        <div className="absolute top-28 right-16 w-16 h-16 border-2 border-border/10 rounded-full animate-float hidden lg:block" />
        <div className="absolute top-48 right-40 w-5 h-5 bg-teal/15 animate-float-delay hidden lg:block" />
        <div className="absolute bottom-32 left-16 w-10 h-10 border-2 border-teal/10 rotate-45 animate-float hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-6 font-mono group"
            >
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              KytePush
            </Link>

            <div className="animate-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-teal/30 bg-teal/5 text-sm font-mono font-medium mb-6 text-teal">
                <span className="w-2 h-2 bg-teal animate-pulse" />
                KytePush Golf
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.95] mb-6 animate-letter-spread">
              Your game,
              <br />
              <span className="italic text-teal relative">
                elevated
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-teal/30 animate-line-grow" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-8 animate-reveal-delay-2">
              The smartest way to keep score. Track every round, spot
              patterns in your play, and let intelligent insights show you
              where the strokes are hiding.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 animate-reveal-delay-3">
              <button
                disabled
                className="inline-flex items-center gap-3 px-6 py-3 border-2 border-border bg-foreground text-background font-semibold text-sm opacity-50 cursor-not-allowed"
              >
                Start a Round — Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y-2 border-border bg-cream overflow-hidden py-2.5">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-sm font-mono text-muted">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="flex gap-8 items-center">
              <span>SCOREKEEPING</span>
              <span className="text-teal text-xs">◆</span>
              <span>STATS</span>
              <span className="text-teal text-xs">◆</span>
              <span>HANDICAP</span>
              <span className="text-teal text-xs">◆</span>
              <span>COURSES</span>
              <span className="text-teal text-xs">◆</span>
              <span>GROUP PLAY</span>
              <span className="text-teal text-xs">◆</span>
              <span>AI INSIGHTS</span>
              <span className="text-teal text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
                  001 — Features
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                  What&apos;s on the tee
                </h2>
              </div>
              <p className="text-muted max-w-sm text-sm leading-relaxed">
                Built from scratch for golfers who want to understand their game —
                not just record it.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-border">
              {features.map((feature, i) => (
                <div
                  key={feature.number}
                  className={`p-7 sm:p-8 hover:bg-cream transition-all duration-300 group cursor-default
                    ${i < 3 ? "border-b-2 border-border" : i < features.length - 3 ? "border-b-2 border-border" : ""}
                    ${(i + 1) % 3 !== 0 ? "lg:border-r-2 lg:border-border" : ""}
                    ${i % 2 === 0 && i < features.length - 1 ? "sm:border-r-2 sm:border-border lg:border-r-0" : ""}
                    ${(i + 1) % 3 !== 0 ? "lg:border-r-2" : "lg:border-r-0"}
                  `}
                >
                  <span className="font-mono text-xs text-teal font-semibold block mb-4 transition-transform duration-300 group-hover:translate-x-1">
                    {feature.number}
                  </span>
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-teal transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-cream border-t-2 border-border">
        <ScrollReveal className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Ready to <span className="italic text-teal">tee off</span>?
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8 text-sm">
            Golf Tracker is coming soon. We&apos;re building something worth
            waiting for.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-7 py-3.5 border-2 border-border bg-foreground text-background font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#015770] active:translate-y-0 active:shadow-none transition-all duration-200"
          >
            Back to KytePush
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
