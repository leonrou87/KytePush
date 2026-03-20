import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KytePush — Intelligent Apps for Real Life",
  description:
    "KytePush builds AI-forward applications that solve real problems. Meet Jarvis — your personal AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-border">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 border-2 border-border bg-accent flex items-center justify-center text-xs font-bold text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0_0_#1a1a1a] group-hover:rotate-3">
                K
              </div>
              <span className="font-display text-lg font-bold tracking-tight">
                KytePush
              </span>
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium text-muted">
              <Link
                href="/"
                className="hover-underline hover:text-foreground transition-colors hidden sm:block"
              >
                Home
              </Link>
              <Link
                href="/jarvis"
                className="hover-underline hover:text-foreground transition-colors hidden sm:block"
              >
                Jarvis
              </Link>
              <Link
                href="/jarvis"
                className="inline-flex items-center gap-2 px-5 py-2 border-2 border-border bg-foreground text-background text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#7c3aed] transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1 pt-14">{children}</main>

        {/* Footer */}
        <footer className="border-t-2 border-border bg-cream">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 border-2 border-border bg-accent flex items-center justify-center text-[10px] font-bold text-white">
                    K
                  </div>
                  <span className="font-display font-bold text-sm">KytePush</span>
                </div>
                <p className="text-xs text-muted max-w-xs">
                  Intelligent apps for real life. AI-forward, human-centered.
                </p>
              </div>
              <div className="flex gap-10 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-xs uppercase tracking-wider">Apps</h4>
                  <div className="flex flex-col gap-1.5 text-muted text-sm">
                    <Link href="/jarvis" className="hover-underline hover:text-foreground transition-colors w-fit">
                      Jarvis
                    </Link>
                    <Link href="/golf" className="hover-underline hover:text-foreground transition-colors w-fit">
                      Golf Tracker
                    </Link>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-xs uppercase tracking-wider">Company</h4>
                  <div className="flex flex-col gap-1.5 text-muted text-sm">
                    <Link href="/" className="hover-underline hover:text-foreground transition-colors w-fit">
                      About
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
              <p>&copy; {new Date().getFullYear()} KytePush</p>
              <p className="font-mono">Built with intent.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
