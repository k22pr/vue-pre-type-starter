// webpack.config.js

const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin');
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  // ... other options ...
  plugins: [
    new VueAutoRoutingPlugin({
      // Path to the directory that contains your page components.
      pages: 'src/pages',

      // A string that will be added to importing component path (default @/pages/).
      importPrefix: '@/pages/',
    }),
    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: ['/', '/about'],
    }),
  ],
};
