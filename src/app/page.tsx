import Image from "next/image";
import { HeroTitle } from "./components/HeroTitle";
import { Silk } from "./components/Silk";
import { Spotlight } from "./components/Spotlight";
import { WordReveal } from "./components/WordReveal";
import { WaitlistForm } from "./components/WaitlistForm";
import { domains, products, statusLabel } from "./fleet";

const live = products.filter((p) => p.status === "live").length;

const STATEMENT =
  "KytePush is an applied AI lab. We take an idea and push it all the way to a finished product, then keep it flying. Eighteen so far, for fans and readers, families and golfers, traders and the endlessly curious. Every one of them is built on the same platform, which is why the next one arrives so quickly.";

const rails: { title: string; body: string; icon: React.ReactNode }[] = [
  {
    title: "Its own address, the day it ships",
    body: "Every product gets a kytepush.com address with SSL the moment it goes live. No tickets, no waiting on DNS.",
    icon: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.6 2.4 3.6 5.4 3.6 8.5s-1 6.1-3.6 8.5c-2.6-2.4-3.6-5.4-3.6-8.5s1-6.1 3.6-8.5z" /></>,
  },
  {
    title: "One data backbone, fenced per app",
    body: "A shared Postgres core with row-level security, so a new app starts with a real database and its data never leaks into another's.",
    icon: <><ellipse cx="12" cy="6" rx="7.5" ry="2.8" /><path d="M4.5 6v12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" /></>,
  },
  {
    title: "Sign-in that suits the person",
    body: "Phone number and PIN for a family or a golf group, Google for everyone else. Nobody is asked for more than the app needs.",
    icon: <><rect x="6.5" y="10.5" width="11" height="9.5" rx="2" /><path d="M9 10.5V8a3 3 0 0 1 6 0v2.5" /></>,
  },
  {
    title: "Data that refreshes itself",
    body: "Scheduled jobs pull scores, odds, news and prices around the clock, so every product wakes up already current.",
    icon: <><path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" /><path d="M19.5 4.5v4h-4" /></>,
  },
  {
    title: "To the App Store from the same code",
    body: "One codebase ships to the web, iPhone and Android, with the store submissions scripted end to end.",
    icon: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
  },
  {
    title: "Measured and answerable from day one",
    body: "Privacy-respecting analytics across the whole suite on one dashboard, plus a real support inbox behind every app.",
    icon: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  },
];

const rules = [
  {
    title: "Start from a sentence",
    body: "Every product here began as one plain sentence about a person and a problem. AI does most of the building. People choose the problem, set the taste and decide when it’s good enough to ship.",
  },
  {
    title: "Publish the scoreboard",
    body: "When a product makes predictions, its record is public, losses included. If a model can’t beat the market, we say so on the page instead of hiding it in a footnote.",
  },
  {
    title: "Small, specific, finished",
    body: "Each app does one job for one kind of person. A babysitter’s calendar, a golf trip’s ledger, a neutral read on the news. Narrow enough to get right, finished enough to use today.",
  },
];

