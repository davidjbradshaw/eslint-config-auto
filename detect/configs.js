const { settings = {} } = require('../lib/config')
const { hasAnyDep } = require('../lib/utils')

const hasBabel = hasAnyDep('babel') || hasAnyDep('@babel/core') || settings.babel

const configs = []

if (hasAnyDep('typescript')) configs.push('@typescript-eslint/eslint-plugin')

configs.push(hasAnyDep('react') ? 'airbnb' : 'airbnb-base')
if (hasAnyDep('typescript')) configs.push('airbnb-typescript')
if (hasBabel) configs.push('airbnb-babel')

configs.push('adjunct')

module.exports = configs
