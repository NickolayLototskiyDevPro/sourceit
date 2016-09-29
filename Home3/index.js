'use strict'


function k() {
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

//сортировка наибольшим числом

