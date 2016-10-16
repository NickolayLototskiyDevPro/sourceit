function Tank (amunition) {
    this.speed = 0;

    this.fuel = 100;
    this.hp = 100;
    this.ammo = amunition;
    this.crew = 4;

    Tank.prototype.goFaster = function () {
        if(this.speed < 100){
            document.getElementById('Speed').innerHTML = 'Speed : ' + (++this.speed);
        return this.speed;
        }
        return alert('We can`t go faster!');
    };

    this.goSlower = function () {
        if (this.speed === 0) {
            return alert('We already stopped!');
        } 
        document.getElementById('Speed').innerHTML = 'Speed : ' + (--this.speed);

        return this.speed;
    };

    this.turnLeft = function () {

    };

    this.turnRight = function () {

    };

    this.shot = function () {
        if (this.ammo === 0) {
            return alert('We`re out of ammo!');
        } else if (this.speed >= 40){
            return alert('We`re going to fast. We have to slow down first!');
        }

        document.getElementById('Ammo').innerHTML = 'Ammo : ' + (--this.ammo);
        return this.ammo;
    };
}

var t52 = new Tank (100);


var T35 = function (amunition) {
    Tank.call (this, amunition);
    this.towers = 5;
    this.shot = function () {
        if(this.ammo < 5) {
            return alert('We`re out of ammo!');
        } else if (this.speed >= 40) {
            return alert('We`re going to fast. We have to slow down first!')
        }
        this.ammo -= 5;
        document.getElementById('Ammo').innerHTML = 'Ammo : ' + this.ammo;
        return this.ammo;
    }
}

    T35.prototype = Object.create (Tank.prototype);
    T35.prototype.constructor = T35;

var t35 = new T35 (100);


function chooseTheTank () {
    var tank = prompt('Chose the tank');
    if (tank === 't52') {
        return tank;

    } else if (tank === 't35') {
        return tank;
    } else {
        alert('There are no such tanks!')
    }
}

//var tanky = chooseTheTank ();
//console.log(tanky.goSlower());