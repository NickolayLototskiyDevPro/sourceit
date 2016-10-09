function Tank(ammunition) {
  var fuel = 0,
      life_points = 0,
      crew = 0,
      speed = 0,
      MAX_SPEED = 60,
      MIN_SPEED = 0;

  this.addAmmunition = function(data) {
    ammunition = data;
    console.log(ammunition);
  }

  this.upSpeed = function() {
    if (speed >= MAX_SPEED) {
      console.log('Достигнута аксимальная скорость танка - 60 км/ч');
      return;
    }
    speed++;
    console.log(speed);
  }

  this.downSpeed = function() {
    if (speed <= MIN_SPEED) {
      console.log('Достигнута минимальная скорость танка - 0 км/ч');
      return;
    }
    speed--;
    console.log(speed);
  }

  this.shot = function() {
    if (speed > 40) {
      console.log('При данной скорости выстрел заблокирован');
      return;
    }
    if (ammunition === 0) {
      alert('Нет боеприпасов');
      return
    }
    console.log(ammunition);
    ammunition--;
  }
}

var tank = new Tank(5);
tank.shot();

console.log(tank);
