const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    watchFiles: ['./src/homepage/template_homepage.html'],
    hot: true, // enable hot module replacement (HMR)
    open: true, // automatically open browser
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    ],
  },
});