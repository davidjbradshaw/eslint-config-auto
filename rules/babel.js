const baseBestPractices = require('eslint-config-airbnb-base/rules/best-practices')
const baseErrors = require('eslint-config-airbnb-base/rules/errors')
const baseStyle = require('eslint-config-airbnb-base/rules/style')

// eslint-disable-next-line no-console
console.log('  eslint-plugin-babel')

module.exports = {
  plugins: ['babel'],
  rules: {
    'new-cap': 'off',
    'babel/new-cap': baseStyle.rules['new-cap'],

    camelcase: 'off',
    'babel/camelcase': baseStyle.rules.camelcase,

    'no-invalid-this': 'off',
    'babel/no-invalid-this': baseBestPractices.rules['no-invalid-this'],

    'object-curly-spacing': 'off',
    'babel/object-curly-spacing': baseStyle.rules['object-curly-spacing'],

    quotes: 'off',
    'babel/quotes': baseStyle.rules.quotes,

    semi: 'off',
    'babel/semi': baseStyle.rules.semi,

    'no-unused-expressions': 'off',
    'babel/no-unused-expressions':
      baseBestPractices.rules['no-unused-expressions'],

    'valid-typeof': 'off',
    'babel/valid-typeof': baseErrors.rules['valid-typeof'],
  },
}
