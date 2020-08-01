const { compose, includes, not, when } = require('ramda')

const isModuleAvailable = require('./is-module-available')
const { hasAnyDep } = require('./utils')

const { CONFIG_NAME } = require('../constants')

const adjunct = 'eslint-config-adjunct'

const notIncludes = (str) => compose(not, includes(str))
const atLatest = when(notIncludes('@'), (pkg) => `${pkg}@latest`)

const moduleNotAvailable = (pkg) =>
  !isModuleAvailable(pkg.charAt(0) === '@' ? pkg : pkg.split('@')[0])

module.exports = function checkMissing(
  rules,
  extraInstallPackage,
  configs,
  parsers
) {
  const notInstalled = rules
    .map((plugin) => `eslint-plugin-${plugin}`)
    .filter(moduleNotAvailable)

  extraInstallPackage.forEach(([rule, plugin]) => {
    if (rules.includes(rule) && moduleNotAvailable(plugin)) {
      notInstalled.push(plugin)
    }
  })

  configs
    .map((config) =>
      config.charAt(0) === '@' ? config : `eslint-config-${config}`
    )
    .filter(moduleNotAvailable)
    .forEach((config) => notInstalled.push(config))

  parsers
    .filter(moduleNotAvailable)
    .forEach((parser) => notInstalled.push(parser))

  if (!hasAnyDep(adjunct)) notInstalled.push(adjunct)

  if (notInstalled.length === 0) return

  const s = notInstalled.length === 1 ? '' : 's'

  // eslint-disable-next-line no-console
  console.log(`
Oops! Something went wrong! :(

${CONFIG_NAME} could not find the following package${s}

  ${notInstalled.join('\n  ')}

To install the missing package${s}, please run the following command:

npm install ${notInstalled.map(atLatest).join(' ')} --save-dev

`)

  process.exit(1) // eslint-disable-line unicorn/no-process-exit
}
