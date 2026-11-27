export const metadata = {
  title: "About Toolora",
  description: "Learn about Toolora, our free browser-based image, PDF and document tools, and how to contact us."
};

export default function About() {
  return (
    <main style={{maxWidth:850,margin:"48px auto",padding:"24px 22px",fontFamily:"Arial,sans-serif",lineHeight:1.85,color:"#172033"}}>
      <p style={{color:"#2563eb",fontWeight:700}}>TOOLORA</p>
      <h1>About Toolora</h1>
      <p>Toolora is a free online toolkit for common image, PDF and document tasks. We want everyday file work to be easier to understand and accessible from a phone, tablet or computer, without requiring users to install desktop software.</p>
      <h2>What you can do</h2>
      <ul><li>Resize and compress images.</li><li>Combine images or text into PDF files.</li><li>Extract text and tables from text-based PDF files into editable formats.</li><li>Convert supported Word, Excel and PowerPoint documents into a simple PDF.</li></ul>
      <h2>How the tools work</h2>
      <p>Toolora's current converters run in your web browser. Selected files are processed on your device rather than intentionally uploaded to Toolora's own servers. Some tools load open-source conversion libraries from third-party content delivery networks. Your browser therefore needs an internet connection when those libraries are first loaded.</p>
      <h2>Important limitations</h2>
      <p>File conversion is not always exact. Scanned PDFs may need optical character recognition (OCR), and complex layouts, fonts, images, charts or slide designs may not be preserved. Always check the result and keep your original file before using a converted document.</p>
      <h2>Our commitment</h2>
      <p>We aim to keep Toolora clear, useful and accessible. We may improve existing tools and add new ones based on real user needs and feedback.</p>
      <h2>Contact</h2>
      <p>Questions, corrections or suggestions are welcome. Email us at <a href="mailto:awwazmohammed@gmail.com">awwazmohammed@gmail.com</a> or visit our <a href="/contact">Contact page</a>.</p>
      <hr style={{margin:"32px 0",border:0,borderTop:"1px solid #e5eaf1"}} />
      <h1 dir="rtl">من نحن</h1>
      <p dir="rtl">Toolora موقع مجاني يقدم أدوات لإنجاز المهام الشائعة المتعلقة بالصور وملفات PDF ومستندات Office. هدفنا تسهيل التعامل مع الملفات من الهاتف أو الحاسوب دون الحاجة إلى تثبيت برامج مكتبية.</p>
      <h2 dir="rtl">شن تقدر تدير في Toolora؟</h2>
      <ul dir="rtl"><li>تغيير أبعاد الصور وضغط حجمها.</li><li>جمع الصور أو النصوص في ملف PDF.</li><li>استخراج النصوص والجداول من ملفات PDF النصية.</li><li>تحويل ملفات Word وExcel وPowerPoint المدعومة إلى PDF بسيط.</li></ul>
      <h2 dir="rtl">كيف تتم معالجة الملفات؟</h2>
      <p dir="rtl">تعمل أدوات التحويل الحالية داخل متصفحك، وتتم معالجة الملفات على جهازك ولا ترفعها Toolora عمداً إلى خوادمها. بعض الأدوات تحتاج إلى تحميل مكتبات تحويل من شبكات خارجية عند أول استخدام.</p>
      <h2 dir="rtl">حدود التحويل</h2>
      <p dir="rtl">مش كل تحويل يحافظ على التنسيق الأصلي بالكامل. ملفات PDF الممسوحة ضوئياً قد تحتاج إلى تقنية OCR، والتصميمات المعقدة والصور والرسوم والخطوط قد لا تنتقل كما هي. راجع النتيجة واحتفظ بنسخة من الملف الأصلي.</p>
      <h2 dir="rtl">تواصل معنا</h2>
      <p dir="rtl">نرحب بالأسئلة والاقتراحات والتبليغ عن الأخطاء عبر <a href="mailto:awwazmohammed@gmail.com">البريد الإلكتروني</a> أو <a href="/contact">صفحة التواصل</a>.</p>
      <p><a href="/">← Back to Toolora / العودة إلى الموقع</a></p>
    </main>
  );
}
