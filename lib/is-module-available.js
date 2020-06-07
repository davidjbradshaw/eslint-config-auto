module.exports = function isModuleAvailable(name) {
  try {
    require.resolve(name)
    return true
  } catch (error) {
    return false
  }
}
