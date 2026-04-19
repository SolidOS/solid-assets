const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'assets/[name].[contenthash][ext]'
  },
  module: {
    rules: [
      // Emit SVG files as separate URL-addressable assets (tree-shakeable —
      // only icons that are actually imported will be included in the build).
      {
        test: /\.svg$/i,
        type: 'asset/resource'
      },
      // Extract CSS into a separate stylesheet for production.
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};
