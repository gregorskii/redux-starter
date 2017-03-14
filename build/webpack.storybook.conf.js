const aliases = require('./aliases');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass'],
    fallback: [aliases.nodeRoot],
    alias: aliases.resolveAlias
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        exclude: /node_modules/
      }
    ]
  }
};
