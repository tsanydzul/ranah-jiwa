import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site-content"

const publicRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/profil", changeFrequency: "monthly", priority: 0.8 },
  { path: "/layanan", changeFrequency: "weekly", priority: 0.9 },
  { path: "/produk", changeFrequency: "monthly", priority: 0.7 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return publicRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
