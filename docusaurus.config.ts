import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Koala Wallet Docs",
  tagline: "Koala Wallet API Documentation",
  favicon: "img/favicon.ico",

  url: "https://docs.koalawallet.io/",
  baseUrl: "/",

  organizationName: "Eucalyptus Labs",
  projectName: "koala-wallet-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        pages: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Koala Wallet Docs",
      logo: {
        alt: "Koala Wallet Logo",
        src: "img/logo.svg",
      },
      hideOnScroll: true,
      items: [
        {
          href: "https://github.com/Eucalyptus-Labs",
          label: "GitHub",
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
              label: "Intro",
              to: "/",
            },
            {
              label: "Basic Setup",
              to: "/basic-setup",
            },
            {
              label: "API Reference",
              to: "/api-reference",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/koalawallet",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/koalawallet",
            },
            {
              label: "TikTok",
              href: "https://tiktok.com/@koalawallet",
            },
            {
              label: "YouTube",
              href: "https://youtube.com/@koalawallet",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Eucalyptus Labs",
              href: "https://www.eucalyptuslabs.com/",
            },
            {
              label: "Koala Wallet",
              href: "https://www.koalawallet.io/",
            },
            {
              label: "Medium",
              href: "https://medium.com/@koalawallet",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eucalyptus Labs.`,
    },

    colorMode: {
      defaultMode: "dark", // Set default theme to dark
      disableSwitch: true, // Disable theme switch
      respectPrefersColorScheme: false, // Ignore system theme settings
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
