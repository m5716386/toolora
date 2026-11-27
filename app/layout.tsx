import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Toolora — Free Online Image, PDF & Office Tools", template: "%s | Toolora" },
  description: "Use free online tools to resize and compress images, convert images and text to PDF, and convert PDF, Word, Excel and PowerPoint files. Simple tools in Arabic and English.",
  metadataBase: new URL("https://tooloratooll.netlify.app"),
  alternates: { canonical: "/", languages: { en: "/", ar: "/?lang=ar" } },
  keywords: ["free online tools", "image resizer", "image compressor", "PDF converter", "PDF to Word", "PDF to Excel", "Word to PDF", "Excel to PDF", "أدوات مجانية", "تحويل PDF"],
  openGraph: { type: "website", url: "https://tooloratooll.netlify.app", siteName: "Toolora", title: "Toolora — Free Online Image, PDF & Office Tools", description: "Free browser-based tools for images, PDF, Word, Excel and PowerPoint." },
  twitter: { card: "summary", title: "Toolora — Free Online Tools", description: "Free browser-based image, PDF and Office tools in Arabic and English." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
