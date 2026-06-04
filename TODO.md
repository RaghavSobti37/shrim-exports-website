# Shrim Export Website — Later Tasks

Items deferred from review (`renewwebsiteprojectwork/`) and follow-up decisions.

## Forms & email

- [ ] **Gmail App Password** — Add `GMAIL_APP_PASSWORD` to `.env.local` (and Vercel env) for `rameshwarijori@shrimexport.com`. Create at [Google App Passwords](https://myaccount.google.com/apppasswords) (2-Step Verification required). Until set, forms return “Gmail is not configured.”
- [x] **Server-side form email** — `/api/inquiry` via Gmail SMTP (`GMAIL_USER` + `GMAIL_APP_PASSWORD`).
- [x] **`/quote` form** — Same API flow as About exports form.

## Navigation & content

- [ ] **`/#exports` anchor** — Certifications section was removed. Decide whether home needs a new exports section or catalogue link alone is enough.
- [x] **Product catalogue — “SELECT PACKAGING”** — Links to `/quote`.

## Done (reference)

- Nav/footer label: **Export Product Catalogue** (matched).
- Footer credit links to [dmoshglobal.com](https://dmoshglobal.com).
- Mobile hamburger navigation.
- Other review fixes from annotated screenshots (see git history).
