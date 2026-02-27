# Jossafossa Astro Blog

A modern blog built with Astro 5, featuring optimized builds and automated deployment.

## 🚀 Features

- **Astro 5** - Latest version with modern static site generation
- **Content Collections** - Type-safe content management for blog posts and authors
- **Author System** - Full author support with post-author relationships
- **TypeScript (Strict)** - Complete type safety throughout the project
- **React Components** - TSX components for stateful features
- **CSS Modules** - Scoped SCSS with short class names in production
- **Path Aliases** - Clean imports with `@/components`, `@/features`, etc.
- **Optimized Builds** - Compressed HTML, minified CSS, short class names
- **Auto Deployment** - GitHub Actions → PHP server via SSH/rsync
- **Static Site Generation** - Blazing fast performance, zero JavaScript by default

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml         # Auto-deployment to PHP server
├── public/
│   └── .htaccess              # Apache config for clean URLs
├── src/
│   ├── assets/                # Images (optimized by Astro)
│   ├── components/            # Presentational components (stateless)
│   │   ├── ui/                # Button, Link, Heading, etc.
│   │   ├── layout/            # Container, Section, Header, Footer
│   │   ├── cards/             # Card variants
│   │   └── index.ts           # Barrel export
│   ├── features/              # Container components (stateful)
│   │   ├── posts/             # PostsGrid, PostsSection
│   │   ├── authors/           # AuthorsGrid, AuthorsSection
│   │   └── index.ts           # Barrel export
│   ├── content/
│   │   ├── config.ts          # Content collections config
│   │   ├── posts/             # Blog posts (Markdown)
│   │   ├── authors/           # Authors (Markdown)
│   │   └── pages/             # Generic pages (Markdown)
│   ├── data/
│   │   ├── navigation.ts      # Navigation menu data
│   │   └── index.ts           # Barrel export
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Base layout with header/footer
│   │   └── PostLayout.astro   # Layout for blog posts
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── posts/
│   │   │   ├── index.astro    # Posts overview
│   │   │   └── [...slug].astro # Dynamic post routes
│   │   └── authors/
│   │       ├── index.astro    # Authors overview
│   │       └── [...slug].astro # Dynamic author routes
│   └── styles/
│       ├── main.scss          # Global styles entry
│       ├── reset.scss         # CSS reset
│       ├── variables.scss     # SCSS variables
│       └── base.scss          # Base styles
├── astro.config.mjs           # Astro configuration
├── tsconfig.json              # TypeScript config with path aliases
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command               | Action                                              |
| :-------------------- | :-------------------------------------------------- |
| `npm install`         | Install dependencies                                |
| `npm run dev`         | Start dev server at `localhost:4321`                |
| `npm run build`       | Build production site to `./dist/` (compressed)     |
| `npm run build:debug` | Build with readable HTML (for debugging)            |
| `npm run preview`     | Preview your build locally, before deploying        |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro check`    |

## 📝 Adding a New Blog Post

1. Create a new `.md` file in `src/content/posts/`
2. Add frontmatter:

```markdown
---
title: My New Post
date: 2024-02-25
author: jossafossa # Optional: reference to an author
draft: false       # Optional: set to true to hide from production
---

## Content

Your post content here...
```

3. The post will automatically appear in the blog overview!

## 👤 Adding a New Author

1. Create a new `.md` file in `src/content/authors/`
2. Add frontmatter:

```markdown
---
name: Your Name
slug: your-slug
bio: A short bio about yourself
avatar: /avatars/your-photo.jpg # Optional
email: your@email.com # Optional
website: https://yoursite.com # Optional
github: yourusername # Optional
twitter: yourhandle # Optional
---

## About Me

More information about yourself...
```

3. Reference the author in your posts with `author: filename` (without .md)

## 🎨 Styling

This project uses **CSS Modules** with optimized class names in production.

### CSS Modules

Each component has its own scoped styles:

```tsx
// Component.module.scss
.container {
  padding: 1rem;

  &:hover {
    background: #f0f0f0;
  }
}
```

```tsx
// Component.tsx
import styles from './Component.module.scss';

export const Component = () => (
  <div className={styles.container}>...</div>
);
```

### Production Optimization

- **Development:** `class="_container_a1B2c3"` (readable)
- **Production:** `class="hPHdrB"` (short, 6 chars)
- **Result:** ~19% smaller HTML files

### Global Styles

Global styles are in `src/styles/`:
- `main.scss` - Entry point
- `reset.scss` - CSS reset
- `variables.scss` - SCSS variables
- `base.scss` - Base styles

Imported in `BaseLayout.astro` with `@use "../styles/main"`

## 🚀 Deployment

This project auto-deploys to a PHP server via GitHub Actions.

### Setup

1. Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/deploy_key -N ""
```

2. Add public key to server:
```bash
ssh-copy-id -i ~/.ssh/deploy_key.pub user@server.com
```

3. Add GitHub Secrets:
   - `DEPLOY_HOST` - Server hostname
   - `DEPLOY_USER` - SSH username
   - `DEPLOY_PATH` - Deploy path (e.g., `/var/www/html/`)
   - `DEPLOY_KEY` - Private SSH key

4. Create and push to `production` branch → Auto-deploy! 🎉

### Workflow

```
main        → Development (no deploy)
  ↓ merge
production  → Auto-deploy to server 🚀
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🔧 Configuration

### Path Aliases

TypeScript path aliases are configured in `tsconfig.json`:

```typescript
import { Button } from "@/components";      // ✅ Via barrel file
import { PostsGrid } from "@/features";     // ✅ Via barrel file
import BaseLayout from "@/layouts/BaseLayout.astro"; // ✅ Direct import
import { navigation } from "@/data";        // ✅ Via barrel file
```

### Astro Config

Key settings in `astro.config.mjs`:

- **HTML Compression:** Enabled in production, disabled with `COMPRESS=false`
- **CSS Modules:** Short class names in production
- **cssnano:** Advanced CSS minification
- **Build Format:** Directory structure (`/about/index.html`)

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Astro Discord](https://astro.build/chat)

## 🏗️ Architecture

### Components vs Features

- **`components/`** - Presentational, stateless UI components
- **`features/`** - Container components with data fetching and business logic
- **`layouts/`** - Page layouts (`.astro` files with `<html>`, `<head>`, etc.)

### Data Flow

```
pages/ → features/ → components/
         ↓
      content/
```

Pages use features, features fetch data and use components.
