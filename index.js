const adjunct = require('eslint-config-adjunct/configs')

const checkMissing = require('./lib/missing')
const showLoaded = require('./lib/loaded')
const { hasAnyDep } = require('./lib/utils')

const overridesRules = require('./rules/overrides')
const configs = require('./detect/configs')
const parsers = require('./detect/parsers')
const plugins = require('./detect/plugins')

const hasReact = hasAnyDep('react')

// Workaround VS Code trying to run this file twice!
if (!global.hasAutoConfigLoaded) {
  const airbnbDependentcies = ['import']
  if (hasReact) airbnbDependentcies.push('jsx-a11y', 'react', 'react-hooks')

  checkMissing(
    [...airbnbDependentcies, ...adjunct.rules, ...plugins],
    adjunct.extraInstallPackage,
    configs,
    parsers
  )

  showLoaded(airbnbDependentcies)

  global.hasAutoConfigLoaded = true
}

const autoConfig = {
  extends: [...parsers, ...plugins, ...configs].map((config) =>
    require.resolve(`./rules/${config}`)
  ),
  ...overridesRules,
}

// console.log(autoConfig)

module.exports = autoConfig
