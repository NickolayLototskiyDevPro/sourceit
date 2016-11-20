let unsortArr = [3,4,,1,2,3,4,9,8,7,5,46,2,7,1,9,1];

function sortArr (arr) {
	let change;
	for (var i = 0; i < arr.length;i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				change = arr[j];
				arr[j] = arr[i];
				arr[i] = change;
			}
		}

	}

	return arr;
}

let sortedArr = sortArr(unsortArr);

console.log(sortedArr);

let arrWithUndefined = [1,2];
arrWithUndefined[15] = 3;
arrWithUndefined[33] = 4;
arrWithUndefined[77] = 5;

function deleteUndefined (arr) {
	let goodArr = [];
	for (let i = 0; i < arr.length; i++){
		if(arr[i] != undefined){
			goodArr.push(arr[i]);
		}
	}
	return goodArr;
}


let goodArray = deleteUndefined (arrWithUndefined);
console.log(goodArray);




///2.

function Beast (legs, hands, horns) {
	this.legs = legs;
	this.hands = hands;
	this.horns = horns;
}

Beast.prototype.row = function () {
		console.log('ARRRRRRRRRRRR!!!!!!!!!!!!!!!!')
	};
	Beast.prototype.punch = function() {
		console.log('Bim bam bum');
	};

function createArmyOfBeasts () {
	var arr = [];
	for(var i = 1; i <= 5000; i++){
		arr[i] = new Beast(3,5,8);
	}
	return arr;
}

var beastArmy = createArmyOfBeasts();
console.log(beastArmy);


function Spartak (legs, hands, horns) {
	Beast.call(this, legs, hands, horns);

}


Spartak.prototype = Object.create(Beast.prototype);
Spartak.prototype.constructor = Spartak;
Spartak.prototype.partyHard = function() {
		console.log('Tyc tyc');
	};
Spartak.prototype.fightHard = function() {
		console.log('Fight Fight!');
	};

function createSpartakArmy () {
	var arr = [];
	for(var i = 0; i < 5000; i++) {
		arr[i] = new Spartak(2,3,5);
	}
	return arr;
}

var spartakArmy = createSpartakArmy ();
console.log(spartakArmy);