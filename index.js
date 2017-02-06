module.exports = {

    // set this as the base `.eslint` file
    root: true,

    // start with a sane baseline
    extends: 'eslint:recommended',

    // linting rules settings
    rules: {
        'array-bracket-spacing': ['error', 'always', {
            'singleValue': false,
            'objectsInArrays': false,
            'arraysInArrays': false
        }],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {
            'allowSingleLine': true
        }],
        'camelcase': ['error', { 'properties': 'never' }],
        'comma-spacing': ['error', {
            'before': false, 'after': true
        }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'eol-last': ['error', 'always'],
        'indent': ['error', 4, {
            'SwitchCase': 1,
            'VariableDeclarator': 1,
            'outerIIFEBody': 1,
            'FunctionDeclaration': {
                'parameters': 1,
                'body': 1
            },
            'FunctionExpression': {
                'parameters': 1,
                'body': 1
            }
        }],
        'linebreak-style': ['error', 'unix'],
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'no-inline-comments': 'off',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': ['error', {
            'max': 2, 'maxEOF': 1
        }],
        'no-mixed-spaces-and-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-spaced-func': 'error',
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never'
        }],
        'object-curly-spacing': ['error', 'always'],
        'semi': ['error', 'always'],
        'space-before-blocks': 'error',
        'space-infix-ops': 'error',
        'space-in-parens': [ 'error', 'always' ],
        'semi-spacing': ['error', { 'before': false, 'after': true }]
    }

};
