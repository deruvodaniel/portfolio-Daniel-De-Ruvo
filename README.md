# Daniel De Ruvo — Portfolio

Live: https://portfolio-daniel-de-ruvo.vercel.app/

A fast, accessible, and visually rich single‑page portfolio built with React and styled‑components. The site emphasizes smooth but efficient motion, excellent responsiveness, and strong technical foundations for SEO, a11y and performance.

## Tech stack
- React 18, Create React App 5
- styled-components (design tokens via CSS variables, light/dark themes)
- Framer Motion (micro‑interactions)
- Lenis (smooth scrolling)
- IntersectionObserver (IO) for lazy motion and counting
- Sentry SDK (errors + performance tracing)

## Architecture overview
```
src/
  components/       // UI sections (Header, Home, About, Technologies, Projects, Courses, Contact, Footer)
  context/          // Theme, i18n and shared refs providers
  hooks/            // useWidth, useHeight, useDateYear
  lib/              // lenis init, smoothScrollTo helper
  assets/           // SVG decorative elements
  styles/           // media queries and global CSS variables
```
Key providers are mounted in App (ThemeProvider, I18nProvider, RefsContextProvider). Sections are wrapped by AnimatedSection for non‑janky reveal on view.

## Notable implementation details
- Smooth scroll: lib/lenis.js initializes a singleton Lenis instance (paused when tab is hidden; respects prefers‑reduced‑motion). lib/scrollTo.js offers a unified helper used by nav/CTA.
- Parallax: GPU‑accelerated transforms only on desktop; disabled on reduced‑motion.
- Animated reveal: components/AnimatedSection uses IO + CSS transitions (no timers) for cheap "fade & lift". Removed content‑visibility issues to avoid scroll traps.
- CountUp: components/CountUp animates only when visible (IO) and skips animation when reduced‑motion.
- Translations: context/i18nContext with tiny runtime dictionary (EN/ES) and persistent language toggle.
- Theming: context/themeContext toggles data‑theme on <html> to switch CSS variables; persistent across sessions.
- Error/Perf monitoring: Sentry initialized in src/index.js with browserTracingIntegration and configurable tracesSampleRate.

## Accessibility (a11y)
- Semantic headings and landmarks; Header nav has aria‑labels and keyboard access.
- Focus styles via :focus-visible with sufficient contrast.
- Reduced motion honored across animations and parallax.
- Skip link to main content; accessible link text and external links use rel="noopener noreferrer".

## Performance
- Motion work minimized: requestAnimationFrame throttling and IO gating.
- Heavy visuals only on desktop; mobile avoids background parallax.
- Images and social icons load lazily (loading="lazy", decoding="async").
- CSS transforms/opacity only; no layout‑thrashing properties.

## SEO
- Descriptive <title> and meta description, OpenGraph and Twitter cards in public/index.html.
- Clean URLs with anchors for in‑page navigation.
- i18n content for EN/ES.

## Recent improvements
- Unified smooth scrolling and removed duplicated window.scrollTo calls.
- Lenis hardened (singleton, visibility pause, reduced‑motion).
- Parallax and text effects tuned; disabled for reduced‑motion.
- CountUp runs only when visible; avoids offscreen work.
- Projects: removed year and source‑code link; kept single "Live Site" action.
- Technologies grid: clearer states in light theme, unnecessary hovers removed on request.
- Skills cards: icon to the left; title above description.
- Header logo: subtle gradient badge and accent.
- Fixed scroll trap past the Projects section.

## Responsiveness
- Mobile‑first styles with breakpoints from styles/index.js (mobile, tablet, desktop, bigScreen).
- Layouts use grid/flex and fluid spacing; headings clamp across viewports.

## Local development
- Node 22.x
- Install: `npm install`
- Start: `npm start`
- Build: `npm run build`

## Configuration
- Theme persists in localStorage; default follows system preference.
- Language persists in localStorage; default inferred from navigator.language.
- Sentry: set `REACT_APP_SENTRY_DSN` as an environment variable for runtime initialization.

## Deployment
Any static host (Netlify, Vercel) works. Build with `npm run build` and deploy the build/ directory.

---
If you spot an accessibility or performance issue, please open an issue with the URL and reproduction steps.
