# Daniel Victor Udo — Portfolio

Personal portfolio and service site, built with **Next.js (App Router)**.

Live: https://danny-portfolio-lilac.vercel.app

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## How it is put together

| Path | What it holds |
| --- | --- |
| `app/layout.js` | Metadata, fonts, JSON-LD structured data |
| `app/page.js` | Section composition (server component) |
| `app/globals.css` | Design system — tokens, layout, motion |
| `app/opengraph-image.js` | Social share card, generated at build time |
| `app/sitemap.js`, `app/robots.js` | Crawler directives |
| `lib/seo.js` | Identity, canonical URL, keywords |
| `lib/content.js` | All page copy and data |
| `components/` | One component per section |

Copy lives in `lib/content.js`, not in the components — editing the site
means editing data, not JSX.

### Server vs client

Every section is a **server component**, so the full page content ships as
HTML. Only three pieces run on the client: the header (mobile menu, scroll
state), the hero stat ticker, and the scroll-reveal observer. This keeps the
page readable by crawlers and link-preview bots that do not execute
JavaScript.

## Deploying to Vercel

The project ships a `vercel.json` pinning `framework: nextjs`, so a fresh
import needs no configuration.

If an existing Vercel project was created back when this repo was a static
`index.html` site, its **Framework Preset** will still be "Other" and the
deployment will 404 — Vercel skips the build and looks for an `index.html`
that no longer exists. Fix it under Settings → Build and Deployment:

- Framework Preset → **Next.js**
- Clear any **Output Directory** override (it is not read from `vercel.json`)
- Leave Build and Install commands on their defaults

Then redeploy.

## Changing the domain

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project settings. Canonical tags,
the sitemap, `robots.txt` and the social card all read from it.

## SEO

- Per-page metadata with Open Graph and Twitter card
- `Person`, `ProfessionalService` and `WebSite` JSON-LD
- Generated `sitemap.xml` and `robots.txt`
- Single `h1`, one `h2` per section
- Self-hosted Inter via `next/font`; images through `next/image`
