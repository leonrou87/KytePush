import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { CookieConsent } from "./components/CookieConsent";
import { Mark } from "./components/Mark";
import { domains, products } from "./fleet";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["SOFT", "WONK", "opsz"] });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kytepush.com"),
  title: {
    default: "KytePush — ideas, given lift",
    template: "%s — KytePush",
  },
  description:
    "KytePush is an applied AI lab that pushes ideas all the way to finished products: eighteen so far across sports, media, everyday life, golf, markets and personal assistants, all built on one shared platform.",
  keywords: ["KytePush", "AI lab", "AI apps", "applied AI", "AI-native products", "app studio"],
  applicationName: "KytePush",
  authors: [{ name: "KytePush" }],
  openGraph: {
    type: "website",
    siteName: "KytePush",
    title: "KytePush — ideas, given lift",
    description: "An applied AI lab pushing ideas all the way to finished products, across six domains on one shared platform.",
    url: "https://kytepush.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "KytePush — ideas, given lift",
    description: "An applied AI lab pushing ideas all the way to finished products.",
  },
};

const liveCount = products.filter((p) => p.status === "live").length;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-[#1d1850]">
          Skip to content
        </a>

        <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-[#0f0c2a]/75 via-[#0f0c2a]/35 to-transparent">
          <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-5 sm:px-10">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="transition-transform duration-700 group-hover:-translate-y-0.5 group-hover:-rotate-6"><Mark className="h-6 w-6" /></span>
              <span className="font-display text-[1.35rem] text-ink">KytePush</span>
            </Link>
            <div className="glass flex items-center gap-1 rounded-full p-1 text-[14px] text-ink-soft">
              <Link href="/#work" className="hidden rounded-full px-4 py-2 transition-colors hover:text-ink sm:block">Work</Link>
              <Link href="/#platform" className="hidden rounded-full px-4 py-2 transition-colors hover:text-ink sm:block">Platform</Link>
              <Link href="/#rules" className="hidden rounded-full px-4 py-2 transition-colors hover:text-ink md:block">How we work</Link>
              <Link href="/#access" className="rounded-full bg-white px-4 py-2 font-medium text-[#1d1850] transition-colors hover:bg-gold">
                Early access
              </Link>
            </div>
          </div>
        </nav>

        <main id="main" className="relative z-10 flex-1 pt-[4.5rem]">{children}</main>

        <CookieConsent />

        <Script
          id="adsbygoogle-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6716195888944928"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script src="/track.js" strategy="afterInteractive" />

        <footer className="relative z-10 border-t border-hairline bg-night-deep/80 backdrop-blur-xl">
          <div className="mx-auto max-w-[90rem] px-5 pt-20 pb-10 sm:px-10">
            <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
              <div>
                <div className="flex items-center gap-2.5">
                  <Mark className="h-6 w-6" />
                  <span className="font-display text-[1.35rem]">KytePush</span>
                </div>
                <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink-soft">
                  An applied AI lab. {liveCount} products live across {domains.length} domains, all built on one platform.
                </p>
              </div>
              <FooterCol title="Live now">
                {products.filter((p) => p.status === "live").slice(0, 7).map((p) => (
                  <a key={p.name} href={p.href!} className="hover-underline w-fit">{p.name}</a>
                ))}
                <Link href="/#work" className="hover-underline w-fit text-gold">All work</Link>
              </FooterCol>
              <FooterCol title="Domains">
                {domains.map((d) => (
                  <Link key={d.id} href={`/#${d.id}`} className="hover-underline w-fit">{d.name}</Link>
                ))}
              </FooterCol>
              <FooterCol title="Company">
                <Link href="/#platform" className="hover-underline w-fit">Platform</Link>
                <Link href="/#rules" className="hover-underline w-fit">How we work</Link>
                <Link href="/privacy" className="hover-underline w-fit">Privacy</Link>
                <Link href="/terms" className="hover-underline w-fit">Terms</Link>
                <Link href="/analytics" className="hover-underline w-fit">Analytics</Link>
              </FooterCol>
            </div>
            <p className="wordmark mt-24 select-none text-center text-[23vw] md:text-[21vw] 2xl:text-[19rem]" aria-hidden="true">KytePush</p>
            <div className="mt-10 flex flex-col justify-between gap-3 border-t border-hairline pt-6 text-[13px] text-ink-faint sm:flex-row">
              <p>© {new Date().getFullYear()} KytePush</p>
              <p>Made mostly by talking to machines.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[13px] text-ink-faint">{title}</h4>
      <div className="mt-4 flex flex-col gap-2.5 text-[15px] text-ink-soft">{children}</div>
    </div>
  );
}
