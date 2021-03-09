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
  plugins: ['react', 'react-hooks'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    semi: ['warn', 'always'],
    'no-extra-semi': 'warn',
    quotes: ['warn', 'single'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  }
};
