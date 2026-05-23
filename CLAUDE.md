# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All npm operations run inside Docker — no local Node required.

```bash
make up                   # start dev container (auto-runs npm install + vite dev)
make logs                 # follow dev server output
make shell                # open a shell inside the container
make down                 # stop containers
make add PKG=x            # install a package
make remove PKG=x         # remove a package
make run c="npm run lint"    # lint
make run c="npm run format"  # format
make build                # production build
make preview              # serve production build
```

## Code style

- Prettier: no semicolons, double quotes, 4-space indent, 100-char line width, `prettier-plugin-tailwindcss` (auto-sorts class order)
- ESLint: TypeScript-ESLint + react-hooks + react-refresh, integrated with Prettier
- Pre-commit hook (lint-staged) runs automatically on `*.ts/tsx`, `*.json/css/md`

## Architecture

**Routing**: `App.tsx` is the root — it sets up `BrowserRouter`, renders `<Header>` (nav links as children), a `<main>` with `<Routes>`, and `<Footer>`.

**Components**: Each component lives in `src/components/<Name>/` with two files: `<Name>.tsx` and `index.tsx` (re-export). Always use the `@/` path alias: `import Foo from "@/components/Foo"`.

**Styling**:
- Tailwind v4 with the `@tailwindcss/vite` plugin — no `tailwind.config.ts`, configuration lives in CSS.
- `src/styles/main.css` — entry point: `@import "tailwindcss"`, `@theme` block for brand tokens (`--color-brand`, `--color-cream`, `--color-muted`, `--color-footer-text`), and `@layer base` for global resets.
- Use Tailwind utility classes directly in JSX. CSS Modules are not used.
- For background images, import the asset as a module and pass it via `style={{ backgroundImage: ... }}` — Vite handles hashing and path resolution.
