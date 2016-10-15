function BaseTank(newAmmunition, newfuel){
	
	var maxSpeed=60,
		minSpeed=0,
		shotSpeed=40;

		currentSpeed=0;

	this.life=100;

	this.people;

	this.fuel=newfuel;

	this.ammunition=newAmmunition;

	this.setSpeed_fast=function(){
		if ( currentSpeed < maxSpeed ) {
			currentSpeed++;
		}
	}

	this.setSpeed_slow=function(){
		if ( currentSpeed > minSpeed ) {
			currentSpeed--;
		}
	}


	this.goShot=function(){
		if (currentSpeed < shotSpeed && this.ammunition > 0){
			this.ammunition--;
		}
	}

	this.get_Speed=function(){
		return currentSpeed;
	}	
}

function Tank35(newAmmunition, newfuel){

	BaseTank.call(this, newAmmunition, newfuel);

	this.goShot=function(){
		var currentSpeed=this.get_Speed(),
			doShot=false;

		if (currentSpeed === 0  && this.ammunition >= 5){
			this.ammunition=this.ammunition-5;
			doShot=true;
		}

		return doShot;

	}

}

Tank35.prototype.getData=function(){
	var value={};
	value.life=this.life;
	value.ammunition=this.ammunition;
	value.speed=this.get_Speed();
	return value;
}

Tank35.prototype.countGuns=5;


var currentTank=new Tank35(10, 50);
