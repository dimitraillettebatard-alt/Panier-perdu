import { ImageResponse } from "next/og";

export const alt = "Panier Perdu — Récupérez vos paniers abandonnés";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#0B1B3A",
          padding: 80,
          color: "#FAF8F5",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, color: "#FF6B4A" }}>
          Panier Perdu
        </div>
        <div
          style={{ fontSize: 72, fontWeight: 700, marginTop: 30, lineHeight: 1.1 }}
        >
          Chaque panier abandonné, c&apos;est de l&apos;argent perdu.
        </div>
        <div style={{ fontSize: 44, marginTop: 30, color: "#FF6B4A" }}>
          Récupérez-le automatiquement.
        </div>
      </div>
    ),
    { ...size }
  );
}
