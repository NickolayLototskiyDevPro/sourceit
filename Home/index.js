'use strict'

//26.09.16


/*function k() {
	var str = 'Гуси по небу летели';
	var arena = str.split(' ');
	for (var i = 0; arena.length >= i; i++) {
		if (arena[i] === 'Гуси') {
			arena[i] = 'Лебеди';
			arena = arena.join(' ');
			console.log(arena);
			break;
		}
	}
}
k()



var a ='война и мир, Миру Мир';
function str(){
	var XXX = "Мир",
		xxx = 'мир';
	var mass = a.split(' ');
	console.log(a);
	for (var i = 0; i <= mass.length; i++) {
		if (mass[i] === XXX) {
			mass[i] = 'xxxxx';
			mass=mass.join(' ');
			console.log(mass);
		}
	}
}
str()

//пузырьковая сортировка

var mass = [];

for(var k=0; k<10; k++){
	mass.push(Math.floor(Math.random()*10));
}
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

*/





//30.09.16

var a = [1, 2, 3, 5, 6, 9, 8, 9, 9, 9, 20];
var b = [2, 4, 6, 8, 9, 12, 15, 20];

var sum = function(){
	var mass=[];
		if(b.length > a.length){
			var minLength = a.length;
			var e = b.slice(a.length - b.length);
		}else{
			var minLength = b.length;
			e = a.slice(b.length - a.length);
		}
			for(var i = 0; i < minLength; i++){
					mass.push( a[i], b[i]);
			}
					mass = mass.concat(e);
					console.log(mass);
}
sum();
/*----------------------------------------------------------------------*/
var str = 'aa bb ab aa bb bb aa bb aa bb bb aa bb bb aa';
var str2 = 'aa bb';

var arr = str.split(' ');
var arr2 = str2.split(' ');
var iteration = function(){
	var summIter = 0,
		j=0;
		for(var i = 0; i<arr.length; i++){
		if(arr[i]===arr2[j] && arr[i + 1]===arr2[j+1]){
			summIter++;
		}
	}
	return summIter;
}
console.log(iteration());
/*-----------------------------------------------------------------------*/
function massiv(a){
	var b = '';
	if(typeof a === 'number' && a<=1000){
			for(var i=1; i<=a; i++){
				b+='b';
				console.log(b);
			}
	}else{
		console.log('error');
	}
}
massiv(10);
/*------------------------------------------------------------------*/
function sumT(n){
	var b = 0;
	for(var i=1; i<=n; i++){
		b+=i;
	}
	return b;
}
console.log(sumT(100));


