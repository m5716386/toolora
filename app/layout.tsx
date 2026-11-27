import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toolora — Free Image & PDF Tools",
  description: "Free online image resizing, image compression, text to PDF and images to PDF tools. أدوات مجانية لتغيير أبعاد الصور وضغطها وتحويل النص والصور إلى PDF.",
  metadataBase: new URL("https://tooloratooll.netlify.app"),
  alternates: { languages: { en: "/", ar: "/?lang=ar" } },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
