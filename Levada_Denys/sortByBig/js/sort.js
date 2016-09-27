function sortByLarge (arr) {
	var big = 0;
	var small = 0;
	for(var countGlobe = 0; countGlobe < arr.length; countGlobe++){
		for(var i = arr.length - 1; i >= 0; i--) {
			for(var count1 = 0; count1 < arr.length; count1++) {
				if (arr[i] > arr[count1]) {
					big = arr[i];
					small = arr[count1];
					arr[count1] = big;
					arr[i] = small;
				}
			}
		if (i == 0) {
			for(var zeroCount = arr.length - 1; zeroCount >= 0; zeroCount--) {
				if (arr[i] < arr[zeroCount]) {
					big = arr[zeroCount];
					small = arr[i];
					arr[zeroCount] = small;
					arr[i] = big;
				}
			}
			}
		}
	}
	return arr;
}

var oldArr = [4,3,5,2,6,8,4,3];

var newBigArr = sortByLarge(oldArr);
console.log (newBigArr);

function sortBySmall (arr) {
	var big = 0;
	var small = 0;
		for (var countGlobe = 0; countGlobe < arr.length; countGlobe++) {
			for (var i = arr.length - 1; i >= 0; i--) {
				for(var count1 = 0; count1 < arr.length; count1++) {
					if (arr[i] < arr[count1]){
						big = arr[count1];
						small = arr[i];
						arr[count1] = small;
						arr[i] = big;
					}
				}
				if (i == 0) {
					for(var zeroCount = arr.length - 1; zeroCount >= 0; zeroCount--) {
						if (arr[i] > arr[zeroCount]) {
							big = arr[i];
							small = arr[zeroCount];
							arr[i] = small;
							arr[zeroCount] = big;
						}
					}
				}
			}
		}
	return arr;
}

var newSmallArr = sortBySmall(oldArr);
console.log (newSmallArr);