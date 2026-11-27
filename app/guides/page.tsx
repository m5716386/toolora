export const metadata = {
  title: "How to Use the Free Online Tools",
  description: "Practical step-by-step guides for resizing images, compressing images, creating PDFs and converting PDF and Office files with Toolora."
};

const sections = [
  { title: "Resize an image", steps: ["Open the image resizing tool and choose a JPG, PNG or WEBP image.", "Enter the target width and height in pixels.", "Keep the aspect-ratio option enabled if you want to avoid stretching the image.", "Choose the output quality, create the result and download the JPEG file."], tip: "For a smaller image that keeps its original shape, set a maximum width and height and leave the aspect ratio enabled." },
  { title: "Compress an image", steps: ["Choose the image compression tool and select one image.", "Adjust the quality slider. Lower quality usually creates a smaller file.", "Create the compressed image and compare its appearance with the original.", "Download the result if the quality and file size meet your needs."], tip: "Keep the original image. Strong compression can reduce fine detail, especially in text and graphics." },
  { title: "Convert images to PDF", steps: ["Open Images to PDF and select one or more JPG, PNG or WEBP images.", "Check the selected file names and their order before conversion.", "Create the PDF and download the combined document."], tip: "For best results, use clear images with the page orientation you want. Each image is placed on its own PDF page." },
  { title: "Create a PDF from text", steps: ["Open Text to PDF.", "Paste or type your text into the text area.", "Choose the correct language direction on the site before creating the file.", "Create and download the PDF, then open it to check the pages."], tip: "This tool renders text as page images. The resulting PDF may not allow text selection or searching." },
  { title: "Convert a text-based PDF to Excel", steps: ["Choose PDF to Excel and select a PDF containing selectable text.", "Start the conversion and wait for the spreadsheet to be prepared.", "Download the XLSX file and review the rows and columns in a spreadsheet app."], tip: "Scanned pages are images, not selectable text. They require OCR before their contents can be extracted, and complex tables may need manual cleanup." },
  { title: "Convert PDF to Word", steps: ["Choose PDF to Word and select your PDF.", "Run the conversion and download the DOCX document.", "Review paragraphs, line breaks and page structure in your word processor."], tip: "This converter extracts readable text. It does not recreate the original page design, columns, images or complex tables exactly." },
  { title: "Convert PDF pages to JPG", steps: ["Choose PDF to JPG and select a PDF file.", "Run the conversion. Each page is rendered as a JPG image.", "Download the ZIP archive and extract the page images."], tip: "Large PDFs can produce large ZIP files. Make sure your device has enough free storage." },
  { title: "Convert Excel, Word or PowerPoint to PDF", steps: ["Choose the matching converter: Excel to PDF, Word to PDF or PowerPoint to PDF.", "Select a modern XLSX, DOCX or PPTX file.", "Create the PDF and download it.", "Open the result and review the extracted text and tables."], tip: "These converters create a simple text-based PDF and do not preserve the original Office layout, charts, images, animations or slide design." },
  { title: "Create an Excel file from text", steps: ["Open Text to Excel and paste your rows into the text area.", "Separate columns with commas, semicolons or tabs.", "Put each spreadsheet row on a separate line.", "Create and download the XLSX file, then review the columns."], tip: "If your data contains commas inside values, use tabs or semicolons as separators to reduce unwanted column splits." }
];

