# Portfolio — Ishaq Ibrahim

Single-page developer portfolio. Static HTML/CSS/JS, deployed on Vercel.

- **Live**: https://portfolio-gentle-mann.vercel.app (Vercel auto-deploy from main)
- **GitHub**: https://github.com/Gentle-mann/portfolio

---

## Current State

Fully polished single-page portfolio with all P0–P3 improvements implemented. Dark/light mode, 6 project cards with screenshots, services section, writing section, scroll animations, hamburger mobile nav, accessibility features, SEO, and structured data.

### What's in `index.html` (~1,140 lines)

**Head:**
- OG + Twitter Card meta tags with `/og-image.png`
- SVG favicon (`/favicon.svg` — "II" initials)
- JSON-LD Person structured data (name, title, skills, GitHub, LinkedIn)

**CSS (~700 lines embedded):**
- CSS custom properties for theming (`:root` dark, `html.light` overrides)
- Nav: fixed, blurred backdrop, logo with "II" SVG monogram, hamburger on mobile
- Hero: gradient mesh background (3 radial blobs), "Available for work" badge
- Services: 2×2 grid with SVG icons (AI, Full-Stack, Real-Time, Multilingual)
- Projects: cards with screenshots, stretched-link (entire card clickable), featured treatment for Crisis Memory Bridge, tag taxonomy (award/live/hackathon/client), stats row
- Writing: 2-column post preview cards ("Coming soon" placeholders)
- About: 2-column layout (text + stack/recognition)
- Contact: centered CTA with email, GitHub, LinkedIn
- Scroll animations: `.fade-in-up` + `.visible` via IntersectionObserver, staggered services
- Accessibility: `.skip-link`, `.sr-only`, `:focus-visible` outlines
- Theme toggle: `.theme-toggle` with sun/moon SVG icons
- Responsive: hamburger nav, single-column grids, stacked hero buttons at 640px
- `prefers-reduced-motion`: disables all animations

**JavaScript (~50 lines):**
- `document.documentElement.classList.add('js')` — enables animation CSS (graceful degradation)
- `IntersectionObserver` for scroll fade-in animations (threshold 0.1, unobserve after visible)
- `IntersectionObserver` for active nav link highlighting (rootMargin `-40% 0px -55% 0px`)
- Mobile nav toggle with `aria-expanded`, auto-close on link click
- Theme toggle: respects `prefers-color-scheme`, persists to `localStorage`
- Vercel Analytics script tag (activate in Vercel dashboard)

### Sections (top to bottom)

| Section | Nav link | Key features |
|---------|----------|-------------|
| Hero | — | Gradient mesh bg, "Available for work" badge, CTA buttons |
| Services | #services | 4 cards: AI Integration, Full-Stack, Real-Time, Multilingual |
| Projects | #projects | 6 cards with screenshots, stats, tags, stretched links |
| Writing | #writing | 2 post previews (coming soon) |
| About | #about | Bio + stack list + recognition |
| Contact | #contact | Email, GitHub, LinkedIn buttons |

### Project Cards

| Project | Primary URL | Tags | Key Stats |
|---------|-----------|------|-----------|
| Crisis Memory Bridge | railway.app | Featured, 2nd Place, Live | 8 LLM ops, EN/JA i18n |
| ShieldAgent | streamlit.app | Live, Hackathon | 6 languages, 2M+ workers |
| MamaKokoro | vercel.app | Live, Hackathon | 7 memory categories, 4-tier crisis |
| NeoLocal | vercel.app | Live, Hackathon | Bilingual AI, on-chain reputation |
| Tomato RAG | GitHub | — | 300x cache, 3 languages, hybrid search |
| YUYU Nihongo | yuyunihongo.com | Client Project, Live | 4,200+ students, 434+ episodes, 5 JLPT |

### Tag Taxonomy

| Tag | Color | CSS class | Usage |
|-----|-------|-----------|-------|
| Award | Orange | `.tag-award` | Hackathon placement |
| Live | Green | `.tag-live` | Deployed and accessible |
| Hackathon | Purple | `.tag-hackathon` | Built at a hackathon |
| Client | Teal | `.tag-client` | Built for external client |

---

## Improvement Roadmap — Status

### P0 — Critical ✅ All Done

1. ✅ **Project screenshots** — Playwright captures of all 5 live projects + styled placeholder for Tomato RAG
2. ✅ **OG + Twitter Card meta tags** — 1200×630 OG image generated via Playwright
3. ✅ **Favicon** — SVG "II" monogram, linked as `image/svg+xml`
4. ✅ **Featured project treatment** — Accent border, gradient bg, "Featured Project" label for Crisis Memory Bridge
5. ✅ **Client project tag** — Teal "Client Project" tag on YUYU Nihongo

