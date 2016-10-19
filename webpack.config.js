import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

module.exports = {
  name: 'client',
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/core/index.js',
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
      template: './src/core/index.html',
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
