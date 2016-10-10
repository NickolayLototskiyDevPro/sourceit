'use strict'
function Tank (){

 this.Armor = 100;
 this.Fuel = 100;
 this.Crew = 4;
 var Speed = 0;
 var MaxSpeed = 60;
 var ShootSpeed = 40;

this.boost = function (Speed){

 	if (Speed < MaxSpeed){
 		Speed++;
 		console.log('Tank speed increased!You current speed is ' + Speed + ' Km/H!');
 		alert('Tank speed increased!You current speed is ' + Speed + ' Km/H!');
 	}

 	if (Speed > MaxSpeed){
 		alert('This tank is not a rocket!');
 	}
 }

this.slow = function (Speed){
	// I cant understand this construction?
 	if (Speed < MaxSpeed){
 		Speed--;
 		console.log('Tank speed decreased!You current speed is ' + Speed + ' Km/H!');
 		alert('Tank speed decreased!You current speed is ' + Speed + ' Km/H!');
 	}

 	if (Speed <= 0){
 		alert('Bad news, Tank is stopped!');
 	}
 }

this.fire = function (Bullets){
	// Use boolean operator && and add additional condition
	if (Speed > ShootSpeed) {
		alert('You cant fire on this speed!'); // не могу заставить работать ограничение по скорости на стрельбу!
	}
	// Do not use not operator it is hard to read
	else if (Bullets <= 0){
		alert('No bullets!');
	}

 	else {
 		Bullets--;
 		console.log('Count of left bullets is ' + Bullets);
 		alert('Fire! You have ' + Bullets + ' bullets!');
 	}
 }
}
// Use empty lines
var cab = new Tank();
console.log('Armor is ' + cab.Armor + '%');
console.log('Fuel is ' + cab.Fuel + '%');
console.log('Crew is ' + cab.Crew + ' persons');
// cab.boost(100);
cab.boost(30);
cab.slow(25);
// cab.slow(0);
cab.fire(5);