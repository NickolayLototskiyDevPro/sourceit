// do not call files such complex names!
"use strict";
//Properties of the tank
var Fuel = 100;
var Shell = Shell;
var Life = 100;
var Crew = 4;
var Tank = function (Shell) {
    //Tank speed limit,Current speed tank.
    var Max_Speed = 60;
    var Max_Speed_Shot = 40;
    var Current_Speed = 30;
    var Min_Speed = 0;
    //Actions tank
    this.Fast = function () {
        if (Current_Speed >=  Max_Speed){
            alert("Speed limit.Reduce speed.");
        }else {
            Current_Speed++;
            alert("current speed at the moment.= " + Current_Speed + "KM");
        }
    };
    this.Slow = function () {
        if (Current_Speed <= Min_Speed){
            alert("The tank stopped.");
        }else {
            Current_Speed--;
            alert("current speed at the moment.= " + Current_Speed + "KM");
        }
    };
    this.Shot = function () {
        if (Shell === 0 || Current_Speed >= Max_Speed_Shot){
            alert("Check the speed.She = " + Current_Speed + "KM" +" Or shells. They = " + Shell);
        }else{
            Shell--;
            alert("The shot is made.");
        }

    };
};

var  Tank_T34 = function (Shell) {
    ////Tank speed limit,Current speed tank.
    var Max_Speed = 60;
    var Max_Speed_Shot = 40;
    var Current_Speed = 30;
    var Min_Speed = 0;
    this.Fast = function () {
        if (Current_Speed >= Max_Speed){
            alert("Speed Lemit. Reduce Speed");
        }else {
           Current_Speed++;
            alert("Current speed at the moment.= " + Current_Speed + "KM");
        }
    };
    this.Slow = function () {
        if (Current_Speed <= Min_Speed){
            alert("Stop Tank");
        }else {
            Current_Speed--;
            alert("Current speed at the moment.= " + Current_Speed + "KM");
        }
    };
    //Shots 1-5 Towers.
    this.Tower_1 = function () {
        if(Shell === 0 || Current_Speed >= Max_Speed_Shot){
            alert("Check the speed. She = " + Current_Speed + "KM" +"Or shells. They = " + Shell);
        }else {
            Shell--;
            alert("Tower 1 has made the shot.");
        }
    };
    this.Tower_2 = function () {
        if(Shell === 0 || Current_Speed >= Max_Speed_Shot ){
            alert("Check the speed. She = " +Current_Speed + "KM" +"Or Shells. They = " + Shell);
        }else {
            Shell--;
            alert("Tower 2 has made the shot.");
        }
    };
    this.Tower_3 = function () {
        if(Shell === 0 || Current_Speed >= Max_Speed_Shot){
            alert("Check the speed. She = " + Current_Speed + "KM" + "Or Shells. They = " + Shell);
        }else {
            Shell--;
            alert("Tower 3 has made the shot");
        }
    };
    this.Tower_4 = function () {
        if(Shell === 0 || Current_Speed >= Max_Speed_Shot){
            alert("Check the speed. She = " + Current_Speed + "KM" + "Or shells. They = " + Shell);
        }else {
            Shell--;
            alert("Tower 4 has made the shot");
        }
    };
    this.Tower_5 = function () {
        if(Shell === 0 || Current_Speed >= Max_Speed_Shot){
            alert("Check the speed. She = " + Current_Speed + "KM" + "Or shells. They = " + Shell);
        }else {
            Shell--;
            alert("Tower 5 has made the shot");
        }
    };
    //Shot all tower
    this.Shot_5Tower = function () {
        if (Shell <= 4 || Current_Speed >= Max_Speed_Shot){
            alert("Check the speed.She = " + Current_Speed + "KM" + "Or shells. They = " + Shell);
        }else {
        this.Tower_1();
        this.Tower_2();
        this.Tower_3();
        this.Tower_4();
        this.Tower_5();
		
        }
    };
};

var  nt = new Tank_T34(10);
