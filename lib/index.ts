import { errorIfIndexNotValid } from 'error-if-index-not-valid';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';

// Receives array `index` and returns the new index that same item would have
// if the array's order were reversed.  Example:  index of 1, for array 6 items long,
// would become index of 4.

export function getIndexForReversedArray(index, arrayLength): number {
	
	errorIfNotIntegerZeroOrGreater(index);
	errorIfIndexNotValid(index, arrayLength);

	return (arrayLength - 1 - index);
}
