// Class name has to start from capital letter.
function newTank(newAmmunition, newfuel){
	
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

		alert(currentSpeed);
	}

//Does not show current speed
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

// GOOD!
	this.get_Speed=function(){
		return currentSpeed;
	}	
}

function View(){
	var el=document.getElementById('view'),
		elSpeed='Speed Tank = '+Tank1.get_Speed(),
		elAmmo='Ammunition count ='+Tank1.ammunition,
		elLife='life tank ='+Tank1.life,
		elFuel='Fuel tank ='+Tank1.fuel;

		el.innerHTML='<div>'+elSpeed+'</div>'+'<div>'+elAmmo+'</div>'+'<div>'+elLife+'</div>'+'<div>'+elFuel+'</div>';
}


document.getElementById('up').onclick=function(){

		Tank1.setSpeed_fast();

		alert('Speed fast +1 km/hour')

		View();
	};

document.getElementById('down').onclick=function(){

	Tank1.setSpeed_slow();

	alert('Speed slow -1 km/hour');

	View();
};


document.getElementById('shot').onclick=function(){
	
	Tank1.goShot()

	alert('Shot !!!')

	View();
	
};



var Tank1=new newTank(10, 50);

























