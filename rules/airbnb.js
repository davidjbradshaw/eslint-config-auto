const isModuleAvailable = require('../lib/is-module-available')

const HOOKS = 'airbnb/hooks'
const configs = ['airbnb']

if (isModuleAvailable(`eslint-config-${HOOKS}`)) configs.push(HOOKS)
else {
  // eslint-disable-next-line no-console
  console.warn(
    '  \u001B[33mOutdated version of eslint-config-airbnb detected, please upgrade to support React Hooks\u001B[0m'
  )
}

// eslint-disable-next-line no-console
console.log(configs.map((config) => `  eslint-config-${config}`).join('\n'))

module.exports = {
  extends: configs,
  rules: {
    'react/jsx-no-constructed-context-values': 0,
    'react/no-unstable-nested-components': 0,
  },
}
