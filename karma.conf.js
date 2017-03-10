process.env.NODE_ENV = 'test';

const path = require('path');

const buildPath = path.join(__dirname, 'build');
const webpackConfig = require(path.join(buildPath, 'webpack.test.conf'));

module.exports = (config) => {
  //console.log(JSON.stringify(_webpackConfig, null, 4));

  config.set({
    basePath: '',
    port: 9876,
    captureTimeout: 6000,
    colors: true,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: [
      { pattern: 'test/unit/spec/index.js' }
    ],
    exclude: [],
    preprocessors: {
      'test/unit/spec/index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['json', 'spec', 'junit'],
    junitReporter: {
      outputDir: 'test/unit/results',
      outputFile: 'junit-results.xml',
      suite: '',
      useBrowserName: false,
      properties: {}
    },
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false
    },
    jsonReporter: {
      stdout: false,
      outputFile: 'test/unit/results/results.json'
    }
  });
};