export default function Guides() {
  return <main style={{maxWidth:920,margin:"48px auto",padding:"24px 22px",fontFamily:"Arial,sans-serif",lineHeight:1.85,color:"#172033"}}>
    <p style={{color:"#2563eb",fontWeight:700}}>TOOLORA LEARNING CENTER</p>
    <h1>How to Use Toolora's Free Online Tools</h1>
    <p>These practical guides explain what each tool does, how to use it and what to check before relying on the result. Toolora processes selected files in your browser; some tools load conversion libraries from third-party content delivery networks.</p>
    <nav aria-label="Detailed guides" style={{display:"flex",flexWrap:"wrap",gap:16,margin:"20px 0"}}><a href="/guides/image-tools">Image resizing and compression</a><a href="/guides/pdf-tools">PDF creation and conversion</a><a href="/guides/office-tools">Word, Excel and PowerPoint to PDF</a></nav>
    {sections.map((section, index) => <section key={section.title} style={{padding:"18px 0",borderBottom:"1px solid #e5eaf1"}}>
      <h2>{index + 1}. {section.title}</h2>
      <ol>{section.steps.map(step => <li key={step}>{step}</li>)}</ol>
      <p><strong>Tip:</strong> {section.tip}</p>
    </section>)}
    <h2>Before you convert an important file</h2>
    <ul><li>Keep an unchanged copy of the original file.</li><li>Check the output on the device and app where you plan to use it.</li><li>Do not upload confidential documents to any online service unless you are comfortable with its privacy practices.</li><li>Remember that scanned PDFs may need OCR and that no automatic converter guarantees perfect formatting.</li></ul>
    <p>Need help or found an issue? <a href="/contact">Contact the Toolora team</a>. You can also return to the <a href="/">Toolora tools homepage</a>.</p>
    <hr style={{margin:"32px 0",border:0,borderTop:"1px solid #e5eaf1"}} />
    <h1 dir="rtl">دليل استخدام أدوات Toolora</h1>
    <p dir="rtl">في الدليل هذا بنشرحوا طريقة استخدام الأدوات والنتائج المتوقعة منها، مع أهم الملاحظات قبل الاعتماد على الملفات الناتجة.</p>
    <h2 dir="rtl">تغيير أبعاد الصورة وضغطها</h2>
    <ol dir="rtl"><li>اختار أداة تغيير الأبعاد أو ضغط الصورة.</li><li>حدد صورة JPG أو PNG أو WEBP.</li><li>في تغيير الأبعاد، أدخل العرض والارتفاع بالبكسل وخلي خيار الحفاظ على التناسب مفعّل لو تبي تتجنب تمدد الصورة.</li><li>في الضغط، قلل الجودة تدريجياً وراجع وضوح الصورة قبل التنزيل.</li></ol>
    <h2 dir="rtl">تحويل الصور إلى PDF</h2>
    <ol dir="rtl"><li>افتح أداة الصور إلى PDF وحدد صورة أو أكثر.</li><li>راجع أسماء الصور وترتيبها.</li><li>أنشئ الملف ونزّله، وبتكون كل صورة في صفحة مستقلة.</li></ol>
    <h2 dir="rtl">تحويل النص إلى PDF أو Excel</h2>
    <ol dir="rtl"><li>افتح الأداة المناسبة والصق النص أو البيانات.</li><li>لملف Excel، افصل الأعمدة بفواصل أو فاصلة منقوطة أو علامات جدولة، وخلي كل صف في سطر.</li><li>أنشئ الملف وافتحه للتأكد من ترتيب المحتوى.</li></ol>
    <h2 dir="rtl">تحويل PDF إلى Word أو Excel أو JPG</h2>
    <p dir="rtl">اختار الأداة وحدد ملف PDF. ملفات PDF النصية تعطي نتائج أفضل في استخراج النصوص والجداول. الملفات الممسوحة ضوئياً تحتاج OCR، وقد تحتاج الجداول إلى تعديل يدوي. أداة PDF إلى JPG تنشئ ملف ZIP يحتوي على صورة لكل صفحة.</p>
    <h2 dir="rtl">تحويل ملفات Office إلى PDF</h2>
    <p dir="rtl">اختار Excel إلى PDF أو Word إلى PDF أو PowerPoint إلى PDF، وبعدها حدد ملف XLSX أو DOCX أو PPTX. التحويل الحالي يستخرج النصوص والجداول وينشئ PDF بسيطاً، لكنه لا يحافظ على التصميم الأصلي أو الصور والرسوم والحركات.</p>
    <h2 dir="rtl">نصائح قبل تحويل الملفات المهمة</h2>
    <ul dir="rtl"><li>احتفظ بنسخة أصلية من الملف.</li><li>راجع النتيجة في البرنامج اللي بتستخدمه فيه.</li><li>لا تستخدم أي خدمة لمعالجة مستندات سرية إلا بعد مراجعة سياسة الخصوصية.</li><li>تذكر أن التحويل الآلي مش مضمون يكون مطابقاً للأصل في كل الحالات.</li></ul>
    <h2 dir="rtl">أدلة تفصيلية إضافية</h2>
    <ul dir="rtl"><li><a href="/guides/image-tools">شرح تغيير أبعاد الصور وضغطها</a></li><li><a href="/guides/pdf-tools">دليل إنشاء وتحويل ملفات PDF</a></li><li><a href="/guides/office-tools">تحويل ملفات Word وExcel وPowerPoint إلى PDF</a></li></ul>
    <p dir="rtl"><a href="/">العودة لأدوات Toolora</a> · <a href="/contact">التواصل معنا</a></p>
  </main>;
}
