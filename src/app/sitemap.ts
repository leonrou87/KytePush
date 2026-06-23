import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kytepush.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/jarvis`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/golf`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
