<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Parrave Ventures
description: Smart vending machine operator brand site for location partners, brand partnerships, and investors
---

# Design System: Parrave Ventures

## 1. Overview

**Creative North Star: "The Campus Energy Exchange"**

Parrave is where smart infrastructure meets young energy. The design embodies forward momentum—modern, confident, approachable—without falling into generic SaaS territory or cold tech-clinical aesthetics. Think: the startup that's already building real things in real places, not pitching vapor. 

The color strategy is **committed**: one saturated brand color (energetic coral-orange) carries 30-60% of the surface, anchoring the identity with bold presence and startup energy. Typography is a single versatile modern sans-serif family deployed across multiple weights—clean and approachable, tech-forward without coldness. Motion is **responsive**: interactions provide feedback, transitions feel polished and alive, but nothing distracts from the message. 

This is NOT the warm-cream-bg SaaS aesthetic of 2023. This is NOT a legacy manufacturing catalog. This is NOT a soulless metrics dashboard. It's a brand site with startup confidence, real traction (50+ machines, recognizable partners, premium locations), and a three-door structure: location partners, brand advertisers, and investors each get a clear pathway.

**Key Characteristics:**
- Bold, saturated brand color as the visual anchor
- Clean modern sans-serif typography without tech coldness
- Responsive interactions that feel polished and alive
- Three-audience clarity: locations, brands, investors
- Campus-first context: young, premium, worth talking about
- Real traction signals over generic promises

## 2. Colors

The palette is anchored by an energetic coral-orange primary (derived from oklch(0.570 0.158 353.3) seed) that carries startup confidence without tipping into pure-tech blue or legacy corporate. Background is pure white—not cream, not warm-tinted—letting the primary do the expressive work. Accent is a complementary cool tone for badges and status indicators.

### Primary
- **Energetic Coral-Orange** [to be resolved during implementation, anchored around hue 353° with adjusted lightness and chroma for optimal readability and energy]: Primary brand color. Used for CTAs, hero accents, section highlights, key interaction states. Carries 30-60% of visual surface. Must support white text (WCAG AA on filled buttons/badges).

### Neutral
- **Pure White** [oklch(1.000 0.000 0)]: Body background. Literally #ffffff—no hidden warmth, no tint. Stripe/Notion/Linear default. The brand color does the expressive work; the surface stays pure.
- **Surface** [to be resolved: bg pulled 10-15% toward ink, same hue family]: Cards, panels, elevated sections.
- **Ink** [to be resolved: ≥7:1 contrast vs bg, slight warmth toward brand hue at low chroma]: Body text color.
- **Muted** [to be resolved: ink pulled 40% toward bg, ≥3.5:1 contrast]: Secondary text, captions, labels.

### Accent
- **Cool Teal-Cyan** [to be resolved during implementation: complementary to primary, distinct in hue and lightness]: Badges, status pills, links, accent rules. Must be visually distinct from primary (≥1.7 perceptual contrast) and hold readable text on filled badges (saturated OR clearly light/dark, never muddy mid-tone).

### Named Rules
**The One Voice Rule.** The primary accent is used on ≤60% of any given screen at maximum (committed strategy). Its saturation and confidence are the point—don't dilute by overuse.

**The Pure Surface Rule.** Background is pure white (chroma 0.000). The warm-cream-bg SaaS aesthetic is explicitly rejected. Warmth lives in the brand colors and typography, not in the surface.

## 3. Typography

**Font Pairing:** [Single modern sans-serif family to be chosen at implementation—versatile, multiple weights, clean and approachable without geometric coldness. Think Inter, DM Sans, or similar humanist sans.]

**Character:** Approachable yet confident. A single versatile sans-serif carries the entire hierarchy through weight and scale variation. No coldness, no clinical tech-bro energy—this is friendly startup confidence with real traction.

### Hierarchy
- **Display** [to be chosen: likely 600-700 weight, clamp(2.5rem, 6vw, 4rem), line-height 1.1]: Hero headlines, section openers. Cap at ~4rem to avoid shouting.
- **Headline** [to be chosen: likely 500-600 weight, clamp(1.75rem, 4vw, 2.5rem), line-height 1.2]: Page titles, major section headers.
- **Title** [to be chosen: 500-600 weight, 1.25-1.5rem, line-height 1.3]: Subsection headers, card titles.
- **Body** [to be chosen: 400 weight, 1rem-1.125rem, line-height 1.6]: Body copy. Max line length 65-75ch. Use `text-wrap: pretty` for long prose.
- **Label** [to be chosen: 500 weight, 0.875rem, uppercase with 0.05-0.08em tracking]: UI labels, small caps, overlines. Use sparingly.

