export const metadata = {
  title: "Image Resizing and Compression Guide",
  description: "Learn how image dimensions, aspect ratio, JPEG quality and file size work, with practical steps for resizing and compressing images in Toolora."
};

export default function ImageToolsGuide() {
  return <main style={{maxWidth:820,margin:"48px auto",padding:"24px 22px",fontFamily:"Arial,sans-serif",lineHeight:1.9,color:"#172033"}}>
    <p style={{color:"#2563eb",fontWeight:700}}>TOOLORA LEARNING CENTER</p>
    <h1>How to Resize and Compress Images</h1>
    <p>Image dimensions and file size affect how quickly a page loads, how an image fits a document, and how easily it can be shared. Resizing changes the pixel dimensions. Compression reduces the amount of data used to store the image. These are related but different operations.</p>
    <h2>Resize an image step by step</h2>
    <ol>
      <li>Open the <a href="/">Toolora homepage</a> and choose <strong>Resize an image</strong>.</li>
      <li>Select a JPG, PNG or WEBP image from your device.</li>
      <li>Enter the maximum width and height in pixels. The tool fits the image within those dimensions.</li>
      <li>Leave “Keep original proportions” enabled unless you intentionally want to change the image shape.</li>
      <li>Choose the output quality, create the result and download the JPEG file.</li>
    </ol>
    <h2>What does aspect ratio mean?</h2>
    <p>Aspect ratio is the relationship between an image's width and height. A landscape image might be wider than it is tall, while a portrait image is taller. Keeping the original proportions prevents faces, logos and objects from appearing stretched. When the option is enabled, the image is fitted inside the width and height you enter rather than forced to fill both dimensions.</p>
    <h2>Compress an image without losing too much quality</h2>
    <ol>
      <li>Choose <strong>Compress an image</strong> and select one image.</li>
      <li>Start with a relatively high quality setting.</li>
      <li>Lower the quality gradually and create a new result.</li>
      <li>Compare the downloaded image with the original, especially around small text, edges and detailed areas.</li>
      <li>Keep the version that offers a useful balance between appearance and file size.</li>
    </ol>
    <p>JPEG compression is lossy: smaller files can mean less image detail. Repeatedly compressing an already compressed image can make artifacts more noticeable. Keep the original file and avoid using an aggressively compressed copy as the source for future edits.</p>
    <h2>Which format should you choose?</h2>
    <ul>
      <li><strong>JPEG:</strong> commonly useful for photographs and broad device compatibility. Toolora currently exports resized and compressed images as JPEG.</li>
      <li><strong>PNG:</strong> useful for graphics that need sharp edges or transparency in workflows that preserve PNG.</li>
      <li><strong>WEBP:</strong> a modern web image format that can provide efficient file sizes, depending on image content and browser support.</li>
    </ul>
    <h2>Common problems and practical checks</h2>
    <ul>
      <li>If the result looks stretched, enable the aspect-ratio option and try again.</li>
      <li>If text or fine lines look blurry, increase the quality setting.</li>
      <li>If the file is still too large, reduce its dimensions as well as its quality.</li>
      <li>Very large images may require more memory and processing time on older phones.</li>
    </ul>
    <p>Toolora's current image tools process selected files in your browser. The output is a JPEG image. Always inspect the result before replacing or sharing your original.</p>
    <h2 dir="rtl">شرح تغيير أبعاد الصور وضغطها</h2>
    <p dir="rtl">تغيير الأبعاد يعني تعديل عرض وارتفاع الصورة بالبكسل، أما الضغط فيقلل حجم الملف. العمليتان مختلفتان: تقدر تصغّر أبعاد الصورة، أو تقلل جودتها، أو تستخدم الاثنين مع بعض لتقليل الحجم.</p>
    <h3 dir="rtl">طريقة تغيير الأبعاد</h3>
    <ol dir="rtl">
      <li>افتح <a href="/">الصفحة الرئيسية لـ Toolora</a> واختار تغيير أبعاد الصورة.</li>
      <li>حدد صورة JPG أو PNG أو WEBP من جهازك.</li>
      <li>اكتب العرض والارتفاع المطلوبين بالبكسل.</li>
      <li>خلي خيار الحفاظ على التناسب مفعّل باش ما تطلعش الصورة ممدودة أو مضغوطة.</li>
      <li>حدد الجودة، أنشئ النتيجة ونزّل الصورة.</li>
    </ol>
    <h3 dir="rtl">كيف تضغط الصورة بجودة مناسبة؟</h3>
    <ol dir="rtl">
      <li>افتح أداة ضغط الصورة وحدد الملف.</li>
      <li>ابدأ بجودة عالية وبعدها قللها بالتدريج.</li>
      <li>أنشئ النتيجة وقارنها بالصورة الأصلية.</li>
      <li>راجع النصوص والحواف والتفاصيل الصغيرة قبل اعتماد الصورة.</li>
    </ol>
    <p dir="rtl">تقليل جودة JPEG ممكن يصغّر الملف لكنه قد يقلل وضوح التفاصيل. احتفظ دائماً بالأصل، وما تعتمدش على نسخة مضغوطة جداً لو بتحتاج تعدل عليها مرة ثانية.</p>
    <h3 dir="rtl">نصائح سريعة</h3>
    <ul dir="rtl"><li>لو الصورة ممدودة، فعّل الحفاظ على التناسب.</li><li>لو التفاصيل مش واضحة، ارفع الجودة.</li><li>لو الحجم ما زال كبير، قلل الأبعاد أيضاً.</li><li>راجع الصورة الناتجة قبل مشاركتها أو استبدال الأصل.</li></ul>
    <p><a href="/guides">المزيد من أدلة Toolora</a> · <a href="/contact">تواصل معنا</a></p>
  </main>;
}
