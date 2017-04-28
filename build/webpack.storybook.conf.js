const querystring = require('querystring');

const aliases = require('./aliases');

const noModuleQuery = querystring.stringify({
  modules: false
});

const moduleQuery = querystring.stringify({
  modules: true,
  localIdentName: '[local]--[hash:base64:5]'
});

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
        test: /(\.global|_bootstrap)\.scss$/,
        loader: [
          'style-loader',
          `css-loader?${noModuleQuery}`,
          'sass-loader'
        ].join('!')
      },
      {
        test: /^((?!(\.global|_bootstrap)).)*\.scss$/,
        loader: [
          'style-loader',
          `css-loader?${moduleQuery}`,
          'sass-loader'
        ].join('!')
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file-loader',
      }
    ]
  }
};
