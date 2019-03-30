const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.htm',
  filename: 'index.html',
  inject:   'body'
});
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV;



module.exports = {
  entry:        './src/index.js',
  output: {
    path:       path.resolve(__dirname, 'dist'),
    filename:   'bundle.js',
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
      { test: /\.(png|jpg|gif)$/, use: 'file-loader' },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}