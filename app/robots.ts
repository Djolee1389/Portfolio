export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://djordjemilutin.vercel.app/sitemap.xml",
  };
}