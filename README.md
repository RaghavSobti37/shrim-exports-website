# Shrim Export & Linguistics

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Marketing site for **Shrim Export** (agricultural exports) and **Shrim Linguistics** (Hindi & Marathi tutoring). Built with the Next.js App Router, static generation, and brand-aligned UI from client review mockups.

**Live:** [shrim-exports-website.vercel.app](https://shrim-exports-website.vercel.app)

---

## Overview

| Area | Description |
|------|-------------|
| **Exports** | Product catalogue, quote inquiry, farm-direct positioning |
| **Linguistics** | Language tutoring for NRIs & residents |
| **Contact** | About page with dual forms; phones open WhatsApp |
| **Brand** | Heritage green, gold accents, optimized imagery |

---

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Hero, founder strip, star products (first 3 catalogue items), markets |
| `/product-catalogue` | Full product grid with specs |
| `/linguistics` | Tutoring offer, how-it-works |
| `/about` | Linguistics / exports inquiry forms, founders |
| `/quote` | Standalone export quote form |

**Navigation:** Home · Export Product Catalogue · Linguistics · About  
**Mobile:** Hamburger menu with overlay (`app/components/Navbar.tsx`).

---

## Architecture

```mermaid
flowchart TB
  layout[app/layout.tsx]
  layout --> nav[Navbar]
  layout --> pages[App Router pages]
  layout --> footer[Footer]

  pages --> home[/]
  pages --> catalogue[/product-catalogue]
  pages --> ling[/linguistics]
  pages --> about[/about]
  pages --> quote[/quote]

  about --> mailto[mailto inquiry - temporary]
  footer --> wa[WhatsApp via contact.ts]
  home --> lib[app/lib/contact.ts]
```

### Shared modules

- `app/lib/contact.ts` — Email, phone constants, `whatsAppUrl()`, star product list
- `app/components/WhatsAppLink.tsx` — Reusable `wa.me` links
- `app/components/Navbar.tsx` / `Footer.tsx` — Global chrome

### Design tokens (`app/globals.css`)

| Token | Role |
|-------|------|
| `--shrim-green` | Primary brand |
| `--shrim-gold` | CTAs & accents |
| `--shrim-blue` | Export form accents |

---

## Recent changes (review pass)

- Merged nav: **Export Product Catalogue** (header + footer aligned)
- Removed home certifications section; star products match catalogue order
- Hero gradient (opaque → transparent); italic emphasis on *shelves* / *roots* (no cursive)
- Footer: contact beside logos, left-aligned copyright, [D'Mosh Global](https://dmoshglobal.com) credit
- Site-wide WhatsApp on published phone numbers
- About forms: uniform field heights; `mailto:` submit to `rameshwarijori@shrimexport.com` (server email deferred — see `TODO.md`)
- Mobile hamburger navigation

---

## Project structure

```text
export-landing-page/
├── app/
│   ├── about/
│   ├── components/     # Navbar, Footer, WhatsAppLink
│   ├── lib/              # contact.ts
│   ├── linguistics/
│   ├── product-catalogue/
│   ├── quote/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/images/
├── TODO.md               # Deferred work
└── README.md
```

---

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm run start
```

### Deploy

Optimized for [Vercel](https://vercel.com). Push `main` to trigger deploy when the repo is connected.

---

## Environment & secrets

No required env vars for the current static + `mailto:` flow.

When server-side email is added (see `TODO.md`), use `.env.local` — never commit secrets. `.gitignore` already excludes `.env*`.

---

## Deferred work

Track open items in [`TODO.md`](./TODO.md):

- Server-side form email (Resend or similar)
- `/quote` form parity with About
- `/#exports` content decision
- Product catalogue “SELECT PACKAGING” behaviour

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run lint` | ESLint |

---

## License

MIT — see repository license file if present.
