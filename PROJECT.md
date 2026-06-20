# Parrave Ventures — Website Project Notes

Internal working document for the Parrave Ventures marketing site
(`parrave.com`). Captures product context, audience strategy, design
decisions, file structure, copy choices, and a session-by-session log of
changes so anyone (or a future AI session) can pick up where we left off.

---

## 1. Company context

**Parrave Ventures** is a new-age smart vending machine **operator** —
not a manufacturer. We deploy, own, and operate IoT-enabled vending
machines inside premium institutions, and we monetize them through two
revenue lines:

1. **Retail GMV** — products sold from the machines
2. **Media / advertising** — on-machine displays + paid shelf space (coil rentals)

### Traction (current, real numbers)

| Metric | Value |
| --- | --- |
| Smart machines deployed | **50+** |
| Premium campuses live | **6** |
| Active users / month | **20,000+** (students + staff) |
| Orders / month | **150,000+** |
| Core demographic | **18–24** (Gen Z) |
| Fleet | **100% IoT-connected**, cashless, UPI-first |

These numbers are sourced from the user and replace the earlier
placeholder "100K+ daily impressions" copy. They are now used
consistently across the hero, stats, and brand-partner sections.

### Location partners (universities)

- Chitkara University, Rajpura
- Chandigarh University, Mohali
- Chandigarh University, Lucknow
- Rayat Bahra University, Mohali
- Geeta University, Panipat

### Brand partners (current)

Misfits · Monkey Trip · MTR · Chocohut · Nestle · Lays — and more.

### Hardware & advertising surfaces

Each machine carries:

- **52" hero display** — full-motion video, brand films, takeover ad campaigns
- **22" engagement display** — mid-funnel content, product spotlights
- **10" point-of-sale display** — last-second nudges and combo offers
- **Coils (shelves)** — rentable shelf space for brand partners

---

## 2. Target audiences for the site

The site has to speak clearly to **three** audiences plus an implicit
fourth (press / general visitor). Every CTA on the page deep-links to
the right contact form variant via `data-prefill`.

| # | Audience | What they want | What we offer |
| --- | --- | --- | --- |
| 1 | **Location partners** | Passive revenue from existing footfall, zero capex | Free install, full ops, monthly revenue share |
| 2 | **Brand partners** | Reach Gen Z in premium institutions | Coil rentals + ad campaigns on 10/22/52" displays + sampling |
| 3 | **Investors** | Strong unit economics, scale story | Operator model, retail + media revenue, premium youth footprint |
| 4 | Press / curious visitor | Quick "what is this" | Hero + What we do + brand showcase |

---

## 3. Design language

### Inspiration audit (from the user)

- **Take content + structure cues from**: vendingbrothers.com, daalchini.co.in
- **Do NOT take design cues from**: seaga.com, vendekin.com — they are manufacturers, look generic, dated, or "SaaS template-y"
- **Goal**: fresh, modern startup feel — bold, confident, young

### Resulting visual system

- **Colors**
  - Ink (dark): `#0b0d0c` / `#111414` / `#171b1a`
  - Paper: `#f7f7f3` / `#efefe8`
  - **Accent (electric lime)**: `#c4f542` → `#9fe015`
  - Coral secondary: `#ff6a4d`
  - Cyan highlight in gradients: `#5fd4ff`
- **Typography**
  - Display: **Space Grotesk** (500/600/700)
  - Body: **Inter** (400/500/600/700)
  - Loaded from Google Fonts with `preconnect`
- **Type scale**: fluid via `clamp()` so it adapts from mobile to large desktop without media-query fiddling
- **Motion**: subtle — scroll-reveal (IntersectionObserver), animated gradient blobs in hero, infinite marquee for university list, ad-display pulse animation, all respect `prefers-reduced-motion`
- **Shape language**: rounded — radii `10 / 16 / 24 / 32 px`; pill-shaped buttons and chips
- **Glow / accent**: brand-partner card and investor card use a faint lime-tinted glow to guide the eye

---

## 4. Information architecture

```
[Sticky nav]
  Hero
  Trust strip — university marquee
  What we do — 3 IoT/retail/media cards
  Stats — 4 differentiator numbers
  Partner with Parrave — 3 audience cards (Location · Brand · Investor)
  Advertising — 52/22/10" displays + coil rentals
  How it works — 4-step process
  Brands on Parrave — chip showcase
  Investor CTA — gradient panel + KPI grid
  Contact — pill-tab role selector + form
[Footer]
```

### Why this order

