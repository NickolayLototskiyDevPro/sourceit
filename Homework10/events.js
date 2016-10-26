var DELTA_MOVE = 5;
document.onkeydown = onKeyDown;

function getContent(){
	var content = document.getElementById('content');
	var style = content.currentStyle || window.getComputedStyle(content);
	return style;
}

function onClickUp(){
	if(!isGameStart){
			return;
	}			
	if(tigre.isMaxSpeed()){
		alert('Speed is MAX!');
	}else{
		tigre.speedUp();
		$('#speed').html('Speed: ' + tigre.getCurrentSpeed());
		
		var style = getContent();
				
		var newMarginTop = parseInt(style.marginTop)-DELTA_MOVE+"px";
		content.style.marginTop = newMarginTop;
	}
}

function onKeyDown(e){
	e = e || window.event;
	switch (e.keyCode){
		case 37:
			onClickLeft();
			break;
		case 38:
			onClickUp();
			break;
		case 39:
			onClickRight();
			break;
		case 40:
			onClickDown();
			break;
		case 13:
			onClickFire();
			break;
		default:
			break;
	}
}

function onClickDown(){
	if(!isGameStart){
			return;
	}
	if(tigre.isTankStopped()){
		alert('Tank is stopped');
	}else{
		tigre.speedDown();
		$('#speed').html('Speed: ' + tigre.getCurrentSpeed());
		var style = getContent();
		var newMarginTop =parseInt(style.marginTop)+DELTA_MOVE+"px";
		content.style.marginTop = newMarginTop;
	}
}

function onClickLeft(){
	if(!isGameStart){
			return;
	}
	var style = getContent();
	var newMarginLeft =parseInt(style.marginLeft)-DELTA_MOVE+"px";
	content.style.marginLeft = newMarginLeft;
}

function onClickRight(){
	if(!isGameStart){
			return;
	}
	var style = getContent();

	var newMarginLeft =parseInt(style.marginLeft)+DELTA_MOVE+"px";
	content.style.marginLeft = newMarginLeft;
}

function onClickFire(){
	if(!isGameStart){
			return;
	}
	if(tigre.volleyFire()){
		var style = getContent();
		field.style.backgroundColor = "red";
		setTimeout(setDefaultColor,2000);
		$('#ammo').html('Ammo: ' + tigre.getAmmo());
	}
}

function setDefaultColor(){
	var style = getContent();
	field.style.backgroundColor = "#341c02";
}