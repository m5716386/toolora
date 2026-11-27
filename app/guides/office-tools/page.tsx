export const metadata = {
  title: "Convert Word, Excel and PowerPoint to PDF",
  description: "A clear guide to Toolora's DOCX, XLSX and PPTX to PDF converters, supported formats, what is extracted and what formatting is not preserved."
};

export default function OfficeToolsGuide() {
  return <main style={{maxWidth:820,margin:"48px auto",padding:"24px 22px",fontFamily:"Arial,sans-serif",lineHeight:1.9,color:"#172033"}}>
    <p style={{color:"#2563eb",fontWeight:700}}>TOOLORA LEARNING CENTER</p>
    <h1>Converting Word, Excel and PowerPoint Files to PDF</h1>
    <p>Office documents can contain text, tables, formulas, charts, pictures, page layouts and slide designs. A conversion tool may preserve some of these elements and omit others. Understanding the output before you begin helps you choose the right workflow.</p>
    <h2>Supported file formats</h2>
    <ul>
      <li><strong>Word to PDF:</strong> modern DOCX files.</li>
      <li><strong>Excel to PDF:</strong> modern XLSX workbooks.</li>
      <li><strong>PowerPoint to PDF:</strong> modern PPTX presentations.</li>
    </ul>
    <p>Legacy formats such as DOC, XLS and PPT are not supported by the current converters. Save or export those files to their modern DOCX, XLSX or PPTX equivalents before using the tool.</p>
    <h2>How to convert a document</h2>
    <ol>
      <li>Open the <a href="/">Toolora homepage</a>.</li>
      <li>Choose the converter that matches your file: Word to PDF, Excel to PDF or PowerPoint to PDF.</li>
      <li>Select a supported file from your device.</li>
      <li>Create the PDF and download the result.</li>
      <li>Open the PDF and review all extracted content before sharing it.</li>
    </ol>
    <h2>What the current converters preserve</h2>
    <p>Toolora reads text and some table or cell content from supported Office files, then creates a simple PDF from the extracted text. Excel worksheets are read as rows of cell values. Word paragraphs and PowerPoint slide text are extracted in reading order where possible.</p>
    <h2>What is not preserved</h2>
    <ul>
      <li>Original page margins, fonts, colors and detailed formatting.</li>
      <li>Images, logos, charts, diagrams and embedded objects.</li>
      <li>PowerPoint themes, transitions, animations and slide layouts.</li>
      <li>Excel formulas as working formulas, print areas and complex workbook layout.</li>
      <li>Exact page breaks, columns and positioning from the original document.</li>
    </ul>
    <p>For a presentation-ready or print-ready PDF that must match the original, use the export feature in Microsoft Office or a compatible office application. Toolora is currently more suitable for creating a simple PDF copy of extracted text and table content.</p>
    <h2>Before converting important documents</h2>
    <ul>
      <li>Keep an unchanged copy of the original file.</li>
      <li>Check that the file opens normally in an Office-compatible application.</li>
      <li>Review names, totals, dates, formulas and table order in the result.</li>
      <li>Do not use the simple output as a replacement for a carefully formatted official document without checking it.</li>
    </ul>
    <h2 dir="rtl">تحويل ملفات Word وExcel وPowerPoint إلى PDF</h2>
    <p dir="rtl">مستندات Office ممكن تحتوي على نصوص وجداول وصور ورسوم وتصميمات. طريقة التحويل تحدد شن العناصر اللي تنتقل للملف الجديد وشن العناصر اللي ممكن تضيع.</p>
    <h3 dir="rtl">الصيغ المدعومة</h3>
    <ul dir="rtl"><li>Word إلى PDF: ملفات DOCX الحديثة.</li><li>Excel إلى PDF: ملفات XLSX الحديثة.</li><li>PowerPoint إلى PDF: ملفات PPTX الحديثة.</li></ul>
    <p dir="rtl">الصيغ القديمة DOC وXLS وPPT مش مدعومة حالياً. احفظ الملف بصيغة DOCX أو XLSX أو PPTX قبل استخدام الأداة.</p>
    <h3 dir="rtl">طريقة التحويل</h3>
    <ol dir="rtl"><li>افتح <a href="/">الصفحة الرئيسية لـ Toolora</a>.</li><li>اختار الأداة المناسبة لنوع الملف.</li><li>حدد الملف من جهازك وأنشئ PDF.</li><li>نزّل النتيجة وافتحها وراجع المحتوى بالكامل.</li></ol>
    <h3 dir="rtl">شن اللي ينتقل وشن اللي ما ينتقلش؟</h3>
    <p dir="rtl">الأدوات الحالية تستخرج النصوص وبعض بيانات الجداول والخلايا، وبعدها تنشئ PDF بسيط. لكنها ما تحافظش على التصميم الأصلي والخطوط والألوان والصور والرسوم البيانية والحركات وتصميم الشرائح أو توزيع الصفحات.</p>
    <p dir="rtl">لو تبي PDF مطابق لتصميم الملف الأصلي وجاهز للطباعة أو العرض، الأفضل تستخدم خاصية التصدير الموجودة في Microsoft Office أو برنامج متوافق. Toolora حالياً مناسبة أكثر لإنشاء نسخة PDF بسيطة من النصوص ومحتوى الجداول.</p>
    <h3 dir="rtl">قبل تحويل مستند مهم</h3>
    <ul dir="rtl"><li>احتفظ بنسخة أصلية من الملف.</li><li>تأكد إن الملف يفتح بشكل طبيعي في برنامج Office.</li><li>راجع الأسماء والأرقام والتواريخ وترتيب الجداول.</li><li>ما تعتمدش على النتيجة قبل مراجعتها، خصوصاً في المستندات الرسمية.</li></ul>
    <p><a href="/guides">المزيد من أدلة Toolora</a> · <a href="/contact">تواصل معنا</a></p>
  </main>;
}
