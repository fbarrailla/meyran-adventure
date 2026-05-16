# Selasar

> *A verandah for ideas, kitchens, and strangers.*

A modern, responsive marketing site about **cultures & encounters**, a **tech blog**, and **Indonesian recipes** — built with Vite + React.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

Build & preview:

```bash
npm run build
npm run preview
```

## Sections

| # | Section          | What it does                                                                 |
|---|------------------|------------------------------------------------------------------------------|
| 1 | **Navbar**       | Sticky, becomes glassmorphic on scroll. Mobile menu with animated burger.    |
| 2 | **Hero**         | Asymmetric collage of three images (Encounters / Kitchen / Tech) + stats.    |
| 3 | **FeatureGrid**  | Three pillars: Cultures & Encounters, Tech Notes, Indonesian Kitchen.        |
| 4 | **Articles**     | Featured article + grid, with category filter chips (AI, Gear, Remote Work…)|
| 5 | **Newsletter**   | EmailJS-wired subscription form (success/error states, accessible labels).   |
| 6 | **Footer**       | Multi-column links, social pills, origin note, coordinates.                  |

## Newsletter (EmailJS)

The newsletter form sends subscribers via [@emailjs/browser](https://www.emailjs.com/) using:

```
service_id   : service_nop1bn9
template_id  : template_f6a7oz9
public_key   : b3hv2vyozRDNnE5PQ
```

Template variables sent on submit: `email`, `user_email`, `to_email`, `subscribed_at`, `source`. Adjust `src/components/Newsletter.jsx` if your template expects different names.

## Design system

- **Type**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display, variable) + [Manrope](https://fonts.google.com/specimen/Manrope) (body), via Google Fonts.
- **Palette** (OKLCH, in `src/styles/global.css`): deep navy (`--navy-950..600`), cyan (`--cyan-300..500`), sunset orange (`--sunset-400..600`), warm cream (`--cream-50..300`).
- **Spacing & sizing**: fluid `clamp()` tokens (`--fs-*`, `--sp-*`) for type and rhythm.
- **Motion**: exponential easing (`--ease-out-quart`, `--ease-out-expo`); respects `prefers-reduced-motion`.
- **Glass**: used purposefully — only the scrolled navbar and the dark newsletter card.

## File tree

```
.
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── content.js          # all copy, articles, nav, footer
    ├── styles/
    │   └── global.css          # tokens, reset, buttons, utilities
    └── components/
        ├── Navbar.jsx + .module.css
        ├── Hero.jsx + .module.css
        ├── FeatureGrid.jsx + .module.css
        ├── ArticleCard.jsx + .module.css
        ├── Articles.jsx + .module.css
        ├── Newsletter.jsx + .module.css
        └── Footer.jsx + .module.css
```

## Deploying

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys to GitHub Pages on every push to `main`.

**One-time setup in the GitHub repo:**

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

That’s it — the next push to `main` will publish to:

```
https://fbarrailla.github.io/meyran-adventure/
```

The Vite `base` is configured to `/meyran-adventure/` in build mode (see `vite.config.js`), so asset paths resolve correctly under the project sub-path. Dev mode still serves from `/`.

## Notes

- Images are hot-linked from Unsplash for the demo — swap for hosted assets before production.
- All components are reusable: `ArticleCard` accepts a `variant` prop (`default` | `featured`); the chip/filter in `Articles` filters by category from `content.js`.
- Fully responsive: mobile (~360px) → desktop (≥1240px). Breakpoints at 560 / 640 / 720 / 820 / 880 / 940 / 980 / 1080px.
