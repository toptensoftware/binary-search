# binarySearch

Binary search function for JavaScript.

## Installation

```
npm install --save toptensoftware/binarySearch
```

## Usage

```ts
binarySearch(
    sortedArray: any[], 
    compareItems: (a:any, b:any):number, 
    item: any
);
```

* **sortedArray** A sorted array of items
* **compareItems** A callback to compare two items
* **item** The item to search for

If the return value is >= 0 an exact match was found at the returned index.

If the return value <0 there was no exact match, but the insert position can
be determined from (-retv-1), or by calling `binarySearch.insertPos`

