# Use Cases Section Redesign

**Date:** 2026-05-26  
**Status:** Approved

## Goal

Replace the existing "What you can do on the platform" section in `src/pages/index.astro` with a new 5-pillar interactive section using real RCP screenshots and videos.

## Layout

- **Horizontal tabs** (01–05) for the 5 pillars
- **Left column** (300px): clickable feature list with active indicator
- **Right panel** (flex 1): media top (240px) + tag/title/description body below
- **Color**: single teal brand accent (`#067181`) — no per-pillar colors
- **CTA buttons** below the stage: "Request Platform Access" + "Open AIR Space Platform →"

## Pillars and Features

### 01 Observe
- Live Air Situation Display — `rcp/observe-asd.png` (img)
- Hybrid Mode & Replay — `rcp/observe-hybrid.png` (img)
- Flight Plan & Trajectory Generator — `rcp/observe-fpg.mp4` (video)
- SIGMET — `rcp/observe-sigmet.mp4` (video)

### 02 Understand
- Hotspots & Demand Forecasting — `rcp/understand-hotspots.mp4` (video)
- KPIs & Regional Indicators — `rcp/understand-kpi.png` (img)
- Regional Health — `rcp/understand-regional-health.png` (img)

### 03 Simulate
- Scenario Editor — `rcp/simulate-scenario.mp4` (video)
- Fast-time Simulation — `rcp/simulate-fts.mp4` (video)
- Area Avoidance Model + CDR — `rcp/simulate-cdr.mp4` (video)

### 04 Collaborate
- FF-ICE Trajectory Negotiation — `rcp/collaborate-ffice.mp4` (video)

### 05 Explore
- What-if Explorer — `rcp/explore-whatif.mp4` (video)

## Implementation

- **File**: `src/pages/index.astro` — replace existing `.use-cases` section
- **Assets**: already in `public/rcp/` (served as static files)
- **JS**: inline vanilla JS (switchPillar, switchFeature, renderFeatures, renderDetail)
- **CSS**: add to existing `<style>` block in `index.astro`
- **Asset paths**: use `${base}/rcp/filename` to respect GitHub Pages `BASE_URL`
- **No new dependencies**

## Constraints

- Asset paths must use `import.meta.env.BASE_URL` prefix (GitHub Pages sub-path deployment)
- Videos: `autoplay muted loop playsinline`
- Mobile: tabs should scroll horizontally if they overflow
