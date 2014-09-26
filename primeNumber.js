//Write a function called prime that takes in a number and returns if that number is prime.  A prime number is any whole number that is divisible by only one and itself.

//This one checks the divisor 2 seperately; then, it proceeds to check ODD divisors only, from 3 up to sqrt(n).

var prime = function(num) {
	var m = Math.sqrt(num);
	if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) {
		return false;
	}
	if (num % 2 === 0) {
		return (num === 2);
	}
	for (var i = 3; i <= m; i +=2) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

//This one can be used with fewer lines of code but is slow.  It checks if num is divisible by EVERY integer 2, 3, 4, 5...up to sqrt(num)

var prime = function(num) {
	var m = Math.sqrt(num);
	if (isNaN(num) || !isFinite(num) || num % 1 || n < 2) {
		return false;
	}
	for (var i = 2; i <= m; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}