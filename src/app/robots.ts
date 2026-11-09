import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Nothing here is worth crawling and it is never linked.
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
