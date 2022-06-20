import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
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
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [],
});
