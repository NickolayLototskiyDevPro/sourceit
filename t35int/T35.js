'use strict'



$(document).ready(function(){

  $("#cntrright").click(function(){
    $("#tank").css("left","200px");
  });
$("#cntrleft").click(function(){
    $("#tank").css("left","-200px");
  });
$("#cntrsup").click(function(){
    $("#tank").css("top","-250px");
  });
$("#cntrsdown").click(function(){
    $("#tank").css("top","250px");
  });



$("#game").click(function(){
    $("#heat").css("background-color","red");
    $("#game").css("background-color","yellow");
    $("#coord").css("display","block");
  
    $("#game").val("Finish");
  });





$("#butfire").click(function(){

$("#tank").css("background-color","red",100);
  });

  });






function fire() {st.fire()};
function spUp() {st.fast()};
function spDn() {st.slow()};
function turnL() {st.turnL()};
function turnR() {st.turnR()};


function ammload(){
	var squantity = document.getElementById("squantity").value;
	var div = document.createElement("div");
	div.innerHTML = "Now "+ squantity+ " shells load";
	document.getElementById("amm load").appendChild(div);
}
function fuelload(){
	var quantity = document.getElementById("quantity").value;
	var div = document.createElement("div");
	div.innerHTML = "Now fuel is "+quantity+ " liters";
	document.getElementById("fuel load").appendChild(div); return false;
	
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

function makeCounter() {
  var currentCount = 1;
  return function() { 
    return currentCount++;
  };}
var counter = makeCounter();

function makeCounter() {
  var currentCount = 1;
  return function() { 
    return currentCount++;
  };}
var counterf = makeCounter();



//-------function log-------------------

var realSpeed = 1;
function Tank (){

	var MAX_SPEED = 60; 
	this.wariors = 4;
	this.realSpeed = 0; 
	this.TankTower = 1;

	this.fast = function(){
				var fuelq = document.getElementById("quantity").value;
				this.fuel= fuelq;
				var aff = this.fuel - counterf()

				if (this.realSpeed > MAX_SPEED )  { alert('To fast');
			}else if (aff < 0){
				alert ("No fuel")
			}
				else { 


				var tank=document.getElementById("tank");
				tank.style.top='-50px';

				this.realSpeed ++;	
				var ns = this.realSpeed; 
				document.getElementById('txt2').innerHTML=ns;
				document.getElementById('txt3').innerHTML=aff;
				return ;}
				
		}
		
	this.slow = function(){	
				var fuelq = document.getElementById("quantity").value;
				this.fuel= fuelq;
				var aff = this.fuel - counterf()
				if (this.realSpeed == 0 )  { alert('To slow');
			}else if(aff <0){alert ("No fuel")}
				else { 
					
				var tank=document.getElementById("tank");
				tank.style.top='50px';	
				
				this.realSpeed --;
				var nv = this.realSpeed ;
				document.getElementById('txt2').innerHTML=nv;
				document.getElementById('txt3').innerHTML=aff;
				return;}
		}
		
	function ammspeedcheck(){
			    var squantity = document.getElementById("squantity").value;
				this.ammunition = squantity;
				var amm = this.ammunition - counter()
				if  (this.realSpeed > 40  )
	 			{alert("Decrease speed! To fast for fighting");
	 		}else if (amm<0){alert("No ammo!")}
				
				else {  
				
				document.getElementById('txt1').innerHTML=amm;
				alert("Bang!!" )
  				 }
		};

	function reload() { this.ammunition ; }
	
	
				this.fire = function(){

				setTimeout(ammspeedcheck.call(this), reload.call(this));}

				
				this.turnL = function(){
					var tank=document.getElementById("tank");
				tank.style.right='50px';
				};
				

}
			




var st = new Tank();

//-----Display control--------------------