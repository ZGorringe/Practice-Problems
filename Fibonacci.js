//Fibonacci sequence: write a function that generates 100 fibonacci sequence numbers.  Then make a function that checks to see if a given number exists within the sequence.

emptyArr = [0, 1];

var fib = function(arr) {
	var fibArr = [];
	for (var i = 0; i < 99; i++) {
	    var n = arr[i] + arr[i + 1]; //This is my function.  I was close.
		fibArr.push(n);
		i++;
	}
	return fibArr;
}

var i;
var fib = [];
fib[0] = 0;
fib[1] = 1;
for(var i = 2; i<=100; i++) { //Code that generates the sequence
	fib[i] = fib[i-2] + fib[i-1];
}

console.log(fib);

var find = function(arr) {
	for (var i = 0; i < arr.length; i++) {//Code that checks for a certain number ('n').
		if (arr[i] === 'n') {
			return true;
		}
	}
	return false;
}

