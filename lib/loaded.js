module.exports = function showLoaded(rules) {
  // eslint-disable-next-line no-console
  console.log(`
EsLint-config-auto loaded the following packages:

  ${rules.map((plugin) => `eslint-plugin-${plugin}`).join('\n  ')}`)
}
