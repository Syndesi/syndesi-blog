const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.htm',
  filename: 'index.html',
  inject:   'body'
});
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV;



module.exports = {
  entry:       ['babel-polyfill', './src/index.js'],
  output: {
    path:       path.resolve(__dirname, 'dist'),
    filename:   'js/bundle.[hash].js',
    publicPath: '/'
  },
  devtool:      'eval',
  devServer: {
    inline: true,
    port: 8080
  },
  mode: env || 'development',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, "css-loader", {loader: "sass-loader", options: { importer: globImporter() }}] },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images/'
          }
        }]
      },
      {
        test: /\.(yml|xml|webmanifest)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'files/'
          }
        }]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {from: 'src/static'}
    ]),
  ]
}