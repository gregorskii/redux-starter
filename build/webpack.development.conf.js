const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const stylelintConfig = path.join(process.cwd(), '.stylelintrc.yml');

const config = require('../config');
const paths = require('./paths');
const baseWebpackConfig = require('./webpack.base.conf');

const conf = config.development;

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach((name) => {
  baseWebpackConfig.entry[name] = [path.join(paths.build, './dev-client')]
    .concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
  output: {
    path: conf.outputPath,
    publicPath: conf.assetsPublicPath,
    filename: `${conf.scriptOutputPath}/[name].js`
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: eslintFriendlyFormatter,
          configFile: './.eslintrc.yml'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': conf.env
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      context: __dirname
    }),
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      configFile: stylelintConfig
    }),
    new HtmlWebpackPlugin({
      filename: conf.indexOutputPath,
      template: conf.indexTemplatePath,
      inject: true
    }),
    new FaviconsWebpackPlugin({
      logo: config.favicon,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  ]
});
