const { cosmiconfigSync } = require('cosmiconfig')

const isModuleAvailable = require('./lib/is-module-available')

const explorerSync = cosmiconfigSync('eslint')
const eslintrc = explorerSync.search()
const { env: environment = {} } = eslintrc.config

const hasBabel = isModuleAvailable('babel') || isModuleAvailable('@babel/core')

const plugins = []

if (hasBabel) plugins.push('babel')
if (environment.node) plugins.push('node')

if (environment.browser && !hasBabel && !isModuleAvailable('typescript'))
  plugins.push('compat')

module.exports = plugins
