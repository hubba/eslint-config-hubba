module.exports = {
    env: {
        es6: true,
        jasmine: true,
        node: true
    },
    // start with a sane baseline
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
    },
    plugins: ['jasmine'],
    // set this as the base `.eslint` file
    root: true,
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: true
        }],
        camelcase: ['error', { properties: 'never' }],
        'comma-spacing': ['error', {
            before: false, after: true
        }],
        'comma-style': ['error', 'last'],
        'eol-last': ['error', 'always'],
        indent: ['error', 4, {
            FunctionDeclaration: {
                body: 1,
                parameters: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            MemberExpression: 0,
            outerIIFEBody: 1,
            SwitchCase: 1,
            VariableDeclarator: 1
        }],
        'jasmine/no-disabled-tests': 2,
        'jasmine/no-focused-tests': 2,
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'linebreak-style': ['error', 'unix'],
        'no-console': 'off',
        'no-dupe-keys': 'error',
        'no-inline-comments': 'off',
        'no-multiple-empty-lines': ['error', {
            max: 2, maxEOF: 1
        }],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-spaced-func': 'error',
        'no-trailing-spaces': 'error',
        'no-useless-escape': 'off',
        'no-var': 'error',
        'object-curly-spacing': ['error', 'always'],
        'one-var': 'error',
        'prefer-template': 'error',
        quotes: ['error', 'single', { avoidEscape: true }],
        'quote-props': ['warn', 'as-needed'],
        semi: ['error', 'always'],
        'semi-spacing': ['error', { before: false, after: true }],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never'
        }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error'
    }
};
