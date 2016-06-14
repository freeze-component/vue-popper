var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: './example/main.js',
  dist: './example/dist',
  template: './example/index.tpl',

  devServer: {
    port: 8062,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  publicPath: '/vue-popper/',
  extractCSS: true,
  extends: ['vue', 'lint']
});

cooking.add('externals', {
  vue: 'Vue'
});

cooking.add('resolve.alias', {
  'vue-popper': path.join(__dirname, 'src/popper.js')
});

module.exports = cooking.resolve();
