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

	this.onStep=function(){
		this.fuel--;
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
	value.fuel=this.fuel;
	return value;
}

Tank35.prototype.countGuns=5;


function mapBase(){

	var indexLeft=['0%','10%','20%','30%','40%','50%','60%','70%','80%','90%'],
		indexTop=['0%','10%','20%','30%','40%','50%','60%','70%','80%','90%'];

	var storage=[[0,0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,1,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0,0]];

	function getCurrentPosition(){
		
		var position={posX:0, posY:0};

		for (var i = 0; i < storage.length; i++) {
			for (var j = 0; j < storage[i].length; j++) {
			
			if (storage[i][j]==1) {
				position.posX=i;
				position.posY=j;
			    return position;
				}

			}
		}
	}

	function setData(oldX, oldY, newX, newY){
		storage[oldX][oldY]=0;
		storage[newX][newY]=1;
	}			 


	this.onMoveRight=function(speed){
		var getPosition=getCurrentPosition(),
			newPosition={posX:getPosition.posX+speed, posY:getPosition.posY};

			if (newPosition.posX >= storage.length){
					setData(getPosition.posX, getPosition.posY, storage.length-1, newPosition.posY)
				} else {
					setData(getPosition.posX, getPosition.posY, newPosition.posX, newPosition.posY);
				}
		    
	}

	this.onMoveLeft=function(speed){
		var getPosition=getCurrentPosition(),
			newPosition={posX:getPosition.posX-speed, posY:getPosition.posY};

			if (newPosition.posX <= 0){
					setData(getPosition.posX, getPosition.posY, 0, newPosition.posY)
				} else {
					setData(getPosition.posX, getPosition.posY, newPosition.posX, newPosition.posY);
				}
	}

	this.onMoveDown=function(speed){
		var getPosition=getCurrentPosition(),
			newPosition={posX:getPosition.posX, posY:getPosition.posY+speed};

			if (newPosition.posY >= storage.length){
					setData(getPosition.posX, getPosition.posY, newPosition.posX, storage.length-1)
				} else {
					setData(getPosition.posX, getPosition.posY, newPosition.posX, newPosition.posY);
				}
	}

	this.onMoveUp=function(speed){
		var getPosition=getCurrentPosition(),
			newPosition={posX:getPosition.posX, posY:getPosition.posY-speed};

			if (newPosition.posY <= 0){
					setData(getPosition.posX, getPosition.posY, newPosition.posX, 0)
				} else {
					setData(getPosition.posX, getPosition.posY, newPosition.posX, newPosition.posY);
				}
	}

	this.onScreen=function(idNum){

		var el=document.getElementById(idNum),
			getPosition=getCurrentPosition();

			el.style.left=indexLeft[getPosition.posX];
			el.style.top=indexTop[getPosition.posY];

		
	}
}




var currentTank=new Tank35(10, 15),
	currentMap=new mapBase();
