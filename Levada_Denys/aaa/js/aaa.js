function aaa (n) {
	if (n === undefined) {
		console.error("Wrong number");
	}
	else if (n > 1000) {
		console.error ('Wrong number');
		return;
	} else {
		var c = "a";
		console.log(c);
		for (var i = 2; i <= n; i++) {
			c += "a";
			console.log (c);
		}
	}
	return;
}

aaa (101);