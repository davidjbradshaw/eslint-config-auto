const { hasBabel, hasTypeScript } = require('../lib/hasPackage')

const parsers = []

if (hasBabel) parsers.push('@babel/eslint-parser')

if (hasTypeScript) parsers.push('@typescript-eslint/parser')

module.exports = parsers
