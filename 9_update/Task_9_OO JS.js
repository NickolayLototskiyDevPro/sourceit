function Tank(ammunition, tower) {
  var life_points = 0,
      speed = 0,
      fuel = 60,
      MAX_SPEED = 60,
      MIN_SPEED = 0;

  this.crew = 2;

  this.getSpeed = function() {
    return speed;
  }

  this.getAmmunition = function() {
    return ammunition;
  }

  this.getfuel = function() {
    var a, b, c;
    if (speed === 0) {
    fuel = fuel;
    } else {
      a = 0.00001;
      b = 0.000001;
      c = 0.0000001;
      fuel = fuel - (speed * a + Math.pow(speed, 2) * b + Math.pow(speed, 3) * c);
    }
    document.getElementById('fuel').innerHTML = fuel.toFixed(2);
    return fuel;
  }

  // this.addAmmunition = function(data) {
  //   ammunition = data;
  //   console.log(ammunition);
  // }

  this.upSpeed = function() {
    if (speed >= MAX_SPEED) {
      console.log('Достигнута максимальная скорость танка - 60 км/ч');
      return;
    }
    speed++;
    document.getElementById('speed').innerHTML = speed;
  }

  this.downSpeed = function() {
    if (speed <= MIN_SPEED) {
      console.log('Достигнута минимальная скорость танка - 0 км/ч');
      return;
    }
    speed--;
    document.getElementById('speed').innerHTML = speed;
  }

  this.shot = function() {
    if (speed > 40) {
      console.log('При данной скорости выстрел заблокирован');
      return;
    }
    if ( (ammunition - tower) < 0 ) {
      alert('Нет боеприпасов');
      return;
    }
    ammunition = ammunition - tower;
    console.log(ammunition);
    document.getElementById('ammunition').innerHTML = ammunition;
  }
}

var t35 = new Tank(24, 5);

window.onload = function(){
  var speedElement = document.getElementById('speed');
  var ammunitionElement = document.getElementById('ammunition');
  var crewElement = document.getElementById('crew');
  var fuelElement = document.getElementById('fuel');

  speedElement.innerHTML = t35.getSpeed();
  ammunitionElement.innerHTML = t35.getAmmunition();
  crewElement.innerHTML = t35.crew;
  fuelElement.innerHTML = t35.getfuel();
}
