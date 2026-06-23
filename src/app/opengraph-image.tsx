import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KYTEPUSH — An AI workhouse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "radial-gradient(120% 120% at 50% 0%, #0a1730 0%, #000004 60%)",
          color: "#eef2f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 40 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5aa2ff" strokeWidth="1.4">
            <path d="M12 2.5 L20 9 L12 21.5 L4 9 Z" />
            <path d="M12 2.5 V21.5 M4 9 H20" strokeWidth="0.9" opacity="0.6" />
          </svg>
          <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: 10, color: "#eef2f7" }}>KYTEPUSH</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 108, fontWeight: 800, lineHeight: 1, letterSpacing: -2, textTransform: "uppercase" }}>
          <span>We engineer</span>
          <span style={{ color: "#5aa2ff" }}>intelligence</span>
          <span>at scale.</span>
        </div>
        <span style={{ marginTop: 44, fontSize: 28, color: "#6f7884", letterSpacing: 1 }}>
          An AI workhouse — a fleet of intelligent products.
        </span>
      </div>
    ),
    { ...size }
  );
}
