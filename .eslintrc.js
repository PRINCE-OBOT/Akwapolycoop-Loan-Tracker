module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-new': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-unused-expressions': 'off',
    'no-alert': 'off',
    'prefer-destructuring': 'off',
    'class-methods-use-this': 'off',
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    "no-underscore-dangle": "off",
    "func-names": "off",
    "no-proto": "off",
    ". eslint": "off",
    "no-continue": "off"
  },
};
