const { basename } = require('path')

module.exports = (dir, frameworks, options) => config => 
  config.set(Object.assign({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: frameworks,

    // list of files / patterns to load in the browser
    files: [
      `${basename(dir)}/test-main.js`,
      { pattern: 'src/**/*.js', included: false }
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],

    // allow remote control of Firefox
    customLaunchers: {
      FirefoxHeadlessDebug: {
        base: 'FirefoxHeadless',
        flags: ['-start-debugger-server'],
        prefs: {
          'devtools.debugger.remote-enabled': true,
          'devtools.chrome.enabled': true
        }
      }
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
}, options))
