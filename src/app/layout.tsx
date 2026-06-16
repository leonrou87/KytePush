import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "KYTEPUSH — The house of intelligent things",
  description:
    "KYTEPUSH is a house of AI-native products. One world, a family of intelligent things — built for people who want their software to feel like the future.",
};

/* The kite — house mark */
function Kite({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 2.5 L20 9 L12 21.5 L4 9 Z" />
      <path d="M12 2.5 V21.5 M4 9 H20" strokeWidth={1} opacity="0.6" />
      <path d="M12 21.5 l-2.4 1.6 M12 21.5 l2.4 1.6" strokeWidth={1} opacity="0.5" />
    </svg>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col grain relative">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="text-accent transition-transform duration-500 group-hover:rotate-[12deg]">
                <Kite className="w-6 h-6" />
              </span>
              <span className="font-sans text-[15px] font-semibold tracking-[0.32em] text-foreground">
                KYTEPUSH
              </span>
            </Link>
            <div className="flex items-center gap-7 text-[13px] font-medium text-muted">
              <Link href="/#collection" className="hover-underline hover:text-foreground transition-colors hidden sm:block tracking-wide">
                Collection
              </Link>
              <Link href="/#ethos" className="hover-underline hover:text-foreground transition-colors hidden sm:block tracking-wide">
                Ethos
              </Link>
              <Link
                href="/#collection"
                className="group inline-flex items-center gap-2 px-5 py-2 border border-accent/40 text-accent text-[13px] font-medium tracking-wide hover:bg-accent hover:text-background transition-all duration-300"
              >
                Enter
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1 pt-16 relative z-10">{children}</main>

        {/* Footer */}
        <footer className="border-t border-border bg-background-2 relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent"><Kite className="w-5 h-5" /></span>
                  <span className="font-sans font-semibold text-sm tracking-[0.32em]">KYTEPUSH</span>
                </div>
                <p className="font-display text-2xl leading-snug text-foreground/90 max-w-sm">
                  The house of{" "}
                  <span className="italic text-accent">intelligent</span> things.
                </p>
                <p className="text-xs text-muted mt-4 max-w-xs leading-relaxed">
                  A family of AI-native products, built under one roof for people who
                  want their software to feel like the future.
                </p>
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-dim mb-4">The Collection</h4>
                <div className="flex flex-col gap-2.5 text-sm text-muted">
                  <Link href="/jarvis" className="hover-underline hover:text-foreground transition-colors w-fit">Jarvis</Link>
                  <a href="https://curated.kytepush.com" className="hover-underline hover:text-foreground transition-colors w-fit">Curated</a>
                  <a href="https://faultlines.kytepush.com" className="hover-underline hover:text-foreground transition-colors w-fit">Fault Lines</a>
                  <Link href="/#collection" className="hover-underline hover:text-accent text-accent/80 transition-colors w-fit">View all →</Link>
                </div>
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-dim mb-4">House</h4>
                <div className="flex flex-col gap-2.5 text-sm text-muted">
                  <Link href="/#ethos" className="hover-underline hover:text-foreground transition-colors w-fit">Ethos</Link>
                  <Link href="/#collection" className="hover-underline hover:text-foreground transition-colors w-fit">Products</Link>
                </div>
              </div>
            </div>
            <div className="mt-14 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-muted-dim">
              <p className="font-mono tracking-wide">© {new Date().getFullYear()} KYTEPUSH — EST. MMXXVI</p>
              <p className="font-mono tracking-[0.2em] uppercase">Built like the future</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
