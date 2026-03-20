import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KytePush — Intelligent Apps for Real Life",
  description:
    "KytePush builds AI-forward applications that solve real problems. Smart tools, thoughtfully designed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-border">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 border-2 border-border bg-accent flex items-center justify-center text-sm font-bold text-white transition-transform group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0_0_#1a1a1a]">
                K
              </div>
              <span className="text-lg font-semibold tracking-tight">
                KytePush
              </span>
            </Link>
            <div className="flex items-center gap-8 text-sm font-medium text-muted">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/golf"
                className="hover:text-foreground transition-colors"
              >
                Golf Tracker
              </Link>
              <Link
                href="/golf"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 border-2 border-border bg-foreground text-background text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#a47764] transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1 pt-16">{children}</main>

        {/* Footer */}
        <footer className="border-t-2 border-border bg-cream">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 border-2 border-border bg-accent flex items-center justify-center text-xs font-bold text-white">
                    K
                  </div>
                  <span className="font-semibold">KytePush</span>
                </div>
                <p className="text-sm text-muted max-w-xs">
                  Building intelligent apps that solve real problems.
                  AI-forward, human-centered.
                </p>
              </div>
              <div className="flex gap-12 text-sm">
                <div>
                  <h4 className="font-semibold mb-3">Apps</h4>
                  <div className="flex flex-col gap-2 text-muted">
                    <Link href="/golf" className="hover:text-foreground transition-colors">
                      Golf Tracker
                    </Link>
                    <span className="text-muted/50">More soon</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Company</h4>
                  <div className="flex flex-col gap-2 text-muted">
                    <Link href="/" className="hover:text-foreground transition-colors">
                      About
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
              <p>&copy; {new Date().getFullYear()} KytePush</p>
              <p className="font-mono">Built with intent.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
