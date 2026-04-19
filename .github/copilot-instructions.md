# Project Guidelines

## Build And Test
- Install dependencies with `npm install`.
- Start local development with `npm run dev`.
- Validate changes with `npm run lint`, `npm run build`, and `npm run test` unless the user explicitly asks for a narrower check.

## Architecture
- Keep pure bingo rules in `src/utils/bingoLogic.ts`. Avoid moving board generation or win detection into React components.
- Keep game orchestration and persistence in `src/hooks/useBingoGame.ts`. `src/App.tsx` only switches between the start screen and gameplay UI.
- Treat `src/components/` as presentational boundaries: `GameScreen` composes the board, `BingoBoard` renders the grid, and `BingoSquare` handles a single cell.

## Conventions
- Preserve immutability for board updates. Follow the `map`-based update pattern in `src/utils/bingoLogic.ts` rather than mutating squares in place.
- If you change saved game data in `src/hooks/useBingoGame.ts`, update the localStorage validation and storage version together. Do not remove the SSR guard or the defensive invalid-data cleanup.
- Tailwind uses v4 CSS-first setup through `@import 'tailwindcss'` and `@theme` in `src/index.css`. Do not add a `tailwind.config.*` file unless the user explicitly asks for that migration.
- Keep tests close to the behavior they cover, following `src/utils/bingoLogic.test.ts`. Vitest uses the jsdom setup in `src/test/setup.ts`.
- Preserve the Vite base-path behavior in `vite.config.ts`; GitHub Pages builds depend on `VITE_REPO_NAME` to publish under `/game/`.

## Existing Guidance
- For design-heavy frontend work, follow `.github/instructions/frontend-design.instructions.md`.
- Before writing Tailwind classes or theme tokens, follow `.github/instructions/tailwind-4.instructions.md`.
- Use `README.md` for setup and `workshop/GUIDE.md` for the lab flow instead of copying those docs into responses.