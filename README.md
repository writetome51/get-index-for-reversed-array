# getIndexForReversedArray(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrayLength<br>): number

Receives array `index` and returns the new index that same item would have  
if the array's order were reversed.  


## Examples
```js
let arr = ['a', 'b', 'c', 'd', 'e'];   
let index = arr.indexOf('d');
arr.reverse();
getIndexForReversedArray(index, arr.length);
   // -->  1

arr = [7, 2, 6, 9, 3, 10];
let index = arr.indexOf(2);
arr.reverse();
getIndexForReversedArray(index, arr.length);
   // -->  2
```

## Installation
`npm i @writetome51/get-index-for-reversed-array`

## Loading
``` js
import {getIndexForReversedArray} from '@writetome51/get-index-for-reversed-array';
```
