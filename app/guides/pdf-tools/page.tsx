export const metadata = {
  title: "PDF Conversion Guide: Word, Excel, JPG and Text",
  description: "Understand how to create PDFs and convert text-based PDF files with practical instructions and limitations for each Toolora converter."
};

export default function PdfToolsGuide() {
  return <main style={{maxWidth:820,margin:"48px auto",padding:"24px 22px",fontFamily:"Arial,sans-serif",lineHeight:1.9,color:"#172033"}}>
    <p style={{color:"#2563eb",fontWeight:700}}>TOOLORA LEARNING CENTER</p>
    <h1>Practical Guide to Creating and Converting PDF Files</h1>
    <p>PDF is widely used because it can be shared across devices while keeping a document in a consistent container. However, a PDF may contain selectable text, scanned page images, or a mixture of both. That difference affects what a converter can extract.</p>
    <h2>Create a PDF from text</h2>
    <ol>
      <li>Open <a href="/">Toolora</a> and choose <strong>Text to PDF</strong>.</li>
      <li>Type or paste the content into the text area.</li>
      <li>Choose the appropriate language direction on the site, then create the PDF.</li>
      <li>Download and open the file to check page breaks and readability.</li>
    </ol>
    <p>Important: the current Text to PDF tool renders text into page images. The resulting PDF may not support selecting, searching or copying the text like a digitally generated text PDF.</p>
    <h2>Convert PDF to Word</h2>
    <p>The PDF to Word tool extracts readable text and places it into a DOCX document. It is most useful when you need the text as a starting point for editing. It does not recreate the exact original page design. Columns, tables, images, headers and complex spacing may need to be rebuilt manually.</p>
    <h2>Convert PDF to Excel</h2>
    <ol>
      <li>Choose a PDF that contains selectable text rather than only scanned images.</li>
      <li>Run PDF to Excel and download the XLSX file.</li>
      <li>Open the spreadsheet and check the column boundaries, row order, dates and numeric values.</li>
      <li>Correct any merged or split cells before using the data.</li>
    </ol>
    <p>PDF pages are designed for display, not necessarily for storing structured spreadsheet data. The converter estimates rows and columns from text positions. Complex layouts, multi-line cells and scanned tables may not convert cleanly. Scanned documents need OCR before text extraction is possible; OCR is not currently built into this tool.</p>
    <h2>Convert PDF pages to JPG images</h2>
    <p>Choose PDF to JPG, select the PDF and run the conversion. Toolora renders each page as a JPG and packages the images in a ZIP archive. Extract the ZIP file to view or share individual pages. Large or high-page-count PDFs can create large downloads.</p>
    <h2>Combine images into one PDF</h2>
    <p>Choose Images to PDF, select multiple JPG, PNG or WEBP images, and create the document. Each selected image is placed on its own PDF page. Review the selected filenames and order before creating the file.</p>
    <h2>How to get more reliable results</h2>
    <ul>
      <li>Use a text-based PDF when you need to extract text or tables.</li>
      <li>For a scanned PDF, use a trusted OCR process first, then review the recognized text.</li>
      <li>Keep the original PDF and compare important names, totals, dates and figures with the converted file.</li>
      <li>Do not rely on an automatic conversion as the only copy of a legal, financial or business record.</li>
    </ul>
    <h2 dir="rtl">دليل إنشاء وتحويل ملفات PDF</h2>
    <p dir="rtl">ملف PDF ممكن يحتوي على نص قابل للتحديد والنسخ، أو صور ممسوحة ضوئياً، أو الاثنين مع بعض. الفرق مهم لأن أدوات استخراج النصوص والجداول تعطي أفضل نتيجة لما يكون النص موجوداً داخل الملف فعلياً، مش مجرد صورة.</p>
    <h3 dir="rtl">تحويل النص إلى PDF</h3>
    <ol dir="rtl"><li>افتح <a href="/">موقع Toolora</a> واختار تحويل النص إلى PDF.</li><li>اكتب النص أو الصقه في المربع.</li><li>اختار اتجاه اللغة المناسب وأنشئ الملف.</li><li>نزّل PDF وافتحه وراجع الصفحات والقراءة.</li></ol>
    <p dir="rtl">ملاحظة: الأداة الحالية تحول النص إلى صور داخل صفحات PDF، لذلك قد لا تقدرش تحدد النص أو تبحث داخله مثل ملفات PDF النصية العادية.</p>
    <h3 dir="rtl">تحويل PDF إلى Word أو Excel</h3>
    <p dir="rtl">أداة PDF إلى Word تستخرج النص المقروء وتحطه في مستند DOCX، لكنها ما تعيدش إنشاء التصميم الأصلي. وأداة PDF إلى Excel تحاول تقدير الصفوف والأعمدة من أماكن النص داخل الصفحة؛ لذلك لازم تراجع الخلايا والأرقام والتواريخ بعد التحويل.</p>
    <p dir="rtl">لو الملف ممسوح ضوئياً، فهو في الغالب صورة ويحتاج OCR لاستخراج النص. ميزة OCR مش موجودة حالياً في الأداة. كذلك الجداول المعقدة ممكن تحتاج ترتيباً يدوياً.</p>
    <h3 dir="rtl">تحويل صفحات PDF إلى صور JPG</h3>
    <p dir="rtl">اختار PDF إلى JPG وحدد الملف. الأداة تنشئ صورة JPG لكل صفحة وتحط الصور داخل ملف ZIP واحد. بعد التنزيل فك ضغط الملف للوصول إلى الصور.</p>
    <h3 dir="rtl">نصائح للحصول على نتيجة أفضل</h3>
    <ul dir="rtl"><li>استخدم PDF نصياً لو تبي تستخرج النصوص أو الجداول.</li><li>احتفظ بالملف الأصلي وقارن الأسماء والأرقام والتواريخ المهمة.</li><li>راجع الصفوف والأعمدة في Excel قبل استخدام البيانات.</li><li>ما تعتمدش على التحويل الآلي وحده في المستندات المالية أو القانونية المهمة.</li></ul>
    <p><a href="/guides">المزيد من أدلة Toolora</a> · <a href="/contact">تواصل معنا</a></p>
  </main>;
}
