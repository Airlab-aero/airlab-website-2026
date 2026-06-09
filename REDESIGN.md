# Redesign Notes — AIR Lab Website

Linear-inspired motion and interaction layer, adapted to Air Lab brand identity.

---

## What was changed

### Navigation (`Nav.astro`, `global.css`)
- Nav starts transparent at the top of every page and transitions to frosted navy (`rgba(11,26,47,0.96)` + `blur(18px)`) once the user scrolls past 40px. On pages without a dark hero (terms, privacy, etc.) the nav is immediately dark.
- Added a full-screen mobile menu with hamburger button. Previously nav links were simply `display:none` on mobile with no fallback — the site was unnavigable on mobile.
- Active page now shows a teal underline indicator instead of just a white color override.

### Scroll-reveal animations (`global.css`, `Base.astro`, `index.astro`)
- Added a lightweight `IntersectionObserver` in `Base.astro` (~20 lines of vanilla JS, zero new dependencies).
- Any element with `data-reveal` fades up from `opacity:0; translateY(28px)` when it enters the viewport.
- `data-reveal-delay="N"` (milliseconds) enables staggered entrance for grids — cards appear sequentially rather than all at once.
- Applied to: stats strip, capability cards (staggered 0–400ms), timeline items, use case cards, team section, news cards, partners header, CTA.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` — fast start, soft landing. Matches Linear's signature motion feel.

### Count-up animation (`Base.astro`)
- Stat numbers in the about strip (2019, 10+, 100%) count up from zero when they scroll into view.
- Pure `requestAnimationFrame` with cubic ease-out, no library. Duration 1500ms.

### Card micro-interactions (`global.css`)
- Capability cards now lift `translateY(-3px)` with a subtle teal border tint on hover.
- News cards lift `translateY(-2px)` on hover.
- Use case arrow `→` slides right 4px on hover.
- Primary CTA button gains a teal glow shadow on hover.

### Hero scroll indicator (`global.css`)
- "Scroll to explore" text now bounces vertically with a 2.2s ease-in-out loop, drawing attention without being distracting.

### Footer (`global.css`)
- Footer links show an expanding underline on hover (width animates from 0 to 100%).

---

## What was intentionally preserved

- All copy, content, and page structure — zero rewrites.
- Air Lab color palette: `--navy #0b1a2f`, `--teal #067181`, `--cream #f7f6f3`.
- DM Sans font, all weights and sizing.
- Logo size and placement in both nav and footer.
- All Sanity CMS queries, data fetching, and schema.
- All routes and internal/external links.
- Netlify Forms integration on the contact page.
- The hero section layout and video background.
- All other pages (team, news, partners, contact, join-us, regional-health, privacy, terms) — only `index.astro` received `data-reveal` attributes. Other pages will benefit from the reveal system automatically if `data-reveal` is added to their elements later.

---

## Needs human review before going live

1. **Mobile menu on inner pages** — the mobile nav links to `/#platform` and `/#use-cases` which are anchor links on the homepage. When accessed from an inner page (e.g. `/team`), these will navigate to the homepage correctly, but review whether this UX is acceptable or if they should be removed from the mobile menu on non-home pages.

2. **Nav transparency on scroll-restoration** — if a user deep-links to a section (e.g. `/#platform`) the browser may restore scroll position before JS runs, briefly showing a transparent nav over a light background. The `updateNav()` call on load mitigates this, but test on Safari.

3. **Count-up on "2019–"** — the count-up extracts `2019` and animates it. The suffix `–` is retained. This looks intentional but verify it matches editorial expectations.

4. **`data-reveal` on `.about-stat` in the stats strip** — these elements are mapped from a Sanity array. The reveal and count-up both observe them. Confirm both animations don't conflict visually (reveal fades in, count-up starts simultaneously).

5. **Inner pages** — `team.astro`, `news/index.astro`, `partners.astro`, `contact.astro`, `join-us.astro`, `regional-health.astro` have not been touched. Adding `data-reveal` to their sections would complete the animation system across the whole site.

---

## Dependencies added or removed

**None.** All changes use vanilla CSS transitions, CSS `@keyframes`, and native browser APIs (`IntersectionObserver`, `requestAnimationFrame`). No packages were added or removed.
