'use strict'

function fun2() {
	var str = "Мир нам всем нужен мир и только мир без мира жизнь не та";
	var mass = str.split(' ');

	for (var i = 0; mass.length > i; i++) {

		if (mass[i].toLowerCase() === 'мир') {
			mass[i] = '*'.repeat('мир'.length);
		} else if (mass[i].toLowerCase() === 'мира') {
			mass[i] = '*'.repeat('мира'.length);
		}
	}
    mass = mass.join(' ');
	console.log(mass);
}

console.log(fun2());
