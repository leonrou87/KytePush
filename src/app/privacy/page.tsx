import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "How KYTEPUSH collects, uses, and protects your data.",
};

export default function Privacy() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 tech-grid opacity-20" />
      <article className="relative z-10 max-w-3xl mx-auto px-6 py-20 prose-invert">
        <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">// Legal</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight mt-5 mb-2 text-foreground">
          Privacy Policy
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-dim mb-12">
          Effective June 2026 · KYTEPUSH
        </p>

        <div className="space-y-8 text-muted leading-relaxed text-[15px]">
          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">Who we are</h2>
            <p>KYTEPUSH ("we") operates kytepush.com and a family of products on its subdomains. Questions? Email <a href="mailto:kytepush@gmail.com" className="text-accent hover-underline">kytepush@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">What we collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="text-foreground font-medium">Email address</span> — only if you join our waitlist. We use it to send early-access and product updates, and nothing else.</li>
              <li><span className="text-foreground font-medium">Anonymous usage analytics</span> — page views, approximate country, and an anonymized, daily-rotating visitor identifier (a one-way hash; we never store your raw IP). This helps us understand traffic across our products.</li>
              <li><span className="text-foreground font-medium">Advertising data</span> — we display ads via Google AdSense, which may use cookies and device identifiers to serve and measure ads.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">Third-party services</h2>
            <p>We rely on: <span className="text-foreground">Vercel</span> (hosting), <span className="text-foreground">Supabase</span> (database), and <span className="text-foreground">Google AdSense</span> (advertising). Google's use of advertising cookies is governed by Google's policies; you can manage ad personalization at <a href="https://adssettings.google.com" className="text-accent hover-underline" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">Cookies</h2>
            <p>Our own site uses no tracking cookies; our analytics are cookieless and anonymous. Third-party ad partners may set cookies as described above. You can control cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">Your choices</h2>
            <p>To be removed from the waitlist or to request deletion of any data associated with your email, email <a href="mailto:kytepush@gmail.com" className="text-accent hover-underline">kytepush@gmail.com</a> and we'll handle it promptly.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">Changes</h2>
            <p>We may update this policy as the platform evolves. Material changes will be reflected here with a new effective date.</p>
          </section>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-dim">
          <Link href="/" className="hover:text-foreground transition-colors">← Back to site</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms →</Link>
        </div>
      </article>
    </div>
  );
}
