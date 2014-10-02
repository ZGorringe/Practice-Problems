//Find the only item that occurs an even number of times in an array. Remember to handle muliple solo items and return the first one. Return null if there are no solo items

var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6])

evenArr = [1,6,2,4,4,5,6,8,9,6];

var onlyEven = function(arr) {
	newArr = arr.sort();
	for (var i = 0; i < newArr.length; i++) {
		if (newArr[i] !== newArr[i + 1]) {
			newArr.splice(i, 1)
		}
		return(newArr);
	}
}

//Working solution

function evenOccurrence(array) {
	var occurrences = {};
	for (var i = 0; i < array.length; i++) {
		var n = array[i];
		if (n in occurrences) {
			occurrences[n]++;
		} else {
			occurrences[n] = 1;
		}
	}

	for (var n in occurrences) {
		if (occurrences[n] % 2 == 0) {
			return n;
		}
	}

	return null;
}
//Need to set up some sort of storage table.  You need to set up a count for each item in the array.  Set up for loop that goes through the array...each item in array is assigned to var n. Then we said if item n is already in the occurences object then we want to increment the count. If it's not in the occurence object then we set the count to 1.  Second for loop is going through the occurrence object and is just saying if the value occurred an even number of times return the value.