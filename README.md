# TeaNest

Premium static tea brand website built with React 19, Vite, TailwindCSS, React Router, Framer Motion, Lenis smooth scroll, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/` and contains static files only.

## GitHub Pages deployment

1. Push this folder to a GitHub repository.
2. Run `npm run build`.
3. Deploy the `dist/` folder using GitHub Pages, GitHub Actions, or `gh-pages`.

The Vite base is configured as `./` and the app uses hash routing, so it works under repository subpaths without server rewrites.

SEO metadata and the sitemap are prepared for `https://myteanest.com/`. The domain still needs to be connected in GitHub Pages and at the DNS provider before launch.
