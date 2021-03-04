module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  extends: ['eslint:recommended', 'eslint:recommended', 'plugin:react/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    semi: ['warn', 'always'],
    'no-extra-semi': 'warn',
    quotes: ['warn', 'single']
  }
};
