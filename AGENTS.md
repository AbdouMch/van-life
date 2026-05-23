# AGENTS.md

Guidance for AI coding assistants working in this repository.

## Stack

React 19 · TypeScript · Vite · Tailwind v4 · ESLint · Prettier · Husky · Docker

## Development

All npm operations run inside Docker — no local Node required.

```bash
make up        # start dev container (auto-runs npm install + vite dev)
make logs      # follow dev server output
make shell     # open a shell inside the container
make down      # stop containers
make add PKG=x      # install a package
make remove PKG=x   # remove a package
make run c="<cmd>"  # run an arbitrary command in the container
```

Lint and format:
```bash
make run c="npm run lint"
make run c="npm run format"
```

## Code style

- **Prettier**: no semicolons, double quotes, 4-space indent, 100-char line width, `prettier-plugin-tailwindcss` (auto-sorts class order)
- **ESLint**: TypeScript-ESLint + react-hooks + react-refresh, integrated with Prettier
- Pre-commit hook runs lint-staged automatically on `*.ts/tsx`, `*.json/css/md`

## Architecture

- `src/styles/main.css` — entry point: `@import "tailwindcss"`, `@theme` block for brand tokens, `@layer base` for global resets
- Tailwind v4 uses the `@tailwindcss/vite` plugin — no `tailwind.config.ts`, all config is CSS-first
- Brand tokens: `--color-brand` (#ff8c38), `--color-cream` (#fff7ed), `--color-muted` (#4d4d4d), `--color-footer-text` (#aaaaaa)
- Components live in `src/components/<Name>/` as `.tsx` + `index.tsx` (re-export) — no CSS Modules
- Path alias `@/` maps to `src/` — always use `import Foo from "@/components/Foo"` over relative paths
- Background images: import as module (`import img from "@/assets/..."`) and pass via `style={{ backgroundImage: ... }}`
