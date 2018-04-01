# Loop & Performance

Many programming problems are solved by repeatedly acting on the same data. Two ways to do this are
 [recursion](https://github.com/AlbertHambardzumyan/recursion) and iteration. Iteration means doing the same thing again
 and again. The principal method of iteration is the loop.


## The Roots of Looping: `goto`

In the primitive days of early computer science, programs were nasty and short. Loops consisted of a label, some
 statements, and a jump that went to the label. A jump is accomplished by writing `goto` followed by the name of a
 label.

```
loop:
  counter ++;
  cout << “counter: “ << counter << endl;
  if (counter < 3)
    goto loop; // jump to the top

  cout << “Complete. Counter: “ << counter << endl;
  return 0;
```

As a rule, programmers avoid `goto`, and with good reason. It can cause a jump to any location in your source code.


## Loops

Nowadays, we have a wide variety of loops and we mostly use few of them. The most of the developers I saw, use to stick
 to the latest ones without any good reason. Are they fast? I do not think so.

Let's go ahead and compare them to figure out which one is the fastest one.

* Node version: 8.10.0
* Processor 2.6 GHz Intel Core i7
* Memory - 16 GB 2133 MHz LPDDR3
* OS - mac Sierra, Version 10.13.3
* Benchmark size 1e7


## for loop up

Ordinary for loop to iterate through array counting up.

The best result out of 5 attempts:

* `timeMilliseconds: 8.79721`
* `rateNanoseconds: 0.879721`

[Benchmark source](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/benchmark/loops-%26-performance/for-loop-up.js)


## for loop down

Ordinary for loop to iterate through array counting down.

The best result out of 5 attempts:

* `timeMilliseconds: 8.576543`
* `rateNanoseconds: 0.8576543`

[Benchmark source](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/benchmark/loops-%26-performance/for-loop-down.js)


## for each
Using for..each to iterate through array. A of developers like it as its syntactically convenient.

The best result out of 5 attempts:

* `timeMilliseconds: 52.477558`
* `rateNanoseconds: 5.2477558`

[Benchmark source](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/benchmark/loops-%26-performance/for-each.js)


## for of
Using for..of to iterate through array. This loop iterating over iterable objects.

The best result out of 5 attempts:

* `timeMilliseconds: 33.118185`
* `rateNanoseconds: 3.3921659`

[Benchmark source](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/benchmark/loops-%26-performance/for-of.js)


## for in
Using for..in to iterate through array. This loop iterates over the enumerable properties of an object.

The best result out of 5 attempts:

* `timeMilliseconds: 63.892476`
* `rateNanoseconds: 6.3892476`

[Benchmark source](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/benchmark/loops-%26-performance/for-in.js)


## cached for loop up

Cached for loop to iterate through array counting up.

The best result out of 5 attempts:

* `timeMilliseconds: 8.581676`
* `rateNanoseconds: 0.8581676`

[Benchmark source](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/benchmark/loops-%26-performance/cached-for-loop-up.js)


## for loop down no comparison

Ordinary for loop to iterate through array counting down with on comparison.

The best result out of 5 attempts:

* `timeMilliseconds: 8.521664`
* `rateNanoseconds: 0.8521664`

[Benchmark source](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/benchmark/loops-%26-performance/for-loop-down-no-comparison.js)


## while loop up

while loop to iterate through array counting up.

The best result out of 5 attempts:

* `timeMilliseconds: 8.79717`
* `rateNanoseconds: 0.879717`

[Benchmark source](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/benchmark/loops-%26-performance/while-loop-up.js)


## while loop down

while loop to iterate through array counting down.

The best result out of 5 attempts:

* `timeMilliseconds: 8.711905`
* `rateNanoseconds: 0.8711905`

[Benchmark source](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/benchmark/loops-%26-performance/while-loop-down.js)


## while loop down no comparison

while loop to iterate through array counting down with no comparison.

The best result out of 5 attempts:

* `timeMilliseconds: 8.591619`
* `rateNanoseconds: 0.8591619`

[Benchmark source](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/benchmark/loops-%26-performance/while-loop-down-no-comparison.js)


## Summary
* `for loop down no comparison`
* `for loop down` OR `cached for loop up`
* `while loop down no comparison`

There are loops easier to understand and there are cases such that syntactically convenient is more important than tiny
 optimization. I can understand then one prefers ordinary `for loop up`, `for loop down` over
 `for loop down no comparison`, `cached for loop up`, `while loop down no comparison`, but its hard to understand when
 one prefers `for each` over basic `for loop up` where performance is ~600% slower.
