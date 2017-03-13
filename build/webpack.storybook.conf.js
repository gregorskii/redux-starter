const aliases = require('./aliases');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    alias: aliases.resolveAlias
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        exclude: /node_modules/
      }
    ]
  }
};
