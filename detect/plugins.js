const { env = {}, settings = {} } = require('../lib/config')

const { hasAnyDep } = require('../lib/utils')

const { hasBabel } = require('../lib/hasPackage')

const plugins = []

if (hasAnyDep('react-native')) plugins.push('react-native')

if (hasAnyDep('ember-source')) plugins.push('ember', 'ember-best-practices')
if (hasAnyDep('ember-template-lint')) plugins.push('hbs')

if (hasBabel) plugins.push('babel')
if (env.node) plugins.push('node')

if (settings.compat) plugins.push('compat')

module.exports = plugins
