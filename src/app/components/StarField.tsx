"use client";

import { useEffect, useRef } from "react";

/**
 * Cinematic starfield — a slow forward-drift of stars in 3D, with parallax
 * depth, gentle twinkle, and an occasional streak. Pure canvas, capped DPR,
 * respects prefers-reduced-motion.
 */
export function StarField() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0,
      h = 0,
      cx = 0,
      cy = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = { x: number; y: number; z: number; pz: number; r: number; tw: number };
    let stars: Star[] = [];
    const COUNT = 320;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    function reset(s: Star, randomZ = false) {
      s.x = rand(-w, w);
      s.y = rand(-h, h);
      s.z = randomZ ? rand(1, w) : w;
      s.pz = s.z;
      s.r = rand(0.4, 1.5);
      s.tw = rand(0, Math.PI * 2);
    }

    function resize() {
      w = canvas!.clientWidth;
      h = canvas!.clientHeight;
      cx = w / 2;
      cy = h / 2;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (stars.length === 0) {
        stars = Array.from({ length: COUNT }, () => {
          const s: Star = { x: 0, y: 0, z: 0, pz: 0, r: 1, tw: 0 };
          reset(s, true);
          return s;
        });
      }
    }

    let raf = 0;
    let t = 0;
    const speed = 0.55;

    function frame() {
      t += 1;
      ctx!.clearRect(0, 0, w, h);

      for (const s of stars) {
        s.pz = s.z;
        s.z -= speed;
        if (s.z < 1) reset(s);

        const sx = cx + (s.x / s.z) * w * 0.5;
        const sy = cy + (s.y / s.z) * h * 0.5;
        const px = cx + (s.x / s.pz) * w * 0.5;
        const py = cy + (s.y / s.pz) * h * 0.5;

        if (sx < 0 || sx > w || sy < 0 || sy > h) continue;

        const depth = 1 - s.z / w; // 0 far → 1 near
        const twinkle = 0.6 + 0.4 * Math.sin(t * 0.02 + s.tw);
        const size = Math.max(0.2, s.r * depth * 1.8);
        const alpha = Math.min(1, depth * 1.1) * twinkle;

        // streak for the nearest, fastest stars
        if (depth > 0.78) {
          ctx!.strokeStyle = `rgba(150, 196, 255, ${alpha * 0.5})`;
          ctx!.lineWidth = size;
          ctx!.beginPath();
          ctx!.moveTo(px, py);
          ctx!.lineTo(sx, sy);
          ctx!.stroke();
        }

        ctx!.beginPath();
        const tint = depth > 0.85 ? "200, 224, 255" : "236, 242, 247";
        ctx!.fillStyle = `rgba(${tint}, ${alpha})`;
        ctx!.arc(sx, sy, size, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    resize();
    if (reduce) {
      // single static frame
      for (const s of stars) {
        const depth = 1 - s.z / w;
        const sx = cx + (s.x / s.z) * w * 0.5;
        const sy = cy + (s.y / s.z) * h * 0.5;
        if (sx < 0 || sx > w || sy < 0 || sy > h) continue;
        ctx.beginPath();
        ctx.fillStyle = `rgba(236,242,247,${Math.min(1, depth)})`;
        ctx.arc(sx, sy, Math.max(0.3, s.r * depth * 1.6), 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
