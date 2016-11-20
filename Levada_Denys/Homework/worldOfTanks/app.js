function MoveTank(mTop, mLeft, mBottom, mRight) {

    this.up = function up(mTop) {
        let defTop = parseFloat($("#Tank").css('top'));
        let defBottom = parseFloat($("#Tank").css("bottom"));
        let newTop = defTop - mTop - defBottom;
        if (newTop >= -263) {
            $("#Tank").css("top", newTop);
            $("#Tank").css("bottom", "0");
        } else {
            newTop = -263;
            $("#Tank").css("top", newTop);
        }
    }

    this.left = function left(mLeft) {
        let defLeft = parseFloat($("#Tank").css('left'));
        let defRight = parseFloat($("#Tank").css("right"));
        let newLeft = defLeft - mLeft - defRight;
        if (newLeft >= -263) {
            $("#Tank").css("left", newLeft);
            $("#Tank").css("right", "0px");
        } else {
            newLeft = -263;
            $("#Tank").css("left", newLeft);
        }
    }

    this.down = function down(mBottom) {
        let defTop = parseFloat($("#Tank").css('top'));
        let defBottom = parseFloat($("#Tank").css("bottom"));
        let newBottom = defBottom - mBottom - defTop;
        if (newBottom >= -263) {
            $("#Tank").css("bottom", newBottom);
            $("#Tank").css("top", "0px");
        } else {
            newBottom = -263;
            $("Tank").css("bottom", newBottom);
            $("#Tank").css("top", "0px");
        }
    }

    this.right = function right(mRight) {
        let defLeft = parseFloat($("#Tank").css('left'));
        let defRight = parseFloat($("#Tank").css("right"));
        let newRight = defRight - mRight - defLeft;
        if (newRight >= -263) {
            $("#Tank").css("right", newRight);
            $("#Tank").css("left", "0px");
        } else {
            newRight = -263;
            $("#Tank").css('right', newRight);
        }
    }
}

var controls = new MoveTank();

function Tank(amunition) {
    this.speed = 0;
    this.fuel = 100;
    this.hp = 100;
    this.ammo = amunition;
    this.crew = 4;

    Tank.prototype.goFaster = function() {
        if (this.speed < 100) {
            document.getElementById('Speed').innerHTML = 'Speed : ' + (++this.speed);
            controls.up(30);
            return this.speed;
        }
        return alert('We can`t go faster!');
    };

    this.goSlower = function() {
        if (this.speed === 0) {
            return alert('We already stopped!');
        }
        document.getElementById('Speed').innerHTML = 'Speed : ' + (--this.speed);
        controls.down(30);
        return this.speed;
    };

    this.turnLeft = function() {
        if (this.speed != 0) {
            controls.left(30);
        } else {
            alert('We already stopped!');
        }
    };

    this.turnRight = function() {
        if (this.speed != 0) {
            controls.right(30);
        } else {
            alert('We already stopped!');
        }
    };

    this.shot = function() {
        if (this.ammo === 0) {
            return alert('We`re out of ammo!');
        } else if (this.speed >= 40) {
            return alert('We`re going to fast. We have to slow down first!');
        }
        document.getElementById('Ammo').innerHTML = 'Ammo : ' + (--this.ammo);
        $("#Tank").css('background', 'red');
        return this.ammo;
    };
}

var t52 = new Tank(100);


var T35 = function(amunition) {
    Tank.call(this, amunition);
    this.towers = 5;
    this.shot = function() {
        if (this.ammo < 5) {
            return alert('We`re out of ammo!');
        } else if (this.speed >= 40) {
            return alert('We`re going to fast. We have to slow down first!')
        }
        this.ammo -= 5;
        document.getElementById('Ammo').innerHTML = 'Ammo : ' + this.ammo;
        $("#Tank").css('background', 'red');
        setTimeout(function() { $("#Tank").css("background", "none") }, 1500);
        return this.ammo;
    }
}

T35.prototype = Object.create(Tank.prototype);
T35.prototype.constructor = T35;

var t35 = new T35(100);


function chooseTheTank() {
    let tank = prompt('Chose the tank');
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

var isGameStart = 0;

function startFinishGame() {
    if (isGameStart === 0) {
        isGameStart = 1;
        document.getElementById('onlineStatus').innerHTML = 'Online';
        $('#onlineStatus').css('background', 'green');
        document.getElementById('startFinishButton').innerHTML = 'Finish Game';
    } else if (isGameStart === 1) {
        isGameStart = 0;
        document.getElementById('onlineStatus').innerHTML = 'Offline';
        $('#onlineStatus').css('background', 'red');
        document.getElementById('startFinishButton').innerHTML = 'Start Game';
    }
}