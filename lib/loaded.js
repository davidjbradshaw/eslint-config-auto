const { CONFIG_NAME } = require('../constants')

module.exports = function showLoaded(rules) {
  // eslint-disable-next-line no-console
  console.log(`
${CONFIG_NAME} loaded the following packages:

  ${rules.map((plugin) => `eslint-plugin-${plugin}`).join('\n  ')}`)
}
