const { hasBabel, hasTypeScript, hasReact } = require('../lib/hasPackage')

const configs = []

// if (hasTypeScript) configs.push('@typescript-eslint/eslint-plugin')

configs.push(hasReact ? 'airbnb' : 'airbnb-base')
if (hasTypeScript) configs.push('airbnb-typescript')
if (hasBabel) configs.push('airbnb-babel')

configs.push('adjunct')

module.exports = configs
