const querystring = require('querystring');

const aliases = require('./aliases');

const noModuleQuery = querystring.stringify({
  modules: false
});

const moduleQuery = querystring.stringify({
  modules: true,
  importLoaders: 1,
  localIdentName: '[local]--[hash:base64:5]'
});

/**
* webpack-wallaby does not support webpack 2
*/
module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    fallback: [aliases.nodeRoot],
    alias: aliases.resolveAlias
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: [/\.global/, /bootstrap/],
        loader: [
          'style-loader',
          `css-loader?${noModuleQuery}`,
          'postcss-loader',
          'sass-loader'
        ].join('!')
      },
      {
        test: /\.scss$/,
        exclude: [/\.global/, /bootstrap/, /node_modules/],
        loader: [
          'style-loader',
          `css-loader?${moduleQuery}`,
          'postcss-loader',
          'sass-loader'
        ].join('!')
      }
    ]
  }
};
