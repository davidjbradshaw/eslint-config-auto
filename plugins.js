const { cosmiconfigSync } = require('cosmiconfig')

const { hasAnyDep } = require('./lib/utils')

const explorerSync = cosmiconfigSync('eslint')
const eslintrc = explorerSync.search()
const { env = {} } = eslintrc.config

const hasBabel = hasAnyDep('babel') || hasAnyDep('@babel/core')

const plugins = []

if (hasBabel) plugins.push('babel')
if (env.node) plugins.push('node')

if (env.browser && !hasBabel && !hasAnyDep('typescript')) plugins.push('compat')

module.exports = plugins
