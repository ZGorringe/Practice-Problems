var numbers = [6, -2, 5, 3, 9, -5, -1, 0, -4, 4];
//given the above array, create a function that determines whether the array contains three numbers whose sum is equal to 0

//code here
var sum = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                alert(true);
            }
        }
    }
};

sum(numbers)

var foo = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		var x = arr[i];
		for(var j = 1; j < arr.length; j++) {
			var y = arr[j];
			if(x + y === 0) {
				return true;
			}
		}
	}
	return false;
}

var fooRecursion = function(arr, i, j, k) {
	if(!i && !j && !k){
		i=0;
		j=i+1;
		k=i+2;
	}

	if(i > arr.length -1) {
		return false;
	}

	if(j > arr.length -1 || k > arr.length -1) {
		return fooRecursion(arr, i + 1)
	}

	if(arr[i] + arr[j] + arr[k] === 0) {
		return true
	} else {
		return fooRecursion(arr, i, j + 1, k + 1)
	}
}