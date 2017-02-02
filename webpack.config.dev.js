import webpack from 'webpack';
import path from 'path';
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoaderQuery = {
  modules: true,
  importLoaders: 2,
  sourceMap: true,
  localIdentName: '[local]_[hash:base64:3]',
};

const sassLoaderQuery = {
  outputStyle: 'expanded',
  sourceMap: true,
};

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index',
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new ExtractTextPlugin([], 'styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
      { test: /\.css$/, include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
