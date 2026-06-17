"use client";

import { useActionState } from "react";
import { authenticate, type AuthState } from "./actions";

const initial: AuthState = { error: null };

export function PasswordGate() {
  const [state, formAction, pending] = useActionState(authenticate, initial);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden scanlines vignette">
      <div className="absolute inset-0 z-0 tech-grid opacity-60" />
      <div className="nebula animate-nebula w-[40rem] h-[40rem] top-[-10rem] left-1/2 -translate-x-1/2 z-0" style={{ background: "radial-gradient(circle, rgba(90,162,255,0.22), transparent 60%)" }} />

      <form action={formAction} className="relative z-10 w-full max-w-sm mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-border bg-background/50 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted">Restricted · Operations</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground mb-2">
          Fleet <span className="animate-gradient-text">Analytics</span>
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-dim mb-10">
          Enter access code to continue
        </p>

        <div className="flex flex-col gap-3">
          <input
            type="password"
            name="password"
            autoFocus
            autoComplete="off"
            placeholder="ACCESS CODE"
            className="w-full bg-surface border border-border focus:border-accent/60 px-4 py-3.5 text-center font-mono text-sm tracking-[0.3em] text-foreground placeholder:text-muted-dim outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={pending}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-background font-semibold text-[13px] uppercase tracking-[0.14em] hover:bg-accent-bright transition-colors duration-300 disabled:opacity-60"
          >
            {pending ? "Verifying…" : "Authenticate"}
            {!pending && <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>}
          </button>
        </div>

        {state.error && (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-rose">⚠ {state.error}</p>
        )}
      </form>
    </section>
  );
}
