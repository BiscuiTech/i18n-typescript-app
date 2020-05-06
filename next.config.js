const withSourceMaps = require('@zeit/next-source-maps')();
const TerserPlugin = require('terser-webpack-plugin');

module.exports = withSourceMaps({
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    if (!options.isServer) {
      config.resolve.alias['react-dom$'] = 'react-dom/profiling';
      config.resolve.alias['scheduler/tracing'] = 'scheduler/tracing-profiling';
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: false,
            keep_fnames: false,
          },
        }),
      ];
    }
    return config;
  },
});
