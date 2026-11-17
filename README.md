# Event Website

React + TypeScript + Vite site hosting all event info, deployed to GitHub Pages.

## Edit content

All written content lives in [src/content/](src/content/), one file per section. External URLs are all in [src/content/links.ts](src/content/links.ts); an empty one renders a "link coming soon" placeholder. Images go in [src/content/assets/](src/content/assets/).

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run lint
```

## Deploy

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.
The repo is named `mammderson.github.io`, so the site is served at `https://mammderson.github.io/` (see `base` in `vite.config.ts`).
