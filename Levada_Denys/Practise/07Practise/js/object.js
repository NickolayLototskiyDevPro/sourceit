var person = {name : "Kolya",
 firstName : "Serga" ,
 parentalName : "Andreevich",
 age : 30}


 person.hobby = "Surfing";



 var a = ['tree', 'bush', 'grass', 'palm'];


 function printArray (arr) {
 	for(var i = 0; i < arr.length; i++) {
 		console.log (i + " : " + arr[i]);
 	}
 	return;
 }

 printArray(a);


 function genArray (n) {
 	var arr = [];
 	for (var i = 0; i < n; i++) {
 		arr.push(Math.random());
 	}
 	return arr;
 }

 var newArr = genArray(35);
 //printArray (newArr);

function decrArray (arr, n) {
	var len = arr.length - n;
	for(var i = 0; i < len; i++) {
		arr.pop();
	}
	return arr;
}

var smallArr = decrArray(newArr, 10);
printArray (smallArr);



var str = "Gusi po nebu letyat";

var arr = str.split(' ');

arr[0] = 'Lebedi';
str = arr.join(' ');
