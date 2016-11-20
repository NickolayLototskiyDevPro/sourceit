// //1.
// var a = {i:1, b : 2};
// var c = {ii : 11};

// c.apply(a);

// c = c.bind(a);
// c();


// //2. 

// var A = function () {
// 	var self 
// }



// //3.

// var Animal = function (weight) {
// 	this.weight = weight;
// 	this.run = function () {
// 		console.log ('Run run run');

// 	}
// }

// var Dog = function (weight) {
// 	this.tail = true;
// 	Animal.call(this, weight);
// 	this.run = function () {
// 		console.log ('Ne run ne run');
// 	}
// }

// var puppy = new Dog (15);

// 4.

// var Car = function () {
// 	this.speed = 0;
// 	this.increaseSpeed = function () {
// 		++this.speed;
// 		console.log(this.speed); 
// 	}
// }

// var Bolid = function () {
// 	Car.call (this);
// 	this.increaseSpeed = function () {
// 		this.speed += 5;
// 		console.log(this.speed);
// 	}
// }


// var newCar = new Car ();
// var Lambo = new Bolid ();


// newCar.increaseSpeed ();
// Lambo.increaseSpeed ();
// newCar.increaseSpeed ();
// Lambo.increaseSpeed ();
// newCar.increaseSpeed ();
// Lambo.increaseSpeed ();

// //5.

// var car = {engine : true};
// var fordT = {wheels : 4};

// fordT.__proto__= car;
// //fordT.prototype = car;

// console.log (fordT);

// console.log(fordT.hasOwnProperty('wheels'));


// //6.
// var car = {engine : true};
// var FordT = function () {
// 	this.wheels = 4;
// };

// FordT.prototype = car;
// var fT = new FordT ();

// console.log(fT.wheels);

//7.

var Animal = function (weight) {
	this.weight = weight;
};

Animal.prototype.run = function () {
	console.log('Run Forest, RUN!');
};

Animal.prototype.jump = function () {
	console.log ('Jump Jump!');
};

var mammal = new Animal;

console.log (mammal.run ());
console.log (mammal.jump ());

var Dog = function (weight) {
	Animal.call (this, weight); 
}

Dog.prototype.constructor = Dog;


var A = {} === Object.create(null);