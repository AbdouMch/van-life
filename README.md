# react-vite-ts-template

A personal React project template.

**Stack**: React 19 · TypeScript · Vite · Sass · Bootstrap 5 · ESLint · Prettier · Husky · Docker

## Bootstrap a new project

### Option A — GitHub (recommended)

Click **"Use this template"** on GitHub, then clone the new repo:

```bash
git clone git@github.com:YOUR_USERNAME/my-new-app.git
cd my-new-app
```

### Option B — degit (no GitHub UI needed)

```bash
npx degit YOUR_USERNAME/react-vite-ts-template my-new-app
cd my-new-app
```

Then copy the env file and set your app name:

```bash
cp docker.env-example docker.env
# edit docker.env and set COMPOSE_PROJECT_NAME=my-new-app
```

On the first `make up`, `npm install` will replace the `APP_NAME` placeholder in `package.json` and `index.html` automatically.

## Development

```bash
make up       # start the dev container (runs npm install + vite dev)
make logs     # follow the dev server output
make shell    # open a shell inside the container
make down     # stop containers
```

All npm operations run inside the container — no local Node required.

| Command | Description |
|---|---|
| `make add PKG=x` | Install a package |
| `make remove PKG=x` | Remove a package |
| `make build` | Production build |
| `make preview` | Serve the production build |

## Production

Requires SSL certs on the host. Set `SSL_CERTS_PATH` in `docker.env`:

```bash
make prod-build
make prod-up
make prod-logs
```

The production image is a multi-stage build: Node compiles the app, nginx serves the static files over HTTPS.

## Project structure

```
src/
  components/    # one .tsx + .module.scss pair per component
  styles/        # _variables.scss (tokens) + main.scss (global)
  App.tsx
  main.tsx
```

Path alias `@/` maps to `src/` — use `import Foo from "@/components/Foo"`.