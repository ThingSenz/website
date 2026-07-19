# ThingSenz Apps

A Vercel-ready React/Next portfolio for showcasing Android apps, open-source
projects, screenshots, Play Store links, and app-specific privacy policy pages.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
npm test
```

The local preview runs at `http://localhost:3000`.

## Add Or Edit Apps

Edit `lib/apps.ts`. Each app entry controls:

- the homepage project card
- `/apps/[slug]`
- `/apps/[slug]/privacy`
- project links, technology tags, highlights, screenshot copy, and privacy text

## Add Screenshots

Create a folder for each project under `public/screenshots/[slug]`.

For Calculator, use:

```text
public/screenshots/calculator
```

Any `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, or `.gif` files placed in that
folder are shown automatically on the Calculator page. File names are sorted
naturally, so names like `01-home.png`, `02-result.png`, and `03-history.png`
work well.

After adding a new app, run:

```bash
npm test
```

## Replace Placeholder Content

The current project data is sample content. Replace these fields before
publishing:

- app names, summaries, and descriptions
- Play Store URLs
- GitHub/source URLs
- contact email in each privacy policy
- privacy policy text if an app collects different data
- screenshot files when available

## Vercel

Import this repository into Vercel and keep the default Next.js settings.

Build command:

```bash
npm run build
```

Output is handled by Next.js.

## Useful Files

- `app/page.tsx`: homepage and project cards
- `app/apps/[slug]/page.tsx`: app detail page
- `app/apps/[slug]/privacy/page.tsx`: direct privacy policy route
- `app/globals.css`: visual design system
- `public/thingsenz-logo.png`: ThingSenz logo and browser icon
- `public/og.png`: social preview image
