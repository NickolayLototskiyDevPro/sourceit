//1. Замыкание ф-ции


	// var a = function () {
	// 	var count = 0;
	// 	return function() {
	// 		console.log('Hello world');
	// 		console.log(count++);
	// 	}
	// }
	// //1.
	// var b = a();
	// b();

	// //2.
	// //a () ();

	// var c = a();
	// c();


// //2. this == scobe == область видимости

// 	var fn = function () {
// 		this.a = 'str';
// 		this.b = 1;
// 		return this;
// 	}

// 	var d = fn();
// 	console.log(d.a);
// 	console.log(d.b);

// //3. Call back, event loop, async
// 	console.log('first line');

// 	setTimeout (function() {
// 		console.log('hello world');
// 	}, 0);

// 	console.log('last line');
// 	console.log('last line');
// 	console.log('last line');
// 	console.log('last line');
// 	console.log('last line');

// //4.  Слияние массивов
// 	var arrA = [1, 2, 3, 4, 7, 6, 5, 4, 3, 2, 13, 2, 13, 2, 1, 5, 6, 7, 8, 93, 2, 13, 2, 13, 2, 13, 2, 13, 2, 1];
// 	var arrB = [9, 8];

// 	function newArr (arr1, arr2) {
// 		var arrC = [];
// 		var counter1 = 0;
// 		var counter2 = 0;
// 		var length = arr1.length + arr2.length;
// 		var countLength = 0;
// 		var arrFin = 0;
// 		var arrEnd = 0;

// 		while (countLength < length) {

// 			if (countLength % 2 === 0 ){
// 				if (counter1 < arr1.length) {
// 					arrC.push(arr1[counter1]);
// 					counter1++;
// 				} else if (counter1 === arr1.length){
// 				arrEnd = arr2.slice(counter2);
// 				arrFin = arrC.concat(arrEnd);
// 				break;
// 			}
// 			}  else {
// 				if (counter2 < arr2.length) {
// 					arrC.push(arr2[counter2]);
// 					counter2++;
// 				}
// 				if (counter2 === arr2.length) {
// 					arrEnd = arr1.slice(counter1);
// 					arrFin = arrC.concat(arrEnd);
// 					break;

// 				}
// 			}
// 			countLength++;
// 		}

// 		return arrFin;
// 	}

// 	var arrC = newArr (arrA,arrB);

// 	console.log(arrC);



//6. Поиск аа бб

var str = 'aa bb cc aa bb aa bb cc bb aa cc bb aa aa bb'; //4
var subStr = 'aa bb';

function strCheck(str,subStr) {
	var strArr = str.split(' ');
	var subRes = '';
	var res = 0;
	for (var counter = 0; counter < strArr.length; counter++) {
		subRes = strArr[counter] + ' ' + strArr[counter + 1];
		console.log(subRes);
		if (subRes === subStr) {
			res += 1;
		}
	}
	return res;
}

var res = strCheck(str,subStr);

console.log(res);