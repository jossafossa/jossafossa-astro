# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at `localhost:4321`
- `npm run build` — production build to `./dist/` (HTML compressed, short CSS module class names)
- `npm run build:debug` — same as build but with `COMPRESS=false` so HTML is readable
- `npm run preview` — preview the production build locally
- `npm run astro check` — type-check the project (no dedicated `lint` or `test` script exists)

## Architecture

Astro 5 static site with MDX content collections. Pages → containers → ui. No client-side framework — output is plain HTML/CSS with a tiny bit of vanilla JS.

### Directory roles (note: README.md is stale on this)

The README describes `components/` and `features/`, but the real structure uses:

- `src/ui/` — presentational, stateless `.astro` components (`Button`, `Heading`, `Container`, `Stack`, etc.). Re-exported via `src/ui/index.ts`.
- `src/containers/` — composed components that fetch/handle content collection data (`Post`, `PostsGrid`, `AuthorSummary`, etc.). Re-exported via `src/containers/index.ts`.
- `src/layouts/` — `BaseLayout.astro`, `PostLayout.astro` (full `<html>` shells).
- `src/pages/` — routes. Dynamic routes (`[...slug].astro`) call `getStaticPaths()` against content collections.
- `src/content/` — `posts/`, `authors/`, `pages/` collections plus `config.ts` schemas. All loaders use `glob` over `**/*.mdx` (posts/authors) or `**/*.{json,mdx}` (pages).
- `src/utils/` — small helpers; see below.
- `src/styles/` — global SCSS entry (`main.scss`), reset, variables, base. Imported once by `BaseLayout`.

Each `ui/`/`containers/` component lives in its own folder with a co-located `*.module.scss`. Always import components via the `@/ui` or `@/containers` barrel files (path aliases defined in `tsconfig.json`: `@/ui`, `@/containers`, `@/layouts`, `@/data`, `@/styles`, `@/assets`, `@/content`, `@/utils`).

### Content collections and the draft system

`src/content/config.ts` defines `posts`, `authors`, `pages`. Each schema has an optional `draft: boolean` field.

**Always read collections through `getVisibleCollection(name)` from `@/utils/content`**, not `getCollection()` directly. It filters out `draft: true` entries in production but keeps them in dev so unfinished work is previewable locally. Any new dynamic route that builds pages from a collection must use this helper or drafts will leak into production builds.

### Markdown rendering

- MDX is the default authoring format for posts/authors/pages; rendered through `render(entry)` from `astro:content` and displayed via the `MdxContent` ui component.
- Posts may also reference an external `markdown_url` in frontmatter. `src/utils/markdown.ts` fetches and renders that raw markdown at build time using `marked` + `marked-shiki`, sharing the Shiki theme exported from `astro.config.mjs` (`shikiTheme = 'github-dark'`). The result is rendered via the `Markdown` ui component (HTML string). Keep both render paths using the same Shiki theme constant.

### Styling

CSS Modules (`*.module.scss`). Astro's default scoping turns them into short hashed class names in production. SCSS files use `@use` not `@import`. Global tokens are in `src/styles/variables.scss`.

### Build/config notes

- `astro.config.mjs` sets `build.format: 'directory'` (clean URLs like `/about/index.html`), responsive image breakpoints, and the Shiki theme. `compressHTML` is gated on `process.env.COMPRESS !== 'false'`, which is how `build:debug` works.
- TypeScript extends `astro/tsconfigs/strict` — keep types strict.

## Deployment

GitHub Actions workflow `.github/workflows/deploy.yml` deploys on push to the **`production`** branch by building and rsyncing `dist/` to a PHP/Apache server. The default development branch is `main`; merging `main` → `production` triggers a deploy. There is no staging environment. See `DEPLOYMENT.md` for SSH/secrets setup.
