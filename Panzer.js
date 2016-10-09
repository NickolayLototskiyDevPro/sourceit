
function Tank (){

	var MAX_SPEED = 60;
	this.wariors = 4;
	this.realSpeed = 200; 
	this.ammunition = 1;
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
	
	function ammspeedcheck(){
		if  (this.ammunition  <= 0) {
			alert ( "No ammo");
		}
		if (this.realSpeed > 40 ) { 
			alert ("Hi speed! decrease speed to 40 mp/h"); 
		}
		else {alert("Bang!")}
		};
	
	function reload() { this.ammunition-1 }
	
	this.fire = function(){
		setTimeout(ammspeedcheck.call(this), display.call(this),reload.call(this))}
}
	
	 
var st = new Tank();
st.fire();

