const path = require('path');
const { argv } = require('yargs');

const merge = require('webpack-merge');
const { VueLoaderPlugin } = require('vue-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = process.env.NODE_ENV;

const config = require('./config');

let webpackConfig = {
  context: config.paths.assets,
  entry: [
    './scripts/main.js',
    './styles/main.scss',
  ],
  output: {
    path: config.paths.public,
    filename: `scripts/[name].js`,
  },
  ...(argv.mode == 'development') ? {devtool: "#inline-source-map"} : {},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        include: config.paths.assets,
        loader: 'eslint-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: config.paths.assets,
        use: [
          (!!argv.watch) ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          ...(!!argv.watch) ? ['style-loader'] : [],
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        include: config.paths.assets,
        loader: 'svg-inline-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/[name].css",
    }),
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      syntax: 'scss',
    }),
  ]
};

/** Let's only load dependencies as needed **/
if (argv.mode == 'production') {
  webpackConfig = merge(webpackConfig, require('./webpack.config.optimize'));
}

if (!!argv.watch) {
  webpackConfig = merge(webpackConfig, require('./webpack.config.watch'));
}

module.exports = webpackConfig;
