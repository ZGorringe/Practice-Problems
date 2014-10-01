//Write a function that accepts a number, n, and returns the nth Fibonacci number.

var fibN = function(n) {
	fibR = [0, 1]
	for (var i = 0; i < n; i++) {
		fibRpush(fibR[i] + fibR[i + 1]);
	}
	return fibR[n - 1];
}