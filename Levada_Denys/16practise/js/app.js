var array = [1,54,4,9,7];

// function compare (a,b) {
// 	if (a > b) {
// 		return 1;
// 	}
// 	if (a < b) {
// 		return -1;
// 	}

// }
// arr.sort(compare);

function sum2Min (arr) {
	var change = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			change = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = change;
		}
	}
	return arr[0] + arr[1];
}

console.log (sum2Min(array));