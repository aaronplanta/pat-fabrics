# PAT Fabrics

This is a practice project built specifically to learn and practice how to make a responsive website.

## Tech Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Fonts:** Google Fonts (Poppins and Cormorant Garamond), self-hosted by Next.js

## Design

An editorial wool supplier website with warm ivory and deep olive colours, serif headings, fabric photography, and responsive layouts. The home page introduces four wool collections and the brand story; the contact page includes swatch enquiries, click-to-call contact details, and expandable FAQs.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `npm.cmd` if script execution is disabled.

## Checks

```sh
npm run lint
npm run build
node scripts/verify-ui.mjs
```

The browser check requires Node.js 22 or newer and Google Chrome. It defaults to Chrome's standard Windows installation; set `CHROME_PATH` to the browser executable on other systems. It serves the exported site locally, checks both pages at five viewport widths, verifies images, heading fonts, mobile navigation, and FAQs, and saves screenshots in `.next/ui-previews/`. Ports 4173 and 9223 must be available.

Production exports to `out/` with the `/pat-fabrics` base path for GitHub Pages. Google Fonts require network access on the first build.
