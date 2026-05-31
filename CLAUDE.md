# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All npm operations run inside Docker — no local Node required.

```bash
make up                      # start dev container (auto-runs npm install + vite dev)
make logs                    # follow dev server output
make shell                   # open a shell inside the container
make down                    # stop containers
make add PKG=x               # install a package
make remove PKG=x            # remove a package
make run c="npm run lint"    # lint
make run c="npm run format"  # format
make run c="npm run test"    # run tests (Vitest)
make build                   # production build
make preview                 # serve production build
```

## Code style

- Prettier: no semicolons, double quotes, 4-space indent, 100-char line width, `prettier-plugin-tailwindcss` (auto-sorts class order)
- ESLint: TypeScript-ESLint + react-hooks + react-refresh, integrated with Prettier
- Pre-commit hook (lint-staged) runs automatically on `*.ts/tsx`, `*.json/css/md`

## Architecture

### Folder structure — feature modules

```
src/
  features/
    host/                   # host dashboard and van management
      components/           # host-only UI components
      pages/                # host pages
    vans/                   # public van browsing
      components/           # vans-only UI components
      pages/                # vans pages + VanDetails
  pages/                    # standalone pages not tied to a feature (Home, About)
  shared/
    components/             # Header, Footer, MainLayout, MainNavLink
    hooks/                  # useFetch
    lib/                    # cn, format
    types/                  # shared TypeScript types (Van)
  context/                  # AuthContext
  mocks/                    # MSW handlers, seed data, browser worker, Node server
  styles/                   # main.css
  App.tsx
  main.tsx
```

**Rule:** if a component or hook is used by only one feature, it lives inside that feature. If it is used across features, it belongs in `shared/`.

### Component and page convention

Every component and page lives in its own folder with at minimum two files:

```
ComponentName/
  ComponentName.tsx          # implementation
  ComponentName.test.tsx     # colocated test (when present)
  index.ts                   # re-export only: export { default } from "./ComponentName"
```

Always import via the folder name, never the file directly:
```ts
import HostVanCard from "@/features/host/components/HostVanCard"   // ✓
import HostVanCard from "@/features/host/components/HostVanCard/HostVanCard"  // ✗
```

Always use the `@/` path alias — never relative paths across folders.

### Routing

`App.tsx` is the root — sets up `<BrowserRouter>` and the full `<Routes>` tree. Layout routes use nested `<Route>` with `<Outlet />`.

The host van detail route (`/host/vans/:id`) uses a layout route (`HostVanDetailsLayout`) that fetches the van once and shares it with all three child pages via `<Outlet context={{ van }} />`. Child pages (`HostVanDetail`, `HostVanPricing`, `HostVanPhotos`) access it with `useOutletContext<{ van: Van }>()` and never fetch independently. This is intentional — one fetch for the whole subtree.

### Data fetching

- `useFetch<T>(url)` in `shared/hooks/` is the single data-fetching primitive. It uses `AbortController` to cancel in-flight requests on unmount or URL change.
- Fetch at the **page level** (or layout route level), never inside shared UI components. A component that receives data as props is easier to test and reuse than one that fetches internally.
- Response shapes are always wrapped: `{ van }`, `{ vans }` — never a raw object.

### Styling

- Tailwind v4 with the `@tailwindcss/vite` plugin — no `tailwind.config.ts`, all configuration is CSS-first.
- `src/styles/main.css` — `@import "tailwindcss"`, `@theme` block for brand tokens, `@layer base` for global resets.
- Never use hardcoded hex values in JSX. If a color is needed, add a token to `@theme` first and use the generated Tailwind class.
- Use `cn()` from `@/shared/lib/cn` for conditional class merging (wraps `clsx` + `tailwind-merge`).
- Use Tailwind utility classes directly in JSX. CSS Modules are not used.
- For background images, import the asset as a module and pass via `style={{ backgroundImage: ... }}`.

### Testing

- **Framework**: Vitest + React Testing Library + jsdom
- **Network mocking**: MSW Node server (`src/mocks/server.ts`) — reuses the same handlers from `src/mocks/handlers.ts`
- **Test location**: colocated next to the component in the same folder (`ComponentName.test.tsx`)
- **Approach**:
  - Component tests — render a component with props, assert on visible output
  - Integration tests — render a full page, let MSW intercept the fetch, assert on the final UI
- Never mock `useFetch` directly in tests; let MSW handle the network layer so tests exercise real fetch behavior