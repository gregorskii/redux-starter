const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../config');
const aliases = require('./aliases');

let conf;

if (Object.hasOwnProperty.call(config, process.env.NODE_ENV)) {
  conf = config[process.env.NODE_ENV];
}

const sourceMap = conf && !!conf.sourceMap;

module.exports = {
  devtool: sourceMap ? 'source-map' : false,
  entry: {
    app: 'src/index.jsx'
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
              options: {
                modules: false,
                minimize: true,
                sourceMap
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap
              }
            }
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
                minimize: true,
                importLoaders: 1,
                localIdentName: '[local]--[hash:base64:5]',
                sourceMap
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap
              }
            }
          ]
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${conf.fontOutputPath}/[name].[hash].[ext]`
            }
          }
        ]
      },
      {
        test: /\.(svg|png|gif|jp(e)?g)(\?[\s\S]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${conf.imageOutputPath}/[name].[hash].[ext]`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    // extract css into its own files
    new ExtractTextPlugin({
      filename: `${conf.styleOutputPath}/[name].[contenthash].css`,
      allChunks: true
    })
  ]
};
