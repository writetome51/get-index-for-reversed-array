import { getReverseIndex } from './index.js';


// Test 1
let arr = [7, 2, 6, 9, 3, 10];
let index = arr.indexOf(2);
arr.reverse();
index = getReverseIndex(index, arr.length);
if (arr[index] === 2)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');


// Test 2
if (index === 4) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: make sure it returns 0 when arrayLength is only 1.
index = getReverseIndex(0, 1);
if (index === 0) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: make sure it errors when second argument is less than 1.
let errorTriggered = false;
try {
    getReverseIndex(0, 0);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: make sure it errors when first argument is less than 0.
errorTriggered = false;
try {
    getReverseIndex(-1, 1);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: make sure it errors when first argument is not integer.
errorTriggered = false;
try {
    getReverseIndex(-1.1, 1);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: make sure it errors when second argument is not integer.
errorTriggered = false;
try {
    getReverseIndex(1, 1.1);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');


// Test 8: make sure it returns 1 when arrayLength is only 2.
index = getReverseIndex(0, 2);
if (index === 1)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');


// Test 9
index = getReverseIndex(1, 2);
if (index === 0)
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');


// Test 10
index = getReverseIndex(6, 7);
if (index === 0) console.log('test 10 passed');
else console.log('test 10 FAILED');


// Test 11
index = getReverseIndex(3, 7);
if (index === 3) console.log('test 11 passed');
else console.log('test 11 FAILED');


// Test 12
arr = [7, 2, 6, 12, 9, 3, 10];
index = arr.indexOf(12);
arr.reverse();
index = getReverseIndex(index, arr.length);
if (arr[index] === 12) console.log('test 12 passed');
else console.log('test 12 FAILED');
