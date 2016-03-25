var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH     = path.resolve(__dirname);
var APP_PATH      = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH    = path.resolve(ROOT_PATH, 'build');
var APP_HOST      = (process.env.HOST || 'localhost');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://' + APP_HOST + ':8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [
      // Every js and jsx file pass through the babel compiler before going through the hot
      // module loading for livereload.
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'react-hot!babel' },

      // Sass files are converted to css and then loaded using the style loader.
      //
      // CSS options enabled:
      // - sourceMap to map the compressed css to the uncompressed version.
      //
      // SASS options enabled:
      // - sourceMap to map the compressed css to the uncompressed version.
      // - outputStyle = expanded, to return expanded css instead of compressed css (useful during development).
      { test: /\.scss$/, loader: 'style!css?sourceMap!sass?outputStyle=expanded&sourceMap' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: BUILD_PATH,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
