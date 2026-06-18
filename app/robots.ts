export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aydaxys.vercel.app/sitemap.xml",
  };
}