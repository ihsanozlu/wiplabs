# WIPLabs — CLAUDE.md

Portfolio and landing site for WIPLabs apps, built with [Astro](https://astro.build) and deployed on Vercel.

## Stack

- **Framework:** Astro 4
- **Deployment:** Vercel (with `@vercel/analytics` and `@vercel/speed-insights`)
- **Styling:** Plain CSS inside `.astro` component `<style>` blocks
- **Fonts:** Syne (headings/labels), system stack (body)

## Local dev

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## Project structure

```
src/
  data/
    apps.js          # Single source of truth for all app metadata
  layouts/
    BaseLayout.astro # Shared HTML shell (nav, footer, SEO, schema)
  pages/
    index.astro                          # Homepage
    about.astro                          # About page
    support.astro                        # Support page
    apps/
      index.astro                        # All-apps listing
      [slug]/
        index.astro                      # App detail page
        privacy-policy.astro             # Privacy policy
        terms.astro                      # Terms of use
public/
  icons/            # App icons (local fallback)
  screenshots/      # App screenshots used in hero sections
```

## Adding a new app

1. **Add an entry to `src/data/apps.js`** — fill in all fields (see existing entries for reference).
2. **Create `src/pages/apps/[slug]/`** with at minimum:
   - `index.astro` — app detail page
   - `privacy-policy.astro`
   - `terms.astro` (if needed)
3. Add screenshots to `public/screenshots/[slug]/` if the page uses a hero image carousel.

## App metadata fields (`apps.js`)

| Field | Description |
|---|---|
| `slug` | URL path segment (`/apps/[slug]`) |
| `name` | Display name |
| `tagline` | Short one-liner |
| `description` | Longer description for the detail page |
| `platform` | `['iOS']`, `['Android']`, or `['iOS', 'Android']` |
| `status` | `'live'` / `'wip'` / `'coming-soon'` |
| `version` | Current version string |
| `languages` | Array of language names |
| `supportEmail` | Support contact |
| `appIcon` | 100×100 App Store CDN URL (`artworkUrl100` from iTunes lookup API) |
| `appStoreId` | Numeric App Store ID (used for schema markup) |
| `storeLinks.ios` | App Store URL (or `null`) |
| `storeLinks.android` | Google Play URL (or `null`) |
| `hasDataDeletion` | `true` if there is a data-deletion page |
| `note` | Optional internal note shown on detail page |

## Apps

| App | Status | Platforms |
|---|---|---|
| Trace Order | Live | iOS, Android |
| Bade Daily List | Live | iOS |
| Gratefuly Journal | Live | iOS |
| HukukAI | Live | iOS, Android |
