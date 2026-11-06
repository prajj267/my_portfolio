import { ImageResponse } from "next/og";

export const alt = "Prajjwal Patel · Full Stack Developer & Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Fetch only the glyphs we need from Google Fonts; returns null if offline. */
async function loadFont(family: string, text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

/** Link-preview image shown when the site is shared (LinkedIn, WhatsApp, X, Slack…). */
export default async function OpengraphImage() {
  const tagline = "Full stack developer · UAV swarm researcher · KIIT × IIT Patna";
  const stats = ["8.48 CGPA", "3 manuscripts", "ICDCIT hackathon winner"];
  const kicker = "SEASON 2026 · NO. 24";
  const [anton, inter] = await Promise.all([
    loadFont("Anton", "PRAJJWALTE24"),
    loadFont("Inter:wght@600", tagline + stats.join("") + kicker),
  ]);
  const display = anton ? "Anton" : "sans-serif";
  const body = inter ? "Inter" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(160deg, #0f3a8c 0%, #020c26 100%)",
          color: "#ffffff",
          position: "relative",
          fontFamily: body,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 40,
            top: -40,
            fontSize: 520,
            fontFamily: display,
            color: "rgba(255,255,255,0.06)",
            lineHeight: 1,
            display: "flex",
          }}
        >
          24
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 72,
              background: "#ffffff",
              color: "#0b3d91",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontFamily: display,
              clipPath: "polygon(0 0, 100% 0, 100% 62%, 50% 100%, 0 62%)",
              paddingBottom: 12,
            }}
          >
            PP
          </div>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#9fc0ff" }}>{kicker}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: display, fontSize: 150, lineHeight: 0.95 }}>PRAJJWAL</div>
          <div style={{ display: "flex", fontFamily: display, fontSize: 150, lineHeight: 0.95, color: "#9fc0ff" }}>
            PATEL
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#dbe6ff" }}>{tagline}</div>
        </div>

        <div style={{ display: "flex", gap: 48, fontSize: 26, color: "#c4d4f5" }}>
          {stats.map((s) => (
            <div key={s} style={{ display: "flex" }}>{s}</div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(anton ? [{ name: "Anton", data: anton, style: "normal" as const, weight: 400 as const }] : []),
        ...(inter ? [{ name: "Inter", data: inter, style: "normal" as const, weight: 600 as const }] : []),
      ],
    }
  );
}
