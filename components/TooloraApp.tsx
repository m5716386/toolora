"use client";

import { useMemo, useState } from "react";
import { PDFDocument } from "pdf-lib";

type Lang = "en" | "ar";
type Tool = "merge" | "split" | "image" | "resize" | "percent" | "discount" | "loan" | "words" | "case" | "spaces";

const copy = {
  en: {
    tagline: "All your tools. One place.",
    intro: "Fast, free tools for everyday tasks. Your files stay on your device whenever possible.",
    search: "Search for a tool...",
    all: "All tools",
    pdf: "PDF tools",
    images: "Image tools",
    calc: "Calculators",
    text: "Text tools",
    choose: "Choose a tool to get started",
    merge: "Merge PDF files",
    split: "Extract PDF pages",
    image: "Compress an image",
    resize: "Resize an image",
    percent: "Percentage calculator",
    discount: "Discount calculator",
    loan: "Loan payment calculator",
    words: "Word counter",
    case: "Change text case",
    spaces: "Remove extra spaces",
    select: "Select files",
    run: "Process",
    download: "Download result",
    clear: "Clear",
    result: "Result",
    privacy: "Files are processed in your browser and are not uploaded to Toolora.",
    footer: "Free online tools • Built for everyone",
    number: "Enter a number",
    rate: "Enter percentage",
    price: "Original price",
    discountRate: "Discount percentage",
    principal: "Loan amount",
    interest: "Annual interest rate (%)",
    months: "Number of months",
    monthly: "Estimated monthly payment",
    wordsLabel: "Your text",
    chars: "Characters",
    wordCount: "Words",
    sentence: "Sentences",
    uppercase: "UPPERCASE",
    lowercase: "lowercase",
    titlecase: "Title Case",
    imageQuality: "Image quality",
    width: "Width (px)",
    height: "Height (px)",
    error: "Something went wrong. Check your file and try again.",
    needFile: "Please choose a file first.",
    pages: "Pages to extract (example: 1,3,5)",
    splitHint: "Page numbers start at 1. This creates a new PDF with the selected pages.",
    savings: "You save",
    finalPrice: "Price after discount",
    resultValue: "Result"
  },
  ar: {
    tagline: "كل أدواتك. في مكان واحد.",
    intro: "أدوات مجانية وسريعة لمهامك اليومية. ملفاتك تبقى على جهازك قدر الإمكان.",
    search: "ابحث عن أداة...",
    all: "كل الأدوات",
    pdf: "أدوات PDF",
    images: "أدوات الصور",
    calc: "الحاسبات",
    text: "أدوات النصوص",
    choose: "اختار أداة للبدء",
    merge: "دمج ملفات PDF",
    split: "استخراج صفحات PDF",
    image: "ضغط صورة",
    resize: "تغيير حجم صورة",
    percent: "حاسبة النسبة المئوية",
    discount: "حاسبة الخصم",
    loan: "حاسبة القسط الشهري",
    words: "عداد الكلمات",
    case: "تغيير حالة الأحرف",
    spaces: "إزالة المسافات الزائدة",
    select: "اختيار الملفات",
    run: "تنفيذ",
    download: "تنزيل النتيجة",
    clear: "مسح",
    result: "النتيجة",
    privacy: "تتم معالجة الملفات في متصفحك ولا يتم رفعها إلى Toolora.",
    footer: "أدوات مجانية عبر الإنترنت • للجميع",
    number: "أدخل الرقم",
    rate: "أدخل النسبة المئوية",
    price: "السعر الأصلي",
    discountRate: "نسبة الخصم",
    principal: "مبلغ القرض",
    interest: "الفائدة السنوية (%)",
    months: "عدد الأشهر",
    monthly: "القسط الشهري التقريبي",
    wordsLabel: "النص",
    chars: "الأحرف",
    wordCount: "الكلمات",
    sentence: "الجمل",
    uppercase: "أحرف كبيرة",
    lowercase: "أحرف صغيرة",
    titlecase: "أول حرف كبير",
    imageQuality: "جودة الصورة",
    width: "العرض (بكسل)",
    height: "الارتفاع (بكسل)",
    error: "حدث خطأ. تأكد من الملف وحاول مرة أخرى.",
    needFile: "اختار ملف أولاً.",
    pages: "أرقام الصفحات (مثال: 1,3,5)",
    splitHint: "ترقيم الصفحات يبدأ من 1. سيتم إنشاء PDF جديد بالصفحات المحددة.",
    savings: "قيمة التوفير",
    finalPrice: "السعر بعد الخصم",
    resultValue: "النتيجة"
  }
};

const tools: { id: Tool; group: "pdf" | "images" | "calc" | "text"; icon: string }[] = [
  { id: "merge", group: "pdf", icon: "📑" }, { id: "split", group: "pdf", icon: "✂️" },
  { id: "image", group: "images", icon: "🗜️" }, { id: "resize", group: "images", icon: "🖼️" },
  { id: "percent", group: "calc", icon: "%" }, { id: "discount", group: "calc", icon: "🏷️" },
  { id: "loan", group: "calc", icon: "💳" }, { id: "words", group: "text", icon: "📝" },
  { id: "case", group: "text", icon: "🔠" }, { id: "spaces", group: "text", icon: "↔️" }
];

