function Tank (amunition) {
    var speed = 0;

    this.fuel = 100;
    this.hp = 100;
    this.ammo = amunition;
    this.crew = 4;

    this.goFaster = function () {
        if(speed < 100){
        return ++speed;
        }
        return 'We can`t go faster!'
    };

    this.goSlower = function () {
        if (speed === 0) {
            return 'We already stopped!'
        }
        return --speed

    };

    this.shot = function () {
        if (this.ammo === 0) {
            return 'We`re out of ammo!'
        } else if (speed >= 40){
            return 'We`re going to fast. We have to slow down first!'
        }
        return --(this.ammo)
    };
}

var t52 = new Tank (100);