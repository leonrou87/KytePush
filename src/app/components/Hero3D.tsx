"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
});

/* Lightweight, WebGL-free hero for phones / reduced-motion — keeps the look,
   skips the GPU cost. */
function StaticHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-lg aspect-square rounded-full blur-2xl animate-glow"
        style={{ background: "radial-gradient(circle, rgba(90,162,255,0.30), transparent 62%)" }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-accent/20 rounded-full animate-spin-slow" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 border border-accent/10 rotate-45 animate-float" />
    </div>
  );
}

export function Hero3D() {
  // SSR-safe: render the static hero first, upgrade to WebGL only on capable desktops.
  const [use3d, setUse3d] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const lowMem = typeof mem === "number" && mem <= 4;
    setUse3d(!reduce && !small && !lowMem);
  }, []);

  return use3d ? <HeroScene /> : <StaticHero />;
}
