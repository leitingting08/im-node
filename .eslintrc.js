module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'off',
      {
        singleQuote: true,
        semi: false,
      },
    ]
  },
  parserOptions: {
    "ecmaVersion": 6,
    parser: 'babel-eslint',
  },
  globals: {
    AMap: true,
  },
}
