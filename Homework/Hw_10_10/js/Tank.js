var Tank = function (ammo){

	this.speed = 0;
	this.MAX_SPEED = 60;

	this.fuel = 100;
	this.life_points = 100;
	this.crew = 4;
	this.ammo = ammo;

	this.faster = function () {
	if (this.speed === this.MAX_SPEED) {
	alert('You can\'t go faster.');
	return this.speed;	
	} else {
	++this.speed;
	return this.speed;
	}
	}

	this.slower = function () {
	if (this.speed === 0) {
	alert('Tank stopped.');
	return this.speed;	
	} else {
	--this.speed;
	return this.speed;
	}
	}

	this.shoot = function () {
	if (this.ammo === 0) {
	alert('No ammo!');
	return this.ammo;
	}	
	else if (this.speed > 40) {
	alert('Slow down to shoot.');
	return this.ammo;	
	} else {
	--this.ammo;
	return this.ammo;
	}
	}
	
}

var cometTank = new Tank(10);

var T_35 = function (ammo) {

	Tank.call(this, ammo);
	this.gun_turret = 5;
	
	this.shoot = function () {

	if (this.ammo < this.gun_turret) {
	alert('No ammo!');
	return this.ammo;
	}	
	else if (this.speed > 40) {
	alert('Slow down to shoot.');
	return this.ammo;	
	} else {
	this.ammo -= this.gun_turret;
	return this.ammo;
	}

	}
}

T_35.prototype = Object.create(Tank.prototype);
T_35.prototype.constructor = T_35;

var t_35_1 = new T_35(15);

var selectedTank = cometTank;


function message (element, func) {
	
	funcR = func.call(selectedTank);
	//console.log(funcR);

	element.innerHTML = '';
	element.innerHTML = funcR;

}

function changeTank () {

	var selected = document.getElementById('chooseTank');
	var value = selected.options[selected.selectedIndex].value;

	switch(value) {
 	case 't_35_1':  selectedTank = t_35_1;
	break;
	
	case 'cometTank':  selectedTank = cometTank;
	break;

	}

	document.getElementById('speed_span').innerHTML = selectedTank.speed;
	document.getElementById('ammo_span').innerHTML = selectedTank.ammo;
}

