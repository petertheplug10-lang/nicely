import type { MetadataRoute } from "next";

type SitemapRouteConfig = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

/** Public marketing pages included in sitemap.xml */
export const SITEMAP_ROUTES: SitemapRouteConfig[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/gallery", changeFrequency: "weekly", priority: 0.9 },
  { path: "/shops", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/wholesale", changeFrequency: "monthly", priority: 0.7 },
  { path: "/service", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  { path: "/shipping-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/refund-returns", changeFrequency: "yearly", priority: 0.3 },
  { path: "/age-verification", changeFrequency: "yearly", priority: 0.3 },
];

/** Paths blocked in robots.txt (internal / non-indexable). */
export const ROBOTS_DISALLOW_PATHS = [
  "/api/",
  "/age-region",
  "/shops/resolve",
  "/access-reward/",
] as const;
