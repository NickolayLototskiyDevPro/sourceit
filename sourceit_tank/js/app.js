
var field = document.getElementById('field');
    var tank = document.getElementById('tank');


    field.onclick = function(event) {

      var fieldCoords = this.getBoundingClientRect();
      var fieldInnerCoords = {
        top: fieldCoords.top + field.clientTop,
        left: fieldCoords.left + field.clientLeft
      };

      var tankCoords = {
        top: event.clientY - fieldInnerCoords.top - tank.clientHeight / 2,
        left: event.clientX - fieldInnerCoords.left - tank.clientWidth / 2
      };

      if (tankCoords.top < 0) tankCoords.top = 0;

      if (tankCoords.left < 0) tankCoords.left = 0;


      if (tankCoords.left + tank.clientWidth > field.clientWidth) {
        tankCoords.left = field.clientWidth - tank.clientWidth;
      }

      if (tankCoords.top + tank.clientHeight > field.clientHeight) {
        tankCoords.top = field.clientHeight - tank.clientHeight;
      }

      tank.style.left = tankCoords.left + 'px';
      tank.style.top = tankCoords.top + 'px';
    }


  goUp.onclick = function(event) {
    tank.style.marginTop="-30px";

  }
  goRight.onclick = function(event) {
    tank.style.marginLeft="30px";

  }
	goBottom.onclick = function(event) {
    tank.style.marginTop="30px";

  }
	goLeft.onclick = function(event) {
    tank.style.marginLeft="-30px";

  }



var Fuel = 100; 
var Shell = Shell; 
var Life = 100; 
var Crew = 4; 
var Tank = function (Shell) { 
var MaxSpeed = 60; 
var MaxSpeed_Shot = 40; 
var CurrentSpeed = 30; 
var MinSpeed = 0;  
this.Fast = function () { 
if (CurrentSpeed >= MaxSpeed){ 
alert("Speed limit"); 
}else { 
CurrentSpeed++; 
alert("current speed = " + CurrentSpeed + "km/4"); 
} 
}; 
this.Slow = function () { 
if (CurrentSpeed <= MinSpeed){ 
alert("tank stop"); 
}else { 
CurrentSpeed--; 
alert("current speed " + CurrentSpeed + "km/4"); 
} 
}; 
this.Shot = function () { 
if (Shell === 0 || CurrentSpeed >= MaxSpeedShot){ 
alert("Check the speed.Shell = " + CurrentSpeed + "KM" +" Or shells. They = " + Shell); 
}else{ 
Shell--; 
alert("The shot is made."); 
} 

}; 
};