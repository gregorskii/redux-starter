process.env.NODE_ENV = 'test';

const path = require('path');
const fs = require('fs');
const wallabyWebpack = require('wallaby-webpack');

const webpackConfig = require('./build/webpack.base.conf');
const _babelConfig = fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf-8');
const babelConfig = JSON.parse(_babelConfig);

module.exports = function (wallaby) {
  return {
    debug: true,
    files: [
      {pattern: 'test/unit/helpers/**/*.js?(x)', load: false},
      {pattern: 'src/**/!(*-spec).js?(x)', load: false}
    ],
    tests: [
      {pattern: 'src/**/*-spec.js?(x)', load: false}
    ],
    compilers: {
      'src/**/*.js?(x)':
      wallaby.compilers.babel(babelConfig)
    },
    preprocessors: {
      'src/**/*.js?(x)': file => require('babel-core').transform(
        file.content, {
          sourceMaps: 'both'
        }
      )
    },
    postprocessor:  wallabyWebpack(webpackConfig),
    setup: function () {
      // required to trigger test loading
      window.__moduleBundler.loadTests();
    }
  };
};
