# `@cstar-industries/eslint-config`

## Usage

Install with `npm` (or `yarn`, if that's your thing).

```shell
npm install @cstar-industries/eslint-config
```

You will need to install the peer dependencies inside your project:

```shell
npm install eslint@6.x eslint-plugin-prettier@...
```

> :warning: Make sure you use compatible versions from the peerDependencies definitions!

Then configure ESLint to use the configuration rules. In your `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@cstar-industries'],
  settings: {
    'import/resolver': 'webpack',
  },
};
```
