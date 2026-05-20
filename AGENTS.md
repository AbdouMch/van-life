# AGENTS.md

Guidance for AI coding assistants working in this repository.

## Stack

React 19 · TypeScript · Vite · Sass · Bootstrap 5 · ESLint · Prettier · Husky · Docker

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

- **Prettier**: no semicolons, double quotes, 4-space indent, 100-char line width
- **ESLint**: TypeScript-ESLint + react-hooks + react-refresh, integrated with Prettier
- Pre-commit hook runs lint-staged automatically on `*.ts/tsx`, `*.json/css/md`

## Architecture

- `src/styles/_variables.scss` — design tokens (CSS custom properties) and a `rem($px)` helper; customize colors here
- `src/styles/main.scss` — global styles; imports Bootstrap 5 via `@use "bootstrap/scss/bootstrap"`
- Components live in `src/components/` as colocated `.tsx` + `.module.scss` pairs
- Path alias `@/` maps to `src/` — always use `import Foo from "@/components/Foo"` over relative paths
- Bootstrap is available for layout/utilities; CSS Modules handle component-scoped styles
