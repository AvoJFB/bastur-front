const path = require('path');
const webpack = require('webpack');
const config = require('./config');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'transform-class-properties',
            [
              'transform-runtime', {
                polyfill: false,
                regenerator: true,
              },
            ],
          ],
        },
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_BASE: JSON.stringify(config.API_BASE),
      },
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
};
