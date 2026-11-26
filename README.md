# Toolora

Bilingual Arabic/English starter for a free online tools website.

## Included tools

- Merge PDF files (2+ PDFs)
- Extract selected PDF pages
- Compress/convert images to JPEG
- Resize images
- Percentage calculator
- Discount calculator
- Loan payment estimator
- Word/character/sentence counter
- Uppercase/lowercase/title case
- Remove extra spaces

PDF and image processing runs in the browser. The starter does not upload selected files to a Toolora server.

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Upload this project to a GitHub repository.
2. Sign in to Vercel using GitHub.
3. Choose **Add New → Project** and import the repository.
4. Keep the default Next.js settings and click Deploy.
5. After you buy a domain, add it under Project → Settings → Domains.

## Important before public launch

- Replace `toolora.example` in `app/layout.tsx` with your real domain.
- Replace `hello@toolora.example` in `components/TooloraApp.tsx` with a real contact email.
- Review and expand Privacy Policy and Terms for your actual services and jurisdiction.
- Add a real About page and Contact page.
- Test each tool on mobile and desktop, especially large PDFs and images.
- Add a cookie/consent solution if required for your visitors and ad setup.
- Do not click your own ads, ask others to click ads, or buy invalid traffic.
- Apply to AdSense only after the site has substantial original value, working tools, clear navigation, and required policy pages.

## Known limitations of this starter

- PDF extraction supports comma-separated page numbers, e.g. `1,3,5`.
- Image compression exports JPEG; transparent backgrounds will become non-transparent.
- Image resizing uses exact width and height values and may change aspect ratio.
- The loan calculator is an estimate and does not include fees, taxes, or variable rates.
- This is a starter project, not yet a finished production service.
