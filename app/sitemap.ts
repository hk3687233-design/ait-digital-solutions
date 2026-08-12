import { MetadataRoute } from "next";

const BASE = "https://aitdigitalsolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE,                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`,          lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/courses`,           lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/free-resources`,    lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/team`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy`,           lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,             lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
