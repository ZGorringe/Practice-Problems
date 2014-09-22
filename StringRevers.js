function reverse(s) {
	var i = s.length;
	var n = '';
	while (i > 0) {
		n += s.substring(i - 1, i);
		i--;
	}
	return n;
}