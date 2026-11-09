import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectJsonLd } from "@/components/seo/JsonLd";
import { getProject, getProjectNeighbours, projects } from "@/data/projects";
import { site } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found", robots: { index: false } };
  }

  const title = `${project.title} — Case Study — ${site.name}`;
  const url = `/work/${project.slug}`;

  return {
    title,
    description: project.description,
    keywords: [...project.technologies, site.name, "case study"],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: project.description,
      url,
      authors: [site.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { next } = getProjectNeighbours(slug);
  const { caseStudy } = project;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const projectNumber = String(projectIndex + 1).padStart(2, "0");

  const displayDomain =
    project.slug === "fitplus-crm"
      ? "fitpluscrm.com"
      : project.slug === "wapflux"
      ? "wapflux.internal"
      : project.slug === "transportation-erp-mobile"
      ? "freightbook.app"
      : "operations.transportation.internal";

  return (
    <>
      <ProjectJsonLd project={project} />

      <main id="main" className="case-page">
        {/* Back Link */}
        <Link className="text-link" href="/#work">
          <ArrowLeft className="size-4 inline mr-2" /> Back to selected work
        </Link>

        {/* Case Intro Header matching Sarthak's exact typography */}
        <div className="case-intro">
          <span className="eyebrow">
            SELECTED WORK / {projectNumber} / {project.category || "Full Stack Engineering"}
          </span>
          <h1>
            {project.title}
            <span>.</span>
          </h1>
          <p>{project.longDescription ?? project.description}</p>
          {project.myContribution && (
            <div className="case-role">
              <span>MY CONTRIBUTION</span>
              <p>{project.myContribution}</p>
            </div>
          )}
        </div>

        {/* Browser Mockup Visual (Authentic Sarthak Work Browser Bar) */}
        <div className="project-visual real-work-visual platform-art">
          <div className="work-browser-bar">
            <span>
              <i />
              <i />
              <i />
            </span>
            <span>{displayDomain}</span>
            <span>↗</span>
          </div>

          <img
            alt={project.imageAlt ?? `${project.title} preview`}
            src={project.image}
            className="w-full h-auto object-cover max-h-[640px]"
            loading="eager"
          />

          <div className="work-artifact-label">
            <span>{(project.category || "Full Stack").toUpperCase()}</span>
            <span>{project.year || "PRODUCTION"}</span>
          </div>
        </div>

        {/* Case Body Narrative */}
        <div className="case-body">
          {caseStudy ? (
            <>
              {/* 01 Context */}
              <section>
                <span className="eyebrow">01 / CONTEXT</span>
                <h2>The opportunity.</h2>
                <p>{caseStudy.problem}</p>
              </section>

              {/* 02 My Contribution */}
              <section>
                <span className="eyebrow">02 / MY CONTRIBUTION</span>
                <h2>Where I came in.</h2>
                <p>{caseStudy.approach}</p>
              </section>

              {/* 03 The Work in Practice */}
              <section className="case-details">
                <span className="eyebrow">03 / THE WORK IN PRACTICE</span>
                {(caseStudy.keyFeatures ?? project.highlights).map((feat, i) => {
                  const parts = feat.split("—");
                  const title = parts[0]?.trim() || feat;
                  const desc =
                    parts[1]?.trim() ||
                    project.highlights[i % project.highlights.length] ||
                    feat;

                  return (
                    <article key={feat}>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </article>
                  );
                })}
              </section>

              {/* 04 Challenges & Engineering Decisions */}
              {caseStudy.challenges && caseStudy.challenges.length > 0 && (
                <section>
                  <span className="eyebrow">04 / ENGINEERING CHALLENGES</span>
                  <h2>Technical hurdles solved.</h2>
                  <ul className="mt-4 space-y-3">
                    {caseStudy.challenges.map((c) => (
                      <li key={c} className="flex gap-3 text-[15px] text-[#b0b0b0]">
                        <span className="text-cyan-400 font-mono mt-0.5">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 05 The Bigger Picture */}
              <section>
                <span className="eyebrow">05 / THE BIGGER PICTURE</span>
                <h2>{caseStudy.outcome}</h2>
                {caseStudy.architectureNote && (
                  <p className="case-note">{caseStudy.architectureNote}</p>
                )}

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  {project.live && (
                    <a
                      className="pill-link"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Live Platform <ArrowUpRight className="size-4 inline ml-1" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="text-link"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code ↗
                    </a>
                  )}
                </div>
              </section>
            </>
          ) : (
            <section>
              <span className="eyebrow">PERSPECTIVE</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </section>
          )}

          {/* Built With Tech Stack */}
          <section className="mt-16 pt-12 border-t border-white/10">
            <span className="eyebrow">TECHNOLOGIES &amp; TOOLING</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#ded0bb]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Next Story Link */}
        {next && (
          <Link className="next-story" href={`/work/${next.slug}`}>
            <span className="eyebrow">NEXT STORY</span>
            <span>
              {next.title} <ArrowRight className="size-6 inline ml-2" />
            </span>
          </Link>
        )}

        {/* Case Footer */}
        <div className="case-footer">
          <Link href="/">{site.name}.</Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Let’s make something matter ↗
          </a>
        </div>
      </main>
    </>
  );
}
