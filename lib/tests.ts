import { getIndexForReversedArray } from './index';


// Test 1
let arr = [7, 2, 6, 9, 3, 10];
let index = arr.indexOf(2);
arr.reverse();
index = getIndexForReversedArray(index, arr.length);
if (arr[index] === 2) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 2
if (index === 4) console.log('test 2 passed');
else console.log('test 2 FAILED');

// Test 3
index = getIndexForReversedArray();
if (index === 4) console.log('test 2 passed');
else console.log('test 2 FAILED');
