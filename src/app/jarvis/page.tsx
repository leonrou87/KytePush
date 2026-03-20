import Link from "next/link";
import type { Metadata } from "next";
import { ScrollReveal } from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Jarvis — Your AI Assistant | KytePush",
  description:
    "Meet Jarvis — a cutting-edge AI assistant that understands you. Chat naturally, get things done, and experience the future of personal AI.",
};

const capabilities = [
  {
    number: "01",
    title: "Natural Conversation",
    desc: "Talk to Jarvis like you'd talk to a friend. It understands context, remembers what matters, and responds with nuance — not canned replies.",
    color: "violet",
  },
  {
    number: "02",
    title: "Real-Time Intelligence",
    desc: "Jarvis thinks on its feet. Ask it anything — from quick facts to deep research — and get thoughtful, accurate answers in seconds.",
    color: "sky",
  },
  {
    number: "03",
    title: "Task Automation",
    desc: "Stop doing the busywork. Jarvis can draft messages, summarize content, plan your day, and handle the tasks that eat up your time.",
    color: "emerald",
  },
  {
    number: "04",
    title: "Personalized Memory",
    desc: "The more you use Jarvis, the better it gets. It learns your preferences, adapts to your style, and becomes uniquely yours over time.",
    color: "amber",
  },
  {
    number: "05",
    title: "Multi-Domain Expertise",
    desc: "Whether it's coding, writing, research, planning, or creative brainstorming — Jarvis brings deep knowledge across every domain.",
    color: "rose",
  },
  {
    number: "06",
    title: "Always Available",
    desc: "Your AI assistant never sleeps. Get help at 3 AM or 3 PM — Jarvis is always on, always ready, always in your corner.",
    color: "teal",
  },
];

const stats = [
  { value: "24/7", label: "Always Available" },
  { value: "∞", label: "Topics Covered" },
  { value: "<1s", label: "Response Time" },
  { value: "100%", label: "Private & Secure" },
];

