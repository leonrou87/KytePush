"use client";

import { useRef, type ReactNode } from "react";

/* Pointer-reactive 3D tilt with a moving glare. Wraps any card. */
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
    el.style.setProperty("--gx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
    el.style.setProperty("--glare", "1");
  }
  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.setProperty("--glare", "0");
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`relative h-full transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-200"
        style={{
          opacity: "var(--glare,0)",
          background: "radial-gradient(420px circle at var(--gx,50%) var(--gy,50%), rgba(90,162,255,0.12), transparent 45%)",
        }}
      />
    </div>
  );
}
