import type { MetadataRoute } from "next";
import { WORKFLOWS } from "@/lib/workflows/data";

const BASE_URL = "https://nodetool.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now },
    { url: `${BASE_URL}/studio`, lastModified: now },
    { url: `${BASE_URL}/cloud`, lastModified: now },
    { url: `${BASE_URL}/agents`, lastModified: now },
    { url: `${BASE_URL}/creatives`, lastModified: now },
    { url: `${BASE_URL}/business`, lastModified: now },
    { url: `${BASE_URL}/developers`, lastModified: now },
    { url: `${BASE_URL}/workflows`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/imprint`, lastModified: now },
    { url: `${BASE_URL}/privacy`, lastModified: now },
    { url: `${BASE_URL}/terms`, lastModified: now },
  ];

  const workflowRoutes: MetadataRoute.Sitemap = WORKFLOWS.map((w) => ({
    url: `${BASE_URL}/workflows/${w.slug}`,
    lastModified: w.published ? new Date(w.published) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...workflowRoutes];
}
