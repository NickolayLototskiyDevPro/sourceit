var DELTA_MOVE = 5;
document.onkeydown = onKeyDown;

function getContent(){
	var content = document.getElementById('content');
	var style = content.currentStyle || window.getComputedStyle(content);
	return style;
}

function onClickUp(){
	if(tigre.isMaxSpeed()){
		alert('Speed is MAX!');
	}else{
		tigre.speedUp();
		
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
	if(tigre.isTankStopped()){
		alert('Tank is stopped');
	}else{
		tigre.speedDown();
		var style = getContent();

		var newMarginTop =parseInt(style.marginTop)+DELTA_MOVE+"px";
		content.style.marginTop = newMarginTop;
	}
}

function onClickLeft(){
		var style = getContent();
console.log(style.marginLeft);
		var newMarginLeft =parseInt(style.marginLeft)-DELTA_MOVE+"px";
		content.style.marginLeft = newMarginLeft;
		console.log(style.marginLeft);
}

function onClickRight(){
		var style = getContent();

		var newMarginLeft =parseInt(style.marginLeft)+DELTA_MOVE+"px";
		content.style.marginLeft = newMarginLeft;
}

function onClickFire(){
	var style = getContent();
	content.style.backgroundColor = "red";
	setTimeout(setDefaultColor,2000);
}

function setDefaultColor(){
	var style = getContent();
	content.style.backgroundColor = "#341c02";
}