function Tank(initAmmo, initModel){
	var MAX_SPEED = 60;
	var MIN_SPEED = 0;
	var MAX_SPEED_FOR_FIRE = 40;
	var TOWER = 5;
	this.fuelCapacity = 0;
	this.ammo = initAmmo;
	this.health = 0;
	this.team = 0;
	this.model = initModel;
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

	this.towerFire = function(){
		if(this.ammo < 1){
			console.log('There are no ammo');
		}else if(currentSpeed > MAX_SPEED_FOR_FIRE){
			console.log('Speed is to high');
		}else{
			this.ammo--;
			console.log('Towers fire!!!');
		}
	}

	this.volleyFire = function(){
		if(this.ammo < TOWER){
			alert('There are no ammo');
		}else if(currentSpeed > MAX_SPEED_FOR_FIRE){
			alert('Speed is to high');
		}else{
			for(i = 0; i<TOWER; i++){
				this.towerFire();
			}
			alert('Fire!!!');
		}
	} 
}

var tigre = new Tank(25, 'T_35');
tigre.volleyFire();
tigre.speedUp();
