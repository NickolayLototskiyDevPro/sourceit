'use strict'
function Tank (){
	this.fuel;
	this.crew;
	this.life;
	this.shell = 100;
	this.MAX_SPEED = 60;
	this.speed = 0;
	this.driveFaster = function(){
			this.speed = this.speed + 1;
			console.log('Speed of the Tank is : ' + this.speed);
	};
	this.driveSlower = function(){
		this.speed = this.speed - 1;
		if (this.speed < 0){
			console.log('Speed is 0 km/h. The Tank is standing now.');
		}
		else{
			console.log('The speed is : ' + this.speed);
				}
	};
	this.shoot = function(){
		this.shell = this.shell - 1;
		if (this.shell < 0){
			console.log('There is no shell anymore! You can not shoot, decrease the speed');
		}
		else{
			console.log('You have ' + this.shell + ' shells');
		}
	};
}
var WoT = new Tank();
//-------------------
WoT.driveFaster();
WoT.driveFaster();
WoT.driveFaster();
WoT.driveFaster();
//-------------------
WoT.driveSlower();
WoT.driveSlower();
WoT.driveSlower();
//-------------------
WoT.shoot();
WoT.shoot();
WoT.shoot();