module.exports = function showLoaded(rules, extraInstallPackage) {
  // eslint-disable-next-line no-console
  console.log(`
esLint-config-auto loaded the following packages:

  ${extraInstallPackage
    .map((config) =>
      config.charAt(0) === '@' ? config : `eslint-config-${config}`
    )
    .join('\n  ')}
  ${rules.map((plugin) => `eslint-plugin-${plugin}`).join('\n  ')}`)
}
