"use stict"

var Tank = function (Shell) {
    //Properties of the tank
    this.Fuel = 100;
    this.Shell = Shell;
    this.Life_Point = 100;
    this.Crew = 4;
    //Tank speed limit,Current speed tank.
    this.Max_Speed = 60;
    this.Max_Speed_Shot = 40;
    this.Current_Speed = 30;
    this.Min_Speed = 0;
    //Actions tank
    this.Fast = function () {
        if (this.Current_Speed >=  this.Max_Speed){
            alert("Speed limit.Reduce speed.");
        }else {
            this.Current_Speed++;
            alert("current speed at the moment.= " + this.Current_Speed + "KM");
        }
    };
    this.Slow = function () {
        if (this.Current_Speed <= this.Min_Speed){
            alert("The tank stopped.");
        }else {
            this.Current_Speed--;
            alert("current speed at the moment.= " + this.Current_Speed + "KM");
        }
    };
    this.Shoot = function () {
        if (this.Shell === 0 || this.Current_Speed >= this.Max_Speed_Shot){
            alert("Check the speed.She = " + this.Current_Speed + "KM" +" Or shells. They = " + this.Shell);
        }else{
            this.Shell--;
            alert("The shot is made.");
        }

    };
};

var New_Tank = new Tank(4);
New_Tank.Fast();
New_Tank.Fast();
New_Tank.Fast();
New_Tank.Slow();
New_Tank.Shoot();
New_Tank.Shoot();
New_Tank.Shoot();
New_Tank.Shoot();
New_Tank.Shoot();
New_Tank.Fast();