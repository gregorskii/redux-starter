const wallabyWebpack = require('wallaby-webpack');
const webpackConfig = require('./build/webpack.test.conf');

const webpackPostprocessor = wallabyWebpack(webpackConfig);

process.env.NODE_ENV = 'test';

module.exports = (wallaby) => {
  return {
    debug: true,
    testFramework: 'mocha',
    files: [
      { pattern: 'src/**/*.js?(x)', load: false },
      { pattern: 'test/unit/spec/helpers/**/*.js?(x)', load: false },
      { pattern: '!src/**/*-spec.js?(x)', ignore: true },
      { pattern: '!src/**/*-storybook.js?(x)', load: false }
    ],
    tests: [
      { pattern: 'src/**/*-spec.js?(x)', load: false }
    ],
    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel()
    },
    postprocessor: webpackPostprocessor,
    setup: () => {
      // eslint-disable-next-line global-require
      require('./test/unit/spec/helpers');
    }
  };
};
