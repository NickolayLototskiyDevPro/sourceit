function bubbleSort (arr) {
	for (var counter1 = 0; counter1 <= arr.length; counter1++) {
		for (var i = 0; i < arr.length;i++) {
			if (arr[i] > arr[i + 1]){
				var big = arr[i];
				var small = arr[i+1];
				arr[i] = small;
				arr [i+1] = big;
		}
	}
}
	return arr;

}

var unsortedArr = [1500,3,2,4,5,2,4,5,3,6,3];

var newArr = bubbleSort(unsortedArr);

printArray (newArr);