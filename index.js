module.exports = {
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
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
        htmlWhitespaceSensitivity: 'ignore'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
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
