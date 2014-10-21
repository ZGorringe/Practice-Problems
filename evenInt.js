//Given an integer array, one element occurs even number of times and all others have odd occurrences.  Find the element with even ocurrences.

var getEven = function (arr) {
	var obj = {};
	for(var i = 0; i < arr.length; i++) {
		obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] += 1 : 1//saying if this is a thing or truthy, then take that thing and add 1 to it.
	}
	for(var prop in obj){
		if(obj[prop] % 2 === 0){
			return prop;
		}
	}
	return null;
}