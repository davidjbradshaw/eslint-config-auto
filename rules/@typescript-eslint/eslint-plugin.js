const configs = [
  'plugin:@typescript-eslint/recommended',
]

// eslint-disable-next-line no-console
console.log(configs.map((config) => ` ${config.split(':')[1]}`).join('\n'))

module.exports = {
  extends: configs,
  overrides: [
    {
      files: ['*.ts{x}', '**/*.ts{x}'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
