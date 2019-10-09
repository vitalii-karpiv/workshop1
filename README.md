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



