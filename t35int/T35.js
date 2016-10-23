'use strict'

/*
//-------keys control-------------------	
document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == 38) {
      st.fast();
    }
    if (e.keyCode == 40) {
      st.slow();
    }
    if (e.keyCode == 32) {
      st.fire();
    }
  }
//-------function log-------------------


var ammunition = 7

function Tank (){

	var MAX_SPEED = 60; 
	this.wariors = 4;
	this.realSpeed = 4; 
	this.ammunition =  ammunition;
	this.TankTower = 1;

	this.fast = function(){
				if (this.realSpeed > MAX_SPEED)  { alert('To fast')}
				else {
				var ns = this.realSpeed ++; 
				this.realSpeed =this.realSpeed ++; 
				alert ("Real speed " + ns+' mph');}
		}
		
	this.slow = function(){	
				if (this.realSpeed == 0 )  { alert('To slow')}
				else { 	
					var nv = this.realSpeed --;
					this.realSpeed =this.realSpeed --;
				alert ("Real speed " + nv + " mph");}
				}
	
	function ammspeedcheck(){
		
		
		if  (this.ammunition <= 0 || this.realSpeed > 40)
	 {alert("Check ammo or decrease speed!")}
		
		else { var amm = this.ammunition-1 ;
		
	alert("Bang!!" )
  	alert ("Ammunition left "+ amm + ' shell')
  		
	}
		};
	function reload() { this.ammunition -- }
	
	this.fire = function(){
		setTimeout(ammspeedcheck.call(this), reload.call(this))}
}
	 
var st = new Tank();

//-----Display control--------------------
*/
//-------keys control-------------------

function fire() {st.fire()};
function spUp() {st.fast()};
function spDn() {st.slow()};
function turnL() {st.turnL()};
function turnR() {st.turnR()};

function ammload(sq){
	var squantity = document.getElementById("squantity").value;
	var div = document.createElement("div");
	
	div.innerHTML = "Now "+ squantity+ " shells load";
	document.getElementById("amm load").appendChild(div);
alert(squantity);
this.sq=squantity;
}





document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == 38) {
      st.fast();
    }
    if (e.keyCode == 40) {
      st.slow();
    }
    if (e.keyCode == 32) {
      st.fire();
    }
  }
//-------function log-------------------

var realSpeed = 1;
var ammunition =5;
function Tank (){

	var MAX_SPEED = 60; 
	this.wariors = 4;
	this.realSpeed = realSpeed; 
	this.ammunition =  ammunition;
	this.TankTower = 1;

	this.fast = function(){
				if (this.realSpeed > MAX_SPEED)  { alert('To fast')}
				else {
				this.realSpeed ++;	
				var ns = this.realSpeed; 
				alert ("Real speed " + ns+' mph');
				return;}
				
		}
		
	this.slow = function(){	
				if (this.realSpeed == 0 )  { alert('To slow')}
				else { 	
				this.realSpeed --;
				var nv = this.realSpeed ;
				alert ("Real speed " + nv + " mph");
				return;}
		}
		
	function ammspeedcheck(){
			
				if  (this.ammunition <= 0 || this.realSpeed > 40)
	 			{alert("Check ammo or decrease speed!")}
				
				else { var amm = this.ammunition-1 ;
				alert("Bang!!" )
  				alert ("Ammunition left "+ amm + ' shells')

  		}
		};
	function reload() { this.ammunition --; }
	
	
				this.fire = function(){

				setTimeout(ammspeedcheck.call(this), reload.call(this))}
}


function fuelload(){
	var quantity = document.getElementById("quantity").value;
	var div = document.createElement("div");
	div.innerHTML = "Now fuel is "+quantity+ " liters";
	document.getElementById("fuel load").appendChild(div); return false;
	alert(quantity);
}



var st = new Tank();

//-----Display control--------------------