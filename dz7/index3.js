'use strict'
function Tank (){

 this.Armor = 100;
 this.Fuel = 100;
 this.Crew = 4;
 var Speed = 0;
 var MaxSpeed = 60;
 var ShootSpeed = 40;
 var Bullets;

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
 		Speed--;
 		console.log('Tank speed decreased!You current speed is ' + Speed + ' Km/H!');
 		alert('Tank speed decreased!You current speed is ' + Speed + ' Km/H!');
 		
 	if (Speed <= 0){
 		alert('Bad news, Tank is stopped!');
 	}
 }

this.fire = function (Bullets){
	// Use boolean operator && and add additional condition
	if (Speed < ShootSpeed && Bullets > 0){
		Bullets--;

		console.log('Count of left bullets is ' + Bullets);
 		alert('Fire! You have ' + Bullets + ' bullets!');
		}

	else{
 		alert('You cant shoot on this speed!');
 		}
	}	
}
// Use empty lines
var cab = new Tank();
console.log('Armor is ' + cab.Armor + '%');
console.log('Fuel is ' + cab.Fuel + '%');
console.log('Crew is ' + cab.Crew + ' persons');
// cab.boost(100);
cab.boost(40);
cab.slow(25);
// cab.slow(0);
cab.fire(5);