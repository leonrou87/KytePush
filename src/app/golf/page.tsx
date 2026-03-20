import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Tracker — KytePush",
  description:
    "Smart golf scorekeeping that learns your game. Track rounds, analyze trends, and lower your handicap.",
};

export default function GolfHome() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow [animation-delay:2s]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm font-medium mb-8">
            <span className="text-lg">⛳</span>
            KytePush Golf
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Your game,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              elevated
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            The smartest way to keep score. Track every round, every hole, every
            shot — and let intelligent insights help you find the strokes
            you&apos;ve been leaving on the course.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              disabled
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-sm opacity-80 cursor-not-allowed"
            >
              Start a Round — Coming Soon
            </button>
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full border border-white/10 text-gray-300 font-semibold text-sm transition-all hover:border-white/25 hover:text-white"
            >
              Back to KytePush
            </Link>
          </div>
        </div>
      </section>

      {/* Features preview */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              What&apos;s on the tee
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Golf Tracker is being built from the ground up with features that
              actually matter to your game.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Live Scoring",
                desc: "Hole-by-hole scorekeeping with a clean, glanceable interface designed for the course.",
                icon: "🏌️",
              },
              {
                title: "Stats & Trends",
                desc: "See your fairways hit, GIR, putts per round, and how your game is trending over time.",
                icon: "📊",
              },
              {
                title: "Course Library",
                desc: "Search and save courses with full hole-by-hole par and yardage info.",
                icon: "🗺️",
              },
              {
                title: "Group Rounds",
                desc: "Play with friends and track everyone's score in one place. Bragging rights included.",
                icon: "👥",
              },
              {
                title: "Handicap Tracking",
                desc: "Automatic handicap calculation so you always know where your game stands.",
                icon: "🎯",
              },
              {
                title: "AI Insights",
                desc: "Smart analysis of your rounds to surface patterns and suggest where to focus your practice.",
                icon: "🧠",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <span className="text-2xl mb-3 block">{feature.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
