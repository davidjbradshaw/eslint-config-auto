module.exports = function showLoaded(rules) {
  // eslint-disable-next-line no-console
  console.log(`
@SmartPension/esLint-config loaded the following packages:

  ${rules.map((plugin) => `eslint-plugin-${plugin}`).join('\n  ')}`)
}
