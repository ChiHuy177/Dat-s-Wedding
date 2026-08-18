import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div style={{ position: "relative", width: 112, height: 90, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 16,
              width: 68,
              height: 68,
              borderRadius: "50%",
              border: "14px solid #E4C98F",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 44,
              top: 16,
              width: 68,
              height: 68,
              borderRadius: "50%",
              border: "14px solid #FFFDF8",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
