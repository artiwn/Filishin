# Filishin — GitHub / Vercel production

Production-ready build based on the supplied **fin version** design and content.

## Ready for GitHub
Put the **contents of this folder** in the root of the repository. There is no build step and no nested deployment ZIP.

Main files:
- `index.html` + clean entry pages such as `about.html`, `projects.html`, `contact.html`
- `styles.css`
- `data.js`
- `app.js`
- `i18n.js`
- `assets/` — only the 41 images/doc scans actually used by this design
- `projects/FL-01.html` … `projects/FL-31.html` — shareable/SEO entry pages for projects
- `api/contact.js` — optional Vercel Function for contact-form delivery
- `vercel.json`, `robots.txt`, `sitemap.xml`

## What was fixed
- Removed all runtime dependency on `filishin.vercel.app`.
- Removed LoremFlickr and Picsum fallbacks.
- Replaced generated quarry/factory photography with real Filishin manufacturing-base photos from the approved archive.
- Replaced a very low-resolution Erebuni cover with the larger archive image `02.jpg`.
- Armenian is the default language; English and Russian remain fully switchable and the choice is remembered.
- Language controls are real keyboard-accessible buttons.
- Theme preference is remembered and inverse/dark sections keep correct contrast in both themes.
- Mobile navigation opens directly below the sticky header and reports its expanded state to assistive technology.
- H1/H2 scale is capped to the previously approved, smaller production typography.
- Hero images use eager/high-priority loading; secondary images stay lazy-loaded.
- Projects are keyboard-accessible controls and project modals have dialog semantics, focus trapping and Escape-to-close.
- Clean routes are used (`/about`, `/projects`, `/contact`, etc.) with legacy `#/...` links still accepted and normalized.
- Every project has a clean shareable URL such as `/projects/FL-01` and a static HTML entry with its own canonical/Open Graph metadata.
- Armenian-first static metadata, canonical, Open Graph/Twitter metadata, robots and sitemap are included.
- Basic security headers are configured in `vercel.json`.
- The old undefined `BASE` reference on licence links was removed.

## Vercel deployment
1. Import the GitHub repository into Vercel.
2. Framework preset: **Other**.
3. No build command is needed.
4. The repository root is the output directory.

`vercel.json` enables clean `.html` URLs and adds security/cache headers.

## Contact form
The form posts to `/api/contact`. If the server-side email service is not configured, the browser falls back to opening the visitor's email application with a prepared message.

To enable automatic server-side delivery, add these Vercel Environment Variables:
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` — a sender verified with your email provider, for example `Filishin Website <website@filishin.am>`
- `CONTACT_TO_EMAIL` — optional; defaults to `info@filisin.am`

## Contact-data check before domain cut-over
This build intentionally preserves the office address, phone and email from the supplied **fin version**. Confirm those details with Filishin before replacing the existing public site; the code does not guess or silently replace corporate contact information.

## News archive note
The supplied **fin version** contains news metadata (date/category/title/image), but not article bodies. The cards therefore say **Archive record** rather than pretending to link to article content that is not present in the supplied source.
