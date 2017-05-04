const aliases = require('./aliases');
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: Object.assign(aliases.resolveAlias, {
      'rsg-components/Logo': path.join(__dirname, '..', 'styleguide/components/Logo'),
      'rsg-components/Wrapper': path.join(__dirname, '..', 'styleguide/components/Wrapper'),
      'rsg-components/StyleGuide/StyleGuideRenderer': path.join(__dirname, '..', 'styleguide/components/StyleGuideRenderer')
    })
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /(\.global|_bootstrap)\.scss$/,
        use: [{
          loader: 'css-loader',
          options: { modules: false }
        },
        {
          loader: 'postcss-loader'
        },
        { loader: 'sass-loader' }]
      },
      {
        test: /^((?!(\.global|_bootstrap)).)*\.scss$/,
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]--[hash:base64:5]'
          }
        },
        { loader: 'sass-loader' }]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: '10000'
          }
        }]
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      }
    ]
  }
};
