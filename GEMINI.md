# Magic Portfolio - GEMINI Context

## Project Overview

**Magic Portfolio** is a clean, minimal, and beginner-friendly portfolio template built with **Next.js** and the **Once UI** design system. It is designed to showcase work, blog posts, and personal information with a focus on ease of use and customization.

**Key Technologies:**
-   **Framework:** Next.js (App Router)
-   **Language:** TypeScript
-   **UI System:** Once UI (`@once-ui-system/core`)
-   **Content:** MDX (for blog posts and projects)
-   **Styling:** CSS Modules / SCSS, Once UI tokens
-   **Linting/Formatting:** Biome, ESLint

## Architecture & Structure

The project follows the standard Next.js App Router structure with a strong separation between content configuration and application logic.

### Key Directories

-   `src/app/`: Next.js App Router pages and API routes.
    -   `page.tsx`: Homepage.
    -   `blog/`: Blog listing and post pages (`[slug]`).
    -   `work/`: Work/Project listing and detail pages (`[slug]`).
    -   `gallery/`: Gallery page.
    -   `about/`: About page.
-   `src/components/`: Reusable React components (Header, Footer, specialized page components).
-   `src/resources/`: **CRITICAL** - Centralized configuration and content.
    -   `once-ui.config.ts`: Theme, fonts, and display settings.
    -   `content.tsx`: Static text content (Person info, social links, About page data).
-   `src/utils/`: Utility functions (e.g., date formatting).
-   `public/`: Static assets (images, fonts).

### Key Files for Customization

1.  **`src/resources/content.tsx`**:
    -   Primary file for editing text content (Name, Role, Social Links, Work Experience, Technical Skills).
    -   Exports objects like `person`, `social`, `home`, `about`, `blog`, `work`, `gallery`.

2.  **`src/resources/once-ui.config.ts`**:
    -   Controls the visual theme (colors, borders, scaling) and feature toggles (routes, effects, SEO).
    -   Defines `routes`, `style` (theme, brand colors), `display` (location, time), and `effects`.

3.  **`src/app/layout.tsx`**:
    -   Root layout wrapper. Initializes the theme script and wraps the app in `Providers` and `RevealFx`.

4.  **`src/app/blog/posts/*.mdx`** & **`src/app/work/projects/*.mdx`**:
    -   Content files for individual blog posts and project case studies.

## Building and Running

### Development
Start the development server:
```bash
npm run dev
```
Access the app at `http://localhost:3000`.

### Production Build
Build the application for production:
```bash
npm run build
```

### Linting & Formatting
Run linting:
```bash
npm run lint
```
Format code using Biome:
```bash
npm run biome-write
```

## Development Conventions

-   **Component Usage:** Prefer `Once UI` components (`Flex`, `Column`, `Text`, `Button`, etc.) for layout and typography over raw HTML/CSS where possible to maintain design consistency.
-   **Content Management:**
    -   **Static Text:** Update `src/resources/content.tsx`.
    -   **Dynamic Content:** Add new MDX files for blog posts/projects.
    -   **Images:** Place images in `public/images/` and reference them in `content.tsx` or MDX files.
-   **Theming:** Customize the look and feel via `src/resources/once-ui.config.ts` rather than overriding CSS directly, unless necessary.
-   **Icons:** The project uses specific icon sets managed via the `once-ui` system or `react-icons`. Check `src/resources/icons.ts` or `social` config in `content.tsx`.
