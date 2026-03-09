# WIPLabs — Personal App Studio Site

Built with [Astro](https://astro.build). Static site for app publishing, privacy policies, and personal brand of İhsan Özlü.

🌐 Live at: [wiplabs.app](https://wiplabs.app)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at: http://localhost:4321

## 📁 Project Structure

```
src/
├── pages/
│   ├── index.astro                        ← Homepage
│   ├── about.astro                        ← About page
│   ├── support.astro                      ← Support & FAQ
│   └── apps/
│       ├── index.astro                    ← All apps listing
│       ├── trace-order/
│       │   ├── index.astro                ← App detail page
│       │   └── privacy-policy.astro       ← Privacy policy
│       └── bade-daily-list/
│           ├── index.astro                ← App detail page
│           └── privacy-policy.astro       ← Privacy policy
├── layouts/
│   └── BaseLayout.astro                   ← Shared layout (nav, footer, theme toggle)
└── data/
    └── apps.js                            ← ⭐ Edit this to add/update apps
public/
├── favicon.svg                            ← Browser tab icon
└── avatar.jpg                             ← Profile photo
```

## 📱 Current Apps

| App | Platform | Status | App Store |
|-----|----------|--------|-----------|
| Trace Order | iOS + Android (soon) | Live | [App Store](https://apps.apple.com/tr/app/siparis-takip/id6754329960) |
| Bade Daily List | iOS | Live | [App Store](https://apps.apple.com/tr/app/bade-g%C3%BCnl%C3%BCk-%C3%BCr%C3%BCn-listesi/id6742989209) |

## ➕ Adding a New App

1. Add app data to `src/data/apps.js`
2. Create folder: `src/pages/apps/your-app-name/`
3. Copy `trace-order/index.astro` and `trace-order/privacy-policy.astro` into it
4. Update the app name references in the copied files
5. Update the footer privacy links in `BaseLayout.astro`

## 🌐 Deployment

### Vercel (recommended)
Connect your GitHub repo at [vercel.com](https://vercel.com) — Astro is auto-detected.
- Build command: `npm run build`
- Output directory: `dist`

### Cloudflare Pages
Connect your GitHub repo in the Cloudflare Pages dashboard.
- Build command: `npm run build`
- Output directory: `dist`

## 🎨 Theming

Dark/light toggle is built in and persists via localStorage. Edit CSS variables in `BaseLayout.astro`:
- `--accent` — main accent color (electric green `#c8f135` dark / `#5c9e00` light)
- `--bg`, `--bg-card` — background colors
- `--text`, `--text-muted` — text colors
- `--border` — border color

## 🔑 Privacy Policy URLs

Once live, update these URLs in App Store Connect:
- Trace Order → `https://wiplabs.app/apps/trace-order/privacy-policy`
- Bade Daily List → `https://wiplabs.app/apps/bade-daily-list/privacy-policy`

## 📧 Contact Email

Currently using `hello@wiplabs.app` across all pages.
Once `wiplabs.app` domain is registered, set up Cloudflare Email Routing (free) to forward `hello@wiplabs.app` to your Gmail — takes about 5 minutes.

## 🗺 Planned

- [ ] Android Play Store links (once Trace Order Android is published)
- [ ] Turkish / English i18n (v2)
- [ ] Blog / notes section
- [ ] More apps