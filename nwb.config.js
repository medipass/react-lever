module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Lever',
      externals: {
        react: 'React'
      }
    }
  }
}
