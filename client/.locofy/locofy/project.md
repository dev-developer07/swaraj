# Project: Swaraj Hospital Website (Copy)

## Framework
React + TypeScript + Vite + TailwindCSS + MUI (Material UI)

## Project Structure
- **Root:** `/home/aurosish07/OPD_booking/client/`
- **Source:** `src/` (configured via `locofy.config.json`)
  - Components: `src/user/components/`
  - Pages/Views: `src/user/views/`
- **Public assets:** `public/` (at project root)
- **Build output:** `dist/`

## Configuration
- `locofy.config.json`: framework=react, paths.components=`src/user/components`, paths.pages=`src/user/views`
- `tailwind.config.js`: Custom Tailwind config with `web-*` color tokens, custom spacing/font/border-radius/padding tokens, custom screen breakpoints (`mq450`, `mq925`, `mq1350`, `mq1825`)
- `package.json`: scripts — `start: vite`, `build: tsc && vite build`

## Design Tokens (Tailwind)
### Colors
- `web-woodsmoke`: `#0b0c0f` (primary dark)
- `web-woodsmoke-48`: `rgba(11,12,15,0.48)` (overlay)
- `web-white`: `#fff`
- `web-white-80`: `rgba(255,255,255,0.8)`
- `web-white-12`: `rgba(255,255,255,0.12)` (glass)
- `web-gray-nurse`: `#f1f2f1` (light background)
- `web-emperor`: `#505050` (secondary text)
- `web-mercury`: `#e6e6e6` (borders)
- `web-silver-chalice`: `#aaa` (dashed borders)
- `web-cloud-burst`: `#1f2a44` (brand navy)
- `web-gothic`: `#7791a5` (muted blue)
- `web-mine-shaft`: `#222`
- `web-rolling-stone`: `#7e7f80`
- `goldenrod`: `#d4af37` (accent gold)

### Fonts
- `font-lilex`: Lilex (badges, headings)
- `font-stack-sans-text`: Stack Sans Text (large headings)
- `font-inter`: Inter (body text)

### Breakpoints
- `mq450`: max-width 450px (mobile)
- `mq925`: 451–925px (tablet)
- `mq1350`: 926–1350px (small desktop)
- `mq1825`: 1351–1825px (large desktop)

## Navigation Structure
- **Single-page app** with React Router DOM
- Only one route: `"/"` → `Container` (full landing page)
- No tab bars, bottom navigation, or side navigation
- App entry: `src/App.tsx`, Root render: `src/index.tsx`

## Screens (Post-Merge)
| Screen | Route | File | Description |
|--------|-------|------|-------------|
| Landing Page | `/` | `src/user/views/Container.tsx` | Full Swaraj Hospital landing page with 12 sections |

## Components (Post-Merge)
| Component | File | Purpose |
|-----------|------|---------|
| Section | `src/user/components/Section.tsx` | Circular "Trusted Multispeciality Care" hero element |
| Section1 | `src/user/components/Section1.tsx` | Specialities section with dark background |
| Section2 | `src/user/components/Section2.tsx` | Main hero with video background |
| Section3 | `src/user/components/Section3.tsx` | CTA section "Begin Your Next Chapter" |
| Section4 | `src/user/components/Section4.tsx` | "Experience the Difference" comparison table |
| Section5 | `src/user/components/Section5.tsx` | Advanced Diagnostics section |
| Section6 | `src/user/components/Section6.tsx` | FAQ section |
| Section7 | `src/user/components/Section7.tsx` | Footer |
| FrameComponent | `src/user/components/FrameComponent.tsx` | Wrapper for Section |
| FrameComponent1 | `src/user/components/FrameComponent1.tsx` | "The Scope of Our Care" panel |
| Background | `src/user/components/Background.tsx` | Circular background element (alt version of Section) |
| Background1 | `src/user/components/Background1.tsx` | Scrolling ticker banner |
| BackgroundBlur | `src/user/components/BackgroundBlur.tsx` | FAQ accordion item |
| Blur1 | `src/user/components/Blur1.tsx` | Feature pill card (hero section) |
| Container1 | `src/user/components/Container1.tsx` | Doctor team section |
| Group1Of4ListListit | `src/user/components/Group1Of4ListListit.tsx` | Speciality card |
| Group2Of | `src/user/components/Group2Of.tsx` | Diagnostic card (large) |
| HorizontalBorderBlur | `src/user/components/HorizontalBorderBlur.tsx` | Comparison table row |
| Listitem | `src/user/components/Listitem.tsx` | Doctor card (small) |
| Listitem1 | `src/user/components/Listitem1.tsx` | Doctor card (wide) |

## Shared Components Inventory
_(Updated after enhance-execute Run 1)_

| Component | File | Props | Used by |
|-----------|------|-------|---------|
| SectionBadge | `src/user/components/SectionBadge.tsx` | `icon?, label, variant?: "light"\|"dark", className?` | Section, Section1, Section2, Section3, Section4, Section5, Section6, Background, Container1, FrameComponent1 |
| NavyButton | `src/user/components/NavyButton.tsx` | `label, endIcon?, variant?: "filled"\|"outline", onClick?, className?` | Section, Section2, Section3, Background, Container1, Group1Of4ListListit, Section6 |
| StatCard | `src/user/components/StatCard.tsx` | `icon, title, description: ReactNode, className?` | Container (views) — 4 instances |

## Dependencies
- `react` ^19.2.3
- `react-dom` ^19.2.3
- `react-router-dom` ^7.5.0
- `@mui/material` ^7.0.2
- `@emotion/react` ^11.14.0
- `@emotion/styled` ^11.14.0
- `typescript` ^5.8.3
- `tailwindcss` ^4.1.3 (devDep)
- `vite` ^6.3.2 (devDep)

## State Management
- Local React `useState` hooks only
- No Redux, Zustand, or context-based state management

## Merge History
- **Run 1 (initial):** Merged incoming `generated-omLs9g` — full Swaraj Hospital landing page
