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
        setMsg(data.already ? "You're already on the list — good taste." : "You're on the list. Welcome to the fleet.");
      } else {
        setState("error");
        setMsg(data.error || "Something went wrong.");
      }
    } catch {
      setState("error");
      setMsg("Network error — try again.");
    }
  }

  if (state === "done") {
    return (
      <div className="mx-auto max-w-md flex items-center justify-center gap-3 border border-live/40 bg-live/5 px-6 py-4">
        <span className="w-2 h-2 rounded-full bg-live pulse-dot shrink-0" />
        <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-live">{msg}</span>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mx-auto max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email address"
          className="flex-1 bg-surface border border-border focus:border-accent/60 px-4 py-3.5 font-mono text-sm text-foreground placeholder:text-muted-dim outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-background font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-accent-bright transition-colors duration-300 disabled:opacity-60 whitespace-nowrap"
        >
          {state === "loading" ? "Joining…" : "Get early access"}
          {state !== "loading" && <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-rose">⚠ {msg}</p>
      )}
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-dim">
        One email. Early access to every product we ship. No spam.
      </p>
    </form>
  );
}