1. **Hero** sells the headline (operator + media network)
2. **Trust strip** instantly proves "we're real" — universities by name
3. **What we do** explains the operator + media model
4. **Stats** turns capability into measurable differentiation
5. **Audiences** routes the visitor to their concern
6. **Advertising** gives brand partners a deep dive (highest-revenue lever, highlighted)
7. **How it works** removes friction for partners ("what's the process?")
8. **Brands** social proof
9. **Investor CTA** dedicated panel — investors are a high-value but small-volume audience
10. **Contact** captures intent, role-aware so we route inquiries correctly

---

## 5. File structure

```
parrave.com/
├── CNAME                          # 'parrave.com' — GitHub Pages custom domain
├── README.md                      # public README (minimal)
├── PROJECT.md                     # this file — internal docs
├── index.html                     # ~650 lines, single-page site
├── styles.css                     # ~1150 lines, single stylesheet
├── script.js                      # ~225 lines, vanilla JS, no deps
└── assets/
    ├── favicon.svg                # 24×24 logo-mark (gradient + dark inset)
    └── apple-touch-icon.svg       # 180×180 with dark backdrop for iOS
```

No build step. No bundler. No framework. **Pure HTML/CSS/JS** by design
(per user requirement). Deployed via GitHub Pages.

---

## 6. Key implementation details

### 6.1 The logo mark

Defined in CSS, used in nav and footer:

```html
<span class="logo-mark"></span>
<span class="logo-text">Parrave</span>
```

```css
.logo-mark {
  width: 24px; height: 24px;
  border-radius: 7px;
  background: linear-gradient(135deg, var(--accent), #5fd4ff);
}
.logo-mark::after {
  content: '';
  position: absolute;
  inset: 6px;            /* the dark "hole" */
  border-radius: 3px;
  background: var(--ink);
}
```

`assets/favicon.svg` mirrors this exactly (no letterforms).

### 6.2 Reveal-on-scroll

Any element with `class="reveal"` is observed by an
`IntersectionObserver` (`script.js`) and gets `is-visible` added when it
enters the viewport, triggering a fade + translate-up transition.
Disabled under `prefers-reduced-motion: reduce`.

### 6.3 Audience routing (deep-link prefill)

Anywhere on the page, this:

```html
<a href="#contact" data-prefill="brand">Run a campaign →</a>
```

triggers `script.js` to:

1. Smooth-scroll to `#contact`
2. Set the hidden `<input name="role">` to `"brand"`
3. Activate the matching pill button
4. Re-label the textarea + update its placeholder
5. Focus the name field

`ROLE_COPY` in `script.js` defines the per-role messaging.

### 6.4 Form submit

The form supports **two delivery modes**, switchable without touching JS:

**Mode A — Backend (recommended for production)**

Set the form's `action` attribute to an endpoint that accepts JSON
POST and forwards to email:

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST" novalidate>
```

`script.js` will detect the URL and `fetch()` POST a JSON body
(`role`, `name`, `email`, `org`, `message`) with `Content-Type:
application/json`. On success, shows the thank-you message; on
network failure, falls back to mailto.

**Mode B — Mailto fallback (default)**

If `action` is empty or `#`, the form opens the user's email client
with a pre-filled message addressed to `info@parrave.com`:

- Subject: `[Parrave website] {role} inquiry — {name}`
- Body: structured fields (Role, Name, Email, Company, Message)

This is what's live right now (no backend signup needed).

**See §13 for setup instructions** on switching from Mode B to Mode A.

### 6.5 Visual ad-display mockups

The 52/22/10" displays in the Advertising section are **CSS, not images** — gradient-backed boxes with scanline overlay, big numeric labels, and a pulsing radial gradient on the 52". The coil-rental card uses three CSS coils with a repeating-linear-gradient stripe pattern.

This means the section stays sharp at any size and easy to update when
we get real machine photography.

---

## 7. Content & copy decisions

### Hero headline

> Smart vending,
> **reimagined for India's** next generation.

### Hero pill (live ticker-style)

> 50+ smart machines · 20K+ active users · 150K+ orders / month

### "What we do" headline (current — positive framing)

> A new-age smart vending
> **machine operator — and a media network.**

> Earlier draft: *"We're not a vending manufacturer. We're an operator —
> and a media network."* Replaced because the user pointed out the
> negative framing reads defensively.

### Hero metrics (the four-tile strip)

1. **50+** Machines deployed
2. **6** Premium campuses
3. **20K+** Active users monthly
4. **150K+** Orders every month

### Stats section (qualitative differentiators, separate from hero numbers)

1. **18–24** Core age group
2. **24/7** Always-on retail
3. **100%** IoT-connected fleet
4. **48h** Avg. response time

