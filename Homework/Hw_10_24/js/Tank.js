var isGameStart = false;

var Tank = function (ammo){

	this.gun_turret = 1;
	this.speed = 0;
	this.MAX_SPEED = 60;

	this.fuel = 100;
	this.life_points = 100;
	this.crew = 4;
	this.ammo = ammo;

	//get current position of tank icon
	this.tankMarginTop = parseInt(getComputedStyle(tank_icon).marginTop.slice(0, -2) );
	this.tankMarginLeft = parseInt(getComputedStyle(tank_icon).marginLeft.slice(0, -2) );

	this.iconHeight = parseInt(getComputedStyle(tank_icon).height.slice(0, -2) );
	this.iconWidth = parseInt(getComputedStyle(tank_icon).width.slice(0, -2) );

	//set boundaries
	this.maxMarginTop = parseInt(getComputedStyle(game_field).height.slice(0, -2) ) - this.iconHeight;
	this.maxMarginLeft = parseInt(getComputedStyle(game_field).width.slice(0, -2) ) - this.iconWidth;

	this.moveForward = function () {
	if (this.tankMarginTop > 0) {
	this.tankMarginTop -= 5;
	tank_icon.style.marginTop = this.tankMarginTop + 'px';
	};
	};

	this.moveBack = function () {
	if (this.tankMarginTop < this.maxMarginTop) {
	this.tankMarginTop += 5;
	tank_icon.style.marginTop = this.tankMarginTop + 'px';
	};
	};

	this.moveRight = function () {
	if (this.tankMarginLeft < this.maxMarginLeft) {
	this.tankMarginLeft += 5;
	tank_icon.style.marginLeft = this.tankMarginLeft + 'px';
	};
	};

	this.moveLeft = function () {
	if (this.tankMarginLeft > 0) {
	this.tankMarginLeft -= 5;
	tank_icon.style.marginLeft = this.tankMarginLeft + 'px';
	};
	};

	this.faster = function () {
	if (this.speed === this.MAX_SPEED) {
	alert('You can\'t go faster.');
	return this.speed;	
	} else {
	++this.speed;
	return this.speed;
	}
	}

	this.slower = function () {
	if (this.speed === 0) {
	alert('Tank stopped.');
	return this.speed;	
	} else {
	--this.speed;
	return this.speed;
	}
	}

	this.shoot = function () {
	if (this.ammo === 0) {
	alert('No ammo!');
	return this.ammo;
	}	
	else if (this.speed > 40) {
	alert('Slow down to shoot.');
	return this.ammo;	
	} else {
	--this.ammo;
	return this.ammo;
	}
	}
	
}

var cometTank = new Tank(10);

var T_35 = function (ammo) {

	Tank.call(this, ammo);
	this.gun_turret = 5;
	
	this.shoot = function () {

	if (this.ammo < this.gun_turret) {
	alert('No ammo!');
	return this.ammo;
	}	
	else if (this.speed > 40) {
	alert('Slow down to shoot.');
	return this.ammo;	
	} else {
	this.ammo -= this.gun_turret;
	return this.ammo;
	}

	}
}

T_35.prototype = Object.create(Tank.prototype);
T_35.prototype.constructor = T_35;

var t_35_1 = new T_35(15);

var selectedTank = cometTank;

//handlers
moveForward = function() { return selectedTank.moveForward() };
moveBack = function() { return selectedTank.moveBack() }; 
moveLeft = function() { return selectedTank.moveLeft() };
moveRight = function() { return selectedTank.moveRight() };


function message (element, func) {
	
	funcR = func.call(selectedTank);
	//console.log(funcR);

	element.innerHTML = '';
	element.innerHTML = funcR;

}

function switchTank () {

	var selected = document.getElementById('chooseTank');
	var value = selected.options[selected.selectedIndex].value;

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