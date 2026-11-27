import type { MetadataRoute } from "next";

const baseUrl = "https://tooloratooll.netlify.app";
const toolSlugs = ["resize", "compress", "textpdf", "imagepdf", "pdfexcel", "textxlsx", "pdfword", "pdfjpg", "excelpdf", "wordpdf", "pptpdf"];
const blogSlugs = ["compress-image-to-100kb", "resize-image-for-website", "convert-pdf-to-excel", "combine-images-into-pdf"];

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages: MetadataRoute.Sitemap = toolSlugs.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    changeFrequency: "monthly",
    priority: 0.85
  }));
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    ...toolPages,
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({ url: `${baseUrl}/blog/${slug}`, changeFrequency: "monthly" as const, priority: 0.75 })),
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guides`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides/image-tools`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/guides/pdf-tools`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/guides/office-tools`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.4 }
  ];
}
