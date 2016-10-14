'use strict'

 var Speed = 0;
 var Bullets = 100;
 var Degrees = 0;

function Tank (){

 this.Armor = 100;
 this.Fuel = 100;
 this.Crew = 4;
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
 	document.getElementById('s').value = Speed;	
 }

this.slow = function (Speed){

 	Speed--;
 		console.log('Tank speed decreased!You current speed is ' + Speed + ' Km/H!');
 		alert('Tank speed decreased!You current speed is ' + Speed + ' Km/H!');
 		
 	if (Speed < 0){
 		alert('Tank is going backwards!');
 	}
 	document.getElementById('s').value = Speed;	
 }

this.left = function (Degrees){
	Degrees--;
	console.log('Tank turn left on ' + Degrees + ' Degrees');
	alert('Tank turn left on ' + Degrees + ' Degrees');
	document.getElementById('d').value = Degrees;	
}

this.right = function (Degrees){
	Degrees++;
	console.log('Tank turn right on ' + Degrees + ' Degrees');
	alert('Tank turn right on ' + Degrees + ' Degrees');
	document.getElementById('d').value = Degrees;
}

this.fire = function (Bullets){
	if (Speed < ShootSpeed && Bullets > 0){
		Bullets--;

		console.log('Count of left bullets is ' + Bullets);
 		alert('Fire! You have ' + Bullets + ' bullets!');
		}

	else{
 		alert('You cant shoot on this speed!');
 		}

 		document.getElementById('b').value = Bullets;
	}
}

var cab = new Tank();
alert('Armor is ' + cab.Armor + '%' +' \nFuel is ' + cab.Fuel + '%' + ' \nCrew is ' + cab.Crew + ' persons');