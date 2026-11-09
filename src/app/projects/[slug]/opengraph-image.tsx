import { ImageResponse } from "next/og";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

export const alt = "Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** One OG image per project, generated at build time. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

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
            "radial-gradient(60% 70% at 85% 0%, rgba(124,108,246,0.28) 0%, transparent 60%), " +
            "radial-gradient(50% 60% at 10% 90%, rgba(56,189,248,0.14) 0%, transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#a99dff",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {project?.category ?? "Project"}
          <span style={{ color: "#333949" }}>·</span>
          <span style={{ color: "#a4acba" }}>Case study</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#f4f6fa",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {project?.title ?? "Project"}
          </div>
          <div
            style={{
              fontSize: 27,
              color: "#a4acba",
              marginTop: 22,
              maxWidth: 950,
              lineHeight: 1.4,
            }}
          >
            {project?.description ?? ""}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {(project?.technologies ?? []).slice(0, 4).map((tech) => (
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
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 11,
                background: "#5f4ae8",
                color: "#fff",
                fontSize: 19,
                fontWeight: 700,
              }}
            >
              YS
            </div>
            <div style={{ fontSize: 22, color: "#a4acba" }}>{site.name}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
