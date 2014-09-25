//Given an arbitrary input string, return the first nonrepeated character in the string.  For example:

//firstNonRepeatedCharacter( 'ABA'); --> 'B'

var nonRepeat = function (str) {
	var newArr = str.split('');
	newArr = newArr.sort();
	for (var i = 0; i < newArr.length; i++) {
		if (newArr[i] !== newArr[i + 1] && newArr[i] !== newArr[i - 1]) {
			return newArr[i];
		}
	}
}

