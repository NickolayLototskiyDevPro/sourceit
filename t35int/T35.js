'use strict'

$(document).ready(function(){

 
var status_game = "Start"
$("#game").click(function () {

    if (status_game === "Start"){
        status_game = "Finish";
        	$("#heat").css("background-color","red");
   			$("#game").css("background-color","green");
    		$("#coord").css("display","block");
  
    $("#game").val("Finish");

    }else if (status_game === "Finish"){
        status_game = "Start";
       		$("#heat").css("background-color","green");
    		$("#game").css("background-color","red");
      		$("#game").val("Star Game");
      		$("#coord").css("display","none");

    }
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
				alert ("No fuel, load fuel on you tank")
			}
				else { 
						$("#tank").offset(function (i, Tank) {
            			var New_Coord = {};
            			var z = Tank.top
         				if (z < 261){alert("Return to warzone!")}
            			else{
            			New_Coord.top = Tank.top - 10;
            			return New_Coord;}
        })
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
			}else if(aff <0){alert ("No fuel, load fuel on you tank")}
				else { 
					
					
						$("#tank").offset(function (i, Tank) {
            			var New_Coord = {};
            			New_Coord.top = Tank.top + 10;
            			return New_Coord;
        })
				this.realSpeed --;
				var nv = this.realSpeed ;
				document.getElementById('txt2').innerHTML=nv;
				document.getElementById('txt3').innerHTML=aff;
				return;}
		}

		this.turnL =  function(){	
				var fuelq = document.getElementById("quantity").value;
				this.fuel= fuelq;
				var aff = this.fuel - counterf()
				if(aff <0){alert ("No fuel, load fuel on you tank")}
				else { 
				document.getElementById('txt3').innerHTML=aff;

						$("#tank").offset(function (i, Tank) {
            			var New_Coord = {};
            			var y =Tank.left;
       					if (y < 2.4) {alert("Return to warzone!")}
            			else{ 
            				New_Coord.left = Tank.left - 10;
            				return New_Coord;}
            			})

            			
            			
			 	
				}};

		this.turnR =  function(){	
				var fuelq = document.getElementById("quantity").value;
				this.fuel= fuelq;
				var aff = this.fuel - counterf()
				if(aff <0){alert ("No fuel, load fuel on you tank")}
				else { 
				document.getElementById('txt3').innerHTML=aff;

						$("#tank").offset(function (i, Tank) {
            			var New_Coord = {};
            			var x =Tank.left;
            			if (x > 441) {alert("Return to warzone!")}
            			else{ 
            				New_Coord.left = Tank.left + 10;
            				return New_Coord;}
            			})
			 	
				}};
		
	function ammspeedcheck(){
			    var squantity = document.getElementById("squantity").value;
				this.ammunition = squantity;
				var amm = this.ammunition - counter()
				if  (this.realSpeed > 40  )
	 			{alert("Decrease speed! To fast for fighting");
	 		}else if (amm<0){alert("No ammo! Load ammo!")}
				
				else {  
				
				document.getElementById('txt1').innerHTML=amm;
				alert("Bang!!" )
				
					$("#tank").css("background","red");
					function func(){
					$("#tank").css("background","url('./tank.png')");}
					setTimeout(func,150);
  				} 
		};

	function reload() { this.ammunition ; }
	
	
				this.fire = function(){

				setTimeout(ammspeedcheck.call(this), reload.call(this));}

				
				
				

}
			




var st = new Tank();

//-----Display control--------------------