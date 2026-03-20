import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "KytePush — AI-Forward Apps & Solutions",
  description:
    "KytePush builds intelligent applications that push the boundaries of what's possible. AI-forward solutions for a smarter tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-sm font-bold text-white transition-transform group-hover:scale-110">
                K
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Kyte<span className="text-cyan-400">Push</span>
              </span>
            </Link>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link
                href="/"
                className="hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/golf"
                className="hover:text-white transition-colors"
              >
                Golf Tracker
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-1 pt-16">{children}</main>
        <footer className="border-t border-white/5 bg-gray-950/50">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} KytePush. All rights reserved.</p>
            <p className="font-mono text-xs text-gray-600">
              Built with AI. Pushed by ambition.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
