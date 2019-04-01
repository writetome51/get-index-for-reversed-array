"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_index_not_valid_1 = require("error-if-index-not-valid");
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
// Receives array `index` and returns the new index that same item would have
// if the array's order were reversed.  Example:  index of 1, for array 6 items long,
// would become index of 4.
function getIndexForReversedArray(index, arrayLength) {
    errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(index);
    error_if_index_not_valid_1.errorIfIndexNotValid(index, arrayLength);
    return (arrayLength - 1 - index);
}
exports.getIndexForReversedArray = getIndexForReversedArray;
