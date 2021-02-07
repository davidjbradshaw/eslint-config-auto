# eslint-config-auto &nbsp;[![NPM version](https://badge.fury.io/js/eslint-config-auto.svg)](http://badge.fury.io/js/eslint-config-auto) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> Automatically configure ESLint based on project dependencies

This project got created because I got tired of managing [eslint](https://eslint.org) in multiple different projects and trying to keep them all vaguely in sync. It will automatically configure the [airbnb eslint rules](https://github.com/airbnb/javascript) and a curated selection of [plugins](https://github.com/davidjbradshaw/eslint-config-auto#rules) that are normally too much bother to setup. This is done based on the contents of your projects `package.json` file each time you run eslint, so that if you add a new library to your project, the associated plugin will get automatically included.

The aim here is to include a range of *mostly reasonable* plugins, whilst not being overly restrictive. The recommended configs for each plugin are used with a few exceptions for rules that seem unduely restrictive. These have been [disabled](https://github.com/davidjbradshaw/eslint-config-auto#rules-1). If you use Prettier then all the formating rules are also omitted by including [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).

In addition to JavaScript, suport is included for linting TypeScript, HTML, Json, and MarkDown files.

## Contibuting

Suggestions for adding new plugings will be carefully considered against the *mostly reasonable* standard and usefulness. If you would like to help out, then I would like add support for *Vue* and other popular frameworks. Thanks goes to [awesome-eslint](https://github.com/dustinspecker/awesome-eslint) for having collated the packages this project utalises.

## Install

To install this config, run the following command.

```sh
npm install eslint-config-auto --save-dev
```

## Configure

Create an `.eslintrc` file with the following contents.

```json
{
  "extends": ["auto"]
}
```

You can now include `html`, `json` and `markdown` in the list of files passed to `eslint` to lint any JavaScript contained.

```json
{
  "scripts": {
    "eslint": "eslint --color --ext .html,.js,.json,.jsx,.md,.ts,.tsx *.* src",
    "eslint:fix": "npm run eslint -- --fix"
  }
}
```

## Install Dependencies

After you have configured `eslint` to include this package, the first time you run `eslint` it will output the `npm` command to install the dependencies required for your project. Copy and paste this command into the console, and you are then ready to start linting.

## Rules

### AirBNB

The most appropreate version of the AirBNB eslint config will be automatically selected.

### Babel

If the project includes Babel in it's `devDependcies`, then [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel) and [eslint-config-airbnb-babel](https://github.com/davidjbradshaw/eslint-config-airbnb-babel) will be loaded and the parser will be set to `babel-eslint`.

Some project setup utils, such as [Create React App](https://github.com/facebook/create-react-app), use Babel without including it as a project dependancies. In such cases you can turn Babel support on by adding `settings: { babel: true }` to your `.eslintrc` config file.

### Code Quality

These two plugins provide a range of code quality rules:

- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

### Compat

If `settings.compat = true` in your `.eslintrc`, then [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) is loaded.

### Langauges

The following plugins expand esLint to support TypeScript, JSON, and lint code contiained in HTML and MarkDown files:

- [@eslint-typescript](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)
- [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html)
- [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)

_If the project includes TypeScript, then the rules will adapt to lint typescript files and the parser will be set to `@typescript-eslint/parser` for `ts` and `tsx` filetypes._

_When linting code snippets in Markdown files, a few [rules](https://github.com/davidjbradshaw/eslint-config-adjunct/blob/master/rules/markdown.js#L3) relating to globals and unused vars are disabled._

### Library Plugins

These plugins will be loaded in based on your project `dependencies` in `package.json`. If a supported library is part of your project then it's related esLint plugins will be loaded. The following packages are supported:

- [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
- [eslint-plugin-lodash-fp](https://github.com/jfmengels/eslint-plugin-lodash-fp)
- [eslint-plugin-ramda](https://github.com/ramda/eslint-plugin-ramda)

### Node

If `env.node = true` in your `.eslintrc` file, then [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) is loaded.

### React

If a project contians React, then a React version of the AirBNB config will be used and if Redux is installed the following extra plugins will be loaded.

- [eslint-plugin-fsa](https://github.com/joseph-galindo/eslint-plugin-fsa)
- [eslint-plugin-react-redux](https://github.com/DianaSuvorova/eslint-plugin-react-redux#readme)
- [eslint-plugin-redux-saga](https://github.com/pke/eslint-plugin-redux-saga)

### Practices

The following esLint plugins enforce good coding practices:

- [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)
- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-no-constructor-bind](https://github.com/markalfred/eslint-plugin-no-constructor-bind)
- [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native)
- [eslint-plugin-optimize-regex](https://github.com/BrainMaestro/eslint-plugin-optimize-regex)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [eslint-plugin-switch-case](https://github.com/lukeapage/eslint-plugin-switch-case)

### Prettier

If prettier is installed, any rules that may conflict with Prettier will be disabled. The plugin should read you Prettier config from your project's root.

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

The prettier configs for different eslint plugins are also automatically included based on which eslint plugins have been installed into your project.

### Security

These plugins add code security rules to esLint:

- [eslint-plugin-no-secrets](https://github.com/nickdeis/eslint-plugin-no-secrets)
- [eslint-plugin-no-unsanitized](https://github.com/mozilla/eslint-plugin-no-unsanitized)
- [eslint-plugin-scanjs-rules](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules)
- [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)

### Test Libraries

Test plugins are loaded based on which testing tools you have listed in `devDependencies` of `package.json`. The following test plugins are supported:

- [eslint-plugin-ava](https://github.com/avajs/eslint-plugin-ava)
- [eslint-plugin-chai-expect](https://github.com/turbo87/eslint-plugin-chai-expect)
- [eslint-plugin-chai-friendly](https://github.com/ihordiachenko/eslint-plugin-chai-friendly)
- [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress)
- [eslint-plugin-jasmine](https://github.com/tlvince/eslint-plugin-jasmine)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-jest-async](https://www.npmjs.com/package/eslint-plugin-jest-async)
- [eslint-plugin-mocha](https://github.com/lo1tuma/eslint-plugin-mocha)
- [eslint-plugin-mocha-cleanup](https://github.com/onechiporenko/eslint-plugin-mocha-cleanup/)
- [eslint-plugin-qunit](https://github.com/platinumazure/eslint-plugin-qunit)
- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)

_For test files a few [rules](https://github.com/davidjbradshaw/eslint-config-adjunct/blob/master/rules/test-overrides.js) are turned off, to better to support normal unit test coding styles._

## Rules

In the most part the default rules are used for the plugins listed above, with the following exceptions.

### Switch-Case

Adds the `fallthrough: 'never'` option to the `newline-between-switch-case` rule.

```js
// Good

switch (foo) {
  case 1:
    something()
    break

  case 2:
  case 3:
    somethingElse()
    break

  default:
    defaultThing()
}
```

### Disabled rules

The following rules are disabled due to them being considered unduly restrictive or unhelpful.

- jest/no-disabled-tests
- react-redux/prefer-separate-component-file
- redux-saga/no-unhandled-errors
- lodash/prefer over native rules
- lodash-fp/use-fp
- unicorn/no-fn-reference-in-iterator
- unicorn/no-array-for-each
- unicorn/no-reduce
- unicorn/no-null
- unicorn/prefer-number-properties
- unicorn/prefer-optional-catch-binding
- unicorn/prevent-abbreviations

The following rules are disabled due to clashing with other plugins

- array-func/prefer-array-from
- import/order
- sort-imports

## License

Copyright &copy; 2020 [David J. Bradshaw](https://github.com/davidjbradshaw).
Licensed under the [MIT License](LICENSE).
