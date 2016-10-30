var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
var orderedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

function randomize (a, b) {
	return Math.random() - 0.5;
};

values.sort(randomize);
console.log(values);
var box = [];

function fillBoxes () {
	for (var i = 0; i < 16; i++) {
	box[i].innerHTML = '<p>' + values[i] + '</p>';
	if (values[i] === 0) {
	box[i].classList.add("empty");
	};
	};
};

function addBoxes () {
	for (var i = 0; i < 16; i++) {
	box[i] = document.createElement('div');
	box[i].id = i;
	gameField.appendChild(box[i]);
	};
	fillBoxes();
	};

addBoxes();

var checked = 0;

function checkSolution () {
	for (var i = 0; i < values.length; i++) {
	if(values[i] == orderedValues[i]) {
	checked++;
	};
	};

	if (checked == 16) {
	gameField.removeEventListener("click", move);
	gameField.innerHTML = '<p class="win"> You won! </p>';
	button.firstChild.classList.add('win');
	};
	checked = 0;
};

function move (curTarget, empty) {

	var toSwitch = curTarget.innerHTML;

	var positionToSwitch = values.indexOf(parseInt(toSwitch));
	var positionToSwitchEmpty = values.indexOf(0);
	values[positionToSwitch] = 0;
	values[positionToSwitchEmpty] = parseInt(toSwitch);
	
	empty[0].classList.remove('empty');
	curTarget.parentNode.classList.add('empty');

	fillBoxes();
	checkSolution();
};

function checkExceptions (curTarget, empty) {

	if ( (+curTarget.parentNode.id + 1 == empty[0].id) && (empty[0].id != 4 && empty[0].id != 8 && empty[0].id != 12) ) {
	return true};
	if ( (+curTarget.parentNode.id - 1 == empty[0].id) && (empty[0].id != 3 && empty[0].id != 7 && empty[0].id != 11) ) {
	return true};
	if (+curTarget.parentNode.id + 4 == empty[0].id) {
	return true};
	if (+curTarget.parentNode.id - 4 == empty[0].id) {
	return true };

	return false;
};

function checkMove (curTarget, empty) {
	
	if(checkExceptions(curTarget, empty)) {
	move(curTarget, empty);
	} else {
	console.log('Forbidden move');
	};
};

gameField.addEventListener("click", function() {
	var empty = document.getElementsByClassName("empty");
	var curTarget = event.target;

	checkMove(curTarget, empty);
});

button.addEventListener("click", function() {

	values.sort(randomize);
	console.log(values);
	gameField.innerHTML = '';

	button.firstChild.classList.remove('win');

	addBoxes();
	fillBoxes();
});