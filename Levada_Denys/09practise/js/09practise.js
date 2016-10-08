// //1. Объект Vehicle, экземпляр cab , new Vehicle () - new вместо ретунра (возвращяет все this)

// function Vehicle () {
// 	this.beep = function () {
// 		console.log('Beep beep!');
// 	};
// }

// var cab = new Vehicle();

// cab.beep();

//
//
//

// //2. Объект cooler

// function Cooler (vol){
// 	var vol = vol;
// 	var count = 1;
// 	var BOTTOMS = 3;

// 	this.clicks = BOTTOMS;

// 	this.volume = function () {
// 		//console.log ('Bool` bool`!');
// 		vol--;
// 		if (vol === 0) {
// 			console.log ('Empty!!!');
// 		}
// 	};
// 	this.hot = function () {
// 		console.log ('Hot');

// 	};
// 	this.cold = function () {
// 		console.log('Cold');

// 	};
// 	this.onOff = function () {
// 		if (count % 2 === 1) {
// 			console.log ('On');
// 		} else if (count % 2 === 0) {
// 			console.log ('Off');
// 		}
// 		count++;
// 	};


// }

// var vol = 10;
// var bottle = new Cooler(vol);
// //bottle.volume();


//3. Car

function Vehicle (fuelConsumptionPerHout) {
	this.fuelCapacity = 0;

	function stop () {
		alert('Car stopped');
	}

	function getVehicleRange () {
		return this.fuelCapacity / fuelConsumptionPerHout;
	}

	this.go = function () {
		setTimeout (stop,getVehicleRange.apply(this));
	};
}

var cab = new Vehicle (4);

cab.fuelCapacity = 10000;
cab.go();