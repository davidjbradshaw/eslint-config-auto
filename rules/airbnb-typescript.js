const { hasAnyDep } = require('../lib/utils')

const hasReact = hasAnyDep('react')
const configs = hasReact ? ['airbnb-typescript'] : ['airbnb-typescript/base']

// eslint-disable-next-line no-console
console.log(configs.map((config) => `  eslint-config-${config}`).join('\n'))

module.exports = {
  overrides: [
    {
      files: ['*.ts{s}', '**/*.ts{s}'],
      extends: configs,
      rules: {
        '@typescript-eslint/naming-convention': 0, // conflicts with unicorn
      },
    },
  ],
}
