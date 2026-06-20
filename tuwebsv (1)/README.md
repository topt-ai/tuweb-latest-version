# TuWebSV

Marketing site for TuWebSV. React 19 + Vite + TypeScript + Tailwind 4.

## Run locally

Prerequisites: Node.js 18+

```
npm install
npm run dev
```

Vite serves the app on `http://localhost:3000`.

## Build

```
npm run build
npm run preview
```

## Routing

All routes are React-rendered from `src/App.tsx`. The Vercel config (`vercel.json`) rewrites every request to `index.html` so the SPA can pick up deep links.

## SEO

Per-route `<title>`, meta, OG, and JSON-LD are set client-side via the `useSeo` hook in `src/seo.ts`. The site's default Organization schema is baked into `index.html` so it ships before JS hydrates.

Note: client-side meta tags work for Google (which renders JS) but most social-link scrapers (Facebook, LinkedIn) do not run JS, so shared links to subpages will fall back to the homepage OG card. If full per-route social previews are required, migrate to an SSR framework (Next.js or Astro).

## WhatsApp button

`public/widget.js` injects a floating WhatsApp link button in the bottom-right corner. Loaded from `index.html` via `<script src="/widget.js" defer>`.
