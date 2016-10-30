'use strict'




function Tank (ammunition){
	this.fuel = 0;
	this.life = 3;
	this.crew = 3;
	this.volley;
	this.balanceAmmun = 0;
	var speed = 0;
	var speedMan = 0;
	this.ammunition;
	this.newObj;
	var field = document.getElementById('content');
	this.coordField = field.getBoundingClientRect();
	var MAX_SPEED = 60;
	var coordInnerField = {
		top: this.coordField.top + field.clientTop,
		left: this.coordField.left + field.clientLeft
	};
	
	Tank.prototype.faster = function (elem){
		var elem;
		speed++;
		this.Interv = 0;
		
		return this.Interv = setInterval(function () {
			var newObj = elem.getBoundingClientRect();
			if(speed >= MAX_SPEED){
				speed  = MAX_SPEED;
				console.log(MAX_SPEED);
			}else{
				var coordnewObj = {
					top: newObj.top - speed * elem.clientHeight / 2
				};
				elem.style.top= coordnewObj.top + 'px';
				
			};
			clearInterval(this.Interv);
		},10)
		
		
	};
	Tank.prototype.slower = function (elem){
		var elem;
		speed--;
		this.Interv1 = 0;
		
		return this.Interv1 = setInterval(function () {
			var newObj = elem.getBoundingClientRect();
			if(speed<=1){
				console.log('STOP')
				
			}else{
				var coordnewObj = {
					top: newObj.top - speed * elem.clientHeight / 2
				};
				elem.style.top= coordnewObj.top + 'px';
				console.log(speed);
			};
			clearInterval(this.Interv1);
		},10)
		
	};
	Tank.prototype.left = function (elem){
		var elem;
		speedMan++;
		this.Interv2 = 0;
		
		return this.Interv2 = setInterval(function () {
			var newObj = elem.getBoundingClientRect();
			if(speed >= MAX_SPEED){
				speed  = MAX_SPEED;
				console.log(MAX_SPEED);
			}else{
				var coordnewObj = {
					left: newObj.left -  speedMan * elem.clientWidth / 2
				};
				elem.style.left= coordnewObj.left + 'px';
				
			};
			clearInterval(this.Interv2);
		},10)
		
		
	};
Tank.prototype.right = function (elem){
		var elem;
		speedMan--;
		this.Interv3 = 0;
		
		return this.Interv3 = setInterval(function () {
			var newObj = elem.getBoundingClientRect();
			if(speed >= MAX_SPEED){
				speed  = MAX_SPEED;
				console.log(MAX_SPEED);
			}else{
				var coordnewObj = {
					left: newObj.left - speedMan * elem.clientWidth / 2
				};
				elem.style.left = coordnewObj.left + 'px';
				
			};
			clearInterval(this.Interv3);
		},10)
		
		
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
	};
	
}

var mashine = new Tank();

var T_new = function(){
	Tank.call(this);
}
T_new.prototype = Object.create(Tank.prototype);
T_new.prototype.constructor = T_new;
var T_35 = new T_new();
T_35.tower = 5;

T_35.volley = T_35.tower;
T_35.ammunition = 30;

var objTank = document.getElementById('T_35');

document.getElementById('speed_up').onclick = function(){
	addEventListener('click', T_35.faster(objTank));
	
};

document.getElementById('speed_down').onclick = function(){
	addEventListener('click', T_35.slower(objTank));
	
};
document.getElementById('maneuver_left').onclick = function(){
	addEventListener('click', T_35.left(objTank));
	
};
document.getElementById('maneuver_right').onclick = function(){
	addEventListener('click', T_35.right(objTank));
	
};

document.getElementById('kill').onclick = function(){
	addEventListener('click', T_35.shot());
	addEventListener('click', function(){
		objTank.style.background="red";
		setTimeout(function(){
		objTank.style.background="";
		}, 3000);
	});
};







/*document.getElementById('speed_up').onclick = function (){
	var coordField = field.getBoundingClientRect();
	var objTankk = objTank.getBoundingClientRect();

	var coordInnerField = {
		top: coordField.top + field.clientTop,
		left: coordField.left + field.clientLeft
	};
	var coordObjTank = {
		top : objTankk.top  - 52,
		left :  objTankk.left - objTank.clientWidth / 2,
	}
	objTank.style.left = coordObjTank.left + 'px';
    objTank.style.top = coordObjTank.top + 'px';
}*/
