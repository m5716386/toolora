"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";

type Lang = "en" | "ar";
type Tool = "resize" | "compress" | "textpdf" | "imagepdf" | "pdfexcel" | "textxlsx" | "pdfword" | "pdfjpg" | "excelpdf" | "wordpdf" | "pptpdf";

const copy = {
  en: {
    tagline: "Simple tools. Beautiful results.",
    intro: "Free, fast image and PDF tools. Your files are processed on your device.",
    search: "Search for a tool...",
    all: "All tools",
    images: "Image tools",
    pdf: "PDF tools",
    choose: "Choose a tool to get started",
    resize: "Resize an image",
    compress: "Compress an image",
    textpdf: "Text to PDF",
    imagepdf: "Images to PDF",
    select: "Choose files",
    run: "Create result",
    download: "Download result",
    clear: "Clear",
    result: "Result",
    privacy: "Your files are processed in your browser and are not uploaded to Toolora.",
    footer: "Free online image and PDF tools • Built for everyone",
    imageQuality: "Output quality",
    width: "Width (px)",
    height: "Height (px)",
    textLabel: "Write or paste your text",
    textHint: "Your text will be arranged across pages automatically.",
    error: "Something went wrong. Check your file and try again.",
    needFile: "Please choose at least one file first.",
    resizeDone: "Your resized image is ready.",
    compressDone: "Your compressed image is ready.",
    textDone: "Your PDF has been created.",
    imageDone: "Your PDF has been created.",
    chooseImage: "JPG, PNG or WEBP images",
    keepRatio: "Keep original proportions",
    faqTitle: "How to use Toolora",
    faq1q: "Are my files uploaded to a server?",
    faq1a: "The current image and PDF tools process selected files in your browser. Toolora does not intentionally upload those files to its servers.",
    faq2q: "Which image formats are supported?",
    faq2a: "The image tools accept common browser-supported image formats such as JPG, PNG and WEBP. Output images are currently saved as JPEG.",
    faq3q: "Can I convert several images into one PDF?",
    faq3a: "Yes. Choose the Images to PDF tool, select multiple images, and create one PDF with each image placed on its own page.",
    faq4q: "Is there a cost to use the tools?",
    faq4a: "The tools currently available on Toolora are free to use. Keep a copy of important original files before processing them.",
    noText: "Please enter some text first.",
    pdfexcel: "PDF to Excel", textxlsx: "Text to Excel", pdfword: "PDF to Word", pdfjpg: "PDF to JPG", excelpdf: "Excel to PDF", wordpdf: "Word to PDF", pptpdf: "PowerPoint to PDF",
    textExcelDone: "Your Excel file is ready.",
    pdfHint: "Choose a PDF file", textExcelHint: "Paste rows using commas, tabs or new lines.",
    conversionNote: "PDF conversion works best with text-based PDFs. Scanned documents may require OCR, and converted tables or formatting may need review.",
    jpgPdfNote: "Images to PDF also accepts JPG files.",
    officeHint: "Choose an .xlsx, .docx or .pptx file as appropriate.",
    officeNote: "These converters extract text and tables and create a simple PDF. They do not preserve the original Office layout, charts, images, animations or slide design. Only modern .xlsx, .docx and .pptx files are supported.",
    officeDone: "Your PDF is ready.",
    faq5q: "Can every PDF be converted accurately?", faq5a: "Text-based PDFs usually convert best. Scanned PDFs are images and need OCR before their text or tables can be extracted. Always review converted spreadsheets.",
    faq6q: "Will PDF to Word keep the original layout?", faq6a: "The converter extracts readable text into a Word document. Complex layouts, columns, images and tables may not look exactly like the original.",
    faq7q: "How do I convert PDF pages to JPG?", faq7a: "Choose PDF to JPG, select a PDF, and download a ZIP archive containing one JPG image for each page.",
    faq8q: "How do I turn text into an Excel file?", faq8a: "Paste your data into Text to Excel. Separate columns with commas, semicolons or tabs, and put each row on a new line.",
    faq9q: "Can I convert Excel, Word and PowerPoint files to PDF?", faq9a: "Yes. Toolora extracts text and tables from modern XLSX, DOCX and PPTX files and creates a simple PDF. The original page layout and slide design are not preserved."
  },
  ar: {
    tagline: "أدوات بسيطة. نتائج ممتازة.",
    intro: "أدوات مجانية وسريعة للصور وملفات PDF. تتم معالجة ملفاتك على جهازك.",
    search: "ابحث عن أداة...",
    all: "كل الأدوات",
    images: "أدوات الصور",
    pdf: "أدوات PDF",
    choose: "اختار أداة للبدء",
    resize: "تغيير أبعاد الصورة",
    compress: "ضغط الصورة",
    textpdf: "تحويل النص إلى PDF",
    imagepdf: "تحويل الصور إلى PDF",
    select: "اختيار الملفات",
    run: "إنشاء النتيجة",
    download: "تنزيل النتيجة",
    clear: "مسح",
    result: "النتيجة",
    privacy: "تتم معالجة ملفاتك في المتصفح ولا يتم رفعها إلى Toolora.",
    footer: "أدوات مجانية للصور وPDF • للجميع",
    imageQuality: "جودة الصورة",
    width: "العرض (بكسل)",
    height: "الارتفاع (بكسل)",
    textLabel: "اكتب النص أو الصقه هنا",
    textHint: "سيتم توزيع النص تلقائياً على صفحات PDF.",
    error: "حدث خطأ. تأكد من الملف وحاول مرة أخرى.",
    needFile: "اختار صورة واحدة على الأقل أولاً.",
    resizeDone: "الصورة بعد تغيير أبعادها جاهزة.",
    compressDone: "الصورة المضغوطة جاهزة.",
    textDone: "تم إنشاء ملف PDF بنجاح.",
    imageDone: "تم إنشاء ملف PDF بنجاح.",
    chooseImage: "صور JPG أو PNG أو WEBP",
    keepRatio: "الحفاظ على تناسب الأبعاد الأصلية",
    faqTitle: "دليل استخدام Toolora",
    faq1q: "هل يتم رفع ملفاتي إلى خادم؟",
    faq1a: "تتم معالجة الملفات التي تختارها أدوات الصور وPDF الحالية داخل متصفحك، ولا ترفعها Toolora عمداً إلى خوادمها.",
    faq2q: "شن أنواع الصور المدعومة؟",
    faq2a: "تقبل أدوات الصور الصيغ الشائعة التي يدعمها المتصفح مثل JPG وPNG وWEBP، ويتم حفظ الصور الناتجة حالياً بصيغة JPEG.",
    faq3q: "نقدر نحول أكثر من صورة إلى ملف PDF واحد؟",
    faq3a: "نعم. اختار أداة تحويل الصور إلى PDF، وحدد أكثر من صورة، وبعدها أنشئ ملفاً واحداً يحتوي على كل صورة في صفحة مستقلة.",
    faq4q: "هل استخدام الأدوات مجاني؟",
    faq4a: "الأدوات المتاحة حالياً في Toolora مجانية. ننصحك بالاحتفاظ بنسخة من ملفاتك الأصلية المهمة قبل معالجتها.",
    noText: "اكتب نصاً أولاً.",
    pdfexcel: "تحويل PDF إلى Excel", textxlsx: "تحويل النص إلى Excel", pdfword: "تحويل PDF إلى Word", pdfjpg: "تحويل PDF إلى صور JPG", excelpdf: "تحويل Excel إلى PDF", wordpdf: "تحويل Word إلى PDF", pptpdf: "تحويل PowerPoint إلى PDF",
    textExcelDone: "ملف Excel جاهز للتنزيل.",
    pdfHint: "اختار ملف PDF", textExcelHint: "الصق البيانات، وافصل الأعمدة بفواصل أو علامات جدولة، والصفوف بأسطر جديدة.",
    conversionNote: "أفضل نتيجة تكون مع ملفات PDF النصية. الملفات الممسوحة ضوئياً تحتاج OCR، وقد تحتاج الجداول والتنسيقات إلى مراجعة بعد التحويل.",
    jpgPdfNote: "أداة تحويل الصور إلى PDF تقبل صور JPG أيضاً.",
    officeHint: "اختار ملف بالصيغة المناسبة: XLSX أو DOCX أو PPTX.",
    officeNote: "الأدوات تستخرج النصوص والجداول وتحوّلها إلى PDF بسيط. لا تحافظ على تصميم Office الأصلي أو الرسوم البيانية والصور والحركات والتنسيقات. الصيغ المدعومة هي XLSX وDOCX وPPTX الحديثة فقط.",
    officeDone: "ملف PDF جاهز للتنزيل.",
    faq5q: "هل يمكن تحويل كل ملفات PDF بدقة كاملة؟", faq5a: "الملفات التي تحتوي على نصوص تعطي عادةً أفضل نتيجة. أما الملفات الممسوحة ضوئياً فهي صور وتحتاج OCR لاستخراج النصوص والجداول. راجع ملف Excel بعد التحويل.",
    faq6q: "هل يحافظ تحويل PDF إلى Word على نفس التنسيق؟", faq6a: "الأداة تستخرج النص المقروء وتضعه في مستند Word. التنسيقات المعقدة والأعمدة والصور والجداول قد لا تظهر مثل الملف الأصلي تماماً.",
    faq7q: "كيف نحول صفحات PDF إلى صور JPG؟", faq7a: "اختار أداة PDF إلى JPG وحدد ملف PDF، وبعد التحويل نزّل ملف ZIP يحتوي على صورة JPG مستقلة لكل صفحة.",
    faq8q: "كيف نحول النص إلى ملف Excel؟", faq8a: "الصق بياناتك في أداة النص إلى Excel. افصل الأعمدة بفواصل أو فاصلة منقوطة أو علامات جدولة، وضع كل صف في سطر جديد.",
    faq9q: "نقدر نحول ملفات Excel وWord وPowerPoint إلى PDF؟", faq9a: "نعم. تستخرج Toolora النصوص والجداول من ملفات XLSX وDOCX وPPTX الحديثة وتنشئ ملف PDF بسيطاً، لكن لا تحافظ على تصميم الصفحات أو الشرائح الأصلي."
  }
};

