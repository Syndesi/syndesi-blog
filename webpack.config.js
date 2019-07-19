const DotenvWebpack = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = (env, options) => {
  var isProduction = options.mode === 'production' || false;
  if(isProduction){
    require('dotenv').config({path: '.env.prod'});
  } else {
    require('dotenv').config({path: '.env.dev'});
  }
  console.log(process.env.WEB_BASE_PATH);
  return {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.[chunkhash:8].js',
      publicPath: process.env.WEB_BASE_PATH
    },
    devtool: 'eval',
    devServer: {
      inline: true,
      port: 8080,
      publicPath: process.env.WEB_BASE_PATH
    },
    mode: options.mode || 'development',
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
      new HtmlWebpackPlugin({
        template: './src/index.htm',
        filename: 'index.html',
        inject:   'body'
      }),
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
      new DotenvWebpack({
        silent: false,
        path: isProduction ? '.env.prod' : '.env.dev',
        safe: isProduction ? '.env.prod.example' : '.env.dev.example',
      })
    ]
  };
};