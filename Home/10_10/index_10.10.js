'use strict'




function Tank (ammunition){
	this.fuel = 0;
	this.life = 3;
	this.crew = 3;
	this.volley;
	this.balanceAmmun = 0;
	this.speed = 0;
	this.ammunition;
	var MAX_SPEED = 60;
	Tank.prototype.faster = function (){
		this.speed>=MAX_SPEED ? console.log(MAX_SPEED) : console.log(++this.speed);
		this.speed=this.speed++;
	};
	Tank.prototype.slower = function (){
		this.speed<=1 ? console.log('STOP') : console.log(--this.speed);
		this.speed=this.speed--;
	};
	Tank.prototype.shot = function(){
		if(this.speed>40){
			console.log('over speed');
		}
		else if(this.ammunition<=0 || this.ammunition==null){
			console.log('no ammunition');
		}
		else{
			if(this.balanceAmmun >= this.ammunition || this.ammunition>=this.volley){
				console.log('shot');
				this.ammunition -= this.volley;
				this.balanceAmmun = this.ammunition;
				console.log('Your balance'+ ' '+this.balanceAmmun);
			}else{
				console.log("enough ammunition");
				}
		}
	}
}

var mashine = new Tank();


var T_new = function(){
	Tank.call(this);
}
T_new.prototype = Object.create(Tank.prototype);
T_new.prototype.constructor = T_new;
var T_35 = new T_new;
T_35.tower = 5;
T_35.speed = 0;
T_35.volley = T_35.tower;
T_35.ammunition = 30;






