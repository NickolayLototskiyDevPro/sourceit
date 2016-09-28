
var max = 0;
var t = 0;
var myArr = [1, 3, 0, 11, 6, 7, 5, 2, 9, 8, 10, 4];

function sort_max (myArr) {
	for (var i = 0; i < myArr.length; i++) {
		for (var j = (i+1); j <= myArr.length; j++) {
			max = i;

		if (myArr[max] < myArr[j]) {
			max = j;
			};

		t = myArr[i];
		myArr[i] = myArr[max];
		myArr[max] = t;

		}
	};
	return myArr;
	}

console.log(sort_max(myArr));


	function bubble (myArr) {
		do {
			var j = 0;

		for (var i = 0; i < myArr.length; i++) {
			
			if(myArr[i] > myArr[i + 1]){
			j = myArr[i];
			myArr[i] = myArr[i + 1];
			myArr[i + 1] = j;
			}
		}

		} while (j > 0);
	
	return myArr;
	}


	console.log(bubble(myArr));