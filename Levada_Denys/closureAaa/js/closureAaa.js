var closeFn = function() {
	var a = 'a';
	return function () {
		console.log(a);
		a += 'a';
	}
}

var call = closeFn ();

function callCloseFn (call, n){
	var counter = 1;
	do {
		call();
		counter++;
	} while (counter <= n)
	return;
}

callCloseFn (call, 10);