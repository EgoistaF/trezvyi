import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Дата последнего содержательного изменения страницы.
 * Обновляйте вручную, когда меняется текст, цены или фотографии:
 * Google учитывает lastmod, только если он отражает реальные правки.
 */
const lastModified = {
  home: "2026-11-26",
  soberDriver: "2026-11-26",
  oneClickOrder: "2026-11-26",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(lastModified.home),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/zakaz-v-1-klik`,
      lastModified: new Date(lastModified.oneClickOrder),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/trezvyi-voditel-bishkek`,
      lastModified: new Date(lastModified.soberDriver),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
