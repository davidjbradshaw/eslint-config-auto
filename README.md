# eslint-config-auto

This config will automatically configure the *airbnb* esLint rules and a range of other plugins, based on the contents of your projects `package.json` file.

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

The most appropreate version of the AirBNB eslint config will be automatically selected

### Adjunct

The [eslint-config-adjunct](https://github.com/davidjbradshaw/eslint-config-adjunct#plugins) config is included, this will install a range of reasonable plugins based on your project's dependancies, that cover best practices, popular utility librarys, security and testing frameworks.

### Babel

If the project includes Babel in it's `devDependcies`, then [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel) and [eslint-config-airbnb-babel](https://github.com/davidjbradshaw/eslint-config-airbnb-babel) will be loaded and the parser will be set to `babel-eslint`.

Some project setup utils, such as [Create React App](https://github.com/facebook/create-react-app), use Babel without including it as a project dependancy. In such cases you can turn Babel support on by adding `settings: { babel: true }` to your `.eslintrc` config file.

### Compat

If `settings.compat = true` in your `.eslintrc`, then [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) is loaded.

### Node

If `env.node = true` in your `.eslintrc` file, then [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) is loaded.

### React

If a project contians React, then a React version of the AirBNB config will be used.

### Prettier

If prettier is installed, any rules that may conflict with Prettier will be disabled. The plugin should read you Prettier config from your project's root.

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

The prettier configs for different eslint plugins are also automatically included based on which eslint plugins have been installed into your project.

### TypeScript

If the project includes TypeScript, then the rules will adapt to lint typescript files and the parser will be set to `@typescript-eslint/parser` for `ts` and `tsx` filetypes.
