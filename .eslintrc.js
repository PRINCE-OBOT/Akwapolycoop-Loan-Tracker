module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    "no-new": "off",
    "no-console": "off",
    "no-param-reassign": "off",
    "consistent-return": "off",
    "no-unused-expressions": "off",
    "no-alert": "off"
  },
};
