import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AIT Digital Solutions — Pakistan's Premier Digital Skills Hub";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold accent top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, transparent, #F5B400, transparent)" }} />

        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-120px", right: "-120px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,180,0,0.12) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,180,0,0.08) 0%, transparent 70%)" }} />

        {/* Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(245,180,0,0.1)", border: "1px solid rgba(245,180,0,0.3)", borderRadius: "100px", padding: "8px 20px", marginBottom: "24px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#F5B400" }} />
          <span style={{ color: "#F5B400", fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Pakistan's #1 Digital Skills Hub</span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "28px" }}>
          <span style={{ color: "#ffffff", fontSize: "64px", fontWeight: 900, lineHeight: 1.1, textAlign: "center", letterSpacing: "-1px" }}>
            AIT Digital Solutions
          </span>
          <span style={{ color: "#F5B400", fontSize: "32px", fontWeight: 700, marginTop: "8px", textAlign: "center" }}>
            Learn · Build · Scale
          </span>
        </div>

        {/* Tagline */}
        <p style={{ color: "#9ca3af", fontSize: "20px", textAlign: "center", maxWidth: "700px", lineHeight: 1.4, margin: "0 0 40px" }}>
          YouTube Automation · Freelancing · Digital Marketing · AI Tools · Web Development
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "48px", alignItems: "center" }}>
          {[["25,000+", "Students Trained"], ["9+", "Services"], ["3", "Expert Founders"]].map(([val, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <span style={{ color: "#F5B400", fontSize: "30px", fontWeight: 900 }}>{val}</span>
              <span style={{ color: "#6b7280", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ position: "absolute", bottom: "24px", color: "#4b5563", fontSize: "14px", letterSpacing: "0.05em" }}>
          aitdigitalsolutions.com
        </div>

        {/* Gold bottom bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, transparent, #F5B400, transparent)" }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
