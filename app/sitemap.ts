export default function sitemap() {
  const baseUrl = "https://aydaxys.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projetos-digitais`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/diagnostico`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
    },
  ];
}