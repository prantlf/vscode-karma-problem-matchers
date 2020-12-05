const configure = require('../util/karma.common')
module.exports = configure(__dirname, ['requirejs', 'mocha', 'expect'])
