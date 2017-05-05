process.env.NODE_ENV = 'test';

module.exports = (wallaby) => {
  return {
    debug: true,
    testFramework: 'mocha',
    files: [
      'src/**/*.js?(x)',
      'test/unit/spec/helpers/**/*.js?(x)',
      '!src/**/*-spec.js?(x)',
      '!src/**/*-storybook.js?(x)'
    ],
    tests: [
      'src/**/*-spec.js?(x)'
    ],
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel(),
      '**/*.scss': wallaby.compilers.babel()
    },
    setup: () => {
      // eslint-disable-next-line global-require
      require('./test/unit/spec/helpers');
    }
  };
};
