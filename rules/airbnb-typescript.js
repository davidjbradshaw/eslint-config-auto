const { hasAnyDep } = require('../lib/utils')

const hasReact = hasAnyDep('react')
const configs = hasReact ? ['airbnb-typescript'] : ['airbnb-typescript/base']

// eslint-disable-next-line no-console
console.log(configs.map((config) => `  eslint-config-${config}`).join('\n'))

module.exports = {
  overrides: [
    {
      files: ['*.ts', '**/*.ts', '*.tsx', '**/*.tsx'],
      extends: configs,
      rules: {
        '@typescript-eslint/naming-convention': 0, // conflicts with unicorn

        // Disable rules that need tsconfig
        '@typescript-eslint/dot-notation': 0,
        '@typescript-eslint/no-throw-literal' : 0,

        '@typescript-eslint/await-thenable': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-for-in-array': 0,
        '@typescript-eslint/no-implied-eval': 0,
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/prefer-regexp-exec': 0,
        '@typescript-eslint/require-await': 0,
        '@typescript-eslint/restrict-plus-operands': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
        '@typescript-eslint/unbound-method': 0,
      },
    },
  ],
}
