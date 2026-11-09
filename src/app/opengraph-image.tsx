import { ImageResponse } from "next/og";
import { site, siteUrl } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Satori requires every element with more than one child to declare a
   display mode, so any text built from several parts is joined into a
   single string before it reaches JSX. */
const host = new URL(siteUrl).host;

/**
 * Generated at build time by next/og, so social previews look
 * designed without committing a single binary asset — and they stay
 * correct automatically when the name or role in site.ts changes.
 */
export default async function Image() {
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
          background: "#08090c",
          backgroundImage:
            "radial-gradient(60% 70% at 15% 0%, rgba(124,108,246,0.30) 0%, transparent 60%), " +
            "radial-gradient(50% 60% at 90% 15%, rgba(56,189,248,0.16) 0%, transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#5f4ae8",
              color: "#fff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            YS
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#a4acba",
              letterSpacing: "0.02em",
            }}
          >
            {host}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#a99dff", marginBottom: 16 }}>
            {site.name}
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              color: "#f4f6fa",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {site.role}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a4acba",
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Building modern, scalable web applications with React, Next.js,
            Node.js and TypeScript.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["React.js", "Next.js", "TypeScript", "Node.js", "MySQL"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: "1px solid #232833",
                  background: "#101319",
                  color: "#a4acba",
                  fontSize: 20,
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
