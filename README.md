# Photo Portfolio

A minimalist, fast React + Vite photo portfolio showcasing selected works and project series. It focuses on image quality, responsive masonry-style layout, and a clean viewing experience with a keyboard-friendly lightbox.

## Features
- Selected Works and project galleries
- Responsive masonry layout (CSS columns) with graceful fallback
- Lightbox with keyboard navigation (← → Esc)
- High‑resolution full images, optimized thumbs (lazy + srcset)
- Centralized image source definitions
- Accessible controls & semantic structure
- Deployable to GitHub Pages

## Tech Stack
- React + Vite
- Plain CSS (no framework)
- GitHub Actions (Pages deploy)

## Local Development
```bash
npm install
npm run dev
```
App runs at: http://localhost:5173

## Build
```bash
npm run build
```
Outputs static assets to `dist/`.

## Deploy (GitHub Pages)
Configured via GitHub Actions. Ensure `vite.config.js` sets the correct `base` matching the repo name (e.g. `/photo-portfolio/`). Push to `main` and the workflow publishes to the `github-pages` environment.

## Project Structure (key parts)
```
src/
  components/      Reusable UI (e.g. Gallery, Header)
  pages/           Route-level views
  data/            Centralized image source helpers
  main.jsx         App bootstrap
css/               Global stylesheet
```

## Lightbox Shortcuts
- Arrow Left / Right: previous / next
- Escape: close

## License
Personal / portfolio use. Adapt freely for your own site.