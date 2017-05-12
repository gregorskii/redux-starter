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
        test: /\.scss$/,
        include: [/\.global/, /bootstrap/],
        use: [
          {
            loader: 'css-loader',
            options: { modules: false }
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.scss$/,
        exclude: [/\.global/, /bootstrap/],
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(svg|png|gif|jp(e)?g)(\?[\s\S]+)?$/,
        use: 'file-loader'
      }
    ]
  }
};
