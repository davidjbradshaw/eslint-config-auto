const { hasAnyDep } = require('./utils')
const { settings = {} } = require('./config')

const hasBabel =
  settings.babel ||
  hasAnyDep('babel') ||
  hasAnyDep('babel-core') ||
  hasAnyDep('@babel/core')

const hasTypeScript = settings.typescript || hasAnyDep('typescript')

const hasReact = hasAnyDep('react')

module.exports = {
  hasBabel,
  hasTypeScript,
  hasReact,
}
