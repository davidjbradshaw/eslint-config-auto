const adjunct = require('eslint-config-adjunct/configs')

const checkMissing = require('./lib/missing')
const showLoaded = require('./lib/loaded')
const { hasAnyDep } = require('./lib/utils')

const configs = require('./configs')
const plugins = require('./plugins')
const parsers = require('./parsers')

const hasReact = hasAnyDep('react')
const hasTypescript = hasAnyDep('typescript')

const airbnbDependentcies = ['import']
if (hasReact) airbnbDependentcies.push('jsx-a11y', 'react', 'react-hooks')

checkMissing(
  [...airbnbDependentcies, ...adjunct.rules, ...plugins],
  adjunct.extraInstallPackage,
  configs,
  parsers
)

showLoaded(airbnbDependentcies, configs)

const autoConfig = {
  extends: [...parsers, ...plugins, ...configs, 'adjunct'].map((config) =>
    require.resolve(`./rules/${config}`)
  ),
}

if (hasTypescript) {
  autoConfig.parserOptions = {
    project: './tsconfig.json',
  }
}

// console.log(autoConfig)

module.exports = autoConfig
