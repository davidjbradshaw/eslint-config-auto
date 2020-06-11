const configs = ['airbnb', 'airbnb/hooks']

// eslint-disable-next-line no-console
console.log(configs.map((config) => `  eslint-config-${config}`).join('\n'))

module.exports = {
  extends: configs,
}
