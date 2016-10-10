function Tank(bullets){

	var MAX_SPEED = 60;
	var MIN_SPEED = 1;
	//var STANDARD_CONSUMPTION = 200/100; // consumption 100km 200l = 2litr/km
	this.fuelCapacity = 0;// 100
	this.bullets = 3;// 3 
	var healthPower = 10;
	var team = 3;
	var currentSpeed = 0;


	function fuelConsumptionCalculation(){
		// distance, which can travel on this tank is an amount of fuel at a given speed
		return this.fuelCapacity/currentSpeed;
	}

	this.move  = function(){
		currentSpeed = 40;
		alert('Tank is moving at a speed of ' + currentSpeed + ' km / h')
//		setTimeout(.apply(this));
	}	//move

	this.stop = function(){
		currentSpeed = 0;
		alert('Tank stop ' + currentSpeed + ' km / h');
	}	

//	this.speedUp = function(){
	this.speedUp = function(){
		if (currentSpeed < MAX_SPEED){
			currentSpeed += 1;
			console.log('Speed Up. CurrentSpeed is ' + currentSpeed);
			
			return function(){
				speedUp.apply(this);
				speedUp();	
			} 
		}	// if
		
		else if (currentSpeed == MAX_SPEED) {
			alert('maximun speed ' + currentSpeed + 'km/h');
		}
		
	}	// speedUp

	this.speedDown = function(){
		//return function(){
			if (currentSpeed >= MIN_SPEED){
				currentSpeed -= 1;
				console.log('Speed Down. CurrentSpeed is ' + currentSpeed);
				}	// if
			//}	// return
	}	// speedDown

	this.cannonShot = function(){
		//return function(){
			if (currentSpeed <= 40){
				if (bullets == 0){
					alert('No bullets');
					console.log('no bullets')
				}

				else if (bullets > 0){
					bullets--;
					alert("Cannon Shot!! left " + bullets + "bullets");
				}	// if else

				else{
					alert("Alarm! negative speed detected!!!")
				}
			}	// if speed<40
			else{
				alert("you move very fast to shoot!!")
			}
		//}
	}	// cannonShot

}	// Tank()

var t34 = new Tank(3);
//t34.cannonShot();
t34.move();
t34.cannonShot();
t34.speedUp();
t34.cannonShot();
t34.speedDown();
t34.cannonShot();
t34.stop();




/*
обьект танк
топливо снаряды
жизнь
экипаж

в с-в вах


2 метода ехать быстрее ехать медленнее

макс спид = 60
локальная

быстрее - var(приатная) скорость должна увелич на
 1 и выводиться в консольлог


если метод ехать медленние скорость уменьшаться на 1 
но не менее 0

метод выстрел - умельшать снаряды
 и алерт при боеприпасы 0
 выстрел не должен производиться если скорость
 выше 40 кмчас

снаряды - передачей параметров в конструктор

fuel consumption

воскрес вечер



строка из 500 слов и таких строк 10
найти оптимальный способ их склейки конкотенацию + нельзя
с минимальным временем загрузки


читать массивы и методы массивов
*/