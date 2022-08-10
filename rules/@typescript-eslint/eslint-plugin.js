const configs = [
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
  'plugin:@typescript-eslint/strict',
]

// eslint-disable-next-line no-console
console.log(configs.map((config) => `  ${config.split(':')[1]}`).join('\n'))

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      extends: configs,
      parser: '@typescript-eslint/parser',
    },
  ],
}
