import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SignalText } from "@/components/ui/SignalText";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function SelectedWork() {
  return (
    <section id="work" className="selected-work chapter solid-section">
      <div className="section-label">
        <span>
          <SignalText>02 / SELECTED WORK</SignalText>
        </span>
        <span>ENGINEERED. DELIVERED. PRODUCTION-READY.</span>
      </div>

      <div className="selected-heading" data-editorial-reveal="true">
        <h2>
          Ideas are a start.<br />
          <em>This is the work.</em>
        </h2>
        <p>
          From transportation operations to multi-tenant messaging platforms.
          <br />
          Four production systems I’ve helped bring to life.
        </p>
      </div>

      <div className="work-gallery">
        {projects.map((project, idx) => {
          const number = String(idx + 1).padStart(2, "0");
          const domain =
            project.slug === "transportation-management"
              ? "automizeplus.com"
              : project.slug === "wapflux"
              ? "wapflux.com"
              : project.slug === "transportation-erp-mobile"
              ? "Expo Mobile App"
              : "fitpluscrm.com";

          return (
            <article
              key={project.slug}
              className={`work-piece work-piece-${project.slug}`}
              data-editorial-reveal="true"
            >
              <Link
                className="work-artwork"
                aria-label={`Explore ${project.title}`}
                href={`/projects/${project.slug}`}
              >
                <div className="project-visual real-work-visual platform-art">
                  <div className="work-browser-bar">
                    <span>
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span>{domain}</span>
                    <span>↗</span>
                  </div>

                  <Image
                    alt={project.title}
                    src={project.image || "/images/projects/transportation-management.png"}
                    width={1440}
                    height={660}
                    sizes="(max-width: 700px) 90vw, (max-width: 1100px) 85vw, 80vw"
                    className="w-full h-auto object-cover"
                  />

                  <div className="work-artifact-label">
                    <span>{(project.category || "Full Stack").toUpperCase()}</span>
                    <span>
                      {project.isAiAssisted
                        ? "AI-ASSISTED DEVELOPMENT"
                        : "PRODUCTION SYSTEM"}
                    </span>
                  </div>
                </div>

                <span className="work-artwork-arrow">
                  <ArrowUpRight className="size-6" />
                </span>
              </Link>

              <div className="work-caption">
                <span className="work-number">{number}</span>
                <div>
                  <span className="eyebrow">{project.category || "Full Stack"}</span>
                  <h3>
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p>{project.description}</p>
                </div>

                <Link
                  className="text-link"
                  href={`/projects/${project.slug}`}
                >
                  Explore the story <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="work-more" data-editorial-reveal="true">
        <span className="eyebrow">CORE CAPABILITIES AT WORK</span>
        <div className="grid gap-3 sm:grid-cols-2 mt-4 mb-6">
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
            <small className="block font-mono text-[10px] text-accent tracking-wider mb-1">
              FULL STACK WEB
            </small>
            <p className="text-sm text-fg font-medium">React.js · Next.js · TypeScript · Express · MySQL</p>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
            <small className="block font-mono text-[10px] text-accent tracking-wider mb-1">
              MOBILE &amp; INTEGRATIONS
            </small>
            <p className="text-sm text-fg font-medium">React Native · Expo · TanStack Query · Meta WhatsApp API</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center mt-6">
          <Link className="all-work-link" href="/work">
            Explore the products <ArrowUpRight className="size-4" />
          </Link>
          <a
            className="text-link text-sm"
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discuss your project on WhatsApp"
          >
            Discuss your project <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
