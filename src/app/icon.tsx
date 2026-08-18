import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#55642F",
          borderRadius: 14,
        }}
      >
        <div style={{ position: "relative", width: 40, height: 32, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 6,
              width: 24,
              height: 24,
              borderRadius: "50%",
              border: "5px solid #E4C98F",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 16,
              top: 6,
              width: 24,
              height: 24,
              borderRadius: "50%",
              border: "5px solid #FFFDF8",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
