[![npm version](https://badge.fury.io/js/%40cstar-industries%2Feslint-config.svg)](https://www.npmjs.com/package/@cstar-industries/eslint-config)

## Usage

Install with `npm` (or `yarn`, if that's your thing).

```shell
npm install @cstar-industries/eslint-config
```

You will need to install the peer dependencies inside your project:

```shell
npm install eslint@6.x eslint-plugin-prettier@...
```

> :warning: Make sure you use compatible versions from the peerDependencies
> definitions!

Then configure ESLint to use the configuration rules. In your `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@cstar-industries'],
  settings: {
    'import/resolver': 'webpack',
  },
};
```

## Contributing

Feel free to contribute suggestions to this repository.

If you are a member of the core @cstar-industries team, create a new branch,
commit your changes and submit a pull request.

If you are outside the team, fork the public repo, commit your changes and
submit a pull request.

## License

Do What the Fuck You Want to Public License, version 2 ([license](LICENSE))
