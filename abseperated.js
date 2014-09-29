//Have the function ABCheck(str) take the str parameter being passed and return the string true if the charcters a and b are separated by exactly 3 places anywhere in the string at least once, Otherwise return the string false.


var aBCheck = function(str) {
	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'a') {
			if (str[i + 4] === 'b') {
				return true;
			}
		}
	}
	return false;
}