const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  name: 'client',
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/_core/index.js',
  ],
  output: {
    path: './',
    filename: 'index.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
        progress: true,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-es7-starter',
      template: './src/_core/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  node: {
    console: true,
    fs: null,
    net: null,
    tls: null,
  },
};
