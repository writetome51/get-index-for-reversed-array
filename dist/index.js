"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_all_values_are_numbers_1 = require("error-if-not-all-values-are-numbers");
// Returns `index` changed to different number, which would be the index for the same
// item if its array's order was reversed.  Example:  index of 1, for array 6 items long,
// would become index of 4.
function getIndexForReversedArray(index, arrayLength) {
    error_if_not_all_values_are_numbers_1.errorIfNotAllValuesAreNumbers([index, arrayLength]);
    return (arrayLength - 1 - index);
}
exports.getIndexForReversedArray = getIndexForReversedArray;
