// eslint-disable-next-line no-console
console.log('  eslint-plugin-node')

module.exports = {
  extends: ['plugin:node/recommended'],
  rules: {
    // Rules not in recomended config
    'node/callback-return': 'off',
    'node/exports-style': 'off',
    'node/file-extension-in-import': 'off',
    'node/global-require': 'off',
    'node/handle-callback-err': 'off',
    'node/no-callback-literal': 'off',
    'node/no-mixed-requires': 'off',
    'node/no-new-require': 'off',
    'node/no-path-concat': 'off',
    'node/no-process-env': 'off',
    'node/no-process-exit': 'off',
    'node/no-restricted-import': 'off',
    'node/no-restricted-require': 'off',
    'node/no-sync': 'off',
    'node/prefer-global/buffer': 'off',
    'node/prefer-global/console': 'off',
    'node/prefer-global/process': 'off',
    'node/prefer-global/text-decoder': 'off',
    'node/prefer-global/text-encoder': 'off',
    'node/prefer-global/url': 'off',
    'node/prefer-global/url-search-params': 'off',
    'node/prefer-promises/dns': 'off',
    'node/prefer-promises/fs': 'off',
  },
}
