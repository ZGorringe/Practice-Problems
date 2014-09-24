//Write a Function called SimpleSumbols that takes in a string parameter and determines if it is an acceptable sequence by either returning the string true or false.  The str parameter will be composed of + and = symbols with several letters beetween them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false.  The string will not be empty and will have at least one letter.

var simpleSymbols = function(str) {
	var test = true;
	for (var i = 0; i <str.length; i++) {
		if('abcdefghijklmnopqrstuvwxyz'.indexOf(str[i]) !== -1) {
			var plusTest = function(){
				var left = false;
				var right = false;
				if(str[i - 1] === '+') {
					left = true;
				}
				if(str[i + 1] === '+') {
					right = true;
				}
				if(left === false || right === false) {
					test = false;
				}
				if(test === false) {
					return false;
				}
			}
			if(plustTest() === false) {
				return false;
		}
	}
	if(test === true) {
		return true;
	}
}