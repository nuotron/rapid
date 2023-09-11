module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    node: true,
    es2020: true,
    browser: true,
    mocha: true
  },
  rules: {
    'no-console': 'warn',
    'no-alert': 'warn',
    'no-multi-spaces': 'warn',
    'array-bracket-newline': [
      'warn',
      'consistent'
    ],
    'array-bracket-spacing': [
      'warn',
      'never'
    ],
    'block-spacing': [
      'warn',
      'never'
    ],
    'brace-style': [
      'warn',
      '1tbs', {
        'allowSingleLine': true
      }
    ],
    'camelcase': 'warn',
    'capitalized-comments': [
      'warn',
      'never'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'comma-spacing': [
      'warn', {
        'before': false,
        'after': true
      }
    ],
    'comma-style': [
      'warn',
      'last'
    ],
    'computed-property-spacing': [
      'warn',
      'never'
    ],
    'eol-last': [
      'warn',
      'always'
    ],
    'func-call-spacing': [
      'error',
      'never'
    ],
    'function-paren-newline': [
      'warn',
      'consistent'
    ],
    'indent': [
      'warn',
      2
    ],
    'key-spacing': [
      'warn', {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'strict'
      }
    ],
    'keyword-spacing': [
      'warn', {
        'before': true,
        'after': true,
        'overrides': {
          'if': {'after': false},
          'for': {'after': false},
          'while': {'after': false}
        }
      }
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    'no-lonely-if': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-trailing-spaces': 'warn',
    'no-whitespace-before-property': 'error',
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'never'
    ],
    'space-before-blocks': 'warn',
    'space-before-function-paren': [
      'warn',
      'never'
    ],
    'space-in-parens': [
      'warn',
      'never'
    ],
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': [
      'warn',
      'always'
    ],
    'no-var': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': [
      'warn',
      'never'
    ]
  }
}
