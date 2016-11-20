function evenFromOdd (arr) {
	var evenArr = [];
	for(var i = 0; i < arr.length;i++) {
		if (arr[i] % 2 == 0) {
			evenArr.push(arr[i]);
		}
	}
	printArray(evenArr);
}

var oddArr = [1,2,3,4,5,6,7,8,9,10];

evenFromOdd(oddArr);