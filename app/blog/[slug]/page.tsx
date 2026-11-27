import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Article = { slug:string; enTitle:string; arTitle:string; enDescription:string; arDescription:string; category:string; tool:string; toolName:string; enIntro:string; arIntro:string; enSections:{heading:string;paragraphs:string[];list?:string[]}[]; arSections:{heading:string;paragraphs:string[];list?:string[]}[]; enFaq:[string,string][]; arFaq:[string,string][] };

const articles: Article[] = [
{
slug:"compress-image-to-100kb",category:"Image optimization",tool:"compress",toolName:"Compress Image",
enTitle:"How to Compress an Image to 100KB Without Making It Look Bad",arTitle:"كيف تضغط الصورة إلى 100 كيلوبايت مع المحافظة على جودتها؟",
enDescription:"Learn how to reduce a photo to around 100KB for websites, online forms and email. Understand image dimensions, JPEG quality and how to check the result.",
arDescription:"تعلم كيف تقلل حجم الصورة إلى حوالي 100 كيلوبايت للمواقع والنماذج الإلكترونية والبريد، مع فهم تأثير الأبعاد وجودة JPEG على النتيجة.",
enIntro:"Need to upload a photo but the website says the file must be under 100KB? The right approach is to reduce unnecessary pixel dimensions first, then adjust compression quality gradually. A 100KB target is not possible for every image at the same visual quality: a detailed photograph needs more data than a simple graphic.",
arIntro:"تبي ترفع صورة لموقع أو نموذج ويطلب منك تكون أقل من 100 كيلوبايت؟ أفضل طريقة هي تبدأ بتقليل الأبعاد لو كانت أكبر من المطلوب، وبعدها تنقص الجودة بالتدريج. مش كل الصور تقدر توصل لنفس الحجم وبنفس الوضوح؛ الصورة المليانة تفاصيل تحتاج بيانات أكثر من صورة بسيطة.",
enSections:[
{heading:"1. Check the image dimensions first",paragraphs:["A photo that is 4000 pixels wide may contain far more pixels than an online form needs. If the form displays a small preview, resizing the image to sensible dimensions can reduce file size before compression. Do not shrink it blindly: check whether the website specifies a minimum width, height or crop."],list:["Keep the original photo as a backup.","Use the dimensions requested by the website when available.","Keep the aspect ratio enabled to avoid stretching faces or objects."]},
{heading:"2. Reduce JPEG quality gradually",paragraphs:["JPEG is a lossy format, which means some image information is discarded to make the file smaller. Start with a reasonably high quality setting and lower it in small steps. Compare the result at normal viewing size and zoom in on text, hair, edges and other fine details. Stop when the file is small enough and still looks acceptable." ]},
{heading:"3. Check the actual file size",paragraphs:["The file size depends on the image content, dimensions, format and quality setting. A busy photograph may remain larger than a flat illustration at the same dimensions. If the file is still above 100KB, try reducing the dimensions a little more, then compress again. Avoid repeatedly compressing an already compressed copy; return to the original for each attempt."]},
{heading:"Use Toolora to create a smaller copy",paragraphs:["Open the Toolora image compressor, choose a JPG, PNG or WEBP image, adjust the quality and create the result. The current tool exports JPEG, so transparent PNG areas will not remain transparent. Keep the original file and inspect the downloaded copy before uploading it to an important form."]}
],
arSections:[
{heading:"1. راجع أبعاد الصورة أولاً",paragraphs:["لو عرض الصورة 4000 بكسل، ممكن تكون أكبر من المطلوب لنموذج إلكتروني يعرضها بحجم صغير. تقليل الأبعاد إلى مقاس مناسب يساعد في تقليل حجم الملف قبل الضغط. لكن ما تصغّرش عشوائياً؛ راجع هل الموقع محدد أقل عرض أو ارتفاع أو مقاس قص معين."],list:["احتفظ بنسخة من الصورة الأصلية.","استخدم المقاسات اللي يطلبها الموقع لو كانت محددة.","خلي الحفاظ على تناسب الأبعاد مفعّل باش ما تتشوّهش الوجوه والأشياء."]},
{heading:"2. قلل جودة JPEG بالتدريج",paragraphs:["صيغة JPEG تضغط الصورة بحذف جزء من بياناتها، وهذا ممكن يقلل الوضوح. ابدأ بجودة مرتفعة وانقصها بخطوات بسيطة. قارن النتيجة بالحجم العادي وكبّر الصورة وراجع النصوص والشعر والحواف والتفاصيل الصغيرة. وقف لما توصل لحجم مناسب وجودة مقبولة."]},
{heading:"3. تأكد من حجم الملف النهائي",paragraphs:["حجم الصورة يعتمد على محتواها وأبعادها والصيغة والجودة. صورة فيها تفاصيل كثيرة ممكن تكون أكبر من رسم بسيط بنفس الأبعاد. لو ما زال الحجم فوق 100 كيلوبايت، جرّب تقلل الأبعاد شوية وبعدها اضغط من جديد. ما تعاودش الضغط على نسخة مضغوطة مرات كثيرة؛ ارجع للأصل في كل محاولة."]},
{heading:"استخدم أداة Toolora لضغط الصورة",paragraphs:["افتح أداة ضغط الصور في Toolora وحدد صورة JPG أو PNG أو WEBP وعدّل الجودة وأنشئ النتيجة. الأداة حالياً تصدّر JPEG، لذلك المناطق الشفافة في PNG مش حتظل شفافة. احتفظ بالأصل وراجع النسخة الناتجة قبل رفعها إلى نموذج مهم."]}
],
enFaq:[["Can every photo be compressed below 100KB?","No. It depends on dimensions, detail, format and acceptable quality. You may need to resize it as well."],["Will compressing a PNG keep transparency?","The current Toolora compressor exports JPEG, which does not support transparency."],["Should I compress the same file repeatedly?","It is better to start from the original each time to avoid accumulating visible compression artifacts."]],
arFaq:[["هل كل صورة نقدر نوصل حجمها لأقل من 100 كيلوبايت؟","مش بالضرورة؛ الموضوع يعتمد على الأبعاد والتفاصيل والصيغة والجودة المقبولة، وممكن تحتاج تصغير الأبعاد أيضاً."],["هل ضغط PNG يحافظ على الشفافية؟","أداة Toolora الحالية تصدّر JPEG، وهذه الصيغة لا تدعم الشفافية."],["نضغط نفس الصورة أكثر من مرة؟","الأفضل تبدأ من الصورة الأصلية في كل محاولة لتجنب تراكم آثار الضغط."]]
},
{
slug:"resize-image-for-website",category:"Image optimization",tool:"resize",toolName:"Image Resizer",
enTitle:"How to Resize an Image for a Website: Dimensions and Aspect Ratio",arTitle:"كيف تغيّر أبعاد صورة لتناسب موقعاً إلكترونياً؟",
enDescription:"Learn how to choose website image dimensions, preserve aspect ratio and prepare lighter photos for web pages without unnecessary stretching.",
arDescription:"تعرف على اختيار أبعاد الصور للمواقع والحفاظ على تناسبها وتجهيز صور أخف لصفحات الويب دون تشويه.",
enIntro:"A website image should be large enough to look clear in its display area, but not unnecessarily large. Choosing sensible pixel dimensions can reduce download size and help pages feel faster. The best dimensions depend on the layout, the device and whether the image is a banner, product photo or small thumbnail.",
arIntro:"صورة الموقع لازم تكون واضحة في المساحة اللي بتظهر فيها، لكن مش ضروري تكون أكبر من اللازم. اختيار أبعاد مناسبة بالبكسل يقلل حجم التنزيل ويساعد الصفحة تفتح بشكل أسرع. المقاس المناسب يعتمد على تصميم الصفحة وهل الصورة بانر أو صورة منتج أو صورة مصغرة.",
enSections:[
{heading:"Start with the space where the image appears",paragraphs:["Check the width of the image area in your page design. A small thumbnail does not need the same pixel dimensions as a full-width hero image. For high-density screens, the source may need more pixels than the CSS display width, but uploading a huge original for every placement wastes bandwidth."]},
{heading:"Keep the original aspect ratio",paragraphs:["Aspect ratio is the relationship between width and height. If you change width and height independently, people and objects can look stretched. Keep the ratio locked when resizing unless the design specifically calls for cropping. Cropping and resizing are different: resizing changes pixel dimensions, while cropping removes parts of the image."]},
{heading:"Choose a practical output and inspect it",paragraphs:["For photographs, JPEG is widely compatible. WebP can often provide smaller files, depending on the image and encoder. Toolora's current resizer accepts JPG, PNG and WEBP input and downloads a JPEG result. If your image needs transparency, remember that JPEG will not preserve it. Inspect the result on both a phone and a desktop-sized screen."]},
{heading:"A simple workflow with Toolora",paragraphs:["Open the image resizer, choose your file, enter the target width and height in pixels, and keep original proportions enabled. Create the resized image and check its sharpness at the actual display size. If the file remains too large, use the image compressor as a separate next step."]}
],
arSections:[
{heading:"ابدأ من المساحة اللي بتظهر فيها الصورة",paragraphs:["راجع عرض المكان المخصص للصورة في تصميم الموقع. الصورة المصغرة مش محتاجة نفس أبعاد صورة كبيرة بعرض الصفحة. الشاشات عالية الكثافة ممكن تحتاج تفاصيل أكثر من عرض العرض الفعلي، لكن رفع صورة ضخمة لكل استخدام يضيّع حجم التنزيل."]},
{heading:"حافظ على نسبة العرض إلى الارتفاع",paragraphs:["نسبة الأبعاد هي العلاقة بين العرض والارتفاع. لو غيرت القيمتين بشكل مستقل ممكن تظهر الوجوه والأشياء ممدودة. حافظ على التناسب إلا لو التصميم يطلب قص الصورة. تغيير الأبعاد يبدل عدد البكسلات، أما القص فيحذف جزءاً من الصورة؛ وهما عمليتان مختلفتان."]},
{heading:"اختار صيغة مناسبة وراجع النتيجة",paragraphs:["JPEG متوافق مع أغلب الأجهزة ومناسب للصور الفوتوغرافية. WebP ممكن يعطي حجماً أقل حسب محتوى الصورة وطريقة الضغط. أداة Toolora الحالية تقبل JPG وPNG وWEBP وتصدر النتيجة بصيغة JPEG. لو تحتاج خلفية شفافة، تذكر أن JPEG لا يحافظ عليها. راجع النتيجة على الهاتف والكمبيوتر."]},
{heading:"خطوات بسيطة باستخدام Toolora",paragraphs:["افتح أداة تغيير الأبعاد وحدد الصورة واكتب العرض والارتفاع بالبكسل وخلي خيار الحفاظ على التناسب مفعّل. أنشئ الصورة وراجع وضوحها بالحجم اللي حتظهر به في الموقع. لو حجم الملف ما زال كبير، استخدم أداة ضغط الصور كخطوة منفصلة."]}
],
enFaq:[["What dimensions should a website image have?","Use the dimensions required by your layout. A thumbnail, product image and full-width banner have different needs."],["Does resizing always reduce file size?","Usually when reducing pixel dimensions, but final size also depends on format and image content."],["Can I keep a transparent PNG?","Toolora's current resize output is JPEG, so transparency is not retained."]],
arFaq:[["شن أبعاد الصورة المناسبة للموقع؟","استخدم المقاس اللي يحتاجه تصميم الصفحة؛ الصورة المصغرة وصورة المنتج والبانر لكل واحدة احتياج مختلف."],["هل تغيير الأبعاد يقلل حجم الملف دائماً؟","غالباً لما تصغّر عدد البكسلات، لكن الحجم النهائي يعتمد أيضاً على الصيغة ومحتوى الصورة."],["نقدر نحافظ على PNG شفافة؟","أداة تغيير الأبعاد الحالية تصدّر JPEG، لذلك الشفافية لا يتم الاحتفاظ بها."]]
},
{
slug:"convert-pdf-to-excel",category:"PDF conversion",tool:"pdfexcel",toolName:"PDF to Excel",
enTitle:"How to Convert PDF to Excel and Check the Spreadsheet",arTitle:"كيف تحوّل PDF إلى Excel وتراجع الجدول الناتج؟",
enDescription:"Learn how PDF-to-Excel extraction works, why selectable text matters, how to check rows and totals, and when scanned PDFs need OCR.",
arDescription:"تعلم كيف يتم استخراج البيانات من PDF إلى Excel، ولماذا يهم النص القابل للتحديد، وكيف تراجع الصفوف والمجاميع ومتى تحتاج OCR.",
enIntro:"Converting a PDF table into Excel can save retyping, but the result depends heavily on how the PDF was created. A digitally generated PDF with selectable text is usually easier to extract than a scanned page that is only an image. Even when extraction works, the spreadsheet should be checked before it is used for reporting or calculations.",
arIntro:"تحويل جدول PDF إلى Excel يوفر عليك إعادة كتابة البيانات، لكن النتيجة تعتمد بشكل كبير على طريقة إنشاء ملف PDF. الملف اللي فيه نص قابل للتحديد أسهل في الاستخراج من صفحة ممسوحة ضوئياً وموجودة كصورة. وحتى لو تم الاستخراج، لازم تراجع الجدول قبل استخدامه في التقارير أو الحسابات.",
enSections:[
{heading:"Check whether the PDF contains selectable text",paragraphs:["Open the PDF and try to select a word with your cursor. If you can highlight individual words, the file likely contains text that an extractor can read. If the page behaves like one large picture, it is probably scanned and needs optical character recognition (OCR) before its contents can be extracted."]},
{heading:"Convert and inspect the spreadsheet",paragraphs:["Run the PDF-to-Excel tool and download the XLSX workbook. Check whether each value landed in the correct column, whether rows were split or merged, and whether decimal points, dates and minus signs survived. Compare important totals with the original PDF. Do not assume a visually plausible table is numerically correct."]},
{heading:"Understand common conversion limits",paragraphs:["PDF is a page-description format, not a spreadsheet database. Multi-line cells, merged columns, rotated text, nested tables and unusual reading order can confuse automatic extraction. Toolora currently extracts positioned text from text-based PDFs; it does not include OCR for scanned pages. Complex tables may need manual cleanup."]},
{heading:"Use the Toolora PDF to Excel converter",paragraphs:["Choose the PDF-to-Excel tool, select a text-based PDF, create the spreadsheet and download the XLSX file. Review the output before editing or sharing it. Keep the source PDF so you can verify figures and restore information if extraction misses something."]}
],
arSections:[
{heading:"تأكد إن ملف PDF يحتوي على نص قابل للتحديد",paragraphs:["افتح الملف وجرب تحدد كلمة بالماوس أو بإصبعك. لو تقدر تظلل الكلمات بشكل منفصل، غالباً الملف يحتوي على نص يقدر برنامج الاستخراج يقرأه. لو الصفحة كلها تتصرف كأنها صورة واحدة، فهي غالباً ممسوحة ضوئياً وتحتاج تقنية OCR للتعرف على النص قبل استخراجه."]},
{heading:"حوّل الملف وراجع جدول Excel",paragraphs:["شغّل أداة PDF إلى Excel ونزّل ملف XLSX. راجع هل كل قيمة موجودة في العمود الصحيح، وهل الصفوف اندمجت أو انقسمت، وهل الفواصل العشرية والتواريخ والإشارات السالبة ظهرت بشكل صحيح. قارن المجاميع المهمة مع ملف PDF الأصلي. ما تفترضش إن الجدول صحيح حسابياً لمجرد إن شكله مرتب."]},
{heading:"افهم حدود التحويل الآلي",paragraphs:["PDF مصمم لعرض الصفحات، مش لتخزين بيانات الجداول مثل Excel. الخلايا متعددة الأسطر والأعمدة المدمجة والنصوص المائلة والجداول المتداخلة ممكن تربك الاستخراج. أداة Toolora تستخرج حالياً النصوص ذات المواقع المحددة من ملفات PDF النصية، ولا تتضمن OCR للصفحات الممسوحة ضوئياً. وقد تحتاج الجداول المعقدة إلى تنظيف يدوي."]},
{heading:"استخدم أداة PDF إلى Excel في Toolora",paragraphs:["اختار أداة PDF إلى Excel وحدد ملف PDF نصي وأنشئ جدول البيانات ونزّل ملف XLSX. راجع النتيجة قبل تعديلها أو مشاركتها. احتفظ بملف PDF الأصلي حتى تقدر تتحقق من الأرقام وترجع لأي معلومة ما تمش استخراجها."]}
],
enFaq:[["Can I convert a scanned PDF to Excel?","Not with the current Toolora converter. Scanned pages need OCR, which is not currently included."],["Will the converted spreadsheet match the PDF exactly?","No. The tool reconstructs rows and columns from text positions. Complex layouts can need manual correction."],["Should I verify totals after conversion?","Yes. Compare important numbers and totals with the original PDF before relying on the spreadsheet."]],
arFaq:[["نقدر نحوّل PDF ممسوح ضوئياً إلى Excel؟","مش باستخدام أداة Toolora الحالية؛ الصفحات الممسوحة تحتاج OCR، والميزة غير مدمجة حالياً."],["هل جدول Excel يطلع مطابق تماماً لملف PDF؟","لا، الأداة تعيد بناء الصفوف والأعمدة من مواقع النصوص، والتنسيقات المعقدة ممكن تحتاج تعديل يدوي."],["لازم نراجع المجاميع بعد التحويل؟","نعم، قارن الأرقام والمجاميع المهمة مع ملف PDF الأصلي قبل الاعتماد على الجدول."]]
},
{
slug:"combine-images-into-pdf",category:"PDF creation",tool:"imagepdf",toolName:"Images to PDF",
enTitle:"How to Combine Multiple Images into One PDF",arTitle:"كيف تجمع عدة صور في ملف PDF واحد؟",
enDescription:"Combine JPG, PNG and WEBP images into one PDF document. Learn how to select, order and review image pages before sharing.",
arDescription:"اجمع صور JPG وPNG وWEBP في مستند PDF واحد، وتعلم كيف تحدد الصور وترتبها وتراجع الصفحات قبل المشاركة.",
enIntro:"If you have several photos, receipts, notes or scanned pages, combining them into one PDF can make the files easier to organize and share. The key is to choose clear images, put them in the right order and check the finished pages before sending the document.",
arIntro:"لو عندك صور أو إيصالات أو ملاحظات أو صفحات ممسوحة ضوئياً، جمعها في ملف PDF واحد يسهل ترتيبها ومشاركتها. المهم تختار صور واضحة وترتبها بالشكل الصحيح وتراجع الصفحات بعد إنشاء المستند.",
enSections:[
{heading:"Prepare your images before conversion",paragraphs:["Choose the clearest available versions of your JPG, PNG or WEBP images. Rotate sideways photos before selecting them if needed, and give files meaningful names so they are easier to identify. If the pages form a document, arrange them in reading order before starting."]},
{heading:"Select images and confirm their order",paragraphs:["Open the Images to PDF tool and select multiple image files. Check the selected file list and make sure the first image should be page one, the second should be page two, and so on. If the order is wrong, cancel and select the files again in the correct order."]},
{heading:"Download and review the PDF",paragraphs:["Create the PDF and open the downloaded file. Check that every image appears, that text is readable at normal zoom, and that no page is unexpectedly rotated or cut off. Large, high-resolution images can create a large PDF, so consider resizing copies when the document is too heavy to share."]},
{heading:"What this conversion does not do",paragraphs:["Images to PDF places each selected image on its own PDF page. It does not recognize words inside photos, straighten documents automatically or turn scanned writing into searchable text. Optical character recognition (OCR) would be needed for searchable text, and it is not currently part of this tool."]}
],
arSections:[
{heading:"جهّز الصور قبل التحويل",paragraphs:["اختار أوضح نسخ متوفرة من صور JPG أو PNG أو WEBP. عدّل اتجاه الصور المائلة قبل تحديدها لو تحتاج، وسمّ الملفات بأسماء تساعدك تميزها. لو الصور صفحات مستند، رتبها حسب تسلسل القراءة قبل ما تبدأ."]},
{heading:"حدد الصور وتأكد من ترتيبها",paragraphs:["افتح أداة الصور إلى PDF وحدد أكثر من ملف صورة. راجع قائمة الملفات وتأكد إن الصورة الأولى هي الصفحة الأولى والثانية هي الصفحة الثانية وهكذا. لو الترتيب مش صحيح، ألغِ الاختيار وحدد الملفات من جديد بالترتيب المطلوب."]},
{heading:"نزّل PDF وراجع الصفحات",paragraphs:["أنشئ الملف وافتحه بعد التنزيل. تأكد إن كل الصور موجودة وإن النص واضح بالحجم العادي وما فيش صفحة مقلوبة أو مقصوصة. الصور الكبيرة وعالية الدقة ممكن تنتج PDF حجمه كبير؛ تقدر تصغّر نسخ الصور قبل جمعها لو الملف صعب المشاركة."]},
{heading:"شن الحاجات اللي التحويل ما يديرهاش؟",paragraphs:["أداة الصور إلى PDF تضع كل صورة مختارة في صفحة مستقلة. لكنها لا تتعرف على الكلمات داخل الصور، ولا تعدّل ميلان المستند تلقائياً، ولا تحول الكتابة الممسوحة إلى نص قابل للبحث. هذا يحتاج OCR، وهي ميزة غير متوفرة حالياً في الأداة."]}
],
enFaq:[["Can I combine JPG and PNG files in one PDF?","Yes. The current tool accepts JPG, PNG and WEBP images in one document."],["Can I change the page order?","Select the files in the order you want them to appear, then check the selection before creating the PDF."],["Will text in the images become searchable?","No. The images remain images on PDF pages. OCR is not currently included."]],
arFaq:[["نقدر نجمع JPG وPNG في نفس ملف PDF؟","نعم، الأداة الحالية تقبل صور JPG وPNG وWEBP في مستند واحد."],["نقدر نغيّر ترتيب الصفحات؟","حدد الملفات بالترتيب اللي تبيه وراجع الاختيار قبل إنشاء ملف PDF."],["هل النص الموجود في الصور يصبح قابلاً للبحث؟","لا، الصور تبقى صوراً داخل صفحات PDF، وميزة OCR غير مدمجة حالياً."]]
}
];

