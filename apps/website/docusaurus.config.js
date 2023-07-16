// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Camphora-Styled",
  tagline: "Camphora-Styled are reliable",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://idealjs.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/camphora",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "idealjs", // Usually your GitHub org/user name.
  projectName: "camphora", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/idealjs/camphora/tree/main/apps/website",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/idealjs/camphora/tree/main/apps/website",
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
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Camphora-Styled",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "docSidebar",
            sidebarId: "componentsSidebar",
            position: "left",
            label: "Components",
          },
          {
            href: "https://github.com/idealjs/camphora",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [],
          },
          {
            title: "More",
            items: [
              {
                label: "Action Components",
                to: "/docs/components/actions",
              },
              {
                label: "GitHub",
                href: "https://github.com/idealjs/camphora",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Idealjs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["jsx", "tsx"],
      },
    }),
  plugins: [
    function (context, options) {
      return {
        name: "vanilla-extract-loader",
        configureWebpack(config, isServer) {
          return {
            plugins: [new VanillaExtractPlugin()],
            resolve: {
              alias: {
                "@idealjs/camphora-styled": path.resolve(
                  __dirname,
                  "../../packages/camphora-styled/index.ts"
                ),
              },
            },
          };
        },
      };
    },
  ],
};

module.exports = config;
