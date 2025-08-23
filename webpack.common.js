const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  entry: {
    homepage: './src/homepage/template_homepage.js',

    'admin-dashboard': './src/homepage/admin/admin-dashboard/template_admin-dashboard.js',

    'borrower-dashboard':
      './src/homepage/borrower/borrower-dashboard/template_borrower-dashboard.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
     open: true, // automatically open browser
  },
  plugins: [
    new HTMLWebpackPlugins({
      template: './src/homepage/template_homepage.html',
      filename: 'index.html',
      chunks: ['homepage'],
    }),

    new HTMLWebpackPlugins({
      template: './src/homepage/admin/admin-dashboard/template_admin-dashboard.html',
      filename: 'admin-dashboard.html',
      chunks: ['admin-dashboard'],
    }),

    new HTMLWebpackPlugins({
      template: './src/homepage/borrower/borrower-dashboard/template_borrower-dashboard.html',
      filename: 'borrower-dashboard.html',
      chunks: ['borrower-dashboard'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
