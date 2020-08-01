const { hasAnyDep } = require('../lib/utils')

const hasReact = hasAnyDep('react')
const configs = hasReact ? ['airbnb-typescript'] : ['airbnb-typescript/base']

// eslint-disable-next-line no-console
console.log(configs.map((config) => `  eslint-config-${config}`).join('\n'))

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: configs,
      rules: {
        '@typescript-eslint/naming-convention': 'off', // conflicts with unicorn
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
  ],
}
