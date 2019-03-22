"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
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
// Test 3
index = index_1.getIndexForReversedArray();
if (index === 4)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
