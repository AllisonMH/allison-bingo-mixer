---
name: Design Guide
description: "Use when redesigning the app UI, creating new screens, or restyling components. Enforces the project visual direction: colorful cyberpunk-neon, high contrast, expressive motion, and mobile-first readability."
applyTo:
  - src/components/**/*.tsx
  - src/index.css
  - docs/**/*.html
  - docs/**/*.css
  - docs/**/*.js
  - workshop/**/*.md
---

# Design Guide

## Theme Direction
- Build toward a colorful cyberpunk-neon look: electric accents, dark atmospheric surfaces, and strong contrast.
- Keep the mood energetic and playful, but preserve text readability and interaction clarity.
- Use deliberate visual hierarchy so users can quickly parse game status, controls, and board state.

## Color And Tokens
- Define and evolve design tokens in src/index.css using Tailwind v4 CSS-first conventions.
- Prefer tokenized colors over hardcoded per-component values.
- Use accent colors intentionally: one primary action color and a small set of supporting neon accents.

## Typography
- Avoid generic default typography.
- Use a distinctive display treatment for titles and a highly legible style for body text.
- Maintain clear size and weight contrast between heading, status, and cell text.

## Motion
- Include meaningful motion for key moments: initial load, board interaction feedback, and bingo celebration.
- Keep animation purposeful, not noisy. Avoid stacking many competing animations in the same viewport.
- Respect usability: no motion that obscures state changes or delays core interactions.

## Layout And Responsiveness
- Design mobile-first, then enhance for larger screens.
- Preserve and improve tap target comfort for bingo squares and primary actions.
- Keep the board legible at small widths and visually anchored at desktop widths.

## Component Expectations
- StartScreen: strong first impression, clear onboarding hierarchy, obvious primary action.
- GameScreen: HUD-like structure with clear status communication and low ambiguity.
- BingoSquare: immediately distinguishable states for default, marked, free space, and winning cells.
- BingoModal: celebratory but readable, with clear continuation action.

## Guardrails
- Do not move game rules into UI components. Keep behavior boundaries intact.
- Do not change persistence behavior as part of styling-only work.
- Follow existing Tailwind v4 instruction guidance and avoid adding a tailwind.config migration.

## Validation Checklist
- Run lint, build, and tests after substantial UI changes.
- Verify full interaction flow manually on both mobile-width and desktop-width layouts.
- Check contrast and focus visibility for key interactive elements.