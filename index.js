module.exports = {
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'jest', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-undef': 'off', // typescript handles it
    'no-unused-vars': 'off', // @typescript-eslint/no-unused-vars is enabled
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { typedefs: false, ignoreTypeReferences: true, functions: false },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true,
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
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
    'jest/expect-expect': 'off',
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
    'no-useless-escape': 'off',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-template': 'error',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'quote-props': ['warn', 'as-needed'],
    'semi-spacing': ['error', { before: false, after: true }],
    'simple-import-sort/sort': 'error',
    'space-before-blocks': 'error',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    strict: ['error', 'never'],
  },
};
