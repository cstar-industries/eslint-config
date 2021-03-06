module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:import/errors', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        printWidth: 120,
        trailingComma: 'none',
        htmlWhitespaceSensitivity: 'css'
      }
    ],
    eqeqeq: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    curly: ['error', 'all'],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': [
      'error',
      // Ignore no-unused-vars for variables named only with underscores: `_`, `__`, etc.
      {
        varsIgnorePattern: '^_+$',
        argsIgnorePattern: '^_+$',
        caughtErrorsIgnorePattern: '^_+$'
      }
    ],
    'import/no-unresolved': ['off'],
    'import/first': ['error'],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    'import/newline-after-import': ['warn']
  }
};
