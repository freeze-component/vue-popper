var cooking = require('cooking');

cooking.set({
  entry: {
    'index': './src/popper.js'
  },
  dist: './lib',
  template: false,
  format: 'umd',
  moduleName: 'VuePopper',
  // production
  clean: true,
  extractCSS: 'style.css'
});

module.exports = cooking.resolve();
