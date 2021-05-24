const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const base = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'app.[contenthash].js',
    assetModuleFilename: 'images/[name][ext][query]',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name][contenthash].css',
    }),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new CleanWebpackPlugin(),
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};

module.exports = merge(base, prodConfig);
