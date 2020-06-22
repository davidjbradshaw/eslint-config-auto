const isModuleAvailable = require('./lib/is-module-available')

const hasBabel = isModuleAvailable('babel') || isModuleAvailable('@babel/core')
const hasTypescript = isModuleAvailable('typescript')

const parsers = []

if (hasBabel) parsers.push('babel-eslint')

if (hasTypescript) parsers.push('@typescript-eslint/parser')

module.exports = parsers
