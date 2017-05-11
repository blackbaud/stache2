const path = require('path');
const webpack = require('webpack');
const helpers = require('../utils/helpers');
const ngcWebpack = require('ngc-webpack');

module.exports = {
  entry: helpers.root('.srctmp/index.ts'),
  output: {
    path: path.resolve(__dirname, '..', '..', 'dist', 'bundles'),
    filename: 'stache.umd.js',
    libraryTarget: 'umd',
    library: 'Stache'
  },
  externals: [
    /^@angular\//,
    /^@blackbaud\//,
    /^rxjs\//
  ],
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader','angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['raw-loader', 'style-loader']
      }
    ]
  },
  plugins: [
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src'), // location of your src
      {} // a map of your routes
    ),

    new ngcWebpack.NgcWebpackPlugin({
      tsConfig: helpers.root('tsconfig-bundle.json')
    })
  ]
};
