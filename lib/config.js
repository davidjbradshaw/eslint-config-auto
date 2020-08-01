const { cosmiconfigSync } = require('cosmiconfig')

module.exports = cosmiconfigSync('eslint').search().config
