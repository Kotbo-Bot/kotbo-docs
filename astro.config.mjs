import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.kotbo.fr',
  integrations: [
    starlight({
      title: 'Kotbo Docs',
      description: 'Le guide utilisateur officiel du dashboard Kotbo.',
      logo: {
        src: './src/assets/kotbo-logo.svg',
        alt: 'Kotbo',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Français',
          lang: 'fr-FR',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Kotbo-Bot/kotbo-docs',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/Kotbo-Bot/kotbo-docs/edit/main/',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Bien démarrer',
          items: [
            { label: 'Connexion & serveur', slug: 'premiers-pas/connexion' },
            { label: 'Prendre en main le dashboard', slug: 'premiers-pas/interface' },
            { label: 'Activer ses modules', slug: 'premiers-pas/modules' },
          ],
        },
        {
          label: 'Communauté',
          items: [
            { label: 'Messages d’accueil & départ', slug: 'communaute/accueil-depart' },
            { label: 'Lier des salons', slug: 'communaute/liens-salons' },
          ],
        },
        {
          label: 'Aide',
          items: [
            { label: 'Questions fréquentes', slug: 'aide/questions-frequentes' },
            { label: 'Configuration MCP (IA)', slug: 'aide/mcp' },
          ],
        },
      ],
      components: {
        Head: './src/components/Head.astro',
      },
    }),
  ],
});
