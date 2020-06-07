const { hasAnyDep } = require('../lib/utils')

const hasReact = hasAnyDep('react')
const configs = ['airbnb']

if (hasReact) configs.push('airbnb/hooks')

module.exports = {
  extends: configs,
}
