//Write a function that accepts a multi-dimensional array and returns a flattened vresion.

flatten( [1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

var flatten = function(arr) {
	var merged = [];
	merged = merged.concat.apply(merged, arr);
	return merged;
}

var flatten = function(arr) {
	var merged = [].concat.apply([], arr);
	return merged;
}