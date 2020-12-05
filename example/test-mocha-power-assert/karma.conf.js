const configure = require('../util/karma.common')
module.exports = configure(__dirname, ['requirejs', 'mocha', 'power-assert'], {
  preprocessors: {
    'src/**/*.spec.js': ['espower', 'sourcemap']
  }
})
