var cooking = require('cooking');

cooking.set({
  entry: {
    'index': './src/popper.vue'
  },
  dist: './lib',
  template: false,
  format: 'umd',
  moduleName: 'VuePopper',
  // production
  clean: true,
  extractCSS: 'style.css',
  extends: ['vue']
});

module.exports = cooking.resolve();
