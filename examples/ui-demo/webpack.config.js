const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'assets/[name].[contenthash][ext]'
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(svg|png)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.tsx?$/i,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
