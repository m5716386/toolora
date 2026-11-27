import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toolora — Free Image & PDF Tools",
  description: "Free online image, PDF, Word and Excel conversion tools. Convert PDF to Excel, Word and JPG, text to Excel, and images to PDF. أدوات مجانية للصور وPDF وWord وExcel.",
  metadataBase: new URL("https://tooloratooll.netlify.app"),
  alternates: { languages: { en: "/", ar: "/?lang=ar" } },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
