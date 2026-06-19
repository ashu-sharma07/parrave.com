---
name: Parrave Ventures
description: Smart vending machine operator marketing site
colors:
  primary-blue: "#003566"
  primary-blue-mid: "#004578"
  primary-blue-light: "#0056b3"
  accent-yellow: "#ffd60a"
  accent-yellow-light: "#ffed4e"
  background: "#f9f9f9"
  surface: "#ffffff"
  surface-gray: "#f8f9fa"
  text: "#333333"
  border: "#e9ecef"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
    letterSpacing: "normal"
rounded:
  sm: "8px"
  md: "15px"
  lg: "20px"
  xl: "25px"
  pill: "50px"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
  xl: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1rem 2rem"
  button-cta:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.primary-blue}"
    rounded: "{rounded.pill}"
    padding: "1rem 1.5rem"
---

<!-- CURRENT STATE: This documents the existing design that needs improvement. User feedback: blue/yellow feels generic and corporate. Target: "The Smart Operator" - tech-forward, data-driven, efficient. -->

# Design System: Parrave Ventures

## 1. Overview

**Creative North Star: "The Smart Operator"** *(target, not current)*

*Current state:* The existing design uses a corporate blue-and-yellow palette (#003566 / #ffd60a) with Poppins headings and Inter body text. The visual system leans heavily on gradients, glassmorphism, and modern card-based layouts common to 2023-2025 SaaS marketing sites.

*Target evolution:* The design should feel **tech-forward, data-driven, and operationally efficient** - like a modern logistics dashboard meets premium service branding. Think smart city infrastructure, real-time monitoring systems, and precision operations, not generic B2B corporate.

**Current Anti-patterns (to be resolved):**
- **Generic SaaS template aesthetic**: Blue-white gradient heroes, floating cards, stock photography feel
- **Corporate blandness**: The blue (#003566) + yellow (#ffd60a) combination reads as safe/predictable
- **Weak visual hierarchy**: Sections blend together; nothing commands attention

**Key Characteristics (target):**
- Tech-forward without being flashy
- Data-driven confidence (metrics, precision, analytics)
- Operational clarity (efficiency, reliability, 24/7 positioning)
- Premium service quality (not consumer-grade or industrial)

## 2. Colors: The Corporate Standard (Current - Needs Replacement)

The current palette uses navy blue as primary and yellow as accent - a common corporate pairing that feels generic and doesn't convey the "smart operator" positioning.

### Primary (Current)
- **Navy Blue** (#003566 / oklch(24% 0.08 247)): Primary brand color used heavily throughout - buttons, headings, nav. *Issue: Too dark and corporate, lacks the tech-forward energy.*
- **Mid Blue** (#004578): Gradient mid-point. *Part of the gradient-heavy approach that feels templated.*
- **Light Blue** (#0056b3): Gradient highlight. *Brighter but still generic blue territory.*

### Accent (Current)
- **Warning Yellow** (#ffd60a / oklch(87% 0.18 95)): High-contrast accent for CTAs and highlights. *Issue: Reads as caution/warning more than premium or tech. Common SaaS pairing.*
- **Light Yellow** (#ffed4e): Gradient complement. *Washing out toward cream territory.*

### Neutral (Current)
- **Off-White Background** (#f9f9f9 / oklch(98% 0 0)): Body background. *Safe neutral choice.*
- **White Surface** (#ffffff): Card and section backgrounds. *Standard.*
- **Light Gray** (#f8f9fa / oklch(98% 0 0)): Subtle surface variation. *Appropriate neutrals.*
- **Text Gray** (#333333 / oklch(27% 0 0)): Body text. *Standard, good contrast.*
- **Border Gray** (#e9ecef / oklch(93% 0 0)): Dividers and borders. *Subtle and appropriate.*

### Named Rules
**The Gradient Overuse Problem.** The current system defaults to gradients everywhere - hero backgrounds, buttons, stats sections. This is the 2023-2025 SaaS template reflex. The next iteration should use gradients sparingly and intentionally, not as texture.

**The Color Strategy Gap.** The palette needs to move from "restrained corporate" to "committed tech-forward." A single saturated brand color should carry 30-60% of key surfaces, replacing the navy-yellow split.

## 3. Typography: Poppins + Inter (Competent but Generic)

**Display Font:** Poppins (sans-serif) with system fallback  
**Body Font:** Inter (sans-serif) with system fallback

**Character:** Poppins is a rounded geometric sans used everywhere from fintech to SaaS to food delivery. Inter is the web's default body font. Both are excellent typefaces but the pairing doesn't differentiate. The combination reads as "modern default" rather than "smart operator."

### Hierarchy (Current)
- **Display** (700, clamp(2.5rem → 4rem), 1.1): Hero headlines. Poppins bold. *Functional but lacks distinction.*
- **Headline** (600, 2.5rem, 1.2): Section headers. Poppins semi-bold. *Standard sizing.*
- **Title** (600, 2rem, 1.2): Subsection headers. Poppins semi-bold. *Consistent system.*
- **Body** (400, 1rem, 1.6): Paragraph text, Inter regular. *Good line-height for readability. Max line length not capped.*
- **Label** (500, 0.9rem, normal): UI labels, metadata. Inter medium. *Appropriate for UI elements.*

### Named Rules
**The Default Font Problem.** Poppins + Inter is the 2023-2026 landing page standard. It's everywhere because it's safe, not because it's distinctive. "Smart operator" positioning needs either: (a) a technical/monospace accent (data-driven precision), (b) a sharper geometric sans (operational efficiency), or (c) a condensed display with punch (command attention).

**The Clamp Ceiling Issue.** Display clamps to 4rem (~64px). For a hero positioning Parrave as a smart tech operator, this reads timid. Either push to 5-6rem for confidence, or stay restrained but add weight/tracking for impact.

## 4. Elevation: Shadow-Heavy with Glassmorphism Accents

The current system uses shadows liberally - nearly every card, button hover, and surface lift has a box-shadow. Glassmorphism (backdrop-blur + rgba background) appears in the stats section and nav.

### Shadow Vocabulary (Current)
- **Base** (`0 4px 6px rgba(0, 0, 0, 0.1)`): Default card shadow. Soft, safe. *Appropriate but nothing special.*
- **Hover** (`0 8px 15px rgba(0, 0, 0, 0.15)`): Interactive element hover state. Lifts slightly. *Standard pattern.*
- **Section Lift** (`0 10px 30px rgba(0, 53, 102, 0.08)`): Feature cards, testimonials. Uses primary blue tint. *Subtle color-keyed shadows are nice detail.*
- **Hero Emphasis** (`0 20px 60px rgba(0, 53, 102, 0.15)`): Large images, partnership sections. Deep shadow with blue tint. *Dramatic but getting heavy.*
- **Glassmorphism** (`backdrop-filter: blur(20px)` + `rgba(255,255,255,0.9)` background): Stats counter section, nav overlay. *2023-2024 effect, now saturated.*

### Named Rules
**The Shadow Everywhere Problem.** Every surface has a shadow, making depth feel uniform rather than intentional. A "smart operator" system should use shadows structurally (modals, dropdowns, true elevation) not decoratively (every card by default).

**The Glassmorphism Saturation.** The backdrop-blur effect is everywhere in 2024-2025 design. It's now a tell. Either commit to it as a signature (rare and powerful) or remove it (flat precision).

## 5. Components: Card-Heavy Modern SaaS

The system is built around cards - feature cards, testimonial cards, category cards, benefit cards, process step cards. Nearly every section is a grid of rounded rectangles with shadows.

### Buttons
- **Shape:** Rounded corners (15px for primary, 50px for pills). Modern but not distinctive.
- **Primary:** Navy blue (#003566) background, white text, generous padding (1rem × 2rem). Hover: darker blue + deeper shadow.
- **CTA (accent):** Yellow (#ffd60a) background, navy text, pill shape (50px radius). Hover: lighter yellow. *High contrast but visually jarring.*
- **Secondary/Ghost:** Outlined variants. White background, navy border/text. Standard pattern.

### Cards
- **Corner Style:** 15px, 20px, 25px depending on card size. Generously rounded.
- **Background:** White (#ffffff) on light gray (#f8f9f9) body.
- **Shadow Strategy:** Base shadow (`0 4px 6px`) at rest, hover shadow (`0 10px 30px`) on interaction. Blue-tinted shadows for depth.
- **Border:** Mostly shadowless; occasional 1px border in light gray (#e9ecef).
- **Internal Padding:** 2-2.5rem, generous whitespace.

**The Card Grid Problem.** The homepage is: hero → 4-card grid (value props) → stats section → 4-card grid (partnership benefits) → 4-step cards (how it works) → 6-card grid (products) → 3-card grid (testimonials) → FAQ accordion. Every section is a card grid. This is the landing page default structure, not a distinctive layout.

### Chips/Badges
- **Style:** Light gray background (#f8f9fa), dark text, 20px pill radius, small padding (0.4rem × 1rem).
- **Use:** Product brand tags, trust indicators, feature highlights.
- **State:** Static; no interactive variants.

### Inputs (Minimal presence)
- **Style:** Not heavily used on the marketing site. Contact form fields have standard treatments - 1px border, 12px radius, focus glow.

### Navigation
- **Style:** Fixed glassmorphism nav (`backdrop-filter: blur(20px)`), pill-shaped links with hover backgrounds, yellow CTA button.
- **Typography:** Inter medium, 0.9rem.
- **Mobile:** Hamburger menu. Standard pattern.

## 6. Do's and Don'ts

### Do:
- **Do** maintain WCAG 2.1 AA contrast (4.5:1 body text, 3:1 large text). Current palette meets this.
- **Do** keep line-height at 1.6+ for body text. Current 1.6 is appropriate.
- **Do** use semantic HTML and proper ARIA labels. Current structure is solid.
- **Do** provide reduced-motion alternatives for animations. Required for accessibility.

### Don't:
- **Don't** use the navy-yellow pairing (#003566 / #ffd60a) going forward. It's the generic B2B default and doesn't convey "smart operator" positioning. *(User feedback: feels corporate and generic.)*
- **Don't** default to card grids for every section. The current homepage is 90% cards. Layout variety creates hierarchy. *(User feedback: visual hierarchy is weak.)*
- **Don't** use backdrop-blur glassmorphism as default texture. It's saturated across 2024-2025 landing pages. Reserve for intentional moments or remove entirely. *(Aligns with "avoid over-designed tech startup" anti-reference from PRODUCT.md.)*
- **Don't** use gradients everywhere. Current system has gradient backgrounds in hero, stats, how-it-works, and multiple button states. Gradients should be strategic, not default. *(Aligns with "avoid excessive gradients" anti-reference.)*
- **Don't** pair Poppins + Inter without strategic reason. It's the 2023-2026 landing page default. "Smart operator" needs more distinction - consider monospace accents, sharper geometrics, or condensed display.
- **Don't** use border-left accent stripes on cards. Absolute ban. None present currently, keep it that way.
- **Don't** use numbered section markers (01 · 02 · 03) above every section as scaffolding. Not present currently; don't introduce.
- **Don't** drift toward cream/sand/parchment body backgrounds (OKLCH L 0.88-0.95, chroma < 0.06, hue 50-80). Current #f9f9f9 is clean off-white; maintain that register. *(Per PRODUCT.md anti-reference.)*

---

## Next Steps to Evolve the Design

This DESIGN.md documents the **current baseline** that needs improvement based on user feedback. The system is competent and accessible but generic. To achieve "The Smart Operator" vision:

1. **Run `/impeccable colorize`** to develop a new palette that moves away from corporate blue-yellow toward tech-forward colors (consider: deep teals, precision grays with tech accents, data viz inspired palette).

2. **Run `/impeccable typeset`** to explore typography that signals operational precision - sharper sans-serifs, monospace accents for data/metrics, or condensed display for command.

3. **Run `/impeccable layout`** to break the card-grid monotony - introduce section rhythm, varied layouts, data-driven elements that feel like dashboards not brochures.

4. **Run `/impeccable bolder`** if the next iteration still feels too safe. "Smart operator" should project confidence and capability, not corporate caution.
