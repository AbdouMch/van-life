# AGENTS.md

Guidance for AI coding assistants working in this repository.

## Stack

React 19 · TypeScript · Vite · Tailwind v4 · Vitest · React Testing Library · MSW · ESLint · Prettier · Husky · Docker

## Development

All npm operations run inside Docker — no local Node required.

```bash
make up                     # start dev container (auto-runs npm install + vite dev)
make logs                   # follow dev server output
make shell                  # open a shell inside the container
make down                   # stop containers
make add PKG=x              # install a package
make remove PKG=x           # remove a package
make run c="<cmd>"          # run an arbitrary npm command in the container
make run c="npm run lint"   # lint
make run c="npm run format" # format
make run c="npm run test"   # run Vitest
```

## Folder structure

Feature modules — code is grouped by domain, not by type.

```
src/
  features/
    host/          # host dashboard and van management
      components/
      pages/
    vans/          # public van browsing
      components/
      pages/
  pages/           # standalone pages not tied to a feature (Home, About)
  shared/
    components/    # cross-feature UI (Header, Footer, MainLayout, MainNavLink)
    hooks/         # useFetch
    lib/           # cn (clsx + tailwind-merge), formatCurrency
    types/         # shared TypeScript types (Van)
  context/         # AuthContext (stub, swap internals when real auth arrives)
  mocks/           # MSW: handlers.ts, data.ts, browser.ts (dev), server.ts (tests)
  styles/          # main.css
  App.tsx          # BrowserRouter + full route tree
  main.tsx
```

**Placement rule:** code used by one feature → inside that feature. Code used by multiple features → `shared/`.

## Component convention

Every component and page lives in a folder with its own name:

```
ComponentName/
  ComponentName.tsx        # implementation
  ComponentName.test.tsx   # colocated test (when present)
  index.ts                 # single line: export { default } from "./ComponentName"
```

Import via the folder, not the file. Always use the `@/` alias, never relative paths across folders.

## Code style

- **Prettier**: no semicolons, double quotes, 4-space indent, 100-char line width, `prettier-plugin-tailwindcss`
- **ESLint**: TypeScript-ESLint + react-hooks + react-refresh, integrated with Prettier
- Pre-commit hook runs lint-staged on `*.ts/tsx`, `*.json/css/md`
- Use `cn()` from `@/shared/lib/cn` for conditional class merging

## Styling

- Tailwind v4, CSS-first — no `tailwind.config.ts`, all tokens live in `src/styles/main.css` under `@theme`
- Never use hardcoded hex values in JSX — add a token to `@theme` and use the generated class
- Use utility classes directly in JSX, no CSS Modules

## Data fetching

- `useFetch<T>(url)` is the only data-fetching primitive — `AbortController` cancels on unmount
- Fetch at the page level (or layout route level), not inside shared UI components
- All API responses are wrapped objects: `{ van }` or `{ vans }` — never raw values
- Layout route exception: `HostVanDetailsLayout` fetches once for `/host/vans/:id` and its sub-routes, sharing data via `<Outlet context={{ van }} />`. Child pages use `useOutletContext<{ van: Van }>()`.

## Testing

- **Vitest + React Testing Library + jsdom**
- MSW Node server (`src/mocks/server.ts`) intercepts fetches in tests — same handlers as the browser worker
- Tests are colocated: `ComponentName.test.tsx` lives in the same folder as `ComponentName.tsx`
- Do not mock `useFetch` — let MSW handle the network so tests exercise real fetch behavior
- Component tests: render with props, assert on visible output
- Integration tests: render a page, MSW intercepts the fetch, assert on the final rendered UI