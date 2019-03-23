"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
// Receives array `index` and returns the new index that same item would have
// if the array's order were reversed.  Example:  index of 1, for array 6 items long,
// would become index of 4.
function getIndexForReversedArray(index, arrayLength) {
    __validateArguments();
    if (index >= arrayLength)
        throw new Error('The index is not valid.  It exceeds the' +
            ' index range of the array.');
    return (arrayLength - 1 - index);
    function __validateArguments() {
        errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(index);
        errorIfNotInteger_1.errorIfNotInteger(arrayLength);
        if (arrayLength < 1)
            throw new Error('The array length must be greater than 0');
    }
}
exports.getIndexForReversedArray = getIndexForReversedArray;
