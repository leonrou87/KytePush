import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of KYTEPUSH.",
};

export default function Terms() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 tech-grid opacity-20" />
      <article className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">// Legal</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight mt-5 mb-2 text-foreground">
          Terms of Use
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-dim mb-12">
          Effective June 2026 · KYTEPUSH
        </p>

        <div className="space-y-8 text-muted leading-relaxed text-[15px]">
          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">Acceptance</h2>
            <p>By accessing kytepush.com or any KYTEPUSH product, you agree to these terms. If you don't agree, please don't use the site.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">Use of the service</h2>
            <p>You may browse our site and join our waitlist for personal, lawful purposes. You agree not to misuse the service, attempt to disrupt it, or access it through automated means that place an unreasonable load on our infrastructure.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">Intellectual property</h2>
            <p>The KYTEPUSH name, marks, design, and content are owned by KYTEPUSH. Individual products may have their own terms presented within those products.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">No warranty</h2>
            <p>The site is provided "as is," without warranties of any kind. Products are under active development and features may change, break, or be withdrawn.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">Limitation of liability</h2>
            <p>To the maximum extent permitted by law, KYTEPUSH is not liable for any indirect or consequential damages arising from your use of the site.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">Contact</h2>
            <p>Questions about these terms? Email <a href="mailto:kytepush@gmail.com" className="text-accent hover-underline">kytepush@gmail.com</a>.</p>
          </section>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-dim">
          <Link href="/" className="hover:text-foreground transition-colors">← Back to site</Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy →</Link>
        </div>
      </article>
    </div>
  );
}
