function ShowDate(){

	var elSpeed=document.getElementById('ViewSpeed'),
		elAmmo=document.getElementById('ViewAmmunition'),
		elLife=document.getElementById('ViewLife');

		dataTank=currentTank.getData();

		elSpeed.innerHTML='Speed ='+dataTank.speed;
		elAmmo.innerHTML='Ammunition count ='+dataTank.ammunition;
		elLife.innerHTML='Life ='+dataTank.life;

}



window.onload=function(){
	ShowDate();
}


document.getElementById('idSpeedUp').onclick=function(){
	currentTank.setSpeed_fast();
	ShowDate();
};

document.getElementById('idSpeedDown').onclick=function(){
	currentTank.setSpeed_slow();
	ShowDate();	
};


document.getElementById('idShot').onclick=function(){

	var elTank=document.getElementById('exampleTank'),
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

		ShowDate();
	}
		
};



