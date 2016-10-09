
function Tank (){

	var MAX_SPEED = 60;
	this.wariors = 4;
	this.realSpeed = 60; 
	this.ammunition = 3;
	this.armor = 5;

	this.fast = function(){
				if (this.realSpeed > MAX_SPEED)  { alert('to fast')}
				else { 
				var ns = this.realSpeed +1;
				console.log ("Real speed " + ns);}
		}
		
	this.slow = function(){	
				if (this.realSpeed == 0 )  { alert('to slow')}
				else { 
				var nv = this.realSpeed - 1;
				console.log ("Real speed " + nv);}
				}

	function display(){ 
		var amm = this.ammunition - 1;
  		console.log ("Ammunition left "+ amm)
		}
	
	function speedcheck(){if  (this.ammunition  > 0, this.realSpeed <= 40 ) { alert("Bang!!")}
		else {alert ("No ammo, or to high speed for fire")}}
	
	function reload() { this.ammunition-1 }
	
	this.fire = function(){
		setTimeout(speedcheck.call(this), display.call(this),reload.call(this))}
}
	
	 
var st = new Tank();
st.fire();