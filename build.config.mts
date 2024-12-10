import { defineConfig } from '@ice/pkg';

export default defineConfig({
  plugins: [
    [
      '@ice/pkg-plugin-docusaurus',
      {
        path: 'packages',
        sidebarItemsGenerator: async () => {
          return [
            { type: 'doc', id: 'prettier/docs/index', label: 'prettier' },
            { type: 'doc', id: 'editorconfig/docs/index', label: 'editorconfig' },
            { type: 'doc', id: 'tsconfig/docs/index', label: 'tsconfig' },
          ];
        },
        exclude: ['**/node_modules/**'],
        onBrokenLinks: 'warn',
        pageRouteBasePath: '/',
        title: '@asiareal/config',
        navBarTitle: '@asiareal/config',
        url: 'https://asiareal.github.io',
        baseUrl: '/config',
        navBarLogo: '/config/img/logo.png',
        favicon: '/config/favicon.ico',
      },
    ],
  ],
});
