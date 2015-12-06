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
  entry: path.join(PATHS.src, 'index.js'),
  resolve: {
    root: PATHS.src,
    extensions: ['', '.js','jsx'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: PATHS.build,
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
