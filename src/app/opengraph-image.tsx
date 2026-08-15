import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Momentum — Growth Marketing Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0B",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            color: "#F5F5F3",
            letterSpacing: "-0.02em",
          }}
        >
          Momentum
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 30,
            fontWeight: 500,
            color: "#2563EB",
          }}
        >
          We turn ad spend into revenue.
        </div>
      </div>
    ),
    { ...size }
  );
}