export default function TooloraApp() {
  const [lang, setLang] = useState<Lang>("en");
  const [active, setActive] = useState<Tool | null>(null);
  const [query, setQuery] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [pages, setPages] = useState("1");
  const [text, setText] = useState("");
  const [a, setA] = useState("100");
  const [b, setB] = useState("10");
  const [c, setC] = useState("12");
  const [quality, setQuality] = useState("0.75");
  const [width, setWidth] = useState("800");
  const [height, setHeight] = useState("600");
  const [result, setResult] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [downloadName, setDownloadName] = useState("toolora-result");
  const [error, setError] = useState("");

  const t = copy[lang];
  const rtl = lang === "ar";
  const visible = useMemo(() => tools.filter(item => {
    const label = t[item.id as keyof typeof t] as string;
    const groupLabel = t[item.group as keyof typeof t] as string;
    return (label + " " + groupLabel).toLowerCase().includes(query.toLowerCase());
  }), [query, t]);

  function resetOutput() {
    setResult(""); setError("");
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setDownloadUrl("");
  }

  function setOutput(blob: Blob, name: string, message: string) {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setDownloadUrl(URL.createObjectURL(blob));
    setDownloadName(name);
    setResult(message);
  }

  async function processFileTool() {
    setError(""); setResult("");
    try {
      if (!files.length) throw new Error(t.needFile);
      if (active === "merge") {
        if (files.length < 2) throw new Error(lang === "ar" ? "اختار ملفين PDF على الأقل." : "Choose at least two PDF files.");
        const merged = await PDFDocument.create();
        for (const file of files) {
          const pdf = await PDFDocument.load(await file.arrayBuffer());
          const pagesToCopy = await merged.copyPages(pdf, pdf.getPageIndices());
          pagesToCopy.forEach(page => merged.addPage(page));
        }
        setOutput(new Blob([new Uint8Array(await merged.save()).buffer as ArrayBuffer], { type: "application/pdf" }), "toolora-merged.pdf", lang === "ar" ? "تم دمج ملفات PDF بنجاح." : "PDF files merged successfully.");
      } else if (active === "split") {
        const source = await PDFDocument.load(await files[0].arrayBuffer());
        const selected = pages.split(",").map(x => Number(x.trim()) - 1).filter(x => Number.isInteger(x) && x >= 0 && x < source.getPageCount());
        if (!selected.length) throw new Error(lang === "ar" ? "أرقام الصفحات غير صحيحة." : "No valid page numbers were entered.");
        const output = await PDFDocument.create();
        const copied = await output.copyPages(source, selected);
        copied.forEach(page => output.addPage(page));
        setOutput(new Blob([new Uint8Array(await output.save()).buffer as ArrayBuffer], { type: "application/pdf" }), "toolora-pages.pdf", lang === "ar" ? "تم استخراج الصفحات." : "Selected pages extracted.");
      } else {
        const file = files[0];
        const img = new Image();
        const sourceUrl = URL.createObjectURL(file);
        await new Promise<void>((resolve, reject) => { img.onload = () => resolve(); img.onerror = () => reject(new Error(t.error)); img.src = sourceUrl; });
        const canvas = document.createElement("canvas");
        canvas.width = active === "resize" ? Math.max(1, Number(width)) : img.naturalWidth;
        canvas.height = active === "resize" ? Math.max(1, Number(height)) : img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error(t.error);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(b => b ? resolve(b) : reject(new Error(t.error)), "image/jpeg", Number(quality)));
        URL.revokeObjectURL(sourceUrl);
        setOutput(blob, "toolora-image.jpg", lang === "ar" ? "تم تجهيز الصورة." : "Your image is ready.");
      }
    } catch (e) { setError(e instanceof Error ? e.message : t.error); }
  }

  function calculate() {
    const x = Number(a), y = Number(b), z = Number(c);
    if (active === "percent") setResult(`${x}% ${lang === "ar" ? "من" : "of"} ${y} = ${(x / 100 * y).toFixed(2)}`);
    if (active === "discount") {
      const saving = x * y / 100;
      setResult(`${t.finalPrice}: ${(x - saving).toFixed(2)} • ${t.savings}: ${saving.toFixed(2)}`);
    }
    if (active === "loan") {
      const months = Math.max(1, z);
      const monthlyRate = y / 100 / 12;
      const payment = monthlyRate === 0 ? x / months : x * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
      setResult(`${t.monthly}: ${payment.toFixed(2)}`);
    }
  }

  const selectedTool = active ? tools.find(x => x.id === active) : null;
  const toolName = active ? t[active as keyof typeof t] as string : "";
  const groupName = selectedTool ? t[selectedTool.group as keyof typeof t] as string : "";

  return <main dir={rtl ? "rtl" : "ltr"} className="page">
    <header className="topbar">
      <button className="brand" onClick={() => { setActive(null); resetOutput(); }}><span className="brandIcon">T</span> Toolora</button>
      <div className="topActions">
        <a href="#tools" className="navLink">{t.all}</a>
        <button className="langButton" onClick={() => setLang(lang === "en" ? "ar" : "en")}>{lang === "en" ? "العربية" : "English"}</button>
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
        {visible.map(item => <button key={item.id} className={`toolCard ${active === item.id ? "selected" : ""}`} onClick={() => { setActive(item.id); resetOutput(); }}>
          <span className="toolIcon">{item.icon}</span><span className="toolTitle">{t[item.id as keyof typeof t]}</span><span className="toolGroup">{t[item.group as keyof typeof t]}</span><span className="cardArrow">↗</span>
        </button>)}
      </div>

      {active && <section className="workspace">
        <div className="workspaceHead"><div><span className="sectionKicker">{groupName}</span><h2>{toolName}</h2></div><button className="clearButton" onClick={() => { setFiles([]); setText(""); resetOutput(); }}>{t.clear}</button></div>

        {(active === "merge" || active === "split" || active === "image" || active === "resize") && <div className="toolForm">
          <label className="uploadBox"><span className="uploadIcon">＋</span><strong>{t.select}</strong><small>{active === "merge" ? "PDF files" : active === "split" ? "One PDF file" : "JPG, PNG, WEBP"}</small>
            <input type="file" multiple={active === "merge"} accept={active === "merge" || active === "split" ? "application/pdf,.pdf" : "image/*"} onChange={e => setFiles(Array.from(e.target.files || []))} />
          </label>
          {files.length > 0 && <p className="fileList">{files.map(f => f.name).join(" • ")}</p>}
          {active === "split" && <><label>{t.pages}<input className="field" value={pages} onChange={e => setPages(e.target.value)} /></label><small>{t.splitHint}</small></>}
          {(active === "image" || active === "resize") && <label>{t.imageQuality}: {Math.round(Number(quality) * 100)}%<input type="range" min="0.2" max="1" step="0.05" value={quality} onChange={e => setQuality(e.target.value)} /></label>}
          {active === "resize" && <div className="twoFields"><label>{t.width}<input className="field" type="number" value={width} onChange={e => setWidth(e.target.value)} /></label><label>{t.height}<input className="field" type="number" value={height} onChange={e => setHeight(e.target.value)} /></label></div>}
          <button className="primaryButton" onClick={processFileTool}>{t.run}</button>
          <p className="privacyNote">🔒 {t.privacy}</p>
        </div>}

        {(active === "percent" || active === "discount" || active === "loan") && <div className="toolForm">
          <label>{active === "percent" ? t.rate : active === "discount" ? t.price : t.principal}<input className="field" type="number" value={a} onChange={e => setA(e.target.value)} /></label>
          <label>{active === "percent" ? t.number : active === "discount" ? t.discountRate : t.interest}<input className="field" type="number" value={b} onChange={e => setB(e.target.value)} /></label>
          {active === "loan" && <label>{t.months}<input className="field" type="number" value={c} onChange={e => setC(e.target.value)} /></label>}
          <button className="primaryButton" onClick={calculate}>{t.run}</button>
        </div>}

        {(active === "words" || active === "case" || active === "spaces") && <div className="toolForm">
          <label>{t.wordsLabel}<textarea className="textArea" rows={6} value={text} onChange={e => setText(e.target.value)} placeholder={t.wordsLabel} /></label>
          {active === "words" && <div className="metrics"><div><strong>{text.trim() ? text.trim().split(/\s+/).length : 0}</strong><small>{t.wordCount}</small></div><div><strong>{text.length}</strong><small>{t.chars}</small></div><div><strong>{(text.match(/[.!?؟]+/g) || []).length}</strong><small>{t.sentence}</small></div></div>}
          {active === "case" && <div className="buttonRow"><button className="secondaryButton" onClick={() => setText(text.toUpperCase())}>{t.uppercase}</button><button className="secondaryButton" onClick={() => setText(text.toLowerCase())}>{t.lowercase}</button><button className="secondaryButton" onClick={() => setText(text.replace(/\b\w/g, x => x.toUpperCase()))}>{t.titlecase}</button></div>}
          {active === "spaces" && <button className="primaryButton" onClick={() => setText(text.replace(/\s+/g, " ").trim())}>{t.run}</button>}
        </div>}

        {error && <div className="errorBox">{error}</div>}
        {result && <div className="resultBox"><strong>{t.result}</strong><p>{result}</p>{downloadUrl && <a className="downloadButton" href={downloadUrl} download={downloadName}>{t.download}</a>}</div>}
      </section>}
    </section>

    <footer className="footer"><div className="footerBrand"><span className="brandIcon">T</span> Toolora</div><p>{t.footer}</p><div className="footerLinks"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="mailto:hello@toolora.example">Contact</a></div><small>© {new Date().getFullYear()} Toolora</small></footer>
  </main>;
}
