"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Animation = "up" | "left" | "scale";

export function ScrollReveal({
  children,
  animation = "up",
  delay = 0,
  className = "",
  stagger = false,
}: {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const animClass = stagger
    ? "stagger-children"
    : animation === "left"
      ? "scroll-animate-left"
      : animation === "scale"
        ? "scroll-animate-scale"
        : "scroll-animate";

  return (
    <div ref={ref} className={`${animClass} ${className}`}>
      {children}
    </div>
  );
}
