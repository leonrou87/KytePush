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
      <div className="pointer-events-auto w-full max-w-3xl glass rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.6)]">
        <p className="flex-1 text-[14px] text-ink-soft leading-relaxed">
          We use cookieless analytics and third-party ad cookies (Google AdSense) to run KytePush.
          See our{" "}
          <Link href="/privacy" className="text-gold hover-underline">privacy policy</Link>.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => decide("declined")}
            className="rounded-full px-4 py-2 border border-hairline text-ink hover:border-white/40 text-[14px] transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => decide("accepted")}
            className="rounded-full px-5 py-2 bg-white text-[#1d1850] hover:bg-gold text-[14px] font-medium transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
