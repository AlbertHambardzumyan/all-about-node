'use strict'

const Benchmark = require('../benchmark.js')

const SIZE = 1e9

const bench = Benchmark.createBenchmark(main, {
  n: SIZE
})

function main (conf) {
  const n = conf.n
  console.log('Starting...')

  const array = new Array(SIZE)
  bench.start()

  for (let i = array.length; i > 0; i--) {

  }

  bench.end(n)
}