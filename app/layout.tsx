import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toolora — Free Online Tools",
  description: "Free online PDF, image, calculator and text tools. أدوات مجانية للـ PDF والصور والحسابات والنصوص.",
  metadataBase: new URL("https://toolora.example"),
  alternates: { languages: { en: "/", ar: "/?lang=ar" } },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
