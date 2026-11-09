import { experience } from "@/data/experience";
import { expertise, sameAs, site, siteUrl } from "@/data/site";
import type { Project } from "@/lib/types";

/**
 * Renders a JSON-LD graph into the document.
 *
 * Next.js recommends a plain <script type="application/ld+json"> with
 * stringified JSON over next/script for structured data — it must be
 * in the initial HTML for crawlers that do not execute JavaScript.
 */
function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Values come from local data files, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

/** Person + WebSite + ProfilePage graph for the home page. */
export function HomeJsonLd() {
  const currentRole = experience.find((item) => item.endDate === null);

  const person = {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    url: siteUrl,
    jobTitle: site.role,
    description: site.description,
    email: `mailto:${site.email}`,
    knowsAbout: expertise,
    sameAs,
    address: {
      "@type": "PostalAddress",
      addressCountry: site.location,
    },
    ...(site.avatar ? { image: `${siteUrl}${site.avatar}` } : {}),
    ...(currentRole
      ? {
          worksFor: {
            "@type": "Organization",
            name: currentRole.company,
            ...(currentRole.companyUrl ? { url: currentRole.companyUrl } : {}),
          },
          hasOccupation: {
            "@type": "Occupation",
            name: site.role,
            occupationalCategory: "15-1254.00", // O*NET: Web Developers
            skills: expertise.join(", "),
          },
        }
      : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: `${site.name} — ${site.role}`,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": personId },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: `${site.name} | ${site.role}`,
    description: site.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
    inLanguage: "en",
  };

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [person, website, profilePage],
      }}
    />
  );
}

/** CreativeWork + BreadcrumbList graph for a project case study. */
export function ProjectJsonLd({ project }: { project: Project }) {
  const url = `${siteUrl}/projects/${project.slug}`;

  const creativeWork = {
    "@type": "CreativeWork",
    "@id": `${url}/#project`,
    name: project.title,
    headline: project.title,
    description: project.description,
    url,
    author: { "@id": personId },
    creator: { "@id": personId },
    keywords: project.technologies.join(", "),
    inLanguage: "en",
    ...(project.year ? { datePublished: project.year } : {}),
    ...(project.image ? { image: `${siteUrl}${project.image}` } : {}),
    ...(project.live ? { sameAs: [project.live] } : {}),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/#projects`,
      },
      { "@type": "ListItem", position: 3, name: project.title, item: url },
    ],
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: `${project.title} — Case Study`,
    description: project.description,
    isPartOf: { "@id": websiteId },
    primaryImageOfPage: project.image
      ? { "@type": "ImageObject", url: `${siteUrl}${project.image}` }
      : undefined,
    breadcrumb: { "@id": `${url}/#breadcrumb` },
    inLanguage: "en",
  };

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          creativeWork,
          { ...breadcrumb, "@id": `${url}/#breadcrumb` },
          webPage,
        ],
      }}
    />
  );
}
