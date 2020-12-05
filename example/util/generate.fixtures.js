const { exec } = require('child_process')

function run (args, dir) {
  return new Promise((resolve, reject) => {
    const proc = exec(
      `./node_modules/.bin/karma start --no-color --log-level=WARN ${args}`, {
      cwd: `${__dirname}/../${dir}`
    })
    let out = ''
    let err = ''
    proc.stdout.on('data', chunk => { out += chunk })
    proc.stderr.on('data', chunk => { err += chunk })
    proc.on('exit', () => err.length ? reject(new Error(err)) : resolve(out))
  })
}

(async () => {
  try {
    const out = await run('--browsers=FirefoxHeadlessDebug', 'test-jasmine')
    console.log(out)
  } catch (error) {
    console.log(error)
  }
})()
