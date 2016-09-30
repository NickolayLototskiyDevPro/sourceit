function progression (a1, d, n) {
	// a1 -   исходное число
	// d - шаг
	// n - длина прогрессии

	var arr = [];
	for (var counter = 0; counter < n; counter++){
		arr.push(a1);
		a1 += d;
	}
	return arr;
}

var progres = progression (7, 17, 13);
console.log(progres);