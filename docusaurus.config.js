// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Book Notes',
  tagline: 'Notes from programming books',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://book-notes.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "GitHub's Tunisian Community", // Usually your GitHub org/user name.
  projectName: 'Book-notes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/1874475.jpg',
      navbar: {
        title: 'Book Notes',
        logo: {
          alt: 'Book notes Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notes',
          },
          {
            href: 'https://github.com/Tunisian-GitHub-Community/Book-notes',
            label: 'See it on GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect with us',
            items: [
              {
                label: 'Website',
                href: 'https://www.githubtunisia.tn',
              },
              {
                label: 'GitHub organization',
                href: 'https://github.com/Tunisian-GitHub-Community',
              },
              {
                label: 'Facebook page',
                href: 'https://www.facebook.com/GitHubTunisia',
              },
              {
                label: 'LinkedIn page',
                href: 'https://www.linkedin.com/company/githubstunisian-community',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} | GitHub's Tunisian Community`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
