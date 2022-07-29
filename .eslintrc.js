module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'linebreak-style': 'off',
    'comma-dangle': ['error', 'never'],
    'no-console': 'off'
  }
};
