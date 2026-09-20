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
        en: {
          label: 'English',
          lang: 'en',
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
          translations: { en: 'Getting started' },
          items: [
            {
              label: 'Connexion & serveur',
              translations: { en: 'Sign in & server' },
              slug: 'premiers-pas/connexion',
            },
            {
              label: 'Le parcours de configuration',
              translations: { en: 'The setup journey' },
              slug: 'premiers-pas/parcours',
            },
            {
              label: 'Prendre en main le dashboard',
              translations: { en: 'Find your way around' },
              slug: 'premiers-pas/interface',
            },
            {
              label: 'Activer ses modules',
              translations: { en: 'Enable your modules' },
              slug: 'premiers-pas/modules',
            },
            {
              label: 'Ordre de configuration',
              translations: { en: 'Setup order' },
              slug: 'premiers-pas/configuration-ordre',
            },
          ],
        },
        {
          label: 'Configuration (Dashboard)',
          translations: { en: 'Configuration (Dashboard)' },
          items: [
            {
              label: 'Général',
              translations: { en: 'General' },
              items: [
                {
                  label: 'Accueil du dashboard',
                  translations: { en: 'Dashboard home' },
                  slug: 'dashboard/general/accueil',
                },
                {
                  label: 'Prise en main',
                  translations: { en: 'Getting set up' },
                  slug: 'dashboard/general/prise-en-main',
                },
                {
                  label: 'Pulse & IA',
                  translations: { en: 'Pulse & AI' },
                  slug: 'dashboard/general/pulse',
                },
                {
                  label: 'Boîte de réception',
                  translations: { en: 'Inbox' },
                  slug: 'dashboard/general/inbox',
                },
                {
                  label: 'Analytics',
                  translations: { en: 'Analytics' },
                  slug: 'dashboard/general/analytics',
                },
                {
                  label: 'Mon profil & préférences',
                  translations: { en: 'My profile & preferences' },
                  slug: 'dashboard/general/profil',
                },
              ],
            },
            {
              label: 'Sécurité',
              translations: { en: 'Security' },
              items: [
                {
                  label: 'Vue d’ensemble',
                  translations: { en: 'Security overview' },
                  slug: 'dashboard/moderation/vue-ensemble',
                },
                {
                  label: 'Configuration rapide',
                  translations: { en: 'Quick setup' },
                  slug: 'dashboard/moderation/configuration-rapide',
                },
                {
                  label: 'Filtres (Modération auto)',
                  translations: { en: 'Filters (Auto moderation)' },
                  slug: 'dashboard/moderation/automod',
                },
                {
                  label: 'Modération des pseudos',
                  translations: { en: 'Nickname moderation' },
                  slug: 'dashboard/moderation/pseudos',
                },
                {
                  label: 'Protection anti-raid',
                  translations: { en: 'Anti-raid protection' },
                  slug: 'dashboard/moderation/anti-raid',
                },
                {
                  label: 'Multi-comptes',
                  translations: { en: 'Alt accounts' },
                  slug: 'dashboard/moderation/double-comptes',
                },
                {
                  label: 'Sanctions & rapports',
                  translations: { en: 'Sanctions & reports' },
                  slug: 'dashboard/moderation/sanctions',
                },
                {
                  label: 'Appels de bannissement',
                  translations: { en: 'Ban appeals' },
                  slug: 'dashboard/moderation/appels-ban',
                },
              ],
            },
            {
              label: 'Modération',
              translations: { en: 'Moderation' },
              items: [
                {
                  label: 'Gestion des membres',
                  translations: { en: 'Member management' },
                  slug: 'dashboard/moderation/membres',
                },
                {
                  label: 'Invitations',
                  translations: { en: 'Invites' },
                  slug: 'dashboard/moderation/invitations',
                },
                {
                  label: 'Logs Discord',
                  translations: { en: 'Discord logs' },
                  slug: 'dashboard/moderation/logs',
                },
                {
                  label: 'Recherche de messages',
                  translations: { en: 'Message search' },
                  slug: 'dashboard/moderation/recherche-messages',
                },
                {
                  label: 'Transcriptions',
                  translations: { en: 'Transcripts' },
                  slug: 'dashboard/moderation/transcriptions',
                },
                {
                  label: 'Journal d’activité',
                  translations: { en: 'Activity log' },
                  slug: 'dashboard/moderation/journal-activite',
                },
              ],
            },
            {
              label: 'Système d’XP',
              translations: { en: 'XP system' },
              items: [
                {
                  label: 'Leveling & XP',
                  translations: { en: 'Leveling & XP' },
                  slug: 'dashboard/xp/leveling',
                },
                {
                  label: 'Prestige',
                  translations: { en: 'Prestige' },
                  slug: 'dashboard/xp/prestige',
                },
                {
                  label: 'Saisons',
                  translations: { en: 'Seasons' },
                  slug: 'dashboard/xp/saisons',
                },
                {
                  label: 'Réputation',
                  translations: { en: 'Reputation' },
                  slug: 'dashboard/xp/reputation',
                },
                {
                  label: 'Clans',
                  translations: { en: 'Clans' },
                  slug: 'dashboard/xp/clans',
                },
                {
                  label: 'Drops',
                  translations: { en: 'Drops' },
                  slug: 'dashboard/xp/drops',
                },
              ],
            },
            {
              label: 'Économie & RPG',
              translations: { en: 'Economy & RPG' },
              items: [
                {
                  label: 'Configuration rapide',
                  translations: { en: 'Quick setup' },
                  slug: 'dashboard/economie/configuration-rapide',
                },
                {
                  label: 'Économie & RPG',
                  translations: { en: 'Economy & RPG' },
                  slug: 'dashboard/economie/economie',
                },
                {
                  label: 'Marché entre membres',
                  translations: { en: 'Member marketplace' },
                  slug: 'dashboard/economie/marche',
                },
                {
                  label: 'Quêtes',
                  translations: { en: 'Quests' },
                  slug: 'dashboard/economie/quetes',
                },
              ],
            },
            {
              label: 'Communauté',
              translations: { en: 'Community' },
              items: [
                {
                  label: 'Messages d’accueil & départ',
                  translations: { en: 'Welcome & leave messages' },
                  slug: 'dashboard/communaute/accueil-depart',
                },
                {
                  label: 'Lier des salons',
                  translations: { en: 'Channel links' },
                  slug: 'dashboard/communaute/liens-salons',
                },
                {
                  label: 'Suggestions',
                  translations: { en: 'Suggestions' },
                  slug: 'dashboard/communaute/suggestions',
                },
                {
                  label: 'Salons Fun',
                  translations: { en: 'Fun channels' },
                  slug: 'dashboard/communaute/salons-fun',
                },
                {
                  label: 'Tickets de support',
                  translations: { en: 'Support tickets' },
                  slug: 'dashboard/communaute/tickets',
                },
                {
                  label: 'Formulaires & Style Custom',
                  translations: { en: 'Forms & custom styling' },
                  slug: 'dashboard/communaute/formulaires',
                },
                {
                  label: 'Giveaways',
                  translations: { en: 'Giveaways' },
                  slug: 'dashboard/communaute/giveaways',
                },
                {
                  label: 'Reaction Roles',
                  translations: { en: 'Reaction Roles' },
                  slug: 'dashboard/communaute/reaction-roles',
                },
                {
                  label: 'Créateur d’embeds',
                  translations: { en: 'Embed Builder' },
                  slug: 'dashboard/communaute/embeds',
                },
                {
                  label: 'Règlement',
                  translations: { en: 'Server rules' },
                  slug: 'dashboard/communaute/reglement',
                },
                {
                  label: 'Actualités & RSS',
                  translations: { en: 'News & RSS' },
                  slug: 'dashboard/communaute/actualites',
                },
                {
                  label: 'Réseaux sociaux',
                  translations: { en: 'Social networks' },
                  slug: 'dashboard/communaute/reseaux-sociaux',
                },
                {
                  label: 'Événements & quiz',
                  translations: { en: 'Events & quizzes' },
                  slug: 'dashboard/communaute/evenements',
                },
                {
                  label: 'Déclencheurs',
                  translations: { en: 'Triggers' },
                  slug: 'dashboard/communaute/declencheurs',
                },
                {
                  label: 'Starlight',
                  translations: { en: 'Starlight' },
                  slug: 'dashboard/communaute/starlight',
                },
                {
                  label: 'Campagnes',
                  translations: { en: 'Campaigns' },
                  slug: 'dashboard/communaute/campagnes',
                },
              ],
            },
            {
              label: 'Staff',
              translations: { en: 'Staff' },
              items: [
                {
                  label: 'Annuaire du staff',
                  translations: { en: 'Staff directory' },
                  slug: 'dashboard/staff/annuaire',
                },
                {
                  label: 'Hiérarchie & rôles',
                  translations: { en: 'Hierarchy & roles' },
                  slug: 'dashboard/staff/hierarchie',
                },
                {
                  label: 'Recrutement',
                  translations: { en: 'Recruitment' },
                  slug: 'dashboard/staff/recrutement',
                },
                {
                  label: 'Tutorat & formation',
                  translations: { en: 'Tutoring & training' },
                  slug: 'dashboard/staff/tutorat',
                },
                {
                  label: 'Réunions',
                  translations: { en: 'Meetings' },
                  slug: 'dashboard/staff/reunions',
                },
                {
                  label: 'Planning & agenda',
                  translations: { en: 'Planning & agenda' },
                  slug: 'dashboard/staff/planning',
                },
                {
                  label: 'Sondages staff',
                  translations: { en: 'Staff polls' },
                  slug: 'dashboard/staff/sondages',
                },
                {
                  label: 'Discipline du staff',
                  translations: { en: 'Staff discipline' },
                  slug: 'dashboard/staff/discipline',
                },
              ],
            },
            {
              label: 'Cross-serveur',
              translations: { en: 'Cross-server' },
              items: [
                {
                  label: 'Serveurs staff',
                  translations: { en: 'Staff servers' },
                  slug: 'dashboard/cross-serveur/serveurs-staff',
                },
                {
                  label: 'Partenariats',
                  translations: { en: 'Partnerships' },
                  slug: 'dashboard/cross-serveur/partenariats',
                },
              ],
            },
            {
              label: 'Configuration',
              translations: { en: 'Configuration' },
              items: [
                {
                  label: 'Centre de gestion',
                  translations: { en: 'Management center' },
                  slug: 'dashboard/configuration/centre-gestion',
                },
                {
                  label: 'Catalogue des modules',
                  translations: { en: 'Module catalogue' },
                  slug: 'dashboard/configuration/modules',
                },
                {
                  label: 'Salons',
                  translations: { en: 'Channels' },
                  slug: 'dashboard/configuration/salons',
                },
                {
                  label: 'Accès aux commandes',
                  translations: { en: 'Command access' },
                  slug: 'dashboard/configuration/commandes',
                },
                {
                  label: 'Sauvegardes',
                  translations: { en: 'Backups' },
                  slug: 'dashboard/configuration/sauvegardes',
                },
                {
                  label: 'Planifications',
                  translations: { en: 'Schedules' },
                  slug: 'dashboard/configuration/planifications',
                },
                {
                  label: 'Santé des salons',
                  translations: { en: 'Channel health' },
                  slug: 'dashboard/configuration/sante-salons',
                },
                {
                  label: 'Custom Bot',
                  translations: { en: 'Custom Bot' },
                  slug: 'dashboard/configuration/custom-bot',
                },
                {
                  label: 'Offres & facturation',
                  translations: { en: 'Plans & billing' },
                  slug: 'dashboard/configuration/facturation',
                },
              ],
            },
          ],
        },
        {
          label: 'Utilisation & Commandes (Discord)',
          translations: { en: 'Usage & commands (Discord)' },
          items: [
            {
              label: 'Modération',
              translations: { en: 'Moderation' },
              items: [
                {
                  label: 'Modération automatique',
                  translations: { en: 'Auto moderation' },
                  slug: 'discord/moderation/automod',
                },
                {
                  label: 'Doubles comptes',
                  translations: { en: 'Alt accounts' },
                  slug: 'discord/moderation/double-comptes',
                },
                {
                  label: 'Sanctionner un membre',
                  translations: { en: 'Sanctioning a member' },
                  slug: 'discord/moderation/sanctions',
                },
              ],
            },
            {
              label: 'Communauté',
              translations: { en: 'Community' },
              items: [
                {
                  label: 'Messages d’accueil & départ',
                  translations: { en: 'Welcome & leave messages' },
                  slug: 'discord/communaute/accueil-depart',
                },
                {
                  label: 'Lier des salons',
                  translations: { en: 'Channel links' },
                  slug: 'discord/communaute/liens-salons',
                },
                {
                  label: 'Suggestions',
                  translations: { en: 'Suggestions' },
                  slug: 'discord/communaute/suggestions',
                },
                {
                  label: 'Salons Fun',
                  translations: { en: 'Fun channels' },
                  slug: 'discord/communaute/salons-fun',
                },
                {
                  label: 'Tickets de support',
                  translations: { en: 'Support tickets' },
                  slug: 'discord/communaute/tickets',
                },
                {
                  label: 'Daily Algo',
                  translations: { en: 'Daily Algo' },
                  slug: 'discord/communaute/daily-algo',
                },
                {
                  label: 'Clans, saisons et paris',
                  translations: { en: 'Clans, seasons and bets' },
                  slug: 'discord/communaute/clans',
                },
              ],
            },
            {
              label: 'Économie & RPG',
              translations: { en: 'Economy & RPG' },
              items: [
                {
                  label: 'Jouer au RPG',
                  translations: { en: 'Playing the RPG' },
                  slug: 'discord/economie/rpg',
                },
                {
                  label: 'Monnaie, boutique et jeux',
                  translations: { en: 'Currency, shop and games' },
                  slug: 'discord/economie/economie',
                },
              ],
            },
            {
              label: "Système d'XP",
              translations: { en: 'XP system' },
              items: [
                {
                  label: 'Niveaux, classements et réputation',
                  translations: { en: 'Levels, leaderboards and reputation' },
                  slug: 'discord/xp/progression',
                },
              ],
            },
            {
              label: 'Staff',
              translations: { en: 'Staff' },
              items: [
                {
                  label: 'Commandes du staff',
                  translations: { en: 'Staff commands' },
                  slug: 'discord/staff/commandes-staff',
                },
              ],
            },
            {
              label: 'Configuration',
              translations: { en: 'Configuration' },
              items: [
                {
                  label: 'Salons',
                  translations: { en: 'Channels' },
                  slug: 'discord/configuration/salons',
                },
                {
                  label: 'Accès aux commandes',
                  translations: { en: 'Command access' },
                  slug: 'discord/configuration/commandes',
                },
              ],
            },
          ],
        },
        {
          label: 'Aide',
          translations: { en: 'Help' },
          items: [
            {
              label: 'Commandes utiles',
              translations: { en: 'Everyday commands' },
              slug: 'aide/commandes-utiles',
            },
            {
              label: 'Questions fréquentes',
              translations: { en: 'Frequently asked questions' },
              slug: 'aide/questions-frequentes',
            },
            {
              label: 'Configuration MCP (IA)',
              translations: { en: 'MCP setup (AI)' },
              slug: 'aide/mcp',
            },
          ],
        },
      ],
      components: {
        Head: './src/components/Head.astro',
        LanguageSelect: './src/components/LanguageSelect.astro',
      },
    }),
  ],
});
