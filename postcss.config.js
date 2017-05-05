const cssnext = require('postcss-cssnext');

const cssNextOpts = {
  browsers: ['last 2 versions', '> 5%'],
  features: {
    customProperties: {
      variables: {
        // Example
        // 'font-family': '"Avenir Next", Avenir, "Helvetica Neue", Helvetica, sans-serif'
      }
    }
  }
};

module.exports = {
  map: process.env.NODE_ENV === 'dev' ? 'inline' : false,
  plugins: [
    cssnext(cssNextOpts)
  ]
};
