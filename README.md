# Filishin — GitHub / Vercel production

This repository is the production-ready version of the approved `fin version` design.

## What was hardened
- All project and production photos are stored locally in this repository.
- No dependency on `filishin.vercel.app`, LoremFlickr or Picsum.
- Armenian is the default language; English and Russian remain available.
- Language choice and light/dark theme are saved in `localStorage`.
- Dark/inverse sections keep correct contrast in both themes.
- Mobile menu is anchored to the sticky header.
- Main headings were capped to the previously approved visual scale.
- Hero imagery is eager/high-priority; secondary images remain lazy-loaded.
- Project controls and language controls are keyboard-accessible.
- Project modal has dialog semantics, focus handling and a shareable hash URL (`#/projects?project=FL-01`).
- Root Open Graph/Twitter/canonical metadata, robots and sitemap are included.
- Basic security headers are configured in `vercel.json`.

## Deploy
1. Put the **contents of this folder** in the root of a GitHub repository.
2. Import that repository into Vercel.
3. Framework preset: **Other**. No build command is required.

## Contact form
The form first tries the included Vercel Function at `/api/contact`. If the email service is not configured it falls back to the visitor's mail application.

To enable server-side sending, add these Vercel Environment Variables:
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` — a verified sender on your domain, e.g. `Filishin Website <website@filishin.am>`
- `CONTACT_TO_EMAIL` — optional; defaults to `info@filisin.am`

## Before domain cut-over
Please confirm the currently approved Filishin office address and phone number. This build intentionally preserves the contact details from the supplied `fin version` instead of guessing replacements.

## SEO note
The approved design remains a hash-routed SPA. Root social metadata is production-ready, but unique server-rendered social cards/SEO metadata for each hash page would require a later move to real path-based pages or a framework/router with server rendering.
