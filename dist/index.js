import { errorIfIndexNotValid } from 'error-if-index-not-valid';
import { errorIfNotIntegerZeroOrGreater } from 'error-if-not-integer-zero-or-greater';
// Receives array `index` and returns the new index that same item would have
// if the array's order were reversed.  Example:  index of 1, for array 6 items long,
// would become index of 4.
export function getIndexForReversedArray(index, arrayLength) {
    errorIfNotIntegerZeroOrGreater(index);
    errorIfIndexNotValid(index, arrayLength);
    return (arrayLength - 1 - index);
}
