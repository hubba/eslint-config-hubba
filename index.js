module.exports = {
  env: {
    node: true,
    'jest/globals': true,
  },
  plugins: [
    '@typescript-eslint',
    'cypress',
    'simple-import-sort',
    'jest',
    'prettier',
  ],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:cypress/recommended',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: ['error', { properties: 'never' }],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['error', 'last'],
    curly: ['error', 'all'],
    'eol-last': ['error', 'always'],
    'global-require': 'error',
    'import/order': 'off',
    // handled by prettier
    indent: 'off',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'no-dupe-keys': 'error',
    'no-inline-comments': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-escape': 'off',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-template': 'error',
    'prettier/prettier': 'error',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'quote-props': ['warn', 'as-needed'],
    // handled by prettier
    semi: 'off',
    'semi-spacing': ['error', { before: false, after: true }],
    'simple-import-sort/sort': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    strict: ['error', 'never'],
  },
};
