# Shrim Export & Linguistics Web Portal

[![Next.js](https://img.shields.io/badge/Next.js-16.x-black?logo=next.design&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Production-ready agricultural export and language education web interface built on Next.js 16 (App Router) and Tailwind CSS. Implements high-end design elements, asset compression, dynamic caching, and reactive interfaces matching design mockups.

---

## 🏛️ System Architecture

```mermaid
graph TD
    A[Layout Root: app/layout.tsx] --> B[Navbar Components]
    A --> C[Page Router]
    A --> D[Footer Components]
    
    C --> E[Home Page: app/page.tsx]
    C --> F[Product Catalogue: app/product-catalogue/page.tsx]
    C --> G[Linguistics Page: app/linguistics/page.tsx]
    C --> H[About & Inquiries: app/about/page.tsx]
    C --> I[Direct Quote Form: app/quote/page.tsx]
    
    H --> J{Dynamic Form Selector}
    J -->|Linguistics| K[Linguistics Tutoring Form]
    J -->|Exports| L[Exports Inquiry Form]
```

---

## 🚀 Key Features & Optimizations

### 1. Asset Performance Tuning
- Optimized background files (`Asset 18` and `Asset 19`) using high-fidelity bilinear resizing (60MB+ down to sub-megabyte web assets).
- Lazy-loaded media assets below the fold.

### 2. High-Fidelity Design Tokens
Custom brand variables initialized in `app/globals.css`:
- `--shrim-green` (`#114133`): Primary heritage green.
- `--shrim-gold` (`#c69934`): Accent premium gold.
- `--shrim-blue` (`#3972b5`): Interactive secondary blue.

### 3. Dynamic Form State Engine
- Unified Inquiry Router inside `app/about/page.tsx` utilizing dynamic state toggle.
- Form fields dynamically adapt context, validation schemas, and button accents based on selection.

---

## 📂 Project Directory Structure

```text
├── app/
│   ├── about/             # Dynamic Contact & Founders Section
│   ├── components/        # Global Navbar / Footer Blocks
│   ├── linguistics/       # Language Tutoring Showcase
│   ├── product-catalogue/ # Grid layout for 8 Product Lines
│   ├── quote/             # Direct Exports Inquiry Page
│   ├── globals.css        # Global CSS variables & Tailwind config
│   ├── layout.tsx         # Global Layout Wrapper
│   └── page.tsx           # Home Page
├── public/
│   └── images/            # Resized & Optimized Assets
└── README.md              # Documentation
```

---

## 🛠️ Development & Build Instructions

### Prerequisites
- Node.js `^20.x` or higher
- npm `^10.x` or higher

### Setup & Run
1. Install project dependencies:
   ```bash
   npm install
   ```
2. Launch hot-reloading development server:
   ```bash
   npm run dev
   ```
3. Compile optimized production build:
   ```bash
   npm run build
   ```
4. Start production server locally:
   ```bash
   npm run start
   ```

---

## 📜 Code Style & Conventions
- **Component Model**: Functional components with strict TypeScript types.
- **Client Directives**: Use `'use client'` strictly on interaction-heavy leaf elements to preserve Server Component benefits.
- **Styling**: Standardized CSS theme values to keep variables isolated and reusable.
