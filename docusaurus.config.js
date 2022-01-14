// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Randal Lee',
  tagline: 'Dinosaurs are cool but doggos are cooler',
  url: 'https://cyverm555.github.io/bloggo',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cyverm555', // Usually your GitHub org/user name.
  projectName: 'bloggo', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          blogTitle: 'Bloggo',
          blogDescription: 'Dinosaurs are cool but doggos are cooler',
          showReadingTime: true,
          routeBasePath: '/',
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
      navbar: {
        title: 'Bloggo',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // TODO: Activate this when algolia is set up
          // {
          //   type: 'search',
          //   position: 'left',
          // },
          {
            href: 'mailto:randal555@hotmail.com',
            label: 'Contact Me',
            position: 'right',
          },
          {
            href: 'https://github.com/cyverm555/bloggo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://sg.linkedin.com/in/randal-lee-743731220',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cyverm555',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/cyverm555/bloggo',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bloggo by Randal Lee. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
