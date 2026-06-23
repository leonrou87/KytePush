"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "kp_cookie_consent";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* storage blocked — don't nag */
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-5 flex justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-3xl border border-border bg-background-2/95 backdrop-blur-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 shadow-[0_-10px_40px_-12px_rgba(0,0,0,0.8)]">
        <p className="flex-1 text-[13px] text-muted leading-relaxed">
          We use cookieless analytics and third-party ad cookies (Google AdSense) to run KYTEPUSH.
          See our{" "}
          <Link href="/privacy" className="text-accent hover-underline">privacy policy</Link>.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => decide("declined")}
            className="px-4 py-2 border border-border text-muted hover:text-foreground hover:border-accent/40 text-[11px] font-mono uppercase tracking-[0.14em] transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => decide("accepted")}
            className="px-5 py-2 bg-accent text-background hover:bg-accent-bright text-[11px] font-mono font-semibold uppercase tracking-[0.14em] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