const tools: { id: Tool; group: "images" | "pdf"; icon: string }[] = [
  { id: "resize", group: "images", icon: "↔️" },
  { id: "compress", group: "images", icon: "🗜️" },
  { id: "textpdf", group: "pdf", icon: "📝" },
  { id: "imagepdf", group: "pdf", icon: "🖼️" },
  { id: "pdfexcel", group: "pdf", icon: "📊" },
  { id: "textxlsx", group: "pdf", icon: "📋" },
  { id: "pdfword", group: "pdf", icon: "📝" },
  { id: "pdfjpg", group: "pdf", icon: "🖼️" },
  { id: "excelpdf", group: "pdf", icon: "📊" },
  { id: "wordpdf", group: "pdf", icon: "📄" },
  { id: "pptpdf", group: "pdf", icon: "📽️" }
];


declare global {
  interface Window { pdfjsLib?: any; XLSX?: any; docx?: any; JSZip?: any; }
}
const scriptLoads: Partial<Record<string, Promise<void>>> = {};
function loadLibrary(src: string, ready: () => boolean): Promise<void> {
  if (ready()) return Promise.resolve();
  if (scriptLoads[src]) return scriptLoads[src];
  scriptLoads[src] = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-toolora-lib="${src}"]`) as HTMLScriptElement | null;
    const script = existing || document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.tooloraLib = src;
    script.onload = () => ready() ? resolve() : reject(new Error("A conversion library could not be initialized."));
    script.onerror = () => reject(new Error("Could not load a required conversion library. Check your internet connection and try again."));
    if (!existing) document.head.appendChild(script);
  });
  return scriptLoads[src];
}
async function getPdfJs() {
  await loadLibrary("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js", () => !!window.pdfjsLib);
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  return window.pdfjsLib;
}
async function extractPdfLines(file: File): Promise<string[][]> {
  const pdfjs = await getPdfJs();
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
  const allRows: string[][] = [];
  for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
    const page = await pdf.getPage(pageNo);
    const content = await page.getTextContent();
    const items = content.items.filter((item: any) => typeof item.str === "string" && item.str.trim()).map((item: any) => ({ text: item.str.trim(), x: item.transform[4], y: item.transform[5] }));
    const grouped: { y: number; items: { text: string; x: number }[] }[] = [];
    for (const item of items) {
      let line = grouped.find(row => Math.abs(row.y - item.y) < 4);
      if (!line) { line = { y: item.y, items: [] }; grouped.push(line); }
      line.items.push({ text: item.text, x: item.x });
    }
    grouped.sort((a,b) => b.y-a.y);
    for (const line of grouped) {
      line.items.sort((a,b) => a.x-b.x);
      const cells: string[] = [];
      let previousX = Number.NaN;
      for (const item of line.items) {
        if (Number.isFinite(previousX) && item.x - previousX > 38) cells.push("");
        cells.push(item.text);
        previousX = item.x;
      }
      allRows.push(cells);
    }
    allRows.push([""]);
  }
  return allRows;
}
async function pdfText(file: File): Promise<string> {
  const rows = await extractPdfLines(file);
  return rows.map(row => row.join(" ")).join("\n").trim();
}
async function makePdfExcel(file: File): Promise<Blob> {
  await loadLibrary("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js", () => !!window.XLSX);
  const rows = await extractPdfLines(file);
  const normalized = rows.map(row => row.length > 1 ? row : (row[0] || "").split(/\s{2,}|\t/).map(x => x.trim())).filter(row => row.some(cell => cell.trim()));
  const sheet = window.XLSX.utils.aoa_to_sheet(normalized);
  const book = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(book, sheet, "PDF Data");
  return new Blob([window.XLSX.write(book, { bookType: "xlsx", type: "array" })], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}
async function makeTextExcel(value: string): Promise<Blob> {
  await loadLibrary("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js", () => !!window.XLSX);
  const lines = value.replace(/\r/g, "").split("\n").filter(line => line.trim());
  const rows = lines.map(line => {
    const delimiter = line.includes("\t") ? "\t" : line.includes(";") ? ";" : line.includes(",") ? "," : null;
    return delimiter ? line.split(delimiter).map(cell => cell.trim()) : [line.trim()];
  });
  const sheet = window.XLSX.utils.aoa_to_sheet(rows);
  const book = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(book, sheet, "Text Data");
  return new Blob([window.XLSX.write(book, { bookType: "xlsx", type: "array" })], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}
async function makePdfWord(file: File): Promise<Blob> {
  await loadLibrary("https://cdn.jsdelivr.net/npm/docx@8.5.0/build/index.umd.js", () => !!window.docx);
  const content = await pdfText(file);
  const paragraphs = content.split("\n").map(line => new window.docx.Paragraph({ children: [new window.docx.TextRun(line)] }));
  const documentFile = new window.docx.Document({ sections: [{ children: paragraphs }] });
  return window.docx.Packer.toBlob(documentFile);
}
async function makePdfJpg(file: File): Promise<Blob> {
  const pdfjs = await getPdfJs();
  await loadLibrary("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js", () => !!window.JSZip);
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
  const zip = new window.JSZip();
  for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
    const page = await pdf.getPage(pageNo);
    const viewport = page.getViewport({ scale: 1.6 });
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(viewport.width); canvas.height = Math.ceil(viewport.height);
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Your browser could not render this PDF page.");
    await page.render({ canvasContext: context, viewport }).promise;
    const blob: Blob = await new Promise((resolve, reject) => canvas.toBlob(result => result ? resolve(result) : reject(new Error("Could not create JPG image.")), "image/jpeg", 0.92));
    zip.file(`page-${String(pageNo).padStart(3, "0")}.jpg`, await blob.arrayBuffer());
  }
  return zip.generateAsync({ type: "blob", mimeType: "application/zip" });
}

async function officeText(file: File, kind: "excel" | "word" | "powerpoint"): Promise<string> {
  if (kind === "excel") {
    await loadLibrary("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js", () => !!window.XLSX);
    const workbook = window.XLSX.read(await file.arrayBuffer(), { type: "array" });
    return workbook.SheetNames.map((name: string) => {
      const csv = window.XLSX.utils.sheet_to_csv(workbook.Sheets[name], { FS: " | " });
      return "Sheet: " + name + "\n" + csv;
    }).join("\n\n");
  }
  await loadLibrary("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js", () => !!window.JSZip);
  const zip = await window.JSZip.loadAsync(await file.arrayBuffer());
  const paths = Object.keys(zip.files).filter(path =>
    kind === "word" ? path === "word/document.xml" :
    /^ppt\/slides\/slide\d+\.xml$/.test(path)
  ).sort((a,b) => {
    const na = Number(a.match(/(\d+)\.xml$/)?.[1] || 0);
    const nb = Number(b.match(/(\d+)\.xml$/)?.[1] || 0);
    return na - nb;
  });
  if (!paths.length) throw new Error("Could not find readable document content. Please use a modern DOCX or PPTX file.");
  const chunks: string[] = [];
  for (const path of paths) {
    const xml = await zip.file(path).async("text");
    const doc = new DOMParser().parseFromString(xml, "application/xml");
    if (doc.querySelector("parsererror")) throw new Error("This Office document is damaged or unsupported.");
    const paragraphTags = kind === "word" ? "w:p" : "a:p";
    const textTags = kind === "word" ? "w:t" : "a:t";
    const paragraphs = Array.from(doc.getElementsByTagName(paragraphTags));
    const lines = paragraphs.map(p => Array.from(p.getElementsByTagName(textTags)).map(n => n.textContent || "").join("")).filter(Boolean);
    chunks.push(lines.join("\n"));
  }
  return chunks.join("\n\n");
}
async function makeOfficePdf(file: File, kind: "excel" | "word" | "powerpoint", rtl: boolean): Promise<Blob> {
  const text = await officeText(file, kind);
  if (!text.trim()) throw new Error("No readable text was found in this file.");
  const bytes = await makeTextPdf(text, rtl);
  return new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" });
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => { URL.revokeObjectURL(url); resolve(image); };
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Could not read this image.")); };
    image.src = url;
  });
}

function canvasBlob(canvas: HTMLCanvasElement, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("Could not process this image.")), "image/jpeg", quality);
  });
}

async function makeTextPdf(value: string, rtl: boolean): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser.");

  const pageWidth = 1240;
  const pageHeight = 1754;
  const margin = 100;
  const maxWidth = pageWidth - margin * 2;
  const lineHeight = 48;
  canvas.width = pageWidth;
  canvas.height = pageHeight;

  const font = '30px Arial, "Noto Naskh Arabic", sans-serif';
  ctx.font = font;
  ctx.fillStyle = "#172033";
  ctx.textBaseline = "top";
  ctx.direction = rtl ? "rtl" : "ltr";
  const align: CanvasTextAlign = rtl ? "right" : "left";
  const x = rtl ? pageWidth - margin : margin;
  const lines: string[] = [];

  for (const paragraph of value.replace(/\r/g, "").split("\n")) {
    if (!paragraph.trim()) { lines.push(""); continue; }
    const words = paragraph.split(/\s+/);
    let line = "";
    for (const word of words) {
      const candidate = line ? line + " " + word : word;
      if (ctx.measureText(candidate).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else line = candidate;
    }
    if (line) lines.push(line);
  }

  let y = margin;
  const addPage = () => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, pageWidth, pageHeight);
    ctx.fillStyle = "#172033";
    ctx.font = font;
    ctx.textBaseline = "top";
    ctx.direction = rtl ? "rtl" : "ltr";
    ctx.textAlign = align;
    y = margin;
  };
  addPage();

  for (const line of lines) {
    if (y + lineHeight > pageHeight - margin) {
      const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(b => b ? resolve(b) : reject(new Error("Could not render PDF page.")), "image/png"));
      const bytes = new Uint8Array(await blob.arrayBuffer());
      const embedded = await pdf.embedPng(bytes);
      const page = pdf.addPage([595.28, 841.89]);
      page.drawImage(embedded, { x: 0, y: 0, width: 595.28, height: 841.89 });
      addPage();
    }
    if (line) ctx.fillText(line, x, y, maxWidth);
    y += lineHeight;
  }

  const lastBlob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(b => b ? resolve(b) : reject(new Error("Could not render PDF page.")), "image/png"));
  const lastBytes = new Uint8Array(await lastBlob.arrayBuffer());
  const lastImage = await pdf.embedPng(lastBytes);
  const lastPage = pdf.addPage([595.28, 841.89]);
  lastPage.drawImage(lastImage, { x: 0, y: 0, width: 595.28, height: 841.89 });
  return pdf.save();
}

export default function TooloraApp() {
  const [lang, setLang] = useState<Lang>("en");
  const [active, setActive] = useState<Tool | null>(null);
  const [query, setQuery] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [text, setText] = useState("");
  const [width, setWidth] = useState("1200");
  const [height, setHeight] = useState("1200");
  const [quality, setQuality] = useState("0.75");
  const [keepRatio, setKeepRatio] = useState(true);
  const [result, setResult] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [downloadName, setDownloadName] = useState("toolora-result");
  const [error, setError] = useState("");
  const workspaceRef = useRef<HTMLElement | null>(null);

  const t = copy[lang];
  const rtl = lang === "ar";
  const visible = useMemo(() => tools.filter(item => {
    const label = t[item.id];
    const groupLabel = t[item.group];
    return (label + " " + groupLabel).toLowerCase().includes(query.toLowerCase());
  }), [query, t]);

  useEffect(() => {
    const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
    if (requestedLanguage === "ar") setLang("ar");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    if (active) workspaceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [active]);

  function resetOutput() {
    setResult("");
    setError("");
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setDownloadUrl("");
  }

  function chooseTool(id: Tool) {
    setActive(id);
    setFiles([]);
    setText("");
    resetOutput();
  }

  function setOutput(blob: Blob, name: string, message: string) {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setDownloadUrl(URL.createObjectURL(blob));
    setDownloadName(name);
    setResult(message);
  }

  async function processTool() {
    setError("");
    setResult("");
    try {
      if (active === "textpdf") {
        if (!text.trim()) throw new Error(t.noText);
        const bytes = await makeTextPdf(text, rtl);
        setOutput(new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" }), "toolora-text.pdf", t.textDone);
        return;
      }
      if (active === "textxlsx") {
        if (!text.trim()) throw new Error(t.noText);
        setOutput(await makeTextExcel(text), "toolora-data.xlsx", t.textExcelDone);
        return;
      }
      if (!files.length) throw new Error(t.needFile);

      if (active === "pdfexcel") {
        setOutput(await makePdfExcel(files[0]), "toolora-data.xlsx", t.pdfexcel);
        return;
      }
      if (active === "pdfword") {
        setOutput(await makePdfWord(files[0]), "toolora-document.docx", t.pdfword);
        return;
      }
      if (active === "pdfjpg") {
        setOutput(await makePdfJpg(files[0]), "toolora-pages-jpg.zip", t.pdfjpg);
        return;
      }
      if (active === "excelpdf" || active === "wordpdf" || active === "pptpdf") {
        const kind = active === "excelpdf" ? "excel" : active === "wordpdf" ? "word" : "powerpoint";
        setOutput(await makeOfficePdf(files[0], kind, rtl), "toolora-office.pdf", t.officeDone);
        return;
      }

      if (active === "imagepdf") {
        const pdf = await PDFDocument.create();
        for (const file of files) {
          const image = await loadImage(file);
          const canvas = document.createElement("canvas");
          canvas.width = image.naturalWidth;
          canvas.height = image.naturalHeight;
          const ctx = canvas.getContext("2d");
          if (!ctx) throw new Error(t.error);
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0);
          const blob = await canvasBlob(canvas, 0.92);
          const bytes = new Uint8Array(await blob.arrayBuffer());
          const embedded = await pdf.embedJpg(bytes);
          const pageW = 595.28, pageH = 841.89;
          const scale = Math.min(pageW / embedded.width, pageH / embedded.height);
          const w = embedded.width * scale, h = embedded.height * scale;
          const page = pdf.addPage([pageW, pageH]);
          page.drawImage(embedded, { x: (pageW - w) / 2, y: (pageH - h) / 2, width: w, height: h });
        }
        const bytes = await pdf.save();
        setOutput(new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" }), "toolora-images.pdf", t.imageDone);
        return;
      }

      const image = await loadImage(files[0]);
      const canvas = document.createElement("canvas");
      let outputWidth = image.naturalWidth;
      let outputHeight = image.naturalHeight;
      if (active === "resize") {
        outputWidth = Math.max(1, Math.min(12000, Number(width) || 1));
        outputHeight = Math.max(1, Math.min(12000, Number(height) || 1));
        if (keepRatio) {
          const ratio = Math.min(outputWidth / image.naturalWidth, outputHeight / image.naturalHeight);
          outputWidth = Math.max(1, Math.round(image.naturalWidth * ratio));
          outputHeight = Math.max(1, Math.round(image.naturalHeight * ratio));
        }
      }
      canvas.width = outputWidth;
      canvas.height = outputHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error(t.error);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, outputWidth, outputHeight);
      ctx.drawImage(image, 0, 0, outputWidth, outputHeight);
      const blob = await canvasBlob(canvas, Number(quality));
      setOutput(blob, active === "resize" ? "toolora-resized.jpg" : "toolora-compressed.jpg", active === "resize" ? t.resizeDone : t.compressDone);
    } catch (e) {
      setError(e instanceof Error ? e.message : t.error);
    }
  }

  const selectedTool = active ? tools.find(x => x.id === active) : null;
  const toolName = active ? t[active] : "";
  const groupName = selectedTool ? t[selectedTool.group] : "";

  return <main dir={rtl ? "rtl" : "ltr"} className="page">
    <header className="topbar">
      <button className="brand" onClick={() => { setActive(null); resetOutput(); }}><span className="brandIcon">T</span> Toolora</button>
      <div className="topActions">
        <a href="#tools" className="navLink">{t.all}</a>
        <button className="langButton" onClick={() => {
          const nextLanguage: Lang = lang === "en" ? "ar" : "en";
          setLang(nextLanguage);
          const nextUrl = new URL(window.location.href);
          if (nextLanguage === "ar") nextUrl.searchParams.set("lang", "ar");
          else nextUrl.searchParams.delete("lang");
          window.history.replaceState({}, "", nextUrl);
        }}>{lang === "en" ? "العربية" : "English"}</button>
      </div>
    </header>

    <section className="hero">
      <div className="eyebrow"><span className="dot" /> FREE ONLINE TOOLS</div>
      <h1>{t.tagline}</h1>
      <p>{t.intro}</p>
      <div className="searchBox"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder={t.search} /></div>
      <div className="heroStats"><span>⚡ Fast</span><span>🔒 Private</span><span>🌐 Arabic + English</span></div>
    </section>

    <section id="tools" className="content">
      <div className="sectionHead"><div><span className="sectionKicker">TOOL DIRECTORY</span><h2>{t.all}</h2></div><span className="toolCount">{visible.length} tools</span></div>
      <div className="toolGrid">
        {visible.map(item => <button key={item.id} className={`toolCard ${active === item.id ? "selected" : ""}`} onClick={() => chooseTool(item.id)}>
          <span className="toolIcon">{item.icon}</span><span className="toolTitle">{t[item.id]}</span><span className="toolGroup">{t[item.group]}</span><span className="cardArrow">↗</span>
        </button>)}
      </div>

      {active && <section ref={workspaceRef} id="workspace" className="workspace">
        <div className="workspaceHead"><div><span className="sectionKicker">{groupName}</span><h2>{toolName}</h2></div><button className="clearButton" onClick={() => { setFiles([]); setText(""); resetOutput(); }}>{t.clear}</button></div>

        {(active === "resize" || active === "compress" || active === "imagepdf") && <div className="toolForm">
          <label className="uploadBox"><span className="uploadIcon">＋</span><strong>{t.select}</strong><small>{t.chooseImage}</small>
            <input type="file" multiple={active === "imagepdf"} accept="image/jpeg,image/png,image/webp" onChange={e => setFiles(Array.from(e.target.files || []))} />
          </label>
          {files.length > 0 && <p className="fileList">{files.map(f => f.name).join(" • ")}</p>}
          {(active === "resize" || active === "compress") && <label>{t.imageQuality}: {Math.round(Number(quality) * 100)}%<input type="range" min="0.2" max="1" step="0.05" value={quality} onChange={e => setQuality(e.target.value)} /></label>}
          {active === "resize" && <>
            <div className="twoFields"><label>{t.width}<input className="field" type="number" min="1" max="12000" value={width} onChange={e => setWidth(e.target.value)} /></label><label>{t.height}<input className="field" type="number" min="1" max="12000" value={height} onChange={e => setHeight(e.target.value)} /></label></div>
            <label className="checkLabel"><input type="checkbox" checked={keepRatio} onChange={e => setKeepRatio(e.target.checked)} /> {t.keepRatio}</label>
          </>}
          {active === "imagepdf" && <p className="privacyNote">{t.jpgPdfNote}</p>}
          <button className="primaryButton" onClick={processTool}>{t.run}</button>
          <p className="privacyNote">🔒 {t.privacy}</p>
        </div>}

        {(active === "pdfexcel" || active === "pdfword" || active === "pdfjpg") && <div className="toolForm">
          <label className="uploadBox"><span className="uploadIcon">＋</span><strong>{t.select}</strong><small>{t.pdfHint}</small>
            <input type="file" accept="application/pdf,.pdf" onChange={e => setFiles(Array.from(e.target.files || []))} />
          </label>
          {files.length > 0 && <p className="fileList">{files.map(f => f.name).join(" • ")}</p>}
          <p className="privacyNote">{t.conversionNote}</p>
          <button className="primaryButton" onClick={processTool}>{t.run}</button>
          <p className="privacyNote">🔒 {t.privacy}</p>
        </div>}

        {(active === "excelpdf" || active === "wordpdf" || active === "pptpdf") && <div className="toolForm">
          <label className="uploadBox"><span className="uploadIcon">＋</span><strong>{t.select}</strong><small>{t.officeHint}</small>
            <input type="file" accept={active === "excelpdf" ? ".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" : active === "wordpdf" ? ".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" : ".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation"} onChange={e => setFiles(Array.from(e.target.files || []))} />
          </label>
          {files.length > 0 && <p className="fileList">{files.map(f => f.name).join(" • ")}</p>}
          <p className="privacyNote">{t.officeNote}</p>
          <button className="primaryButton" onClick={processTool}>{t.run}</button>
          <p className="privacyNote">🔒 {t.privacy}</p>
        </div>}

        {(active === "textpdf" || active === "textxlsx") && <div className="toolForm">
          <label>{t.textLabel}<textarea className="textArea" rows={10} value={text} onChange={e => setText(e.target.value)} placeholder={active === "textxlsx" ? t.textExcelHint : t.textHint} /></label>
          <button className="primaryButton" onClick={processTool}>{t.run}</button>
          <p className="privacyNote">🔒 {t.privacy}</p>
        </div>}

        {error && <div className="errorBox">{error}</div>}
        {result && <div className="resultBox"><strong>{t.result}</strong><p>{result}</p>{downloadUrl && <a className="downloadButton" href={downloadUrl} download={downloadName}>{t.download}</a>}</div>}
      </section>}
    </section>

    <section className="guideSection" aria-labelledby="guide-title">
      <div className="guideInner">
        <span className="sectionKicker">TOOLORA GUIDE</span>
        <h2 id="guide-title">{t.faqTitle}</h2>
        <p className="guideIntro">{t.intro}</p>
        <div className="faqList">
          {(["faq1", "faq2", "faq3", "faq4", "faq5", "faq6", "faq7", "faq8", "faq9"] as const).map(key => (
            <details className="faqItem" key={key}>
              <summary>{t[(key + "q") as keyof typeof t]}</summary>
              <p>{t[(key + "a") as keyof typeof t]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
    <footer className="footer"><div className="footerBrand"><span className="brandIcon">T</span> Toolora</div><p>{t.footer}</p><div className="footerLinks"><a href="/about">About</a><a href="/guides">Guides</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/contact">Contact</a></div><small>© {new Date().getFullYear()} Toolora</small></footer>
  </main>;
}
