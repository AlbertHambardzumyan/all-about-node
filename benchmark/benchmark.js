'use strict'

const NS_PER_SEC = 1e9
const NS_PER_MS = 1e6

class Benchmark {

  constructor (fn, options) {
    this._name = require.main.filename.slice(__dirname.length + 1) // use the file name as the name of the benchmark
    this._options = options
    this._time = [0, 0] // holds process.hrtime value
    this._started = false // used to make sure a benchmark only start a timer once

    process.nextTick(() => fn(this._options))
  }

  start () {
    if (this._started) {
      throw new Error('Called start more than once in a single benchmark.')
    }

    this._started = true
    this._time = process.hrtime()
  }

  end (operations) {
    const diff = process.hrtime(this._time) // get diff time now and do error checking later for accuracy.

    if (!this._started) {
      throw new Error('Called end without start.')
    }
    if (typeof operations !== 'number') {
      throw new Error('Called end() without specifying operation count.')
    }

    const timeNanoseconds = diff[0] * NS_PER_SEC + diff[1]
    const rateNanoseconds = timeNanoseconds / operations
    this.report(rateNanoseconds, timeNanoseconds)
  }

  report (rateNanoseconds, timeNanoseconds) {
    const data = {
      name: this._name,
      options: this._options,
      timeSeconds: timeNanoseconds / NS_PER_SEC,
      timeMilliseconds: timeNanoseconds / NS_PER_MS,
      rateNanoseconds: rateNanoseconds
    }

    console.log(data)
  }
}

exports.createBenchmark = (fn, options) => {
  return new Benchmark(fn, options)
}
