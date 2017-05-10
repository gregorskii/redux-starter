const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../config');
const aliases = require('./aliases');
const utils = require('./utils');

const conf = process.env.NODE_ENV === 'prod' ? config.prod : config.dev;

module.exports = {
  entry: {
    app: 'src/index.jsx'
  },
  output: {
    path: conf.outputPath,
    publicPath: conf.assetsPublicPath,
    filename: utils.assetsPath('scripts/[name].[chunkhash].js')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: aliases.resolveAlias
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: [/\.global/, /bootstrap/],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { modules: false }
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: [/\.global/, /bootstrap/, /node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]--[hash:base64:5]'
              }
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '10000'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    // extract css into its own files
    new ExtractTextPlugin({
      filename: utils.assetsPath('styles/[name].[contenthash].css'),
      allChunks: true
    })
  ]
};
