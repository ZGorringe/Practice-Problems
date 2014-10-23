//We are given 3 strings: str1, str2, and str3.  Str3 is said to be a shuffle of str1 and str2 if it can be formed by interleaving the characters of str1 and str2 in a way that manintains the left to right oredering of the characters from each string.  For example, given str1="abc" and str2="def", str3="dabecf" is a valid shuffle since it preserves the character ordering of the two strings.  So, given these 3 strings write a function that detects whether str3 is a valid shuffle of str1 and str2.

//Correct answer
var interweave = function (str1, str2, str3) {
	for(var i = 0; i < str3.length; i++) {
		if(str1.indexOf(str3[i]) === -1 && str2.indexOf(str3[i]) === -1) {
			return false;
		} else if (str1.indexOf(str3[i]) !== -1) {
			if(firstIndex && firstIndex > str1.indexOf(str3[i])){
				return false;
			}
			var firstIndex = str1.indexOf(str3[i]);
		} else if (str2.indexOf(str3[i]) !== -1) {
			if(secondIndex && secondIndex > str2.indexOf(str3[i])){
				return false;
			};
			var secondIndex = str2.indexOf(str3[i]);
		}
	}
	return true;
}




var shuffle = function (str1, str2, str3) {
	var newStr1 = [];
	var newStr2 = [];
	var extraArr = [];
	for(var i = 0; i < str3.length; i++) {
		if(str3[i] === str1[0]) {
			newStr1.push(str3[i]);
			str3.slice(i, 1);
				if(newStr1[0] === str1[0] && str3[i] === str1[1]) {
					newStr1.push(str3[i]);
					str3.slice(i, 1);
						if(newStr1[1] === str1[1] && str3[i] === str1[2]) {
							newStr.push(str3[i]);
							str3.slice(i, 1);
								if(newStr1 === str1) {
									return newStr1;
								};
						};
				};
		} else if(str3[i] === str2[0]) {
			newStr2.push(str3[i]);
			str3.slice(i, 1);
				if(newStr2[0] === str2[0] && str3[i] === str2[1]) {
					newStr2.push(str3[i]);
					str3.slice(i, 1);
						if(newStr2[1] === str2[1] && str3[i] === str2[2]) {
							newStr.push(str3[i]);
							str3.slice(i, 1);
								if(newStr2 === str2) {
									return newStr2;
								};
						};
				};
		} else {
			return false;
		};
	};
};