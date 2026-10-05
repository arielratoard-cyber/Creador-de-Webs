import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#15110d",
          color: "#f3eadb",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#b5a790" }}>
          {`Paninoteca & focacceria · ${site.contact.city}`}
        </div>
        <div style={{ display: "flex", fontSize: 200, fontStyle: "italic", fontWeight: 700, lineHeight: 1 }}>
          {site.name}
          <span style={{ color: "#e8573b" }}>.</span>
        </div>
        <div style={{ fontSize: 44 }}>Pan de verdad, relleno sin miedo.</div>
      </div>
    ),
    size,
  );
}
