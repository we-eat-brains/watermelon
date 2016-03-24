var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: 'bundle.js'
  }
};
