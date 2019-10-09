# Workshop 1

## Setup

`npm i`

## Usage

`npm run start`

## Sum of array

Write a function that finds a sum of array items.

Input: array of numbers
Output: number (sum of numbers)

## f1

Merges two objects, but it doesn't affect the properties that are already defined. Right objects are merged to the left

Example

```
f1({ a: 1, b: 2 }, { b: 3, c: 4 })
// { a: 1, b: 2, c:4 }
```

### f1 (multiple sources)

Extend the `f1` function to support multiple sources.

Example

```
f1({ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 0: b: 4, d: 5, })
// { a: 1, b: 2, c:4, d: 5 }
```

### f1 (deep merge)

Extend the `f1` function to support deep operations.

Example

```
f1({ a: { b: 2 } }, { a: { b: 1, c: 3 } });
// { a: { b: 2, c: 3 } }
```


## f2

Find difference of two arrays. The function should return a new array that includes items that are presented in the left array, but not presented in the right array.
Order is determined by the first array.

Example

```
f2([2, 1, 3], [2, 3, 4]);
// [1]
```

## f3

Find intersection of two arrays.  The function should return a new array that includes items that are presented both in the left and right arrays.
Order is determined by the first array.

```
f3([2, 1, 3], [2, 3, 4]);
// [2, 3]
```


## f4 

Gets the value at `path` of object. If the `path` does not exist in the object then undefined should be returned
path is a string of keys with `.` as a delimiter.

Example,

```
const object = { 'a': { 'b': { 'c': 3 } } };
 
f4(object, 'a.b.c');
// 3

f4(object, 'a.b.c.d.e');
// undefined
```

## f5

Sets the value at `path` of object. If the `path` does not exist in the object then it should be recursively created.
path is a string of keys with `.` as a delimiter.

Example,

```
const object = { 'a': { 'b': { 'c': 3 } } };
 
f5(object, 'a.b.c', 5);
// { a: { b: { c: 5 } } };

f5(object, 'a.b.c.d.e', 10);
// { a: { b: { c: { d: { e: 10 } } } } };
```


## rename keys

function that recursively renames keys and returns a new modified object.

1st argument has an object that has to be changed
2nd argument has an object of key-values, where keys are the keys that should be renames and the values are the resulting key name

if the key already exists, then the old value is replaced with the new one

Example,

```
renameKeys({ 'a': { 'b': { 'c': 5 } } }, { c: 'b' })
// { 'a': { 'b': { 'b': 5 } } };

renameKeys({ 'a': { 'b': { 'c': 5 }, c: { d: 6 } } }, { c: 'b' })
// { 'a': { 'c': { 'd': 6 } } };
```

## time stamper

write a function that accepts 0 params. when you invoke the function it adds a timestamp value to the array (`new Date().getTime()`) and returns the array. So every new invocation should memoize previous array state and return the new array with the new time stamp
__NOTE: there should be no global variables outside of the function__

For example,

invocation 1:

```
timestamper()
// [1570641110947]
```

invocation 2:

```
timestamper()
// [1570641110947, 1570641136368]
```

invocation 3:

```
timestamper()
// [1570641110947, 1570641136368, 1570641148449]
```


