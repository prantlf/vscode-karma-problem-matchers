---
name: Problems not matched
about: Report information that could help improve the problem matchers
title: ''
labels: ''
assignees: ''
---

**What do the dependencies in your `package.json` look like?**

At the very least, version of all packages starting with "karma" would be good to know.

**What does your test output on the terminal look like?**

This should contain something like:

```
HeadlessChrome 73.0.3683 (Windows 10.0.0) hello_world should equal "Hello, world!" FAILED
        Error: Expected 'hello, world!' to equal 'Hello, world!'.
            at <Jasmine>
            at UserContext.<anonymous> (tests/test_hello_world.ts:3:81 <- tests/tests.js:19:97)
            at <Jasmine>
HeadlessChrome 73.0.3683 (Windows 10.0.0): Executed 2 of 2 (1 FAILED) (0.016 secs / 0.002 secs)
```
