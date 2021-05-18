const { merge } = require('webpack-merge');
const base = require('./webpack.base');

const devConfig = {
  mode: 'development',
  output: {
    
    assetModuleFilename: '[name][ext][query]'
  },
  devServer: {
    port: 3000,
    contentBase: '../dist',
    open: true,
    hot:true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  
}

module.exports = merge(base, devConfig)