### Audience card CTAs

- Location → "Become a host →"
- Brand → "Run a campaign →"
- Investor → "Talk to us →"

---

## 8. Constraints & decisions

| Constraint | Decision | Rationale |
| --- | --- | --- |
| Pure HTML/CSS/JS | No build pipeline, no npm, no framework | Per user requirement; keeps GH Pages deploy trivial |
| Deployment | GitHub Pages (CNAME → `parrave.com`) | Already configured before this session |
| No real photography yet | CSS-only ad mockups, no hero image | Keep site visually unique and not dependent on stock photos |
| Brand logos | Text chips for now | We don't have permission/SVGs of brand marks yet |
| Form backend | Placeholder console handler | User to choose Formspree/Resend/etc. |

---

## 9. Session log

### Session 1 — Initial build (2026-06-20 ~12:50 IST)

Built the site from scratch in `/home/ashu/Personal/Projects/parrave.com-v2/`.

- Created `index.html`, `styles.css`, `script.js`, `assets/`
- Implemented every section listed in §4
- Verified: HTML tags balanced, JS syntax clean (`node --check`), all
  IDs referenced from JS exist in HTML, all files serve 200 OK from a
  local Python http.server
- Reasoning summary at end of session: "fresh modern startup feel,
  electric lime accent, three-audience model, deep-link prefilling
  contact form"

### Session 2 — Move + capitalization (~13:10 IST)

- User moved the project to `/home/ashu/parrave/parrave.com/` and
  initialized as a git repo with remote
  `git@github.com:ashu-sharma07/parrave.com.git` (commit
  `27c2c45 parrave website v2` captured the move)
- User asked to capitalize "parrave" → **"Parrave"** in the wordmark
  and add a matching favicon
- Updated nav and footer wordmarks (lines 27 + 492)
- Created first `assets/favicon.svg` and `assets/apple-touch-icon.svg`
  with a "P" letterform — **this turned out to be wrong** (see next session)
- Added favicon `<link>` tags + `theme-color` meta to `<head>`
- Commit: `c4c0f22 — Capitalize Parrave wordmark and add SVG favicon`

### Session 3 — Favicon fix + real numbers + tone (~13:18 IST)

User feedback prompted three changes:

1. **Favicon**: not a "P" letter — use the actual nav logo-mark
   (gradient rounded square with dark inset). Both `favicon.svg` and
   `apple-touch-icon.svg` rewritten as a 1:1 SVG of the CSS mark.

2. **Real numbers**: the placeholder "100K+ daily impressions" and
   "18-24 core demographic" tile in the hero were inaccurate.
   Replaced everywhere with real traction:
   - Hero pill: `50+ machines · 20K+ users · 150K+ orders/mo`
   - Hero metrics: added `20K+ Active users monthly` + `150K+ Orders every month`
   - Brand audience copy: "Reach 20K+ students & staff and over 150K monthly orders"
   - Stats strip restructured to drop duplicates of machines/campuses,
     now leads with 18–24 audience · 24/7 · 100% IoT-connected · 48h response

3. **Tone**: "We're not a vending manufacturer" reframed positively as
   "A new-age smart vending machine operator — and a media network."
   The supporting paragraph still implicitly draws the operator
   distinction without naming what we are not.

Commit: `28c6c60 — Use logo-mark as favicon, real traction numbers, positive framing`

### Session 4 — Documentation (current)

Created this `PROJECT.md` to capture context, decisions, and history.

### Session 5 — Hero machine, mobile marquee, info@ email, form wiring (~13:35 IST)

User feedback prompted four changes:

1. **Marquee speed on mobile** — the "Live on campus at" university
   marquee was set to a fixed `32s` cycle and felt sluggish on phone.
   Refactored to use a CSS variable `--marquee-duration` and stepped
   it down per viewport: **32s desktop / 22s ≤980px / 16s ≤560px**.
   Also tightened font-size and gap on small screens.

2. **Vending machine graphic** — added a stylized inline SVG vending
   machine illustration in the hero. Restructured the hero into a
   2-column grid (content left, machine right; metrics span both).
   The machine includes:
   - Top 52" hero display with animated bars, live dot, and Parrave
     wordmark on screen
   - Glass product window with 4 shelves of colored products
   - Faint vertical coil hints between products (references our
     coil-rentals product)
   - Touch/payment panel with mini-screen, UPI tap target, and
     "TAP · UPI" label
   - Pickup tray on the right of the bottom panel
   - Two floating glassmorphic badges around the machine: "IoT · Live"
     (top-left) and "UPI · Cashless" (bottom-right)
   On phones: machine scales to 220px and one badge is hidden to
   reduce clutter.

