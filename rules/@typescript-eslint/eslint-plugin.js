const configs = [
  'plugin:@typescript-eslint/recommended',
]

// eslint-disable-next-line no-console
console.log(configs.map((config) => `  ${config.split(':')[1]}`).join('\n'))

module.exports = {
  overrides: [
    {
      files: ['*.ts{x}', '**/*.ts{x}'],
      extends: configs,
      parser: '@typescript-eslint/parser',
    },
  ],
}
