// From kcd-scripts

const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const arrify = require('arrify')
const has = require('lodash/has')
const readPkgUp = require('read-pkg-up')
const { cosmiconfigSync } = require('cosmiconfig')

const { packageJson: package_, path: packagePath } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
})

const appDirectory = path.dirname(packagePath)

const fromRoot = (...p) => path.join(appDirectory, ...p)
const hasFile = (...p) => fs.existsSync(fromRoot(...p))

const hasPackageProperty = (properties) =>
  arrify(properties).some((property) => has(package_, property)) // eslint-disable-line lodash-fp/no-extraneous-function-wrapping

const hasPackageSubProperty = (packageProperty) => (properties) =>
  hasPackageProperty(arrify(properties).map((p) => `${packageProperty}.${p}`))

const hasScript = hasPackageSubProperty('scripts')
const hasPeerDep = hasPackageSubProperty('peerDependencies')
const hasDep = hasPackageSubProperty('dependencies')
const hasDevelopmentDep = hasPackageSubProperty('devDependencies')
const hasAnyDep = (arguments_) =>
  [hasDep, hasDevelopmentDep, hasPeerDep].some((fn) => fn(arguments_))

function environmentIsSet(name) {
  return (
    process.env.hasOwnProperty(name) && // eslint-disable-line no-prototype-builtins
    process.env[name] &&
    process.env[name] !== 'undefined'
  )
}

function parseEnvironment(name, def) {
  if (environmentIsSet(name)) {
    try {
      return JSON.parse(process.env[name])
    } catch (error) {
      return process.env[name]
    }
  }
  return def
}

function uniq(array) {
  return [...new Set(array)]
}

function writeExtraEntry(name, { cjs, esm }, clean = true) {
  if (clean) {
    rimraf.sync(fromRoot(name))
  }
  mkdirp.sync(fromRoot(name))

  const packageJson = fromRoot(`${name}/package.json`)
  const entryDirectory = fromRoot(name)

  fs.writeFileSync(
    packageJson,
    JSON.stringify(
      {
        main: path.relative(entryDirectory, cjs),
        'jsnext:main': path.relative(entryDirectory, esm),
        module: path.relative(entryDirectory, esm),
      },
      null,
      2
    )
  )
}

function hasLocalConfig(moduleName, searchOptions = {}) {
  const explorerSync = cosmiconfigSync(moduleName, searchOptions)
  const result = explorerSync.search(packagePath)

  return result !== null
}

module.exports = {
  appDirectory,
  fromRoot,
  hasFile,
  hasLocalConfig,
  hasPkgProp: hasPackageProperty,
  hasScript,
  hasAnyDep,
  parseEnv: parseEnvironment,
  pkg: package_,
  uniq,
  writeExtraEntry,
}
