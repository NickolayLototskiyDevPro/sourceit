function Game() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    this.correctArr = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    this.box = [];

    this.arrangeBox = function() {

        while (this.box.length < this.correctArr.length) {
            var num = Math.floor(Math.random() * 9);
            var check = 0;
            for (var j = 0; j < this.box.length; j++) {
                if (num != this.box[j]) {
                    check++;
                }
            }
            if (check === this.box.length) {
                this.box.push(num);
            }
        }
    }

    this.fillBox = function() {
        for (var i = 0; i < this.box.length; i++) {
            if (this.box[i] === 0) {
                document.getElementById(i + 1).innerHTML = ' ';
            } else {
                document.getElementById(i + 1).innerHTML = this.box[i];
            }
        }
    }

    this.checkBox = function() {
        var checkArr = [];
        var check = 0;
        for (var i = 0; i < this.correctArr.length; i++) {
            if (this.box[i] === ' ') {
                this.box[i] = 0;
            }
            if (this.correctArr[i] === this.box[i]) {
                check++;
            }
        }
        if (check === this.correctArr.length) {
            alert('You win!!!');
        }
    }

    this.controls_down = function() {

        var empty = this.box.indexOf(0);
        if (empty === 0 || empty === 1 || empty === 2) {
            return;
        } else {
            var change = this.box[empty - 3];
            this.box[empty] = change;
            this.box[empty - 3] = ' ';
            this.fillBox();
            setTimeout(this.checkBox(), 1000);
        }

    }
    this.controls_up = function() {
        var empty = this.box.indexOf(0);
        if (empty === 6 || empty === 7 || empty === 8) {
            return;
        } else {
            var change = this.box[empty + 3];
            this.box[empty] = change;
            this.box[empty + 3] = ' ';
            this.fillBox();
            setTimeout(this.checkBox(), 1000);
        }
    }

    this.controls_right = function() {
        var empty = this.box.indexOf(0);
        if (empty === 0 || empty === 3 || empty === 6) {
            return;
        } else {
            var change = this.box[empty - 1];
            this.box[empty] = change;
            this.box[empty - 1] = ' ';
            this.fillBox();
            setTimeout(this.checkBox(), 1000);
        }
    }
    this.controls_left = function() {
        var empty = this.box.indexOf(0);
        if (empty === 2 || empty === 5 || empty === 8) {
            return;
        } else {
            var change = this.box[empty + 1];
            this.box[empty] = change;
            this.box[empty + 1] = ' ';
            this.fillBox();
            setTimeout(this.checkBox(), 1000);
        }
    }

}

var game = new Game();