function determinant () {
	var matr =[[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12],
	[13,14,15,16]];

	var left = 0;
	var right = 0;

	for (var i = 0; i < matr[0].length; i++) {
		left += parseFloat(matr[i][i]);
	}

	var z = 0;
	for (var c = (matr[0].length - 1); c >= 0; c--) {
		right += parseFloat(matr[z][c]);
		z++;
		}


	var determ = left + right;
	console.log (determ);
	return;
}

determinant ();

var d = determ;

console.log (d);