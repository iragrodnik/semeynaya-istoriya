# Agent Instructions — semeynaya-istoriya

## Project Overview
Landing page for a psychological group focused on family systemic therapy (ССТ).
Single-page React app deployed to GitHub Pages.

## Tech Stack
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v3
- Lucide React (icons)
- GitHub Actions → GitHub Pages

## Key Conventions

### Colors
All accent colors are CSS custom properties — do NOT use hardcoded Tailwind color classes like `rose-*`, `violet-*` etc. for accent elements.
Use only:
- `text-accent`, `bg-accent`, `hover:bg-accent-hover`
- `text-accent-hover`, `bg-accent-light`, `ring-accent-light`

Accent theme is set randomly on page load via `ThemeSwitcher.tsx` (`data-accent` attribute on `<html>`).
20 accent themes are defined in `src/index.css`.

### Public Assets
Always reference public assets via `import.meta.env.BASE_URL` prefix:
```tsx
src={`${import.meta.env.BASE_URL}filename.jpg`}
```
This is required for correct paths on GitHub Pages (base = `/semeynaya-istoriya/`).

### Dark Mode
Dark mode is `media`-based (set in `tailwind.config.js`). Use `dark:` variants where needed.

## File Structure
```
src/
  App.tsx          — main single-page component
  ThemeSwitcher.tsx — sets random data-accent on <html> at mount
  Icons.tsx        — TelegramIcon, VKIcon SVG components
  index.css        — CSS custom properties for accent themes + Tailwind directives
public/
  G.jpg            — photo of Irina Grodnik
  M.jpg            — photo of Anastasia Morozova
  favicon.svg
.github/workflows/deploy.yml — CI/CD to GitHub Pages
```

## Build & Dev
```bash
npm install
npm run dev      # localhost (Vite, port 5173+)
npm run build    # production build to dist/
```

## Deployment
Push to `main` → GitHub Actions builds and deploys automatically.
Base URL is set via `VITE_BASE` env variable in the workflow.
