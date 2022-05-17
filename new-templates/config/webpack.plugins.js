const webpack = require('webpack');
const cssnano = require('cssnano');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = require('./site.config');

// Hot module replacement
const hmr = new webpack.HotModuleReplacementPlugin();

// Optimize CSS assets
const optimizeCss = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: cssnano,
  cssProcessorPluginOptions: {
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  },
  canPrint: true,
});

// Clean webpack
const clean = new CleanWebpackPlugin();

// Stylelint
const stylelint = new StyleLintPlugin();

// Extract CSS
const cssExtract = new MiniCssExtractPlugin({
  filename: 'assets/css/style.css',
});

// Favicons
const favicons = new FaviconsWebpackPlugin({
  logo: config.favicon,
  prefix: 'images/favicons/',
  favicons: {
    appName: config.site_name,
    appDescription: config.site_description,
    developerName: null,
    developerURL: null,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      windows: false,
      yandex: false,
    },
  },
});

// Webpack bar
const webpackBar = new WebpackBar({
  color: '#ff6469',
});

// Handlebars
let moduleArrayPages = require('../src/pagesGenerator');
const pages = moduleArrayPages.arrayAllPages;
let renderedPages = [];

for (let i = 0; i < pages.length; i++) {
  let page = Object.assign({}, pages[i]);
  renderedPages.push(
    new HTMLWebpackPlugin({
      template: page.template,
      filename: page.output,
      // title: page.content.title,
      // description: page.content.description,
      templateParameters:{
        ...require('../src/handlebars-json/helpers-list'),
        ...require('../src/handlebars-json/info-list'),
        ...require('../src/handlebars-json/link-list'),
        ...require('../src/handlebars-json/step-list'),
        ...require('../src/handlebars-json/timeline'),
        ...require('../src/handlebars-json/icon-list'),
        ...require('../src/handlebars-json/accordion'),
        ...require('../src/handlebars-json/effettuare-pagamento'),
        ...require('../src/handlebars-json/disservizio-lista')
      }
    }),
  );
}

const copyImages = new CopyPlugin({
  patterns: [
    {
      from: path.join(config.root, config.paths.src, 'images'),
      to: path.join(config.root, config.paths.dist, 'assets/images'),
    },
  ],
  options: {
    concurrency: 100,
  },
});

// const copyFonts = new CopyPlugin({
//   patterns: [
//     {
//       from: path.join(config.root, config.paths.src, 'assets/fonts'),
//       to: path.join(config.root, config.paths.dist, 'assets/fonts'),
//     },
//   ],
//   options: {
//     concurrency: 100,
//   },
// });

const copyBtItalia = new CopyPlugin({
  patterns: [
    {
      from: path.join(config.root, config.paths.src, 'assets/bootstrap-italia'),
      to: path.join(config.root, config.paths.dist, 'assets/bootstrap-italia'),
    },
  ],
  options: {
    concurrency: 100,
  },
});

// const copyThirdPartsLibraries = new CopyPlugin({
//   patterns: [
//     {
//       from: path.join(config.root, config.paths.src, 'vendors'),
//       to: path.join(config.root, config.paths.dist, 'vendors'),
//     },
//   ],
//   options: {
//     concurrency: 100,
//   },
// });

module.exports = [
  clean,
  // stylelint,
  cssExtract,
  ...renderedPages,
  // fs.existsSync(config.favicon) && favicons,
  config.env === 'production' && optimizeCss,
  webpackBar,
  config.env === 'development' && hmr,
  copyImages,
  copyBtItalia,
  // copyFonts,
  // copyThirdPartsLibraries,
].filter(Boolean);