export function generateStaticParams() { return articles.map(article => ({slug:article.slug})); }
export async function generateMetadata({params,searchParams}:{params:Promise<{slug:string}>;searchParams:Promise<{lang?:string}>}):Promise<Metadata>{
 const {slug}=await params; const {lang}=await searchParams; const a=articles.find(x=>x.slug===slug); if(!a)return {};
 const ar=lang==="ar"; const title=ar?a.arTitle:a.enTitle; const description=ar?a.arDescription:a.enDescription;
 return {title,description,alternates:{canonical:`/blog/${slug}`,languages:{en:`/blog/${slug}`,ar:`/blog/${slug}?lang=ar`}},openGraph:{title,description,type:"article",url:`https://tooloratooll.netlify.app/blog/${slug}`},twitter:{card:"summary",title,description}};
}
export default async function BlogArticle({params,searchParams}:{params:Promise<{slug:string}>;searchParams:Promise<{lang?:string}>}){
 const {slug}=await params; const {lang}=await searchParams; const a=articles.find(x=>x.slug===slug); if(!a)notFound();
 const ar=lang==="ar"; const title=ar?a.arTitle:a.enTitle; const description=ar?a.arDescription:a.enDescription; const sections=ar?a.arSections:a.enSections; const faqs=ar?a.arFaq:a.enFaq;
 const schema={"@context":"https://schema.org","@type":"Article","headline":title,"description":description,"author":{"@type":"Organization","name":"Toolora"},"publisher":{"@type":"Organization","name":"Toolora"},"mainEntityOfPage":`https://tooloratooll.netlify.app/blog/${slug}`};
 const faqSchema={"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(([q,answer])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":answer}}))};
 return <main dir={ar?"rtl":"ltr"} lang={ar?"ar":"en"} style={{maxWidth:850,margin:"42px auto",padding:"24px 22px",fontFamily:"Arial,sans-serif",lineHeight:1.9,color:"#172033"}}>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema).replace(/</g,"\\u003c")}}/>
 <p style={{color:"#2563eb",fontWeight:700}}>{ar?"مدونة TOOLORA":"TOOLORA BLOG"} · {a.category}</p>
 <h1>{title}</h1><p style={{fontSize:18}}>{ar?a.arIntro:a.enIntro}</p>
 {sections.map((section,i)=><section key={section.heading} style={{marginTop:28}}>
 <h2>{section.heading}</h2>{section.paragraphs.map(p=><p key={p}>{p}</p>)}
 {section.list&&<ul>{section.list.map(item=><li key={item}>{item}</li>)}</ul>}
 </section>)}
 <section style={{marginTop:32,padding:22,borderRadius:16,background:"#f3f6fb"}}>
 <h2>{ar?"جرّب الأداة المجانية":"Try the free Toolora tool"}</h2>
 <p>{ar?"بعد ما تجهز ملفك، افتح الأداة ونفّذ الخطوات مباشرة من المتصفح.":"When your file is ready, open the tool and follow the steps directly in your browser."}</p>
 <Link href={`/?tool=${a.tool}${ar?"&lang=ar":""}#workspace`} style={{display:"inline-block",padding:"10px 16px",borderRadius:10,background:"#2563eb",color:"#fff",textDecoration:"none",fontWeight:700}}>{ar?`افتح أداة ${a.toolName}`:`Open ${a.toolName}`}</Link>
 </section>
 <section style={{marginTop:32}}><h2>{ar?"أسئلة شائعة":"Frequently asked questions"}</h2>{faqs.map(([q,answer])=><details key={q} style={{padding:"14px 0",borderBottom:"1px solid #e5eaf1"}}><summary style={{fontWeight:700,cursor:"pointer"}}>{q}</summary><p>{answer}</p></details>)}</section>
 <p style={{marginTop:30}}><Link href={`/blog${ar?"?lang=ar":""}`}>{ar?"العودة إلى مقالات Toolora":"More Toolora guides"}</Link> · <Link href={`/tools/${a.tool}${ar?"?lang=ar":""}`}>{ar?"تفاصيل الأداة":"Tool details"}</Link> · <Link href="/">{ar?"كل الأدوات":"All free tools"}</Link></p>
 </main>;
}
