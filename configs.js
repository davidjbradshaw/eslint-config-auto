const { hasAnyDep } = require('./lib/utils')

const configs = []

if (hasAnyDep('typescript')) configs.push('@typescript-eslint/eslint-plugin')

configs.push(hasAnyDep('react') ? 'airbnb' : 'airbnb-base')

if (hasAnyDep('typescript')) configs.push('airbnb-typescript')

module.exports = configs
