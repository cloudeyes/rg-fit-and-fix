# Project Instructions for AI Agents

This document provides context and guidelines for AI agents working on the `rg-fit-and-fix` project.

## Project Overview
- **Stack:** Vue 3 (Script Setup), TypeScript, Vite, Tailwind CSS v4.
- **Key Libraries:** `realgrid` (Data Grid), `realgrid-vue` (Vue Wrapper).
- **Package Manager:** `pnpm`.

## Architecture & Structure
- **Entry Point:** `src/main.ts` mounts `src/App.vue`.
- **Global Styles:** `src/index.css` imports Tailwind CSS v4 (`@import "tailwindcss";`) and RealGrid styles.
- **Components:** Located in `src/components/`.
- **Configuration:**
  - `vite.config.ts`: Handles build, dev server, and environment variables.
  - `tsconfig.json`: TypeScript configuration.

## Key Patterns & Conventions

### RealGrid Integration
- **Initialization:** `RealGrid.setLicenseKey()` is called in `src/App.vue`.
- **Usage:** Use the `<RealGridVue>` component from `realgrid-vue`.
- **References:** Use `ref<RealGridVue>()` to access the grid instance.

### Environment Variables
- **Loading:** `vite.config.ts` uses `loadEnv` to load variables.
- **Dev Server:** `ALLOWED_HOSTS` in `.env` is parsed and added to `server.allowedHosts`.
- **Client Exposure:** `envPrefix` is set to `['VITE_', 'REALGRID_']`. Variables starting with these prefixes are available via `import.meta.env`.
- **License Key:** Typically stored as `REALGRID_LICENSE_KEY` or `VITE_REALGRID_LICENSE_KEY`.

### Tailwind CSS v4
- **Setup:** Uses `@tailwindcss/vite` plugin in `vite.config.ts`.
- **CSS:** `@import "tailwindcss";` in `src/index.css`.
- **Usage:** Use utility classes directly in Vue templates.

## Developer Workflows

### Commands
- **Start Dev Server:** `pnpm dev`
- **Build for Production:** `pnpm build` (runs type checks `vue-tsc` then `vite build`)
- **Type Check:** `pnpm exec tsc --noEmit` or `vue-tsc --noEmit`

### Troubleshooting
- **Type Errors:** Run `pnpm exec tsc --noEmit` to verify TypeScript compliance.
- **Env Vars:** If `.env` changes, restart the dev server.
