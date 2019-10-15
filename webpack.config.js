// webpack.config.js

const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin');

module.exports = {
  // ... other options ...

  plugins: [
    new VueAutoRoutingPlugin({
      // Path to the directory that contains your page components.
      pages: 'src/pages',

      // A string that will be added to importing component path (default @/pages/).
      importPrefix: '@/pages/',
    }),
  ],
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/about'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: (route) => {
        // Defer scripts and tell Vue it's been server rendered to trigger hydration
        route.html = route.html
          .replace(/<script (.*?)>/g, '<script $1 defer>')
          .replace('id="app"', 'id="app" data-server-rendered="true"');
        return route;
      },
    },
  },
};
