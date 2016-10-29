function ShowDateTank(){

	var elSpeed=document.getElementById('ViewSpeed'),
		elAmmo=document.getElementById('ViewAmmunition'),
		elLife=document.getElementById('ViewLife'),
		elFuel=document.getElementById('ViewFuel');

		dataTank=currentTank.getData();

		elSpeed.innerHTML='Speed ='+dataTank.speed;
		elAmmo.innerHTML='Ammunition count ='+dataTank.ammunition;
		elLife.innerHTML='Life ='+dataTank.life;
		elFuel.innerHTML='Fuel ='+dataTank.fuel;

}

function ShowDateMap(){
	currentMap.onScreen('exampleTank1');
}


function onMoveRight(){
	if (currentTank.getData().fuel <=0 ){
		alert('Fuel empty');
	} else {
		if (currentTank.getData().speed >0){
		  currentTank.onStep();

		  currentMap.onMoveRight(currentTank.getData().speed);
		  ShowDateTank();
		  ShowDateMap();
		}
		
	}
}

function onMoveLeft(){
	if (currentTank.getData().fuel <=0 ){
		alert('Fuel empty');
	} else {
		if (currentTank.getData().speed >0){
		  currentTank.onStep();

		  currentMap.onMoveLeft(currentTank.getData().speed);
		  ShowDateTank();
		  ShowDateMap();
		}
		
	}
}

function onMoveUp(){
	if (currentTank.getData().fuel <=0 ){
		alert('Fuel empty');
	} else {
		if (currentTank.getData().speed >0){
		  currentTank.onStep();

		  currentMap.onMoveUp(currentTank.getData().speed);
		  ShowDateTank();
		  ShowDateMap();
		}
		
	}
}

function onMoveDown(){

	if (currentTank.getData().fuel <=0 ){
		alert('Fuel empty');
	} else {
		if (currentTank.getData().speed >0){
		  currentTank.onStep();

		  currentMap.onMoveDown(currentTank.getData().speed);
		  ShowDateTank();
		  ShowDateMap();
		}
		
	}
}


/*window.onload=function(){
	//currentTank.init(10, 15);

	ShowDateMap();
	ShowDateTank();

	//document.getElementById('controlGame').innerHTML='Start';
}*/

idcontrolGame.onclick=function(){
	var elimagePanel=document.getElementById('imagePanel'),
		elcontrollPanel=document.getElementById('controllPanel'),

		elcontrolGame=document.getElementById('idcontrolGame');

	if (currentGame.process) {
		elcontrolGame.innerHTML='Start';

		elimagePanel.style.visibility='hidden';
		elcontrollPanel.style.visibility='hidden';

		currentGame.delete();
		currentMap.clearMatrix();


	}else{
		elcontrolGame.innerHTML='Stop';

		elimagePanel.style.visibility='visible';
		elcontrollPanel.style.visibility='visible';

		currentGame.create();

		currentTank.init(10,15);
		currentMap.init();

		console.dir(currentMap.getData());

		ShowDateMap();
		ShowDateTank();

	}
}


idMoveRight.addEventListener('click', onMoveRight);
idMoveLeft.addEventListener('click', onMoveLeft);
idMoveUp.addEventListener('click', onMoveUp);
idMoveDown.addEventListener('click', onMoveDown);


document.addEventListener('keydown',function(event){
	switch (event.keyCode){
		case 39: 
			onMoveRight();
			break; 
		case 40: 
			onMoveDown();
			break;
		case 37:
			onMoveLeft();
			break;	
		case 38:
			onMoveUp();
			break; 
		
	}
})


document.getElementById('idSpeedUp').onclick=function(){
	currentTank.setSpeed_fast();
	ShowDateTank();
};

document.getElementById('idSpeedDown').onclick=function(){
	currentTank.setSpeed_slow();
	ShowDateTank();	
};


document.getElementById('idShot').onclick=function(){


	var elTank=document.getElementById('exampleTank1'),
		doShot;

	function BeginFire(){
		elTank.style.background='red';
	}

	function StopFire(){
		elTank.style.background='black';
	}

	doShot=currentTank.goShot();
	
	if (doShot) {
		BeginFire();
		setTimeout(StopFire, 1000);

		ShowDateTank();
	}
		
};








