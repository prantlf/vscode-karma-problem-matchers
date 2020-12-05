# VS Code Karma Problem Matchers Example

Demonstrates the VS Code problem matchers for Karma with various browsers and reporters.

* [src](./src) - a module exporting a function with a unit test
* [util](./util) - the common part of the [Karma] configuration
* [test-jasmine](./test-jasmine) - uses the latest version of [Jasmine], which is currently 3
* [test-jasmine2](./test-jasmine2) - uses one of the original versions of [Jasmine 2] compatible with 2.0; more recent versions like 2.99 modified the output to match Jasmine 3
* [test-jasmine1](./test-jasmine1) - uses one of the original versions of [Jasmine 1], which was 1.3.1 the ;atest
* [test-mocha-assert](./test-mocha-assert) - uses [Mocha] with a standard [test-assert](./test-) library like [power-assert], but without the instrumentation of the assertion output
* [test-mocha-chai](./test-mocha-chai) - uses [Mocha] with [Chai]
* [test-mocha-expect](./test-mocha-expect) - uses [Mocha] with [Expect]
* [test-mocha-power-assert](./test-mocha-powe-assert) - uses [Mocha] with [power-assert], with the instrumentation of the assertion output
* [test-mocha-should](./test-mocha-should) - uses [Mocha] with [should.js]

[Jasmine]: https://jasmine.github.io/
[Jasmine 2]: https://github.com/jasmine/jasmine/tree/v2.0.0#readme
[Jasmine 1]: https://github.com/jasmine/jasmine/tree/v1.3.1#readme
[Mocha]: https://mochajs.org/
[Karma]: https://karma-runner.github.io/latest/index.html
[Chai]: https://www.chaijs.com/
[Expect]: https://github.com/Automattic/expect.js#readme
[should.js]: https://github.com/shouldjs/should.js#readme
[power-assert]: https://github.com/power-assert-js/power-assert#readme
