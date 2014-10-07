//Given a string that contains a single pair of parenthesis, compute a new string made of only of the parenthesis and their contents, so "xyz(abc)123" yields "(abc)".

parenBit("xyz(abc)123") --> "(abc)"
parenBit("x(hello)") --> "(hello)"
parentBit("(xy)1") --> "(xy)"



var str = "xyz(abc)123";
var newStr = str.substring(str.lastIndexOf("(")+1, str.lastIndexOf(")"));
alert(newStr);

//another way

var parenBit = function(str, i) {
	if(!i && i !== 0) {
		i = 0;
	}
	if(str[0] === "(" && str[str.length-1] === ")") {
		return str;
	}
	if(str[i] === "(") {
		if(i !== 0) {
			return parenBit(str.slice(i), i + 1);
		}
	} return parenBit(str, i + 1);
}