"use client";

import { useRef } from "react";

/* Glass panels that catch light where the pointer is. */
export function Spotlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={(e) => {
        for (const card of ref.current!.querySelectorAll<HTMLElement>("[data-spot]")) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        }
      }}
    >
      {children}
    </div>
  );
}
