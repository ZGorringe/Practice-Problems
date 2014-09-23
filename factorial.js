//Write a function called factorial that takes in a number and returns the factorial (!) of that number.

var factorial = function(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial( num - 1);
    }       
};