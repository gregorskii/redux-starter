const webpack = require('webpack');

const aliases = require('./aliases');
const config = require('../config');

const conf = config.test;

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    alias: aliases.resolveAlias
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  },
  externals: {
    "cheerio": 'window',
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    "react": 'React',   // will be bundled
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      context: __dirname
    }),
    new webpack.DefinePlugin({
      'process.env': conf.env
    })
  ]
};
