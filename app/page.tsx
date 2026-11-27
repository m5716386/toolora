import type { Metadata } from "next";
import TooloraApp from "@/components/TooloraApp";

export const metadata: Metadata = {
  title: "Free Online Image, PDF and Office Tools",
  description: "Resize and compress images, create PDFs, and convert PDF, Word, Excel and PowerPoint files with free browser-based tools. Available in Arabic and English.",
  alternates: { canonical: "/" }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Toolora",
  url: "https://tooloratooll.netlify.app/",
  description: "Free online image, PDF and Office tools in Arabic and English."
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Toolora Free Online Tools",
  url: "https://tooloratooll.netlify.app/",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  browserRequirements: "A modern web browser and an internet connection to load conversion libraries.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: "Browser-based tools for resizing and compressing images, creating PDFs, and converting supported PDF and Office files."
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema).replace(/</g, "\\u003c") }} />
    <TooloraApp />
  </>;
}
