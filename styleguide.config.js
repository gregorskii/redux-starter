const webpackConfig = require('./build/webpack.styleguide.conf');
const glob = require('glob');
const path = require('path');

module.exports = {
  title: 'Redux Starter Styleguide',
  highlightTheme: 'paraiso-dark',
  theme: {
    baseBackground: '#fdfdfc',
    link: '#274e75',
    linkHover: '#90a7bf',
    border: '#e0d2de',
    font: ['Helvetica', 'sans-serif'],
  },
  styles: {
    Playground: {
      root: {
        borderRadius: 0,
        borderWidth: [
          [0, 0, 1, 0]
        ],
      },
      preview: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      codeToggle: {
        marginTop: 1,
        border: 0,
      },
      hideCode: {
        background: 'none',
      },
    },
    Markdown: {
      pre: {
        border: 0,
        background: 'none',
      },
      code: {
        fontSize: 14,
      },
    },
  },
  components: () => {
    const files = glob.sync(
      path.join('src/components', '**/*.jsx'));

    return files.filter(file => !/(-(|spec|storybook)|app)/i.test(file));
  },
  webpackConfig
};
