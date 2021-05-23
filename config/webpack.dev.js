const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const base = require('./webpack.base');

const devConfig = {
  mode: 'development',
  output: {
    assetModuleFilename: '[name][ext][query]',
  },
  devServer: {
    port: 3000,
    contentBase: '../dist',
    open: true,
    hot: true,
  },
  plugins: [
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

};

module.exports = merge(base, devConfig);
