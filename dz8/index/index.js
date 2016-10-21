'use strict'

function Tank (){

 this.Speed = 0;
 this.Bullets = 100;
 this.Degrees = 0;
 this.Fuel = 5;
 this.Armor = 100;
 this.Crew = 4;
 this.MaxSpeed = 60;
 this.ShootSpeed = 40;

this.boost = function (Speed){

 	if (this.Speed < this.MaxSpeed && this.Fuel > 0){
 		Speed++;
 		console.log('Tank speed increased!You current speed is ' + this.Speed + ' Km/H!');
 		alert('Tank speed increased!You current speed is ' + this.Speed + ' Km/H!');
 	}

 	if (this.Speed > this.MaxSpeed){
 		alert('This tank is not a rocket!');
 	}
 	document.getElementById('s').value = Speed;	
 }

this.slow = function (Speed){
	if (this.Fuel > 0){
 	Speed--;
 		console.log('Tank speed decreased!You current speed is ' + Speed + ' Km/H!');
 		alert('Tank speed decreased!You current speed is ' + Speed + ' Km/H!');
 	}
 	if (Speed < 0){
 		alert('Tank is going backwards!');
 	}
 	document.getElementById('s').value = Speed;	
 }

this.left = function (Degrees){
	if (this.Fuel > 0){
	Degrees--;
	console.log('Tank turn left on ' + Degrees + ' Degrees');
	alert('Tank turn left on ' + Degrees + ' Degrees');
	document.getElementById('d').value = Degrees;	
	}
}

this.right = function (Degrees){
	if (this.Fuel > 0){
	Degrees++;
	console.log('Tank turn right on ' + Degrees + ' Degrees');
	alert('Tank turn right on ' + Degrees + ' Degrees');
	document.getElementById('d').value = Degrees;
	}
}

this.fuel = function (){
	var Fuel = document.getElementById('fuel').value;
	if (Fuel <= 0){
		alert('No fuel! Tank will not go!');
	}
	else {
		alert ('Fuel level is ' + Fuel + '%');
	}
}

this.fire = function (Bullets){
	if (this.Speed < this.ShootSpeed && this.Bullets > 0){
		Bullets--;

		console.log('Count of left bullets is ' + this.Bullets);
 		alert('Fire! You have ' + this.Bullets + ' bullets!');
		}

	else{
 		alert('You cant shoot on this speed!');
 		}

 		document.getElementById('b').value = this.Bullets;
	}
}

var block3 = null;
		function move(vX, vY) {
				var x = block3.offsetLeft + vX * 20;
				var y = block3.offsetTop + vY * 20;
				
				block3.style.left =  x + "px";
				block3.style.top = y + "px";
		}
		
		window.onload = function () {
				block3 = document.getElementById("tank");
		}

var cab = new Tank();
setTimeout(function() { alert('Armor is ' + cab.Armor + '%' +' \nFuel is ' + cab.Fuel + '%' + ' \nCrew is ' + cab.Crew + ' persons'); }, 1000);