### P1 — High Impact ✅ All Done

6. ✅ **Stats on project cards** — Accent-colored stat pills on every card (implemented in P0)
7. ✅ **Hero background visual** — Subtle gradient mesh (blue, purple, green radial blobs)
8. ✅ **Scroll animations** — `IntersectionObserver` fade-in-up with staggered services, `prefers-reduced-motion` support
9. ✅ **Active nav link** — Highlights current section on scroll
10. ✅ **Clickable cards** — Stretched-link pattern, inner links elevated with `z-index`
11. ✅ **Services section** — 4 cards with SVG icons between hero and projects

### P2 — Medium Impact ✅ Implemented (1 deferred)

12. ✅ **Accessibility** — Skip-to-content, `:focus-visible`, `aria-label`, `aria-hidden`, `role="navigation"`
13. ✅ **Mobile nav** — Hamburger toggle, animated X, dropdown with large tap targets, auto-close
14. ✅ **Resume/CV download** — PDF at `/resume.pdf`, linked from hero buttons
15. ⏳ **Custom domain** — Purchase domain, connect to Vercel, update OG meta and sitemap
16. ✅ **Writing section** — 2 post previews ("Crisis Memory Bridge" + "memU SDK") with "Coming soon"
17. ✅ **Branding** — "II" SVG monogram in nav next to name

### P3 — Nice to Have ✅ Implemented (1 deferred)

18. ✅ **Case study page** — Full Crisis Memory Bridge case study at `/crisis-memory-bridge.html` (problem, architecture, features, results). Linked from project card.
19. ⏳ **Testimonials** — Needs quotes from hackathon judges or YUYU Nihongo client
20. ⛔ **GitHub activity** — Skipped (external API complexity vs static site simplicity)
21. ✅ **Dark/light mode** — Sun/moon toggle, `prefers-color-scheme` default, `localStorage` persistence
22. ✅ **Analytics** — Vercel Analytics script tag (enable in Vercel dashboard > Settings > Analytics)
23. ✅ **JSON-LD structured data** — Person schema in `<head>`
24. ✅ **robots.txt & sitemap.xml** — Both created (update sitemap URL when custom domain is set)

---

## Remaining TODO (manual steps)

1. **Enable Vercel Analytics** — Go to Vercel dashboard > project > Settings > Analytics > Enable
2. **Custom domain** — Purchase and connect, then update `sitemap.xml` URL and add `og:url` meta tag
3. ~~**Resume PDF**~~ — Done
4. **Write blog posts** — Replace "Coming soon" with actual content for the 2 writing section posts
5. **Testimonials** — Collect quotes from hackathon judges or YUYU Nihongo client
6. **More case studies** — Write detailed pages for YUYU Nihongo and other top projects
7. **Submit to Google Search Console** — Verify site ownership, submit sitemap

---

## Tech Decisions

- **Single HTML file**: No build step, no framework overhead. Vercel serves as-is.
- **Embedded CSS + JS**: Eliminates network requests. ~700 lines CSS, ~50 lines JS — within single-file comfort zone.
- **No framework**: Static portfolio, not a web app. Vanilla HTML/CSS/JS is the right choice.
- **CSS custom properties**: Enable dark/light mode with a single class toggle. All colors cascade from `:root`.
- **IntersectionObserver**: Native API for scroll animations and nav highlighting. No library needed.
- **Stretched-link pattern**: Makes cards clickable without nesting `<a>` tags (invalid HTML). Inner links elevated with `z-index`.
- **`html.js` guard**: Animation CSS only applies when JS loads. Without JS, everything renders normally.
- **Playwright for screenshots**: Programmatic captures of live project URLs + HTML-rendered placeholders.

## File Structure

```
portfolio/
├── index.html                  # Main portfolio page (~1,140 lines)
├── crisis-memory-bridge.html   # Case study page for Crisis Memory Bridge
├── resume.pdf                  # Downloadable resume
├── favicon.svg                 # SVG favicon ("II" initials)
├── og-image.png        # Open Graph preview image (1200×630)
├── robots.txt          # SEO — allow all crawlers
├── sitemap.xml         # SEO — homepage entry
├── capture.mjs         # Playwright script to capture project screenshots
├── og-capture.mjs      # Playwright script to generate OG image + Tomato RAG placeholder
├── package.json        # Playwright dependency (dev only)
├── .gitignore          # Excludes node_modules/
├── CLAUDE.md           # This file
└── images/
    ├── crisis-memory-bridge.png
    ├── shieldagent.png
    ├── mama-kokoro.png
    ├── neolocal.png
    ├── tomato-rag.png       # Styled placeholder (no live URL)
    └── yuyu-nihongo.png
```
