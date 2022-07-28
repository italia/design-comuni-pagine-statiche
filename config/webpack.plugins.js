const webpack = require('webpack');
const cssnano = require('cssnano');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const pkg = require('../package.json');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
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
      templateParameters:{
        version: pkg.version,
        ...require('../src/handlebars-json/iscrizione-graduatoria.json'),
        ...require('../src/handlebars-json/helpers-list'),
        ...require('../src/handlebars-json/info-list'),
        ...require('../src/handlebars-json/link-list'),
        ...require('../src/handlebars-json/step-list'),
        ...require('../src/handlebars-json/timeline'),
        ...require('../src/handlebars-json/icon-list'),
        ...require('../src/handlebars-json/accordion'),
        ...require('../src/handlebars-json/effettuare-pagamento'),
        ...require('../src/handlebars-json/disservizio-lista'),
        ...require('../src/handlebars-json/categories'),
        ...require('../src/handlebars-json/cards.json'),
        ...require('../src/handlebars-json/select-option-list'),
        ...require('../src/handlebars-json/info-appointment'),
        ...require('../src/handlebars-json/pagamenti-dovuti'),
        ...require('../src/handlebars-json/pagamenti-dovuti-multa'),
        ...require('../src/handlebars-json/servizi-pagamento'),
        ...require('../src/handlebars-json/permessi-autorizzazioni'),
        ...require('../src/handlebars-json/vantaggi-economici.json'),
        ...require('../src/handlebars-json/richiedi-assistenza.json'),
        ...require('../src/handlebars-json/prenotazione-appuntamento'),
        ...require('../src/handlebars-json/domande-frequenti.json'),
        ...require('../src/handlebars-json/seganalazione-disservizio.json')
      },
      minify: {
        removeRedundantAttributes: false, // do not remove type="text"
      },
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

const copyBtItalia = new CopyPlugin({
  patterns: [
    {
      from: path.join(config.root, config.paths.node_modules, 'bootstrap-italia'),
      to: path.join(config.root, config.paths.dist, 'assets/bootstrap-italia'),
    },
  ],
  options: {
    concurrency: 100,
  },
});

module.exports = [
  clean,
  cssExtract,
  ...renderedPages,
  config.env === 'production' && optimizeCss,
  webpackBar,
  config.env === 'development' && hmr,
  copyImages,
  copyBtItalia,
].filter(Boolean);
