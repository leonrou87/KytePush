"use client";

import { useState } from "react";

type State = "idle" | "loading" | "done" | "error";

export function WaitlistForm({ source = "home" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (data.ok) {
        setState("done");
        setMsg(data.already ? "You're already on the list. We'll be in touch at the next launch." : "You're on the list. You'll hear from us at the next launch.");
      } else {
        setState("error");
        setMsg(data.error || "We couldn't add that email. Check it and try again.");
      }
    } catch {
      setState("error");
      setMsg("Couldn't reach the server. Check your connection and try again.");
    }
  }

  if (state === "done") {
    return (
      <div className="flex w-full max-w-md items-center gap-3 glass rounded-2xl px-5 py-4" role="status">
        <span className="h-2 w-2 shrink-0 rounded-full bg-gold shadow-[0_0_12px_var(--gold)]" />
        <span className="text-[15px] text-ink">{msg}</span>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="w-full max-w-md">
      <div className="flex flex-col gap-2 glass rounded-[1.6rem] p-2 sm:flex-row sm:rounded-full">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email address"
          className="min-w-0 flex-1 rounded-full bg-transparent px-4 py-3 text-[16px] text-ink placeholder:text-ink-faint outline-none"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#1d1850] transition-colors hover:bg-gold disabled:opacity-60"
        >
          {state === "loading" ? "Adding you…" : "Get early access"}
        </button>
      </div>
      {state === "error" && <p className="mt-3 text-[14px] text-rose" role="alert">{msg}</p>}
      <p className="mt-3 text-[13px] text-ink-faint">One email per launch. Unsubscribe any time.</p>
    </form>
  );
}
