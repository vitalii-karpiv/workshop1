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


