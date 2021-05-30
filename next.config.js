const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  webpack(config, options) {
    const { dev, isServer } = options;

    if (dev && isServer) {
      // next's 'dev script doesn't make type check by default'
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin(),
        // ForkTsCheckerWebpackPlugin of > 6 ver has bug with checking excluded files (for ex. ./next folder)
        // logger: { infrastructure: 'console' },
        // typescript: { configOverwrite: ['./next'] },
        // eslint: { enabled: false, files: './src/**/*.{ts,tsx,js,jsx}' },
        // issue: {
        //   exclude: [{ origin: 'typescript', file: '**/*.js' }],
        // },
      );
    }

    return config;
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
};
