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
      customCss: ['./src/styles/css.rooting.css'],
      sidebar: [
        {
          label: 'Bien démarrer',
          items: [
            { label: 'Connexion & serveur', slug: 'premiers-pas/connexion' },
            { label: 'Prendre en main le dashboard', slug: 'premiers-pas/interface' },
            { label: 'Activer ses modules', slug: 'premiers-pas/modules' },
            { label: 'Ordre de configuration', slug: 'premiers-pas/configuration-ordre' },
          ],
        },
        {
          label: 'Modération',
          items: [
            { label: 'Modération automatique', slug: 'moderation/automod' },
            { label: 'Doubles comptes', slug: 'moderation/double-comptes' },
          ],
        },
        {
          label: 'Communauté',
          items: [
            { label: 'Messages d’accueil & départ', slug: 'communaute/accueil-depart' },
            { label: 'Lier des salons', slug: 'communaute/liens-salons' },
            { label: 'Suggestions', slug: 'communaute/suggestions' },
            { label: 'Salons Fun', slug: 'communaute/salons-fun' },
            { label: 'Tickets de support', slug: 'communaute/tickets' },
            { label: 'Daily Algo', slug: 'communaute/daily-algo' },
          ],
        },
        {
          label: 'Configuration',
          items: [
            { label: 'Accès aux commandes', slug: 'configuration/commandes' },
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
