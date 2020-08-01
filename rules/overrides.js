module.exports = {
  rules: {
    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/order': 'off',
      },
    },
  ],
}
