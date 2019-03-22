# getIndexForReversedArray(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrayLength<br>): number

Returns `index` changed to the index for the same item if its array's order   
was reversed.  &nbsp;&nbsp;Example:  you have this array: `['a', 'b', 'c', 'd', 'e']`.   
The index of `'d'` is 3.  Then you reverse the order of the array, and you  
need the new index of `'d'`.  So you call:  
```ts
getIndexForReversedArray(3, array.length); // the index of 'd' was 3.
    // --> 1
```
The new index is 1.


## Examples
```ts
arr = [7, 2, 6, 9, 3, 10];
let index = arr.indexOf(2);

arr.reverse();
index = getIndexForReversedArray(index, arr.length);
console.log(arr[index]); // console: '2'
```

## Installation
`npm i @writetome51/get-index-for-reversed-array`

## Loading
``` ts
// if using Typescript:
import {getIndexForReversedArray} from '@writetome51/get-index-for-reversed-array';
// if using ES5 Javascript:
var getIndexForReversedArray = 
    require('@writetome51/get-index-for-reversed-array').getIndexForReversedArray;
```
