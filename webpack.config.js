'use strict';

var path = require('path');
var webpack = require('webpack');


var PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  target: 'web',
  cache: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(PATHS.src, 'index.js')
  ],
  output: {
    path: PATHS.build,
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        include: /src/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  debug: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  }
};
