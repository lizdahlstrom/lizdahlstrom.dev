module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:@next/next/recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
    'react/prop-types': 0,
    '@next/next/no-img-element': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