### Named Rules
**The Single Family Rule.** One sans-serif family at multiple weights. Don't pair fonts that are similar-but-not-identical. Contrast comes from weight and scale, not from mixing geometric + humanist.

## 4. Elevation

**Philosophy:** Flat by default with tonal layering. Surfaces gain depth through background tint shifts (pure white → slight surface tone → deeper container tones), not through heavy shadows. Shadows appear only on interactive elements in response to state (hover, focus, dropdown menus) or for true elevation (modals, popovers). 

This is a modern web brand, not a skeuomorphic app. Depth is structural, not decorative.

### Shadow Vocabulary
[To be defined during implementation: likely one ambient shadow for hover states, one sharper shadow for dropdowns/popovers, and focus rings for keyboard navigation. All shadows use exponential ease-out curves for motion.]

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, elevation, focus) or for true layering needs (dropdowns, modals). Cards at rest use tonal background shifts, not drop shadows.

## 5. Components

[Components will be documented once implementation begins. Expect: buttons (primary/ghost variants), input fields, navigation (desktop/mobile), cards, badges/status pills, and signature hero CTAs.]

### Buttons
- **Shape:** Gently rounded (likely 6-8px radius) for approachability without pill-style softness.
- **Primary:** Filled with primary brand color (energetic coral-orange), white text, substantial padding (16px vertical, 32-48px horizontal). 
- **Hover/Focus:** Slight darkening or lifting with shadow, smooth transition (~200ms ease-out).
- **Ghost/Secondary:** Stroke variant with primary color border and text, transparent or surface-tinted background.

### Navigation
[To be defined: likely sticky header with logo, primary nav links, CTA button. Mobile: hamburger or slide-out menu. Active state uses primary brand color.]

## 6. Do's and Don'ts

### Do:
- **Do** use pure white (oklch(1.000 0.000 0) / #ffffff) as the body background. Let the brand color carry the warmth and energy, not the surface.
- **Do** deploy the primary coral-orange boldly—it should carry 30-60% of the visual surface as a committed brand strategy.
- **Do** maintain ≥4.5:1 contrast for all body text, ≥3:1 for large text (WCAG AA compliance throughout).
- **Do** use white text on saturated primary buttons and badges—the Helmholtz-Kohlrausch effect makes saturated mid-luminance colors appear brighter, so dark text reads as muddy.
- **Do** support reduced motion preferences with `@media (prefers-reduced-motion: reduce)` alternatives (typically crossfades or instant transitions).
- **Do** make the three audience pathways (location partners, brand partners, investors) clear from the homepage—three doors, one house.
- **Do** surface traction signals concretely: "50+ machines", university logos, recognizable brand partner marks. Numbers and logos do the work; the design carries the energy.

### Don't:
- **Don't** use warm-cream or sand-tinted backgrounds (the saturated 2023 SaaS aesthetic). Explicitly rejected per PRODUCT.md anti-references.
- **Don't** adopt a manufacturing or industrial corporate aesthetic. Parrave is an operator and a startup, not a hardware vendor.
- **Don't** fall into cold, clinical, metrics-heavy dashboard design. This is a brand site with human energy, not a pure-data interface.
- **Don't** use glassmorphism, gradient text, or side-stripe colored borders as decorative defaults. These are AI slop markers.
- **Don't** put tiny uppercase tracked eyebrows ("01 · ABOUT", "02 · PROCESS") above every section—this is the 2023 AI scaffold reflex. Use numbered markers only when the section IS a real sequence where order matters.
- **Don't** use identical card grids (same icon + heading + text repeated endlessly). Vary layout, rhythm, and hierarchy.
- **Don't** pair two similar sans-serif families (geometric + humanist). Use one family at multiple weights, or pair on a real contrast axis (serif + sans).
- **Don't** animate CSS layout properties unless truly needed. Prefer transform/opacity for performance and smoothness.
