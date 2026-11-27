export const metadata = {
  title: "About Toolora",
  description: "Learn about Toolora, a free online collection of simple image and PDF tools."
};

export default function About() {
  return (
    <main style={{maxWidth:800,margin:"50px auto",padding:24,fontFamily:"Arial,sans-serif",lineHeight:1.8}}>
      <h1>About Toolora</h1>
      <p>Toolora is a free online toolkit designed to make everyday image and PDF tasks simple and accessible. The website currently offers image resizing, image compression, text-to-PDF conversion, and images-to-PDF conversion.</p>
      <h2>Our approach</h2>
      <p>We focus on clear tools that are easy to use on desktop and mobile devices. Supported files are processed in your browser by the tools, so they are not intentionally uploaded to Toolora servers.</p>
      <h2>Languages and access</h2>
      <p>Toolora provides an interface in English and Arabic. Our goal is to keep the tools straightforward and freely accessible.</p>
      <h2>Contact</h2>
      <p>For questions, feedback, or suggestions, email <a href="mailto:awwazmohammed@gmail.com">awwazmohammed@gmail.com</a>.</p>
      <p><a href="/">Back to Toolora</a></p>
      <hr />
      <h1 dir="rtl">من نحن</h1>
      <p dir="rtl">Toolora منصة مجانية على الإنترنت تهدف إلى تسهيل المهام اليومية المتعلقة بالصور وملفات PDF. تتوفر حالياً أدوات لتغيير أبعاد الصور وضغطها وتحويل النص إلى PDF وتحويل الصور إلى PDF.</p>
      <h2 dir="rtl">طريقتنا</h2>
      <p dir="rtl">نركز على توفير أدوات واضحة وسهلة الاستخدام على الهاتف والحاسوب. تتم معالجة الملفات المدعومة داخل متصفح المستخدم، ولا ترفعها الأدوات عمداً إلى خوادم Toolora.</p>
      <h2 dir="rtl">اللغات والتواصل</h2>
      <p dir="rtl">يوفر الموقع واجهة باللغتين العربية والإنجليزية. للاستفسارات أو الاقتراحات، يمكنك مراسلتنا عبر <a href="mailto:awwazmohammed@gmail.com">البريد الإلكتروني</a>.</p>
      <p dir="rtl"><a href="/">العودة إلى Toolora</a></p>
    </main>
  );
}
