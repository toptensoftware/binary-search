# binarySearch

Binary search function for JavaScript.

## Installation

```
npm install --save toptensoftware/binary-search
```

## Usage

```ts
binarySearch(
    sortedArray: any[], 
    compareItems: (a:any, b:any) => number, 
    item: any
);
```

* **sortedArray** A sorted array of items
* **compareItems** A callback to compare two items
* **item** The item to search for

The `compareItems` callback should return:

* a number less than zero if `a < b`
* a number greater than zero if `a > b`
* zero if `a == b`.

If `binarySearch` returns a value `>= 0` an exact match was found at the returned index.

If `binarySearch` returns value `< 0` there was no exact match, but the insert position can
be determined from `(-retv-1)`, or by calling `binarySearch.insertPos(retv)`


## Example

Existing item:

```js
let arr = [ 10, 20, 30, 40, 50 ];
let index = binarySearch(arr, (a,b) => a-b, 30);
assert.equal(index, 2);
```

Non-existing item:

```js
let arr = [ 10, 20, 30, 40, 50 ];
let index = binarySearch(arr, (a,b) => a-b, 25);
let insertPos = binarySearch.insertPos(index);
assert.equal(index, -3);
assert.equal(insertPos, 2);
```
