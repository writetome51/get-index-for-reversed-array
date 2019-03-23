import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';

// Receives array `index` and returns the new index that same item would have
// if the array's order were reversed.  Example:  index of 1, for array 6 items long,
// would become index of 4.

export function getIndexForReversedArray(index, arrayLength): number {
	__validateArguments();

	if (index >= arrayLength) throw new Error('The index is not valid.  It exceeds the' +
		' index range of the array.');
	return (arrayLength - 1 - index);


	function __validateArguments() {
		errorIfNotIntegerZeroOrGreater(index);
		errorIfNotInteger(arrayLength);
		if (arrayLength < 1) throw new Error('The array length must be greater than 0');
	}
}
