'use strict'




function arr (){
	var a = [4, 5, 1, 0, 9, 15]

	for (var i = 0; i<a.length-1; i++){
		for (var j = i+1; j < a.length-1; j++){
			if(a[j]<a[i]){
				var t = a[i];
				a[i] = a[j];
				a[j] = t;
			}
		}
		
	}
	return console.log(a)
}
arr();

function arr2 (){
	var a = [4, 5, 1, 0, 9, 15]

	for (var i = 0; i<a.length-1; i++){
		for (var j = 0; j < a.length-1; j++){
			if(a[j+1]<a[j]){
				var t = a[j];
				a[j] = a[j+1];
				a[j+1] = t;
			}
		}
		
	}
	return console.log(a)
}
arr2();

/*var mass = [];

for(var k=0; k<10; k++){
	mass.push(Math.floor(Math.random()*10));
}
console.log(mass)
function sort(){
	for(var j = 0; j < mass.length; j++){
	for(var i=0; i< mass.length-1; i++){
		if(mass[i] > mass[i+1]){
			var per = mass[i];
			mass[i] = mass[i+1];
			mass[i+1] = per;
		}
	}
}
	console.log(mass);
}
sort()
/*
function SelectionSort(A)       
{          var A = [10, 15, 19, 3, 9]
    var n = A.length;
    for (var i = 0; i < n-1; i++){
    	 var min = i;
       for (var j = i+1; j < n; j++){
       		if (A[j] < A[min]) min = j; 
    } 
       var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
     }                    
    return console.log(A);    // На выходе сортированный по возрастанию массив A.
}
SelectionSort(); */



function sort(){
	var arr = [9, 6, 98, 0, 52, 19, 4];
	for(var j =0; j<arr.length-1; j++){
		for(var i=0; i<arr.length-1; i++){
			if(arr[i]>arr[i+1]){
				var t = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = t;
			}
		}
		
	}
	console.log(arr);
}
sort();

function sort2(){
	var arr = [9, 6, 98, 0, 52, 19, 4];
	for(var i = 0; i<arr.length; i++){
		for(var j = i+1; j<arr.length; j++){
			if(arr[j]<arr[i]){
				var t = arr[i];
				arr[i] = arr[j];
				arr[j] = t;
			}
		}
	}
console.log(arr);

}
sort2();