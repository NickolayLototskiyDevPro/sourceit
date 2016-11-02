let isGameStart = false;

let cometTank = new Tank(10);
let t_35_1 = new T_35(15);
let selectedTank = cometTank;

//handlers
let moveForward = () => selectedTank.moveForward();
let moveBack = () => selectedTank.moveBack(); 
let moveLeft = () => selectedTank.moveLeft();
let moveRight = () =>  selectedTank.moveRight();


function message (element, func) {
	
	funcR = func.call(selectedTank);
	//console.log(funcR);

	element.innerHTML = '';
	element.innerHTML = funcR;

}

function switchTank () {

	let selected = document.getElementById('chooseTank');
	let value = selected.options[selected.selectedIndex].value;

	switch (value) {
 	case 't_35_1':  selectedTank = t_35_1;
	break;
	
	case 'cometTank':  selectedTank = cometTank;
	break;
	}

	tank_icon.style.marginLeft = selectedTank.tankMarginLeft + 'px';
	tank_icon.style.marginTop = selectedTank.tankMarginTop + 'px';

	document.getElementById('speed_span').innerHTML = selectedTank.speed;
	document.getElementById('ammo_span').innerHTML = selectedTank.ammo;

	shootButton.focus();
};

/*fasterButton.addEventListener("click",  function () {
	message(speed_span, selectedTank.faster);
});

slowerButton.addEventListener("click",  function () {
	message(speed_span, selectedTank.slower);
});*/

forwardButton.addEventListener("click", moveForward);

backButton.addEventListener("click",  moveBack);

leftButton.addEventListener("click",  moveLeft);

rightButton.addEventListener("click",  moveRight);


shootButton.addEventListener("click",  function () {

	if (selectedTank.ammo >= selectedTank.gun_turret) {
	tank_icon.classList.add("shoot");

	setTimeout(function () {
	tank_icon.classList.remove("shoot") }, 4000);
	};
});


shootButton.addEventListener("click",  function () {
	message(ammo_span, selectedTank.shoot);
});

startGame.onclick = function() {

	if (isGameStart == false) {

	isGameStart = true;
	header.classList.add("online");
	header.innerHTML = '<p>Online</p>';
	startGame.value = 'Finish game';
	shootButton.focus();
	} else {

	isGameStart = false;
	header.classList.remove("online");
	header.innerHTML = '<p>Offline</p>';
	startGame.value = 'Start game';
	shootButton.focus();
	};
};

document.addEventListener("keydown", function() {
    switch (event.keyCode) {
	case 37: moveLeft();
	break;
	case 38: moveForward();
	break;
	case 39: moveRight();
	break;
	case 40: moveBack();
	break;
	};
});

window.onload = function() {
	shootButton.focus();
};