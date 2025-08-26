const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    watchFiles: [
      './src/homepage/template_homepage.html',
      './src/homepage/admin/admin-dashboard/template_admin-dashboard.html',
      './src/homepage/admin/admin-login/template_admin-login.html',
    ],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
