window.onload = function() {

  function Tank(ammunition, tower) {
    var life_points = 0,
        speed = 0,
        fuel = 60,
        state = 'up',
        MAX_SPEED = 60,
        MIN_SPEED = 0,
        _ammunition = ammunition,
        rotate = 0,
        ROTATE = 90;


    this.crew = 2;

    this.getRotate = function () { return rotate; }
    this.getSpeed = function() { return speed; }
    this.setSpeed = function(_speed) {
      speed = _speed;
      document.getElementById('speed').innerHTML = speed;
    }

    this.getAmmunition = function() { return ammunition; }
    var setAmmunition = function (_ammunition) {
      ammunition = _ammunition;
      document.getElementById('ammunition').innerHTML = ammunition;
    }

    var setFuel = function (_fuel) {
      fuel = _fuel;
      document.getElementById('fuel').innerHTML = fuel;
    }

    this.tankElement = document.getElementById('tank');

    //size tank
    this.tankWidth = this.tankElement.offsetWidth;
    this.tankHeight = this.tankElement.offsetHeight;

    //size window
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    //coordinates of the center and initial position
    this.centerX = (this.screenWidth/2) - (this.tankWidth/2);
    this.centerY = (this.screenHeight/2) - (this.tankHeight/2);
    this.tankElement.style.transform = 'translate3d(' + this.centerX + 'px, ' + this.centerY + 'px, 0)';

    this.stateOfTank = function() {
      return state;
    }

    this.init = function () {
      this.setSpeed(0);
      setAmmunition(_ammunition);
      setFuel(60.00);
      rotate = 0;
      this.centerX = (this.screenWidth/2) - (this.tankWidth/2);
      this.centerY = (this.screenHeight/2) - (this.tankHeight/2);
      this.tankElement.style.transform = 'translate3d(' + this.centerX + 'px, ' + this.centerY + 'px, 0)';
      document.getElementById('imgTank').style.webkitTransform = 'rotate(0deg)';
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
      document.getElementById('ammunition').innerHTML = ammunition;
    }

    this.leftMove = function() {
      rotate -= ROTATE;
      document.getElementById('imgTank').style.webkitTransform = 'rotate(' + rotate + 'deg)';
    }

    this.rightMove = function() {
      rotate += ROTATE;
      document.getElementById('imgTank').style.webkitTransform = 'rotate(' + rotate + 'deg)';
    }

    this.upMove = function() {

      if(speed >= MAX_SPEED) return;
      speed++;
      document.getElementById('speed').innerHTML = speed;
    }

    this.downMove = function() {
      if(speed <= MIN_SPEED) return;
      speed--;
      document.getElementById('speed').innerHTML = speed;
    }

  }

  var t35 = new Tank(21, 5);

  removeEventListener('keydown', keyboard);

// Move tank
  id = setInterval(sinc, 50);
  function sinc() {

    if(Math.round(Math.sin(t35.getRotate()*Math.PI/180)) == 0 && Math.cos(t35.getRotate()*Math.PI/180) > 0){  //up
      t35.centerY -= 0.1*t35.getSpeed();
      if (t35.centerY > 100) {
        t35.tankElement.style.transform = 'translate3d(' + t35.centerX + 'px, ' + t35.centerY + 'px, 0)';
        t35.getfuel();
      } else {
        t35.centerY = 100;
        t35.setSpeed(0);
      }
    }

    if(Math.sin(t35.getRotate()*Math.PI/180) < 0 && Math.round(Math.cos(t35.getRotate()*Math.PI/180)) == 0){ //left
      t35.centerX -= 0.1*t35.getSpeed();
      if (t35.centerX > 0) {
        t35.tankElement.style.transform = 'translate3d(' + t35.centerX + 'px, ' + t35.centerY + 'px, 0)';
        t35.getfuel();
      } else {
        t35.centerX = 0;
        t35.setSpeed(0);
      }
    }

    if(Math.round(Math.sin(t35.getRotate()*Math.PI/180)) == 0 && Math.cos(t35.getRotate()*Math.PI/180) < 0){ //down
      t35.centerY += 0.1*t35.getSpeed();
      if (t35.centerY < t35.screenHeight -  t35.tankHeight) {
        t35.tankElement.style.transform = 'translate3d(' + t35.centerX + 'px, ' + t35.centerY + 'px, 0)';
        t35.getfuel();
      } else {
        t35.centerY = t35.screenHeight - t35.tankHeight;
        t35.setSpeed(0);
      }
    }

    if(Math.sin(t35.getRotate()*Math.PI/180) > 0 && Math.round(Math.cos(t35.getRotate()*Math.PI/180)) == 0){ //right
      t35.centerX += 0.1*t35.getSpeed();
      if (t35.centerX < t35.screenWidth - t35.tankWidth) {
        t35.tankElement.style.transform = 'translate3d(' + t35.centerX + 'px, ' + t35.centerY + 'px, 0)';
        t35.getfuel();
      } else {
        t35.centerX = t35.screenWidth - t35.tankWidth;
        t35.setSpeed(0);
      }
    }
  }

// Table current value.
  var speedElement = document.getElementById('speed');
  var ammunitionElement = document.getElementById('ammunition');
  var crewElement = document.getElementById('crew');
  var fuelElement = document.getElementById('fuel');

  speedElement.innerHTML = t35.getSpeed();
  ammunitionElement.innerHTML = t35.getAmmunition();
  crewElement.innerHTML = t35.crew;
  fuelElement.innerHTML = t35.getfuel();

// Events move
  move_up.addEventListener('click', t35.upMove);
  move_down.addEventListener('click', t35.downMove);
  move_left.addEventListener('click', t35.leftMove);
  move_right.addEventListener('click', t35.rightMove);

//Events shot
  shot.addEventListener('click', t35.shot);

  function keyboard(e) {
    switch (e.keyCode) {
      case 37: t35.leftMove();
        break;
      case 38: t35.upMove();
        break;
      case 39: t35.rightMove();
        break;
      case 40: t35.downMove();
        break;
      case 13: t35.shot();
        break;
    }
  }

  //Event: click on button Start Game;
  isStartGame.addEventListener('click', isStart);

  function isStart() {
    if (document.getElementById('isStartGame').value === 'Start Game') {
      document.getElementById('isStartGame').value = 'Finish Game';
      document.getElementById('isStartGame').style.backgroundColor = 'red';
      document.getElementById('state').style.color = 'greenyellow';
      document.getElementById('state').innerHTML = 'ONLINE';
      document.getElementById('transparency').style.display = 'none';
      addEventListener('keydown', keyboard);
      isStartGame.addEventListener('keypress', notDefault);
    } else {
      document.getElementById('isStartGame').value = 'Start Game';
      document.getElementById('isStartGame').style.backgroundColor = 'greenyellow';
      document.getElementById('state').style.color = 'RED';
      document.getElementById('state').innerHTML = 'OFFLINE';
      document.getElementById('transparency').style.display = '';
      removeEventListener('keydown', keyboard);
      t35.init();
    }
  }

  function notDefault(event) {
    event.preventDefault();
  }

}