export default function JarvisHome() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-20 right-[15%] w-72 h-72 bg-violet/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-sky/5 rounded-full blur-3xl animate-float-delay" />
          <div className="absolute top-1/2 right-[30%] w-48 h-48 bg-emerald/5 rounded-full blur-2xl animate-float" />

          {/* Floating geometric shapes */}
          <div className="absolute top-24 right-20 w-16 h-16 border-2 border-violet/20 rotate-12 animate-float hidden lg:block" />
          <div className="absolute top-40 right-48 w-5 h-5 bg-sky/30 rounded-full animate-orbit hidden lg:block" />
          <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-emerald/15 rounded-full animate-float-delay hidden lg:block" />
          <div className="absolute top-32 left-[40%] w-3 h-3 bg-amber/40 animate-orbit-reverse hidden lg:block" />
          <div className="absolute bottom-40 right-[20%] w-8 h-8 border-2 border-rose/15 rotate-45 animate-wiggle hidden lg:block" />
          <div className="absolute top-[60%] left-24 w-4 h-4 bg-violet/25 rounded-full animate-particle hidden lg:block" />

          {/* Dot grid accent */}
          <div className="absolute top-0 right-0 w-48 h-48 dot-grid opacity-20 hidden lg:block" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8 font-mono group"
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-violet/30 bg-violet/5 text-sm font-mono font-medium mb-6 text-violet">
                <span className="w-2 h-2 bg-violet rounded-full animate-pulse" />
                Powered by advanced AI
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.95] mb-6 animate-letter-spread">
              Meet{" "}
              <span className="animate-gradient-text">
                Jarvis
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-4 animate-reveal-delay-2">
              The AI assistant that actually gets you. Not a chatbot — a{" "}
              <span className="text-foreground font-semibold">
                thinking partner
              </span>{" "}
              that understands context, learns your style, and helps you do more than you thought possible.
            </p>
            <p className="text-base text-muted/70 max-w-xl leading-relaxed mb-10 animate-reveal-delay-3">
              Available to everyone. No waitlist. No complicated setup. Just start talking.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 animate-reveal-delay-4">
              <Link
                href="#capabilities"
                className="group inline-flex items-center gap-3 px-7 py-3.5 border-2 border-border bg-foreground text-background font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#7c3aed] active:translate-y-0 active:shadow-none transition-all duration-200"
              >
                Explore Capabilities
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
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-violet/30 text-violet font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#a78bfa] hover:bg-violet/5 active:translate-y-0 active:shadow-none transition-all duration-200"
              >
                See it in action
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y-2 border-border bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x-0 sm:divide-x-2 divide-border">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`py-6 sm:py-8 ${i > 0 ? 'pl-0 sm:pl-8' : ''} text-center sm:text-left`}>
                <div className="font-display text-3xl sm:text-4xl font-extrabold animate-color-cycle" style={{ animationDelay: `${i * 0.5}s` }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted font-mono mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-b-2 border-border overflow-hidden py-2.5 bg-gradient-to-r from-violet/5 via-sky/5 to-emerald/5">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-sm font-mono text-muted">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="flex gap-8 items-center">
              <span>NATURAL LANGUAGE</span>
              <span className="text-violet text-xs">◆</span>
              <span>DEEP RESEARCH</span>
              <span className="text-sky text-xs">◆</span>
              <span>TASK AUTOMATION</span>
              <span className="text-emerald text-xs">◆</span>
              <span>PERSONALIZED</span>
              <span className="text-amber text-xs">◆</span>
              <span>MULTI-DOMAIN</span>
              <span className="text-rose text-xs">◆</span>
              <span>ALWAYS ON</span>
              <span className="text-violet text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* What makes Jarvis different */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ScrollReveal animation="left">
              <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
                001 — The Difference
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
                Not another{" "}
                <span className="relative inline-block">
                  <span className="line-through text-muted/40">chatbot</span>
                </span>
                <br />
                A real{" "}
                <span className="italic relative inline-block">
                  <span className="animate-gradient-text">assistant</span>
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="space-y-4 text-muted leading-relaxed">
                <p className="text-base">
                  Most AI tools feel like talking to a search engine with a personality. Jarvis is
                  different. It&apos;s built to <span className="text-foreground font-medium">understand what you actually need</span> —
                  not just what you literally typed.
                </p>
                <p className="text-sm">
                  Ask it to help you write, research, plan, code, brainstorm, or just think through
                  a problem. Jarvis brings genuine intelligence to every conversation, adapting to your
                  context and delivering results that feel like they came from someone who really knows you.
                </p>
                <div className="flex gap-3 pt-2">
                  <div className="w-12 h-1 bg-violet rounded-full" />
                  <div className="w-8 h-1 bg-sky rounded-full" />
                  <div className="w-6 h-1 bg-emerald rounded-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
                  002 — Capabilities
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                  What Jarvis{" "}
                  <span className="italic text-violet">can do</span>
                </h2>
              </div>
              <p className="text-muted max-w-sm text-sm leading-relaxed">
                Think of the smartest, most versatile assistant you&apos;ve ever worked with.
                Now imagine they never sleep and know everything.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-border">
              {capabilities.map((cap, i) => {
                const colorMap: Record<string, string> = {
                  violet: "text-violet",
                  sky: "text-sky",
                  emerald: "text-emerald",
                  amber: "text-amber",
                  rose: "text-rose",
                  teal: "text-teal",
                };
                const bgColorMap: Record<string, string> = {
                  violet: "group-hover:bg-violet/5",
                  sky: "group-hover:bg-sky/5",
                  emerald: "group-hover:bg-emerald/5",
                  amber: "group-hover:bg-amber/5",
                  rose: "group-hover:bg-rose/5",
                  teal: "group-hover:bg-teal/5",
                };
                const dotColorMap: Record<string, string> = {
                  violet: "bg-violet",
                  sky: "bg-sky",
                  emerald: "bg-emerald",
                  amber: "bg-amber",
                  rose: "bg-rose",
                  teal: "bg-teal",
                };
                return (
                  <div
                    key={cap.number}
                    className={`p-7 sm:p-8 transition-all duration-300 group cursor-default relative ${bgColorMap[cap.color]}
                      ${i < 3 ? "border-b-2 border-border" : i < capabilities.length - 3 ? "border-b-2 border-border" : ""}
                      ${(i + 1) % 3 !== 0 ? "lg:border-r-2 lg:border-border" : ""}
                      ${i % 2 === 0 && i < capabilities.length - 1 ? "sm:border-r-2 sm:border-border lg:border-r-0" : ""}
                      ${(i + 1) % 3 !== 0 ? "lg:border-r-2" : "lg:border-r-0"}
                    `}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`w-2 h-2 rounded-full ${dotColorMap[cap.color]} opacity-60 group-hover:opacity-100 transition-opacity`} />
                      <span className={`font-mono text-xs ${colorMap[cap.color]} font-semibold transition-transform duration-300 group-hover:translate-x-1`}>
                        {cap.number}
                      </span>
                    </div>
                    <h3 className={`font-display text-lg font-bold mb-2 group-hover:${colorMap[cap.color].replace('text-', 'text-')} transition-colors duration-300`}>
                      {cap.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Demo / Conversation mockup */}
      <section id="demo" className="py-16 sm:py-24 bg-cream border-y-2 border-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full dot-grid opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
                003 — Experience
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                See the{" "}
                <span className="italic text-violet">magic</span>
              </h2>
              <p className="text-muted max-w-md mx-auto mt-4 text-sm leading-relaxed">
                Jarvis handles everything from simple questions to complex workflows — naturally.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale">
            <div className="max-w-2xl mx-auto">
              <div className="border-2 border-border bg-background p-1 animate-glow-pulse">
                {/* Chat header */}
                <div className="flex items-center gap-3 px-5 py-3 border-b-2 border-border bg-surface/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet to-sky flex items-center justify-center">
                    <span className="text-white text-xs font-bold">J</span>
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm">Jarvis</span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald font-mono">
                      <span className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse" />
                      Online
                    </span>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-5 space-y-4">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-foreground text-background px-4 py-2.5 text-sm max-w-[80%] border-2 border-border">
                      Help me plan a product launch for next quarter
                    </div>
                  </div>
                  {/* Jarvis response */}
                  <div className="flex justify-start">
                    <div className="bg-violet/5 border-2 border-violet/20 px-4 py-2.5 text-sm max-w-[80%] space-y-2">
                      <p>I&apos;d love to help with that. Let me break this down into phases:</p>
                      <p className="text-muted">
                        <span className="text-violet font-semibold">Phase 1:</span> Market research & positioning
                        <br />
                        <span className="text-sky font-semibold">Phase 2:</span> Content & asset creation
                        <br />
                        <span className="text-emerald font-semibold">Phase 3:</span> Launch execution & tracking
                      </p>
                      <p>Want me to expand on any phase, or should I draft a full timeline with milestones?</p>
                    </div>
                  </div>
                  {/* Typing indicator */}
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1 px-4 py-2">
                      <span className="w-1.5 h-1.5 bg-violet/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-violet/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-violet/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="font-mono text-xs text-muted mb-3 block uppercase tracking-widest">
              004 — Use Cases
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-14">
              Built for{" "}
              <span className="italic text-accent">everyone</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "✍️", title: "Writers & Creators", desc: "Draft content, overcome writer's block, edit for tone and clarity, generate ideas on demand.", color: "violet" },
              { icon: "💼", title: "Professionals", desc: "Summarize meetings, draft emails, prepare presentations, manage complex projects effortlessly.", color: "sky" },
              { icon: "🎓", title: "Students & Researchers", desc: "Break down complex topics, find sources, outline papers, study smarter — not harder.", color: "emerald" },
              { icon: "👨‍💻", title: "Developers", desc: "Debug code, architect solutions, write documentation, automate repetitive dev tasks.", color: "amber" },
              { icon: "🚀", title: "Entrepreneurs", desc: "Validate ideas, draft business plans, analyze markets, move faster than your competition.", color: "rose" },
              { icon: "🧠", title: "Anyone Curious", desc: "Learn anything, explore any topic, have meaningful conversations that expand your thinking.", color: "teal" },
            ].map((useCase, i) => {
              const borderColorMap: Record<string, string> = {
                violet: "hover:border-violet hover:shadow-[6px_6px_0_0_#7c3aed]",
                sky: "hover:border-sky hover:shadow-[6px_6px_0_0_#0ea5e9]",
                emerald: "hover:border-emerald hover:shadow-[6px_6px_0_0_#059669]",
                amber: "hover:border-amber hover:shadow-[6px_6px_0_0_#d97706]",
                rose: "hover:border-rose hover:shadow-[6px_6px_0_0_#e11d48]",
                teal: "hover:border-teal hover:shadow-[6px_6px_0_0_#015770]",
              };
              return (
                <ScrollReveal key={useCase.title} delay={i * 80} animation="scale">
                  <div className={`p-6 border-2 border-border bg-background hover:-translate-y-1 ${borderColorMap[useCase.color]} active:translate-y-0 active:shadow-none transition-all duration-200 cursor-default h-full`}>
                    <span className="text-2xl block mb-3">{useCase.icon}</span>
                    <h3 className="font-display text-lg font-bold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{useCase.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-16 sm:py-20 border-y-2 border-border bg-gradient-to-r from-violet/[0.03] via-sky/[0.03] to-emerald/[0.03]">
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            <span className="font-display text-8xl text-violet/10 absolute -top-8 left-1/2 -translate-x-1/2">&ldquo;</span>
            <blockquote className="font-display text-2xl sm:text-3xl font-bold leading-snug relative z-10 pt-6">
              The best AI assistant isn&apos;t the one with the most features — it&apos;s the one that feels like
              an extension of{" "}
              <span className="italic animate-gradient-text">your own mind</span>.
            </blockquote>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-8 h-1 bg-violet rounded-full" />
              <div className="w-8 h-1 bg-sky rounded-full" />
              <div className="w-8 h-1 bg-emerald rounded-full" />
            </div>
            <p className="text-sm text-muted mt-4 font-mono">The KytePush Philosophy</p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[20%] w-48 h-48 bg-violet/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-[20%] w-64 h-64 bg-sky/5 rounded-full blur-3xl animate-float-delay" />
        </div>
        <ScrollReveal className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            The future of AI
            <br />
            is{" "}
            <span className="animate-gradient-text italic">personal</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-10 text-base leading-relaxed">
            Jarvis isn&apos;t just another AI tool. It&apos;s the assistant you&apos;ve been
            waiting for — intelligent, adaptive, and built for the way you actually work and live.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-border bg-foreground text-background font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#7c3aed] active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              Back to KytePush
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
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
