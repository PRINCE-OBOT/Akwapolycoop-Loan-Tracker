const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  entry: {
    homepage: './src/homepage/template_homepage.js',

    'admin-dashboard': './src/homepage/admin/admin-dashboard/template_admin-dashboard.js',
    
    'admin-login': './src/homepage/admin/admin-login/template_admin-login.js',
    
    'admin-sign-up': './src/homepage/admin/admin-sign-up/template_admin-sign-up.js',
    
    'register-borrower': './src/homepage/admin/register-borrower/template_register-borrower.html',

    'borrower-dashboard':
    './src/homepage/borrower/borrower-dashboard/template_borrower-dashboard.js',
    
    'borrower-login':
    './src/homepage/borrower/borrower-login/template_borrower-login.js',
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
      template: './src/homepage/admin/register-borrower/template_register-borrower.html',
      filename: 'register-borrower.html',
      chunks: ['register-borrower'],
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
