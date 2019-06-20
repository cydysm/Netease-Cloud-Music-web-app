module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ["error", { "props": false }],
    "prefer-destructuring": ["error", {"object": false, "array": false}]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
