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
          background: "linear-gradient(160deg, #2a1f63, #4a2f86)",
          borderRadius: 8,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="g" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c7d0ff" />
              <stop offset="0.5" stopColor="#ffc4dc" />
              <stop offset="1" stopColor="#ffe2b0" />
            </linearGradient>
          </defs>
          <path d="M12 2 C15.5 6 18.6 8.4 20.5 9.2 C17 13 14 17 12 22 C10 17 7 13 3.5 9.2 C5.4 8.4 8.5 6 12 2 Z" fill="url(#g)" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
