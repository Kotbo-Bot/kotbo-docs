# AGENTS.md

## Purpose

This repository contains the end-user documentation for the Kotbo dashboard.

Write for server owners, administrators, moderators, and staff members who use the dashboard. Do not turn this site into developer documentation, API documentation, architecture notes, or a guide to the bot source code.

The dashboard source used as the product reference is located at `../Kotbo/apps/dashboard`.

## Project structure

- `src/content/docs/`: pages de documentation écrites en Markdown ou MDX.
- `src/components/`: composants Astro réutilisables pour les pages de documentation (ex: `DashboardScreenshot.astro`, `DiscordCommand.astro`).
- `src/styles/`: feuilles de style modulaires :
  - `css.rooting.css` : Feuille de style principale important les autres fichiers.
  - `variables.css` : Variables de thèmes, couleurs, polices.
  - `layout.css` / `typography.css` : Surcharges globales.
  - `homepage.css` / `components.css` : Styles de la page d'accueil et des guides.
  - `animations.css` : Animations de transition.
  - `discord-input.css` : Style du simulateur de commande Discord.
- `src/assets/screenshots/`: captures d'écran anonymisées issues du vrai dashboard.
- `astro.config.mjs`: configuration Starlight, navigation et GitHub Pages.
- `.github/workflows/deploy.yml`: déploiement statique automatique sur GitHub Pages.

## Content rules

- Explain what users see and what they must click.
- Use the exact labels and navigation paths displayed in the current dashboard.
- Verify every workflow against `../Kotbo/apps/dashboard` before documenting it.
- Prefer short, task-oriented sections with visible outcomes.
- Explain permissions when a page or action is restricted by role.
- Mention save actions, required Discord permissions, and destructive effects where relevant.
- Use French for all user-facing documentation.
- Never expose tokens, IDs, private server data, member data, or production configuration.

## Visual rules

- Use screenshots of the real dashboard components rather than hand-drawn mockups.
- Render screenshots with fictitious demonstration data only.
- Keep the real sidebar, navbar, labels, forms, spacing, and active states visible whenever they help orientation.
- Store optimized screenshots as WebP files in `src/assets/screenshots/`.
- Use `src/components/DashboardScreenshot.astro` to embed dashboard captures.
- Give every screenshot a useful French `alt` description and a short caption.
- When the dashboard UI changes, update both the instructions and the affected screenshots in the same change.
- Pour afficher les commandes slash Discord, utilisez obligatoirement le composant `<DiscordCommand command="/..." />` importé depuis `src/components/DiscordCommand.astro` afin de reproduire fidèlement l'UI de saisie Discord avec bouton de copie.

## Writing style

- Address the reader directly and use plain French.
- Lead with the action or result, not implementation details.
- Prefer real interface labels in bold, for example **Configuration → Modules**.
- Use callouts only for important tips, permission requirements, warnings, or data-loss risks.
- Avoid technical terms unless they are visible in the product or required to solve a user problem.
- Do not describe mocked demonstration values as real statistics.

## Development

Install dependencies and run the local site:

```bash
bun install
bun dev
```

The development URL is:

```text
http://localhost:4321/
```

Validate every change with:

```bash
bun run build
```

The build must complete with zero Astro errors. Check desktop and mobile rendering for changes involving layout, navigation, or screenshots.

## Links and deployment

- The production site is `https://docs.kotbo.fr/`.
- The site is served from the root of its custom domain. Do not add the former `/kotbo-docs` base path to links or assets.
- Prefer relative links between documentation pages.
- A push to `main` triggers the GitHub Pages workflow.
- Do not add Jekyll configuration; deployment is handled by Astro and GitHub Actions.

## Scope discipline

- Do not modify `../Kotbo` while updating documentation unless the user explicitly requests a dashboard change.
- Reading and locally rendering the dashboard for verification is allowed.
- Preserve unrelated working-tree changes.
- Do not commit generated `dist/`, `.astro/`, or `node_modules/` directories.
