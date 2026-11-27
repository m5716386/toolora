import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image and PDF Tutorials | Toolora Blog",
  description: "Practical guides for compressing images, resizing pictures for websites, converting PDF files to Excel and combining images into PDF documents.",
  alternates: { canonical: "/blog" }
};

const posts = [
  { slug: "compress-image-to-100kb", category: "Image optimization", title: "How to Compress an Image to 100KB", ar: "كيف تضغط الصورة إلى 100 كيلوبايت؟", description: "Learn how to reduce image file size for online forms, websites and email while keeping the best practical image quality.", arDescription: "خطوات عملية لتقليل حجم الصور للنماذج والمواقع والبريد الإلكتروني مع المحافظة على أفضل جودة ممكنة.", tool: "Compress Image", href: "/tools/compress" },
  { slug: "resize-image-for-website", category: "Image optimization", title: "How to Resize an Image for a Website", ar: "كيف تغيّر أبعاد صورة لتناسب موقعاً إلكترونياً؟", description: "Understand image dimensions, aspect ratios and practical sizes before preparing photos for web pages.", arDescription: "افهم أبعاد الصور ونسبة العرض إلى الارتفاع وكيف تجهز الصور لصفحات الويب.", tool: "Image Resizer", href: "/tools/resize" },
  { slug: "convert-pdf-to-excel", category: "PDF conversion", title: "How to Convert PDF to Excel", ar: "كيف تحوّل PDF إلى Excel؟", description: "A practical guide to extracting tables from text-based PDFs, checking spreadsheet results and understanding OCR limitations.", arDescription: "دليل لاستخراج الجداول من ملفات PDF النصية ومراجعة النتائج وفهم حدود ملفات OCR.", tool: "PDF to Excel", href: "/tools/pdfexcel" },
  { slug: "combine-images-into-pdf", category: "PDF creation", title: "How to Combine Multiple Images into One PDF", ar: "كيف تجمع عدة صور في ملف PDF واحد؟", description: "Turn JPG, PNG and WEBP pictures into a single PDF, organize image order and check the finished document.", arDescription: "اجمع صور JPG وPNG وWEBP في ملف PDF واحد، ورتب الصور وراجع المستند النهائي.", tool: "Images to PDF", href: "/tools/imagepdf" }
];

export default function BlogIndex() {
  return <main style={{maxWidth:980,margin:"44px auto",padding:"24px 22px",fontFamily:"Arial,sans-serif",lineHeight:1.85,color:"#172033"}}>
    <p style={{color:"#2563eb",fontWeight:700}}>TOOLORA BLOG · PRACTICAL HOW-TO GUIDES</p>
    <h1>Helpful guides for everyday image and PDF tasks</h1>
    <p>Find clear, practical instructions for common file problems: reducing image size, preparing pictures for websites, converting PDF tables and combining images into one document. Every guide explains what the tool can do, what it cannot do yet, and how to check the result.</p>
    <h2 dir="rtl">مقالات وأدلة Toolora</h2>
    <p dir="rtl">شروحات عملية لمشاكل الصور وملفات PDF، بخطوات واضحة وملاحظات مهمة قبل تنزيل النتيجة.</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:18,marginTop:26}}>
      {posts.map(post => <article key={post.slug} style={{border:"1px solid #e3e8ef",borderRadius:16,padding:20,background:"#fff"}}>
        <p style={{fontSize:13,color:"#2563eb",fontWeight:700}}>{post.category}</p>
        <h2 style={{fontSize:21,lineHeight:1.4}}><Link href={"/blog/"+post.slug}>{post.title}</Link></h2>
        <h3 dir="rtl" style={{fontSize:18}}><Link href={"/blog/"+post.slug+"?lang=ar"}>{post.ar}</Link></h3>
        <p>{post.description}</p>
        <Link href={"/blog/"+post.slug}>Read the guide →</Link>
      </article>)}
    </div>
    <p style={{marginTop:32}}>Ready to work with a file? Explore all <Link href="/">free Toolora tools</Link> or browse the <Link href="/guides">complete help center</Link>.</p>
    <p dir="rtl"><Link href="/">افتح أدوات Toolora المجانية</Link> أو تصفح <Link href="/guides">مركز المساعدة</Link>.</p>
  </main>;
}
