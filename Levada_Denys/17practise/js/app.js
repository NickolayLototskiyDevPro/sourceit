// var sum = function (a, b) {
// 	return a + b;
// }

// var minus = function (a, b) {
// 	return a / b;
// }

// var restn = function (a, b) {
// 	return sum (a,b) + minus (a, b);
// }

//2.
function checkSimple (n) {
	//var n = prompt('Input n');
	var i = 2;
	while (n % i != 0 && (i < n)) {
		i++;
	}
	if (i != n) {
	return false;
	} else {
		return true;
	}
};

checkSimple();
