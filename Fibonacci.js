//Fibonacci sequence: write a function that generates 100 fibonacci sequence numbers.  Then make a function that checks to see if a given number exists within the sequence.

emptyArr = [0, 1];

var fib = function(arr) {
	var fibArr = [];
	for (var i = 0; i < 99; i++) {
	    var n = arr[i] + arr[i + 1];
		fibArr.push(n);
		i++;
	}
	return fibArr;
}

