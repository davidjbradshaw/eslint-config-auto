const { equals, indexOf, pipe, when } = require('ramda')

const isModuleAvailable = require('./is-module-available')

const moduleNotAvailable = (package_) =>
  !isModuleAvailable(
    package_.charAt(0) === '@' ? package_ : package_.split('@')[0]
  )

const atLatest = when(
  pipe(indexOf('@'), equals(-1)),
  (package_) => `${package_}@latest`
)

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

  if (notInstalled.length === 0) return

  const s = notInstalled.length === 1 ? '' : 's'

  const installCmd = isModuleAvailable('yarn')
    ? `yarn add ${notInstalled.map(atLatest).join(' ')} --dev`
    : `npm install ${notInstalled.map(atLatest).join(' ')} --save-dev`

  // eslint-disable-next-line no-console
  console.log(`
Oops! Something went wrong! :(

esLint-config-auto could not find the following package${s}

  ${notInstalled.join('\n  ')}

To install the missing package${s}, please run the following command:

${installCmd}

`)

  process.exit(1) // eslint-disable-line unicorn/no-process-exit
}
