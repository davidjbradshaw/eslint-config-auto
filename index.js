const adjunct = require('eslint-config-adjunct/packages')

const checkMissing = require('./lib/missing')
const showLoaded = require('./lib/loaded')
const { hasAnyDep } = require('./lib/utils')

const { configs } = require('./configs')

const hasReact = hasAnyDep('react')
const hasTypescript = hasAnyDep('typescript')

const airbnbDependentcies = ['import']
if (hasReact) airbnbDependentcies.push('jsx-a11y', 'react', 'react-hooks')

checkMissing(
  [...airbnbDependentcies, ...adjunct.rules],
  adjunct.extraInstallPackage,
  configs
)
showLoaded(airbnbDependentcies, configs)

const smartConfig = {
  extends: configs.map((config) => require.resolve(`./rules/${config}`)),
  parser: hasTypescript ? '@typescript-eslint/parser' : 'babel-eslint',
}

if (hasTypescript) {
  smartConfig.parserOptions = {
    project: './tsconfig.json',
  }
}

module.exports = smartConfig
