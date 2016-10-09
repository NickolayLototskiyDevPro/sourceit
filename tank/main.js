function Tank(){
    this.fuel = 20;
    this.shells = 3;
    this.life_points = 100;
    this.crew = 3;
//    this.ride;
    var SPEED = 50;
    this.ride = function (){
        if (SPEED > 60){
            alert('max speed 60');
        }   
        else
            {
                if (this.ride = 'faster' ){
//                  this.ride = function(){
                        SPEED++;
                        console.log(SPEED);
//                  }
                }
                else{
                    if (this.speed = 0){
                        alert('speed = 0')
                    }
                    else{
//                      this.ride = function(){
                            SPEED--;
                            console.log(SPEED);
//                      }
                    }
                }
            }
    }
    
    this.shot = function (){
        if (SPEED > 40){
            if (this.shells = 0){
                alert('not shot')
            }
            else{
                this.shells--;
                console.log(this.shells);
            }
        }
    }
}
var heavy_tank = new Tank();
heavy_tank.ride = prompt ('enter faster or slower');
var number_of_shells = prompt ('enter the number of shells');
heavy_tank.shells = Number(number_of_shells);
console.log(heavy_tank);





































