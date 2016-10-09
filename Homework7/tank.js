function Tank(initAmmo){
	var MAX_SPEED = 60;
	var MIN_SPEED = 0;
	var MAX_SPEED_FOR_FIRE = 40;
	this.fuelCapacity = 0;
	this.ammo = initAmmo;
	this.health = 0;
	this.team = 0;
	var currentSpeed = MIN_SPEED;

	this.speedUp = function(){
		if(currentSpeed<MAX_SPEED){
			currentSpeed++;
			console.log('Speed increased to '+currentSpeed);
		}else{
			console.log('Speed can\'t be more than '+ MAX_SPEED);
		}
	}

	this.speedDown = function(){
		if(currentSpeed > MIN_SPEED){
			currentSpeed--;
			console.log('currentSpeed is ' + currentSpeed);
		}else{
			console.log('Speed can\'t be less than ' + MIN_SPEED);
		}

	}

	this.fire = function(){
		if(this.ammo == 0){
			alert('There are no ammo');
		}else if(currentSpeed > MAX_SPEED_FOR_FIRE){
			alert('Speed is to high');
		}else{
			this.ammo--;
			alert('Fire!!!');
		}
	}
}

var tigre = new Tank(20);
tigre.fire();
tigre.speedUp();