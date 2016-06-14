var cooking = require('cooking');

cooking.set({
  entry: {
    'index': './src/popper.vue'
  },
  dist: './lib',
  template: false,

  // production
  clean: true,
  publicPath: '/vue-popper/',
  extractCSS: 'style.css',
  extends: ['vue']
});

cooking.add('externals', {
  vue: 'Vue'
});

module.exports = cooking.resolve();
