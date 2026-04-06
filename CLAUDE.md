# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint via Next.js
npm run biome-write  # Auto-format all files with Biome
```

> ESLint is intentionally ignored during builds (`ignoreDuringBuilds: true` in `next.config.mjs`). Biome is the primary formatter (2-space indent, 100-char line width, double quotes for JS/TS).

## Environment

Copy `.env.example` to `.env.local`. The only variable is:

```
PAGE_ACCESS_PASSWORD=<password>   # Required for password-protected routes
```

## Architecture

### Content vs. Config split

All customization lives in `src/resources/`:

- **`content.tsx`** — personal data: `person`, `social`, `home`, `about`, `blog`, `work`, `gallery`. This is the primary file to edit for portfolio content. Supports JSX (React nodes) for rich descriptions.
- **`once-ui.config.ts`** — behavior and theming: `routes`, `protectedRoutes`, `style`, `effects`, `fonts`, `baseURL`, `schema`, `socialSharing`, `mailchimp`.
- **`icons.ts`** — icon registry; add icons here before referencing them in `content.tsx` via `Social.icon`.
- **`index.ts`** — barrel re-export for both files; import from `@/resources` everywhere else.

### MDX content system

Blog posts and work projects are filesystem-driven MDX files parsed with `gray-matter` at runtime:

- Blog posts: `src/app/blog/posts/*.mdx`
- Work projects: `src/app/work/projects/*.mdx`

`getPosts(pathSegments)` in `src/utils/utils.ts` scans a directory for `.mdx` files and returns `{ metadata, slug, content }[]`. The slug is the filename without extension. Frontmatter fields for work projects: `title`, `publishedAt`, `summary`, `images[]`, `tag`, `team[]`, `link`.

### Route system

`RouteGuard` (`src/components/RouteGuard.tsx`) is a client component that wraps all page content in the root layout. It enforces two mechanisms:

1. **Route enable/disable** — routes not listed as `true` in `once-ui.config.ts → routes` render `<NotFound />`.
2. **Password protection** — routes in `protectedRoutes` require the user to authenticate via `/api/authenticate` (POST) before content is shown. Auth state is stored in an `httpOnly` cookie validated by `/api/check-auth`.

Adding a new top-level page requires adding it to `routes` in `once-ui.config.ts`. Dynamic sub-routes under `/blog` and `/work` are automatically enabled if the parent route is enabled.

### Component system

UI components come from `@once-ui-system/core` — use these (e.g. `Column`, `Row`, `Flex`, `Heading`, `Text`, `Media`) rather than HTML elements or Tailwind. Custom styles go in `src/resources/custom.css`, which is imported in the root layout.

### SEO & OG images

Metadata is generated via `Meta.generate()` from Once UI. OG images for work/blog pages fall back to `/api/og/generate?title=...` (a Next.js image generation route). The `baseURL` in `once-ui.config.ts` must be set to the production domain for SEO meta tags and schema to be correct.

### TypeScript types

`src/types/content.types.ts` — content shape types (`Person`, `About`, `Work`, `Gallery`, etc.)  
`src/types/config.types.ts` — config shape types (`StyleConfig`, `EffectsConfig`, `RoutesConfig`, etc.)  
Both are re-exported from `src/types/index.ts`.
