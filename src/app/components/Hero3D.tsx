"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-40 h-40 rounded-full bg-accent/20 blur-3xl animate-glow" />
    </div>
  ),
});

export function Hero3D() {
  return <HeroScene />;
}
