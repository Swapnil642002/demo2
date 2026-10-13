import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.base;
  const pages = ["", "/about", "/courses", "/courses/gnm", "/courses/dpharma-ayurveda", "/admissions", "/campus", "/faculty", "/gallery", "/notices", "/contact", "/privacy"];
  return pages.map((p) => ({ url: `${base}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