3. **Email change** — `hello@parrave.com` → **`info@parrave.com`**
   in both the contact section and the footer.

4. **Functional contact form** — replaced the demo console-logging
   handler with a real submission flow that supports two modes
   (see §6.4 below). Default behavior opens the user's email client
   pre-filled to `info@parrave.com`. Once a backend endpoint is
   added to the `<form action="...">`, it switches to AJAX POST.

Commit: `bda2490 — Hero machine illustration, faster mobile marquee, info@ email, real form`

---

## 10. Git state & deployment

- **Repo**: `git@github.com:ashu-sharma07/parrave.com.git`
- **Branch**: `master`
- **Remote**: `origin`
- **Hosting**: GitHub Pages, `CNAME` → `parrave.com`
- **Local commits ahead of origin**: 3
  - `28c6c60` Use logo-mark as favicon, real traction numbers, positive framing
  - `c4c0f22` Capitalize Parrave wordmark and add SVG favicon
  - `27c2c45` parrave website v2

> ⚠️ **Pushing to `master` triggers a live deploy on `parrave.com`.**
> Don't push without an explicit go-ahead from the user.

### Working agreement (this collaboration)

- Commit logical chunks as we go, never one giant blob
- Stage specific files, never `git add .`
- Don't push without permission (auto-deploy)
- Don't run `--no-verify`, don't touch git config
- Keep the working tree clean between tasks

---

## 11. Backlog / open ideas

Surfaced during the build but **not implemented**:

- [ ] Replace placeholder logo-mark with a finalized brand SVG (if Parrave has a more refined mark)
- [ ] Real photography of machines on campus → "Machines in the wild" gallery
- [ ] Replace text brand-chips with actual brand logos (with permission)
- [ ] Wire contact form to a real backend (mailto fallback shipped — see §13 to upgrade to Formspree)
- [ ] Add an `/investors` deeper page with deck download + data room link
- [ ] OG image for social sharing (`og:image` + `twitter:card`)
- [ ] Sitemap + robots.txt for SEO
- [ ] A short "press / about" page
- [ ] Analytics (Plausible / GA4 — user's choice)
- [ ] Add structured data (Organization schema) for SEO

---

## 12. How to preview locally

```bash
cd /home/ashu/parrave/parrave.com
python3 -m http.server 8000
# open http://localhost:8000
```

That's the entire dev workflow. No watcher, no build, no install step.

---

## 13. Making the contact form actually receive submissions

The form is wired with a sensible default (mailto fallback) and can be
upgraded to a real backend in **5 minutes** with no code changes
beyond a single attribute on the `<form>` tag.

### Recommended: Formspree (simplest, free tier covers early stage)

1. Sign up at https://formspree.io/ with the address that should
   **receive** the inquiries — i.e. `info@parrave.com`
2. Verify the email
3. Create a new form. Formspree gives you an endpoint like
   `https://formspree.io/f/abcd1234`
4. Open `index.html` and change:
   ```html
   <form class="contact__form reveal" id="contactForm" novalidate>
   ```
   to:
   ```html
   <form class="contact__form reveal" id="contactForm"
         action="https://formspree.io/f/abcd1234"
         method="POST" novalidate>
   ```
5. Commit + push. The next form submission will land in
   `info@parrave.com` automatically.

The JS already detects the `action` URL and POSTs JSON via `fetch`.
On success it shows the thank-you note; on failure it falls back to
opening the email client.

### Alternatives (same wiring works)

- **Web3Forms** — `https://api.web3forms.com/submit` (free, similar to Formspree)
- **Resend** — needs a tiny serverless function but gives full email control
- **Google Apps Script web app** — free, writes to a Google Sheet and emails
- **Custom backend** — any endpoint that accepts JSON POST works

### Mailto fallback (current, no signup)

While no `action` is configured, hitting Submit:

1. Validates all required fields (HTML5 validation)
2. Builds a `mailto:info@parrave.com` link with subject and body
3. Opens the visitor's email client (Gmail / Outlook / Apple Mail / etc.)
4. The visitor still has to hit "Send" in their email app — so it's
   one extra step versus a real backend, but it works on day one with
   zero infrastructure

### Notes on email deliverability

- Once you have the form working with Formspree, set up an SPF / DKIM
  record on `parrave.com` so emails forwarded from Formspree don't
  land in spam
- Consider creating an inbox or alias `info@parrave.com` with auto-routing
  to the right team member (sales / partnerships / IR)

---

_Last updated: 2026-06-20, end of session 5._
