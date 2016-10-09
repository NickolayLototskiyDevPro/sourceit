function Tank (ammo){

	var speed = 0;
	var MAX_SPEED = 60;//kph

	this.fuel = 100;
	this.life_points = 100;
	this.crew = 4;
	this.ammo = ammo;

	this.faster = function () {
	if (speed === MAX_SPEED) {
	console.log('You can\'t go faster.')	
	} else {
	++speed;
	console.log(speed);
	}
	}

	this.slower = function () {
	if (speed === 0) {
	console.log('Tank stopped.')	
	} else {
	--speed;
	console.log(speed);
	}
	}

	this.shoot = function () {
	if (this.ammo == 0) {
	alert('No ammo!')
	}	
	else if (speed > 40) {
	console.log('Slow down to shoot.')	
	} else {
	--this.ammo;
	console.log(this.ammo);
	}
	}
}

var cometTank = new Tank(10);



