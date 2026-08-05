# WIPLabs — App Studio Site

Built with [Astro](https://astro.build). Portfolio and landing site for WIPLabs apps — app detail pages, privacy policies, and personal brand of İhsan Özlü.

🌐 Live at: [wiplabs.app](https://wiplabs.app)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## Project Structure

```
src/
├── data/
│   └── apps.js                            ← Single source of truth for all app metadata
├── layouts/
│   └── BaseLayout.astro                   ← Shared layout (nav, footer, SEO, schema)
└── pages/
    ├── index.astro                        ← Homepage
    ├── about.astro                        ← About page
    ├── support.astro                      ← Support & FAQ
    └── apps/
        ├── index.astro                    ← All-apps listing
        ├── trace-order/
        ├── bade-daily-list/
        ├── gratefuly/
        ├── hukukai/
        └── [slug]/                        ← index.astro, privacy-policy.astro, terms.astro
public/
├── badges/
│   ├── appstore.svg
│   └── googleplay.png
├── icons/                                 ← App icons (local fallback)
└── screenshots/                           ← Hero images per app
```

## Apps

| App | Platform | Status |
|-----|----------|--------|
| [Trace Order](https://wiplabs.app/apps/trace-order) | iOS + Android | Live |
| [Bade Daily List](https://wiplabs.app/apps/bade-daily-list) | iOS | Live |
| [Gratefuly Journal](https://wiplabs.app/apps/gratefuly) | iOS + Android | Live |
| [HukukAI](https://wiplabs.app/apps/hukukai) | iOS + Android | Live |
| [OpsCanary](https://wiplabs.app/apps/opscanary) | Web | Live |
| [SGEO Digital](https://wiplabs.app/apps/sgeo-digital) | Web | Live |

## Adding a New App

1. Add an entry to `src/data/apps.js` (see existing entries for all fields).
2. Create `src/pages/apps/[slug]/` with `index.astro`, `privacy-policy.astro`, and `terms.astro`.
3. Add screenshots to `public/screenshots/[slug]/` if the page uses a hero carousel.

The OG image and Smart App Banner wire up automatically from `apps.js` via BaseLayout props.

## Deployment

Deployed on Vercel — connected to this GitHub repo. Astro is auto-detected.

- Build command: `npm run build`
- Output directory: `dist`