export default function Home() {
  return (
    <div className="-mt-[4.5rem] flex flex-col">
      <div className="sky-dusk" aria-hidden="true" />
      <div className="sky-night" aria-hidden="true" />
      <Silk />

      {/* Hero */}
      <section data-silk="hero" className="no-callout relative flex h-[100svh] min-h-[560px] flex-col items-center px-5 text-center">
        <div className="mt-[19svh] sm:mt-[17svh]">
          <HeroTitle lines={["Ideas,", "given lift."]} />
          <p className="lift-1 legible mx-auto mt-7 max-w-[34rem] text-[17px] leading-relaxed text-ink sm:text-[19px]">
            An applied AI lab with {live} products in the air and more on the way.
          </p>
        </div>

        <div className="lift-3 legible absolute inset-x-0 bottom-[7svh] flex flex-col items-center gap-3 text-[14px] text-ink">
          <span className="breathe grid h-9 w-9 place-items-center rounded-full border border-white/40">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          <span>
            Press and hold anywhere to push
            <span className="hidden sm:inline"> (or hold the space bar)</span>
          </span>
        </div>
      </section>

      {/* Statement */}
      <section data-silk="statement" className="relative px-5 py-[26svh] sm:px-10">
        <WordReveal
          text={STATEMENT}
          className="font-display mx-auto max-w-[60rem] text-[clamp(1.9rem,4.3vw,4rem)] leading-[1.12] text-ink"
        />
      </section>

      {/* Work */}
      <section id="work" className="relative scroll-mt-8 px-5 sm:px-10">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="font-display max-w-[52rem] text-[clamp(2.8rem,6vw,6rem)] leading-[0.98] text-ink">
            Eighteen products. Six worlds.
          </h2>
          <p className="mt-6 max-w-[32rem] text-[17px] leading-relaxed text-ink-soft">
            Watch the silk change as you read. Live products open in a click. The rest are in the
            lab, being built and tested in the open.
          </p>
        </div>

        <div className="mx-auto mt-24 max-w-[90rem] xl:pr-[21vw]">
          {domains.map((d) => {
            const list = products.filter((p) => p.domain === d.id);
            return (
              <section
                key={d.id}
                id={d.id}
                data-silk={d.id}
                className="grid scroll-mt-24 gap-10 border-t border-hairline py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:py-28"
              >
                <div className="md:sticky md:top-32 md:self-start">
                  <p className="flex items-center gap-2.5 text-[14px] text-ink-soft">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.color, boxShadow: `0 0 16px ${d.color}` }} />
                    {list.length} {list.length === 1 ? "product" : "products"}
                  </p>
                  <h3 className="font-display mt-4 text-[clamp(2.8rem,5.6vw,5.8rem)] leading-[0.95] text-ink">{d.name}</h3>
                  <p className="mt-5 max-w-[24rem] text-[17px] leading-relaxed text-ink-soft">{d.blurb}</p>
                </div>
                <div>
                  {list.map((p) => {
                    const inner = (
                      <>
                        {p.shot && (
                          <div className="shot-lift mb-8">
                            <div className="shot-frame" style={{ "--glow-c": d.color } as React.CSSProperties}>
                              <Image src={p.shot} alt={`${p.name}, live at ${p.host}`} width={1120} height={700} sizes="(min-width: 768px) 45vw, 92vw" />
                            </div>
                          </div>
                        )}
                        <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                          <span className="product-name font-display text-[clamp(2rem,3.4vw,3rem)] leading-none tracking-[-0.03em] text-ink">
                            {p.name}
                          </span>
                          {p.href ? (
                            <span className="text-[14px]" style={{ color: d.color }}>
                              {p.host ?? "kytepush.com" + p.href} <span className="product-go">↗</span>
                            </span>
                          ) : (
                            <span className="glass rounded-full px-3 py-1 text-[13px] text-ink-soft">{statusLabel[p.status]}</span>
                          )}
                        </span>
                        <span className="mt-3 block max-w-[36rem] text-[16.5px] leading-relaxed text-ink-soft">{p.line}</span>
                      </>
                    );
                    return p.href ? (
                      <a key={p.name} href={p.href} className="product-card group">{inner}</a>
                    ) : (
                      <div key={p.name} className="product-card">{inner}</div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* Platform */}
      <section id="platform" data-silk="platform" className="relative scroll-mt-8 px-5 py-32 sm:px-10 sm:py-44">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="font-display max-w-[58rem] text-[clamp(2.8rem,6vw,6rem)] leading-[0.98] text-ink">
            One push. Everything after it is lift.
          </h2>
          <p className="mt-7 max-w-[36rem] text-[18px] leading-relaxed text-ink-soft">
            The KytePush platform is what makes a small lab fast. Hosting, data, sign-in,
            background jobs, analytics and app-store delivery are solved once and shared by every
            product, so the twentieth launch costs a fraction of the first.
          </p>
          <Spotlight>
          <dl className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rails.map((r) => (
              <div key={r.title} data-spot className="glass rounded-[1.75rem] p-8">
                <svg className="h-7 w-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {r.icon}
                </svg>
                <dt className="mt-6 text-[19px] font-semibold leading-snug text-ink">{r.title}</dt>
                <dd className="mt-2.5 text-[15.5px] leading-relaxed text-ink-soft">{r.body}</dd>
              </div>
            ))}
          </dl>
          </Spotlight>
        </div>
      </section>

      {/* How we work */}
      <section id="rules" data-silk="rules" className="relative scroll-mt-8 px-5 py-32 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="font-display max-w-[52rem] text-[clamp(2.8rem,6vw,6rem)] leading-[0.98] text-ink">
            How a lab this small ships this much.
          </h2>
          <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
            {rules.map((r) => (
              <div key={r.title}>
                <div className="h-px w-full bg-gradient-to-r from-white/60 to-white/0" />
                <h3 className="font-display mt-7 text-[2rem] leading-tight text-ink">{r.title}</h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early access */}
      <section id="access" data-silk="access" className="relative scroll-mt-8 px-5 pt-24 pb-40 sm:px-10 sm:pb-52">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center text-center">
          <h2 className="font-display text-[clamp(3rem,7.4vw,7.2rem)] leading-[0.95] text-ink">
            Be there for the next lift-off.
          </h2>
          <p className="mt-7 max-w-[34rem] text-[18px] leading-relaxed text-ink-soft">
            A new product leaves the lab every few weeks. Leave your email for early access to
            each one. Got an idea worth pushing? Tell us when you reply.
          </p>
          <div className="mt-10 flex w-full justify-center">
            <WaitlistForm source="home-access" />
          </div>
        </div>
      </section>
    </div>
  );
}
