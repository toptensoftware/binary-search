import { strict as assert } from "node:assert";
import { test } from "node:test";
import { binarySearch } from "./binarySearch.js";

test("exact", () => {

    let arr = [ 10, 20, 30, 40, 50];

    assert.equal(binarySearch(arr, (a,b) => a-b, 10), 0);
    assert.equal(binarySearch(arr, (a,b) => a-b, 30), 2);
    assert.equal(binarySearch(arr, (a,b) => a-b, 50), 4);

});


test("insert before", () => {

    let arr = [ 10, 20, 30, 40, 50];

    assert.equal(binarySearch(arr, (a,b) => a-b, 5), -1);

});


test("insert after", () => {

    let arr = [ 10, 20, 30, 40, 50];

    assert.equal(binarySearch(arr, (a,b) => a-b, 55), -6);

});

test("insert middle", () => {

    let arr = [ 10, 20, 30, 40, 50];

    assert.equal(binarySearch(arr, (a,b) => a-b, 25), -3);

});

test("inserPos", () => {
    assert.equal(binarySearch.insertPos(0), 0);
    assert.equal(binarySearch.insertPos(10), 10);
    assert.equal(binarySearch.insertPos(-1), 0);
    assert.equal(binarySearch.insertPos(-5), 4);
});