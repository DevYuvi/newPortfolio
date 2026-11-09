import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Selected Work — Built to matter.",
  description:
    "Production systems, enterprise web applications, and mobile solutions engineered by Yuvraj Singh.",
};

export default function WorkPage() {
  return (
    <article className="editorial-page">
      <header className="editorial-intro" data-reveal="true">
        <span className="eyebrow">WORK / IDEAS INTO PRACTICE</span>
        <h1>Built to matter.</h1>
        <p>
          Products, platforms and applications. Different forms of the same
          instinct: build reliable software that solves real operational bottlenecks.
        </p>
      </header>

      <div className="work-index">
        {projects.map((project, idx) => {
          const number = String(idx + 1).padStart(2, "0");
          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-editorial-reveal="true"
            >
              <span className="eyebrow">
                {number} / {(project.category || "Full Stack").toUpperCase()}
              </span>
              <h2>
                <span>{project.title}</span>
                <span aria-hidden="true">↗</span>
              </h2>
              <p>{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono text-accent">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="bg-white/[0.04] px-2 py-0.5 rounded border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      <section className="editorial-section" data-editorial-reveal="true" style={{ marginTop: "80px" }}>
        <span className="eyebrow">PERSPECTIVE</span>
        <h2>Independent work &amp; creative engineering.</h2>
        <p>
          Beyond enterprise platforms at Automize Plus, I continually experiment
          with modern frontend frameworks, AI tooling integrations, and custom
          developer utilities.
        </p>
        <p>
          Every project is built with strict TypeScript safety, clean component
          separation, and optimized SQL schemas. Whether connecting frontend
          interfaces to backend microservices or crafting smooth interactions, my
          focus remains on high velocity and lasting quality.
        </p>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
          aria-label="Discuss an upcoming product on WhatsApp"
        >
          Discuss an upcoming product <ArrowUpRight className="size-4 inline ml-1" />
        </a>
      </section>

      <footer className="editorial-footer">
        <div>
          <Link href="/about" className="text-link">
            Read my story ↗
          </Link>
          <Link href="/education" className="text-link">
            Education ↗
          </Link>
          <Link href="/content" className="text-link">
            Engineering notes ↗
          </Link>
        </div>
        <a href="#top" className="back-top" aria-label="Back to top">
          Back to top ↑
        </a>
      </footer>
    </article>
  );
}
