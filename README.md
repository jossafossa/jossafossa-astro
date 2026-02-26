# Jossafossa Astro Blog

Een moderne blog gebouwd met Astro 5, gemigreerd van Lume.

## 🚀 Features

- **Astro 5.18.0** - De nieuwste versie van Astro
- **Content Collections** - Type-safe content management voor blog posts en Authors
- **Author System** - Volledige auteur ondersteuning met relaties tussen posts en Authors
- **TypeScript (Strict)** - Volledige type safety
- **Markdown Support** - Schrijf posts en author bio's in Markdown
- **Static Site Generation** - Razendsnelle performance, 0 JavaScript
- **Component-based Architecture** - Herbruikbare Astro componenten

## 📁 Project Structuur

```
/
├── public/
│   ├── favicon.svg
│   └── style.css          # Globale styling
├── src/
│   ├── components/
│   │   ├── index.ts       # Barrel file voor alle components
│   │   ├── Menu/
│   │   │   ├── Menu.astro
│   │   │   ├── Menu.module.scss
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.astro
│   │   │   ├── Footer.module.scss
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── Alert/
│   │   └── Button/
│   ├── content/
│   │   ├── config.ts      # Content collections configuratie
│   │   ├── posts/         # Blog posts (Markdown)
│   │   └── authors/       # Authors (Markdown)
│   ├── layouts/
│   │   ├── BaseLayout.astro  # Basis layout met header/footer
│   │   └── PostLayout.astro  # Layout voor blog posts
│   └── pages/
│       ├── index.astro       # Homepage
│       ├── posts/
│       │   ├── index.astro   # Blog overzicht
│       │   └── [...slug].astro  # Dynamische post routes
│       └── authors/
│           ├── index.astro   # Authors overzicht
│           └── [...slug].astro  # Dynamische author routes
└── package.json
```

## 🧞 Commands

Alle commands worden uitgevoerd vanaf de project root:

| Command             | Action                                            |
| :------------------ | :------------------------------------------------ |
| `npm install`       | Installeer dependencies                           |
| `npm run dev`       | Start dev server op `localhost:4321`              |
| `npm run build`     | Build productie site naar `./dist/`               |
| `npm run preview`   | Preview je build lokaal, voor deployment          |
| `npm run astro ...` | Run CLI commands zoals `astro add`, `astro check` |

## 📝 Een nieuwe blog post toevoegen

1. Maak een nieuw `.md` bestand in `src/content/posts/`
2. Voeg frontmatter toe:

```markdown
---
title: Mijn Nieuwe Post
date: 2024-02-25
author: joost # Optioneel: referentie naar een author
---

## Inhoud

Je post content hier...
```

3. De post verschijnt automatisch in het blog overzicht!

## 👤 Een nieuwe auteur toevoegen

1. Maak een nieuw `.md` bestand in `src/content/authors/`
2. Voeg frontmatter toe:

```markdown
---
name: Jouw Naam
bio: Een korte bio over jezelf
avatar: /avatars/jouw-foto.jpg # Optioneel
email: jouw@email.com # Optioneel
website: https://jouwsite.nl # Optioneel
github: jouwusername # Optioneel
twitter: jouwhandle # Optioneel
---

## Over mij

Meer informatie over jezelf...
```

3. Verwijs naar de auteur in je posts met `author: bestandsnaam` (zonder .md)

## 🎨 Styling

Dit project gebruikt **100% scoped SCSS** - geen global CSS files!

### Scoped SCSS in componenten

Elke component heeft zijn eigen styles die automatisch scoped zijn:

```astro
<style lang="scss">
  .my-component {
    padding: 1rem;

    &__title {
      color: #0066cc;
    }

    &:hover {
      background: #f0f0f0;
    }
  }
</style>
```

### Voordelen:

- ✅ **Geen CSS conflicts** - Elke component is geïsoleerd
- ✅ **Automatische optimalisatie** - Alleen gebruikte CSS wordt geladen
- ✅ **SCSS features** - Variables, nesting, mixins
- ✅ **Inline in HTML** - Kritieke CSS voor snelheid
- ✅ **0 externe CSS files** - Alles geoptimaliseerd en gebundeld

### Global styles

Alleen basis resets en typography staan in `BaseLayout.astro` met `is:global`

## 🔧 Configuratie

De Astro configuratie staat in `astro.config.mjs`. Hier kun je:

- Integraties toevoegen (React, Vue, Svelte, Tailwind, etc.)
- Build opties aanpassen
- Adapter configureren voor SSR/SSG

## 📚 Meer leren

- [Astro Documentatie](https://docs.astro.build)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Astro Discord](https://astro.build/chat)

## 🆚 Verschillen met Lume

- **Content Collections** in plaats van `data.search.pages()`
- **`.astro` componenten** in plaats van `.tsx` met Lume-specifieke exports
- **Frontmatter in componenten** voor metadata in plaats van exports
- **`getStaticPaths()`** voor dynamische routes
- **Type-safe content** met Zod schema's
