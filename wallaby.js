process.env.NODE_ENV = 'test';

const path = require('path');
const fs = require('fs');
const wallabyWebpack = require('wallaby-webpack');

const webpackConfig = require('./build/webpack.test.conf');
const _babelConfig = fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf-8');
const babelConfig = JSON.parse(_babelConfig);

module.exports = function (wallaby) {
  const postProcessor = wallabyWebpack(webpackConfig);

  return {
    debug: true,
    testFramework: 'mocha',
    files: [
      { pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false },
      { pattern: 'src/**/!(*-spec).js?(x)', load: false },
      { pattern: 'src/**/!(*-storybook).js?(x)', ignore: true },
      { pattern: 'test/unit/spec/helpers/**/*.js?(x)', instrument: false, load: false }
    ],
    tests: [
      { pattern: 'src/**/*-spec.js?(x)', load: false }
    ],
    postprocessor: postProcessor,
    setup: function () {
      // required to trigger test loading
      window.__moduleBundler.loadTests();
    }
  };
};
