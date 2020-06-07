# eslint-config-auto

This package contains the linting rules for JavaScript projects at Smart Pension. When run it will read the contents of your project's `package.json` file and auto configure itself with the appropreate esLint rules.

## Install

To install this config, run the following command.

```sh
yarn add eslint-config-auto --dev
```

## Configure

Create an `.eslintrc` file with the following contents.

```json
{
  "extends": ["eslint-config-auto"]
}
```

You can now include `html`, `json` and `markdown` in the list of files passed to `eslint` to lint any JavaScript contained.

```json
{
  "scripts": {
    "eslint": "eslint --color *.{html,js,json,jsx,md,ts,tsx} src/*.{html,js,json,jsx,md,ts,tsx}",
    "eslint:fix": "npm run eslint -- --fix"
  }
}
```

## Install Dependencies

After you have configured `eslint` to include this package, the first time you run `eslint` it will output the `npm` command to install the dependencies required for your project. Cut'n'paste this command into the console, and you are then ready to start linting.

## Rules

### AirBNB

The most appropreate version of the AirBNB eslint config will be automatically selected

### Adjunct

The [eslint-config-adjunct](https://github.com/davidjbradshaw/eslint-config-auto/blob/master/README.md) config is included, this will install a range of plugins based on your project config.

### TypeScript

If you project included TypeScript, then the rules will adapt to lint typescipt files.
