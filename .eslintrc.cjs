module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': [0, 'error', 'window'],
    'react/static-property-placement': ['error', 'static public field'],
    'no-underscore-dangle': ['allow'],
  },
};
