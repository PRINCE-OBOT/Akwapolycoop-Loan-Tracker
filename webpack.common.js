const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/homepage/template_homepage.js',

    'admin-dashboard': './src/homepage/admin/admin-dashboard/template_admin-dashboard.js',

    'admin-login': './src/homepage/admin/admin-login/template_admin-login.js',

    'admin-sign-up': './src/homepage/admin/admin-sign-up/template_admin-sign-up.js',

    'borrower-sign-up': './src/homepage/borrower/borrower-sign-up/template_borrower-sign-up.js',

    'borrower-login': './src/homepage/borrower/borrower-login/template_borrower-login.js',

    'borrower-dashboard':
      './src/homepage/borrower/borrower-dashboard/template_borrower-dashboard.js',

    'borrower-profile': './src/homepage/borrower/borrower-profile/template_borrower-profile.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  cache: false,
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugins({
      template: './src/homepage/template_homepage.html',
      filename: 'index.html',
      chunks: ['index'],
    }),

    new HTMLWebpackPlugins({
      template: './src/homepage/admin/admin-dashboard/template_admin-dashboard.html',
      filename: 'admin-dashboard.html',
      chunks: ['admin-dashboard'],
    }),

    new HTMLWebpackPlugins({
      template: './src/homepage/admin/admin-login/template_admin-login.html',
      filename: 'admin-login.html',
      chunks: ['admin-login'],
    }),

    new HTMLWebpackPlugins({
      template: './src/homepage/admin/admin-sign-up/template_admin-sign-up.html',
      filename: 'admin-sign-up.html',
      chunks: ['admin-sign-up'],
    }),

    new HTMLWebpackPlugins({
      template: './src/homepage/borrower/borrower-sign-up/template_borrower-sign-up.html',
      filename: 'borrower-sign-up.html',
      chunks: ['borrower-sign-up'],
    }),

    new HTMLWebpackPlugins({
      template: './src/homepage/borrower/borrower-dashboard/template_borrower-dashboard.html',
      filename: 'borrower-dashboard.html',
      chunks: ['borrower-dashboard'],
    }),

    new HTMLWebpackPlugins({
      template: './src/homepage/borrower/borrower-login/template_borrower-login.html',
      filename: 'borrower-login.html',
      chunks: ['borrower-login'],
    }),

    new HTMLWebpackPlugins({
      template: './src/homepage/borrower/borrower-profile/template_borrower-profile.html',
      filename: 'borrower-profile.html',
      chunks: ['borrower-profile'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
