// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Code for Dharma",
  tagline: "Making strong presence of Dharma in Digital World.",
  url: "https://www.codefordharma.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "codefordharma", // Usually your GitHub org/user name.
  projectName: "codefordharma", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/codefordharma/codefordharma-public/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/codefordharma/codefordharma-public/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: "img/docusaurus.png",
      metadata: [{ name: "twitter:card", content: "summary" }],
      // announcementBar: {
      //   id: "support_us",
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: "#fafbfc",
      //   textColor: "#091E42",
      //   isCloseable: false,
      // },
      navbar: {
        title: "Code for Dharma",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Projects",
            page: "projects",
            position: "left",
            to: "/projects",
          },
          {
            label: "Mandiram",
            type: "dropdown",
            page: "mandiram",
            position: "left",
            to: "/mandiram",
            items: [
              {
                label: "Ecosystem",
                to: "/docs/mandiram/ecosystem",
              },
              {
                label: "App",
                to: "/docs/mandiram/app",
              },
              {
                label: "Join hands",
                to: "/docs/mandiram/join-networking-team",
              },
            ],
          },
          // {
          //   type: "doc",
          //   docId: "index",
          //   position: "left",
          //   label: "Docs",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          // Right
          // {
          //   type: "docsVersionDropdown",
          //   position: "right",
          //   dropdownActiveClassDisabled: true,
          //   dropdownItemsAfter: [
          //     {
          //       href: "https://v1.docusaurus.io",
          //       label: "1.x.x",
          //     },
          //     {
          //       to: "/versions",
          //       label: "All versions",
          //     },
          //   ],
          // },
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                href: "https://github.com/facebook/docusaurus/issues/3526",
                label: "Help Us Translate",
              },
            ],
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Docs",
          //       to: "/docs",
          //     },
          //   ],
          // },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mayash Foundation.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
