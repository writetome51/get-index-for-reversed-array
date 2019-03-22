import { errorIfNotAllValuesAreNumbers } from 'error-if-not-all-values-are-numbers';


// Returns `index` changed to different number, which would be the index for the same
// item if its array's order was reversed.  Example:  index of 1, for array 6 items long,
// would become index of 4.

export function getIndexForReversedArray(index, arrayLength): number {
	errorIfNotAllValuesAreNumbers([index, arrayLength]);
	return (arrayLength - 1 - index);
}
