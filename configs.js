const { hasAnyDep } = require('./lib/utils')

const configs = []

if (hasAnyDep('typescript'))
  configs.push('@typescript-eslint/eslint-plugin', 'airbnb-typescript')
else configs.push(hasAnyDep('react') ? 'airbnb' : 'airbnb-base')

configs.push('adjunct')

module.exports = { configs }
