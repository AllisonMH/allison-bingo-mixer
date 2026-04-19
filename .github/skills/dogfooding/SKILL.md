---
name: dogfooding
description: 'Critically dogfood the app as a real user. Use when asked to test the app, review how fun it is, evaluate onboarding or gameplay, or give blunt UX and product feedback based on the running experience.'
argument-hint: 'Optional focus area, such as onboarding, gameplay loop, social dynamics, or fun'
user-invocable: true
---

# Dogfooding

Use this skill to evaluate the product like a skeptical first-time user instead of reviewing code quality. The goal is to judge whether the app is understandable, engaging, and worth using in its intended context.

## When to Use
- The user asks to dogfood the app.
- The user wants critical UX feedback, not implementation feedback.
- The user asks whether the app is fun, clear, engaging, or socially effective.
- The user wants product review grounded in the actual running experience.

## Workflow
1. Start the app if it is not already running. Prefer the repository's documented dev command or existing VS Code task.
2. Interact with the running product enough to assess the full primary loop: start flow, onboarding, core interaction, win state, and reset or replay path.
3. Evaluate the experience as a user first, not as an engineer. Focus on confusion, friction, motivation, pacing, delight, and whether the app delivers on its stated purpose.
4. Check whether the product explains its own rules. If the experience depends on unstated assumptions or social conventions, treat that as a product flaw.
5. Separate implementation quality from product quality. A technically solid app can still be unfun or unclear.
6. Tie major findings back to concrete UI surfaces or files when useful, especially the onboarding screen, main gameplay screen, modal states, and question or content design.

## Decision Points
- If the app cannot be run locally, inspect the relevant UI and workflow code, state the limitation clearly, and give a best-effort product review based on the implementation.
- If the user asks for blunt feedback, prioritize honesty over balance. Otherwise default to balanced critique: call out major issues clearly, but keep praise where the experience genuinely works.
- If the experience is intended to be social, judge whether it actually creates interaction between people rather than acting as a solo tracker.
- If the app is visually polished but the loop is weak, say that directly.

## Quality Checks
- Did you assess the app's actual user journey rather than only reading code?
- Did you judge fun, clarity, motivation, and pacing separately from code quality?
- Did you prioritize findings by user impact?
- Did you identify what works well, not just what is broken?
- Did you end with concrete changes that would most improve the experience?

## Response Shape
Return:
1. A short verdict on how well the app works for its intended experience.
2. Prioritized findings ordered by impact on user enjoyment or adoption.
3. Specific friction points, unclear rules, or missed opportunities.
4. What currently works well.
5. Three to five concrete recommendations with the highest leverage.

## Output Style
- Be direct and product-focused.
- Default to balanced critique unless the user explicitly asks for harsher review language.
- Prefer specific observations over generic design language.
- Call out missing game structure, weak motivation, or unclear rules explicitly.
- Keep summaries brief; the findings should carry the review.