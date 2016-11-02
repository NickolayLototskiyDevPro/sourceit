class Tank {	
	constructor(ammo) {
    this.ammo = ammo;
    this.gun_turret = 1;
	this.speed = 0;
	this.MAX_SPEED = 60;

	this.fuel = 100;
	this.life_points = 100;
	this.crew = 4;

	//get current position of tank icon
	this.tankMarginTop = parseInt(getComputedStyle(tank_icon).marginTop.slice(0, -2) );
	this.tankMarginLeft = parseInt(getComputedStyle(tank_icon).marginLeft.slice(0, -2) );

	this.iconHeight = parseInt(getComputedStyle(tank_icon).height.slice(0, -2) );
	this.iconWidth = parseInt(getComputedStyle(tank_icon).width.slice(0, -2) );

	//set boundaries
	this.maxMarginTop = parseInt(getComputedStyle(game_field).height.slice(0, -2) ) - this.iconHeight;
	this.maxMarginLeft = parseInt(getComputedStyle(game_field).width.slice(0, -2) ) - this.iconWidth;
	}

 	moveForward () {
	if (this.tankMarginTop > 0) {
	this.tankMarginTop -= 5;
	tank_icon.style.marginTop = this.tankMarginTop + 'px';
	};
	};

	moveBack () {
	if (this.tankMarginTop < this.maxMarginTop) {
	this.tankMarginTop += 5;
	tank_icon.style.marginTop = this.tankMarginTop + 'px';
	};
	};

	moveRight () {
	if (this.tankMarginLeft < this.maxMarginLeft) {
	this.tankMarginLeft += 5;
	tank_icon.style.marginLeft = this.tankMarginLeft + 'px';
	};
	};

	moveLeft () {
	if (this.tankMarginLeft > 0) {
	this.tankMarginLeft -= 5;
	tank_icon.style.marginLeft = this.tankMarginLeft + 'px';
	};
	};

	faster () {
	if (this.speed === this.MAX_SPEED) {
	alert('You can\'t go faster.');
	return this.speed;	
	} else {
	++this.speed;
	return this.speed;
	}
	}

	slower () {
	if (this.speed === 0) {
	alert('Tank stopped.');
	return this.speed;	
	} else {
	--this.speed;
	return this.speed;
	}
	}

	shoot () {
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
};

class T_35 extends Tank {
	constructor(ammo){
	super();
	this.ammo = ammo;
	this.gun_turret = 5;
	}
	
	shoot(){
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
};