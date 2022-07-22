const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./site.config');
const path = require('path');
// Define common loader constants
const sourceMap = config.env !== 'production';

// Javascript loaders
const js = {
  test: /\.js(x)?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
    'eslint-loader',
  ],
};

// Style loaders
const styleLoader = {
  loader: 'style-loader',
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap,
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('autoprefixer')(),
    ],
    sourceMap,
  },
};

const css = {
  test: /\.css$/,
  use: [
    config.env === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
    cssLoader,
    postcssLoader,
  ],
};

const sass = {
  test: /\.s[c|a]ss$/,
  use: [
    config.env === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
    cssLoader,
    postcssLoader,
    {
      loader: 'sass-loader',
      options: {
        sourceMap,
        implementation: require('sass'),
      },
    },
  ],
};

const less = {
  test: /\.less$/,
  use: [
    config.env === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
    cssLoader,
    postcssLoader,
    {
      loader: 'less-loader',
      options: {
        sourceMap,
      },
    },
  ],
};

// Image loaders
const imageLoader = {
  loader: 'image-webpack-loader',
  options: {
    bypassOnDebug: true,
    gifsicle: {
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    pngquant: {
      quality: '65-90',
      speed: 4,
    },
    mozjpeg: {
      progressive: true,
    },
  },
};

const images = {
  test: /\.(png|svg)$/i,
  exclude: /fonts/,
  use: [
    'file-loader?name=images/[name].[ext]',
    config.env === 'production' ? imageLoader : null,
  ].filter(Boolean),
};

// Font loaders
const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
  exclude: /images/,
  use: [
    {
      loader: 'url-loader',
      query: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      },
    },
  ],
};

// Video loaders
const videos = {
  test: /\.(mp4|webm)$/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[ext]',
        outputPath: 'images/',
      },
    },
  ],
};
const hbs = {
  test: /\.hbs$/,
  loader: 'handlebars-loader',
  query: {
    helperDirs: [path.join(config.root, config.paths.src, 'helpers')],
    partialDirs: [
      path.join(config.root, config.paths.src, 'layouts'),
      path.join(config.root, config.paths.src, 'components'),
      path.join(config.root, config.paths.src, 'pages'),
    ],
    knownHelpersOnly: false,
  },
};
module.exports = [
  hbs,
  js,
  css,
  sass,
  less,
  images,
  fonts,
  videos,
];
