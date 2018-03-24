# Array Evolution

Before stating something about JavaScript array, lets recall what is an Array.

An array is a sequential collection of data storage locations. When one declares an array of 25 integers, the
 compiler sets aside enough memory to hold all 25 elements. If each integer requires four bytes, this declaration sets 
 aside 100 contiguous bytes of memory, as illustrated bellow.
 
![Declaring an array](https://github.com/AlbertHambardzumyan/all-about-node/blob/master/doc/declaring-an-array.png "Declaring an array")
 
 
## Accessing Array Elements

The actual array variable is a pointer to the memory for all of its elements.
You access an array element by referring to its offset from the beginning of the array. Array element offsets are 
 counted from zero.


## Writing Array Elements

When you write a value to an element in an array, the compiler computes where to store the value based on the size of 
 each element. Suppose that you ask to write over the value at `array[9]`, which is the tenth element. The compiler 
 multiplies the offset (9) by the size of each element (in this case, 4 bytes). It then moves that many bytes (36) from 
 the beginning of the array and writes the new value at that location. Simple enough, right?
 
 
## JavaScript Array

In JavaScript, an array is a `hash-map`. Various data structures can be used to implemented it, and one of them is 
 `linked-list`. 
 
If you declare an array `var array = new Array(7)`, it will make a structure such that each element holds a value and a 
 pointer to the next element. Thus, if you want to read from `array[9]`, it has to traverse starting from the first 
 element to find the address of `a[9]`.

Obviously, a mathematical calculation will take way lesser time than an linked-list traversal. For long arrays, life 
 will be more tough.


## Evolution of JavaScript Arrays

However, JavaScript has evolved a lot.
JavaScript engines these days actually allocate contiguous memory for its arrays, if the array is homogeneous (all 
 elements of same type). `JIT` takes the advantage of it and does all array reading calculation just like the way `C` 
 compiler does. 

So, if you are writing a good codes, JavaScript Array objects maintains an actual array behind the scene.


## JavaScript Typed Arrays

The arrays have evolved even more with `ES2015` or `ES6`. `TC39` decided to include `Typed Array` in JavaScript and 
 that why we have `ArrayBuffer` today. 
`ArrayBuffer` gives you a contiguous memory chunk. However, dealing directly with memory is very low level and more 
 complicated. So we have `Views` to deal with `ArrayBuffer`.
 
```javascript
var buffer = new ArrayBuffer(10)
var view   = new Int32Array(buffer)

view[3] = 77
```

`Typed Array` is pretty much efficient. It was introduced after the request from `WebGL` people, as they were facing 
 immense performance issues without a way to handle binary data efficiently. 

[Typed Array MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)


## Benchmark

TBD
