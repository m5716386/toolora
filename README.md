# Toolora

Toolora is a bilingual (Arabic and English) collection of free browser-based tools for working with images, PDF files, and common Office documents.

**Live website:** https://tooloratooll.netlify.app/

## Available tools

### Image tools
- Resize an image
- Compress an image

### PDF and document tools
- Text to PDF
- Images to PDF
- PDF to Excel
- Text to Excel
- PDF to Word
- PDF to JPG
- Excel to PDF
- Word to PDF
- PowerPoint to PDF

## How file processing works

The tools are designed to process selected files in the visitor's browser. Toolora does not intentionally upload those selected files to a Toolora file-processing server.

Some conversion features load third-party JavaScript libraries from public CDNs. Those libraries require an internet connection, and their providers' availability and policies may affect conversions.

Keep a backup of important original files before using any conversion tool.

## Important conversion limitations

- **Image resize and compression:** Common browser-supported image formats such as JPG, PNG, and WEBP are accepted. Output images are currently exported as JPEG, so transparency is not retained.
- **Text to PDF:** Creates a straightforward PDF from entered text; it is not intended to reproduce complex document layouts.
- **PDF to Excel:** Extracts text and approximate row/column positions from text-based PDFs. Scanned PDFs require OCR, which is not currently built in. Extracted spreadsheets should be reviewed.
- **PDF to Word:** Extracts readable text into a DOCX document. It does not preserve the original page layout, columns, images, or complex tables.
- **PDF to JPG:** Exports each PDF page as a JPG image inside a ZIP archive.
- **Excel, Word, and PowerPoint to PDF:** Supports modern XLSX, DOCX, and PPTX files. It extracts text and tables into a simple PDF and does not preserve the original Office layout, charts, images, animations, or slide design.
- **Text to Excel:** Uses delimiters such as commas, semicolons, and tabs to separate columns, with each new line forming a row.

## Project structure

- `app/` — Next.js routes, metadata, sitemap, robots rules, and informational pages.
- `components/TooloraApp.tsx` — Main bilingual tools interface and browser-side conversion logic.
- `public/` — Static assets and site verification files.

## Run locally

Requirements: Node.js compatible with the installed Next.js version.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Create a production build with:

```bash
npm run build
```

## Deployment

The production site is hosted on Netlify and connected to this GitHub repository. Commits pushed to the configured production branch can trigger a Netlify deployment when automatic deployments are enabled.

Check the Netlify deploy log after significant changes; a GitHub commit alone does not prove that the production build succeeded.

## Search engines

The project includes:
- `app/sitemap.ts` for the XML sitemap.
- `app/robots.ts` for crawler rules.
- Page metadata, canonical URLs, and structured data on the homepage.
- Bilingual informational pages and tool guides.

The Google Search Console HTML verification file in `public/` must remain in place while that verification method is being used.

## Before applying for advertising

- Make sure every tool works reliably on desktop and mobile.
- Keep the About, Contact, Privacy Policy, and Terms pages accurate and accessible.
- Clearly explain each tool's supported formats and limitations.
- Publish genuinely useful, original guidance rather than repetitive or automatically generated filler.
- Review the applicable advertising and privacy requirements for the regions you serve.
- Never click your own ads, encourage others to click them, or purchase invalid traffic.