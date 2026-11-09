import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/site";

/**
 * Generated from the projects data file, so adding a project to
 * src/data/projects.ts automatically adds it to the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
