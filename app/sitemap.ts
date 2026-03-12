import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/about",
    "/projects",
    "/contact"
  ];

  const locales = ["en", "sr"]; 

  const sitemap: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `https://djordjemilutin.vercel.app/${locale}${page}`,
        alternates: {
          languages: {
            en: `https://djordjemilutin.vercel.app/en${page}`,
            sr: `https://djordjemilutin.vercel.app/sr${page}`,
          },
        },
        lastModified: new Date(),
      });
    });
  });

  return sitemap;
}