import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000004",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5aa2ff" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M12 2.5 L20 9 L12 21.5 L4 9 Z" />
          <path d="M12 2.5 V21.5 M4 9 H20" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
