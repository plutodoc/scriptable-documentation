import { pwaPlugin } from '@vuepress/plugin-pwa';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/pwa/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/pwa/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/pwa/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#141A25',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Scriptable',
      description: 'Automate iOS using JavaScript',
    },
  },
  theme: defaultTheme({
    docsDir: 'docs',
    logo: '/images/logo.png',
    locales: {
      '/': {
        contributors: false,
        editLink: false,
        navbar: [
          {
            text: 'Documentation',
            link: '/documentation/doc.md',
          },
          {
            text: 'latest',
            children: [
              {
                text: 'Changelog',
                link: 'https://apps.apple.com/us/app/scriptable/id1405459188',
              },
            ],
          },
        ],
        sidebar: {
          '/documentation/': [
            {
              text: '1 Scriptable Docs',
              link: '/documentation/doc.md',
            },
            {
              text: '2 Alert',
              link: '/documentation/alert.md',
            },
            {
              text: '3 args',
              link: '/documentation/args.md',
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
});
