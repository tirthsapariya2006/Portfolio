import { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${portfolioData.siteConfig.url}/sitemap.xml`,
  };
}
