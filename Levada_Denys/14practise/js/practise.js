'use strict'


// ///////////1.
// var Log = function (fnLog) {
// 	this.fnLog = fnLog;
// 	this.log = function (message) {
// 		this.fnLog(message);
// 	}
// }

// var logger = new Log (console.log);
// logger.log('mes');


//2. 



// try {
// 	a = 11;
// } catch (ex) {
// 	console.log(ex);
// }


// var x = 100;

// try {
// 	if (x >99) {
// 		throw new Error ('msg');
// 	}

// } 	catch (ex) {
// 		console.log(ex);
// 	}


	

// try {
// 	setTimeout (function () {
// 		try {
// 			throw new Error ('msg');
// 		} catch (ex) {console.log(ex)}
// 	}, 10000)
// } catch (ex) {console.log(ex)};


// 	//3. ES6

// for (let i = 0; i < 4; i++) {
// 	setTimeout(function () {
// 		console.log(i)
// 	}, 0);
// }

// 	//4. 
// a = 1; // error
// console.log (a);

// let a = 2;

// 	//5.
// let name = 'John';
// console.log (`Hi ${name},
// Did you know that 5 * 3 = ${5*3} ?`);


 // Собеседование


 var array = [1,1,3,5,5,6,7];
 function oddArr (arr) {
 	for (var i = 0; i < arr.length; i++) {
 		if (arr[i] % 2 === 0) {
 			arr.splice(i,1);
 		}
 	}
 	return arr;
 }

 var newArr = oddArr (array);
console.log(typeof null)
 console.log (newArr);

 