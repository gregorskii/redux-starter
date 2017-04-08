const querystring = require('querystring');

const aliases = require('./aliases');

// As of writing storybook does not support webpack 2
module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    fallback: [aliases.nodeRoot],
    alias: aliases.resolveAlias
  },
  module: {
    loaders: [
      {
        test: /\.global\.scss$/,
        loader: [
          'style-loader',
          'css-loader?' + querystring.stringify({
            modules: false
          }),
          'sass-loader'
        ].join('!')
      },
      {
        test: /^((?!(.global)).)*\.scss$/,
        loader: [
          'style-loader',
          'css-loader?' + querystring.stringify({
            modules: true,
            localIdentName: '[local]--[hash:base64:5]'
          }),
          'sass-loader'
        ].join('!')
      }
    ]
  }
};
