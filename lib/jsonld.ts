import { siteConfig } from "@/lib/site";

/**
 * Зона обслуживания для разметки: сам город плюс районы из siteConfig.
 * Адрес у службы выездной, поэтому улицы в разметке нет — только город и страна.
 */
export const serviceAreaJsonLd = [
  { "@type": "City", name: siteConfig.city },
  ...siteConfig.serviceArea.map((area) => ({
    "@type": area.toLowerCase().includes("район") ? "AdministrativeArea" : "Place",
    name: area,
  })),
];

export const postalAddressJsonLd = {
  "@type": "PostalAddress",
  addressLocality: siteConfig.city,
  addressCountry: "KG",
};
