// From kcd-scripts

const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const arrify = require('arrify')
const has = require('lodash/has')
const readPkgUp = require('read-pkg-up')
const { cosmiconfigSync } = require('cosmiconfig')

const { packageJson: pkg, path: packagePath } = readPkgUp.sync({
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  cwd: fs.realpathSync(process.cwd()),
})

const appDirectory = path.dirname(packagePath)

const fromRoot = (...p) => path.join(appDirectory, ...p)

// eslint-disable-next-line security/detect-non-literal-fs-filename
const hasFile = (...p) => fs.existsSync(fromRoot(...p))

const hasPkgProp = (props) => arrify(props).some((prop) => has(pkg, prop)) // eslint-disable-line lodash-fp/no-extraneous-function-wrapping

const hasPkgSubProp = (packageProp) => (props) =>
  hasPkgProp(arrify(props).map((p) => `${packageProp}.${p}`))

const hasScript = hasPkgSubProp('scripts')
const hasPeerDep = hasPkgSubProp('peerDependencies')
const hasDep = hasPkgSubProp('dependencies')
const hasDevDep = hasPkgSubProp('devDependencies')
const hasAnyDep = (args) =>
  [hasDep, hasDevDep, hasPeerDep].some((fn) => fn(args))

function environmentIsSet(name) {
  return (
    Object.prototype.hasOwnProperty.call(process.env, name) &&
    process.env[name] &&
    process.env[name] !== 'undefined'
  )
}

function parseEnv(name, def) {
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

  // eslint-disable-next-line security/detect-non-literal-fs-filename
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
  hasPkgProp,
  hasScript,
  hasAnyDep,
  hasDevDep,
  parseEnv,
  pkg,
  uniq,
  writeExtraEntry,
}
