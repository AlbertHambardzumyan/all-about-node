'use strict'

const Benchmark = require('../benchmark.js')

const SIZE = 1e7

const bench = Benchmark.createBenchmark(main, {
  n: SIZE
})

function main (conf) {
  const n = conf.n
  console.log('Starting...')

  const array = new Array(SIZE)
  bench.start()

  for (let i = 0, size = array.length; i < size; i++) {

  }

  bench.end(n)
}
