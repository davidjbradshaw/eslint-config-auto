const { hasAnyDep } = require('../lib/utils')
const isModuleAvailable = require('../lib/is-module-available')

const hasBabel = isModuleAvailable('babel') || isModuleAvailable('@babel/core')

const configs = []

if (hasAnyDep('typescript')) configs.push('@typescript-eslint/eslint-plugin')

configs.push(hasAnyDep('react') ? 'airbnb' : 'airbnb-base')
if (hasAnyDep('typescript')) configs.push('airbnb-typescript')
if (hasBabel) configs.push('airbnb-babel')

configs.push('adjunct')

module.exports = configs
