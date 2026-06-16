import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KYTEPUSH — An AI workhouse",
  description:
    "KYTEPUSH is an AI workhouse engineering a fleet of intelligent products that push what software can do. Ten systems online, more shipping every week.",
};

/* House mark — the kite */
function Kite({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 2.5 L20 9 L12 21.5 L4 9 Z" />
      <path d="M12 2.5 V21.5 M4 9 H20" strokeWidth={0.9} opacity="0.55" />
      <path d="M12 21.5 l-2.2 1.5 M12 21.5 l2.2 1.5" strokeWidth={0.9} opacity="0.5" />
    </svg>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="text-accent transition-transform duration-500 group-hover:rotate-[14deg]">
                <Kite className="w-[22px] h-[22px]" />
              </span>
              <span className="font-sans text-[15px] font-bold tracking-[0.34em] text-foreground">KYTEPUSH</span>
            </Link>
            <div className="flex items-center gap-7 text-[12px] font-medium text-muted">
              <Link href="/#fleet" className="hover-underline hover:text-foreground transition-colors hidden sm:block tracking-[0.18em] uppercase">Fleet</Link>
              <Link href="/#mission" className="hover-underline hover:text-foreground transition-colors hidden sm:block tracking-[0.18em] uppercase">Mission</Link>
              <span className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted-dim uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-live pulse-dot" />
                Systems online
              </span>
              <Link
                href="/#fleet"
                className="group inline-flex items-center gap-2 px-5 py-2 border border-accent/40 text-accent text-[12px] font-semibold tracking-[0.14em] uppercase hover:bg-accent hover:text-background transition-all duration-300"
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
            <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-accent"><Kite className="w-5 h-5" /></span>
                  <span className="font-sans font-bold text-sm tracking-[0.34em]">KYTEPUSH</span>
                </div>
                <p className="font-display text-2xl font-extrabold uppercase tracking-tight leading-[1.05] text-foreground max-w-sm">
                  An AI workhouse<br /><span className="text-accent">engineering the future.</span>
                </p>
                <p className="text-xs text-muted mt-5 max-w-xs leading-relaxed font-mono tracking-wide">
                  A fleet of intelligent products, built under one roof and shipped at pace.
                </p>
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-dim mb-4">The Fleet</h4>
                <div className="flex flex-col gap-2.5 text-sm text-muted">
                  <Link href="/jarvis" className="hover-underline hover:text-foreground transition-colors w-fit">Jarvis</Link>
                  <a href="https://curated.kytepush.com" className="hover-underline hover:text-foreground transition-colors w-fit">Curated</a>
                  <a href="https://faultlines.kytepush.com" className="hover-underline hover:text-foreground transition-colors w-fit">Fault Lines</a>
                  <Link href="/#fleet" className="hover-underline hover:text-accent text-accent/80 transition-colors w-fit">View all →</Link>
                </div>
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-dim mb-4">Company</h4>
                <div className="flex flex-col gap-2.5 text-sm text-muted">
                  <Link href="/#mission" className="hover-underline hover:text-foreground transition-colors w-fit">Mission</Link>
                  <Link href="/#fleet" className="hover-underline hover:text-foreground transition-colors w-fit">Products</Link>
                </div>
              </div>
            </div>
            <div className="mt-14 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-muted-dim font-mono uppercase tracking-[0.2em]">
              <p>© {new Date().getFullYear()} KYTEPUSH — EST. MMXXVI</p>
              <p>Engineering intelligence · 0.000°N 0.000°W</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
