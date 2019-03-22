"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
console.time('timeTest');
// Test 1
var arr = [7, 2, 6, 9, 3, 10];
var index = arr.indexOf(2);
arr.reverse();
index = index_1.getIndexForReversedArray(index, arr.length);
if (arr[index] === 2)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
if (index === 4)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3: make sure it can do the simple stuff.
index = index_1.getIndexForReversedArray(0, 1);
if (index === 0)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4: make sure it can do the simple stuff.
index = index_1.getIndexForReversedArray(0, 5);
if (index === 4)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
console.timeEnd('timeTest');
