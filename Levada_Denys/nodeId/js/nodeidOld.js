// var Animal = function () {
//     this.animal = true;
// }

var One = function () {
    this.one = true;
}


var One_one = function () {
    One.call(this);
    this.one_one = true;
    }
One_one.prototype = Object.create (One);
One_one.prototype.constructor = One_one;


var One_one_one = function () {
    One_one.call(this);
    this.one_one_one = true;
    }
One_one_one.prototype = Object.create(One_one);
One_one_one.prototype.constructor = One_one_one;


var One_one_two = function () {
    One_one.call(this);
    this.one_one_two = true;
    }
One_one_two.prototype = Object.create(One_one);
One_one_two.prototype.constructor = One_one_two;


var One_one_three = function() {
    One_one.call(this);
    this.one_one_three = true;
    }
One_one_three.prototype = Object.create(One_one);
One_one_three.prototype.constructor = One_one_three;


var One_one_one_one = function () {
    One_one_one.call(this);
    this.one_one_one_one = true;
}
One_one_one_one.prototype = Object.create(One_one_one);
One_one_one_one.prototype.constructor = One_one_one_one;

var One_one_one_two = function () {
    One_one_one.call(this);
    this.one_one_one_two = true;
}
One_one_one_two.prototype = Object.create(One_one_one);
One_one_one_two.prototype.constructor = One_one_one;

var One_one_two_one = function () {
    One_one_two.call(this);
    this.One_one_two_one = true;
}
One_one_two_one.protorype = Object.create(One_one_two);
One_one_two_one.prototype.constructor = One_one_two_one;


var One_one_three_one = function () {
    One_one_three.call(this);
    this.one_one_three_one = true;

}
One_one_three_one.prototype = Object.create(One_one_three);
One_one_three_one.prototype.constructor = One_one_three_one;


var first = new One_one_three_one;
console.log(first);

console.log(first.prototype.__proto__ = true) // key

var father = new One;
console.log(father);

var one = new One;

var one_one = new One_one;

var one_one_one = new One_one_one;

var one_one_two = new One_one_two;

var one_one_three = new One_one_three;

var one_one_one_one = new One_one_one_one;

var one_one_one_two = new One_one_one_two;

var one_one_two_one = new One_one_two_one;

var one_one_three_one = new One_one_three_one;

function nodeId () {
    var check = __proto__.constructor;
    var res =' ';

    for (var i = 0; i < arguments.length; i++) {
        var nodId = [];

        nodId.push ( ' : ' + (i+1));
        
        res = '';
        do {
            console.log('1.');
            res += '1.';
            check = check -  '_.constructor';
            check += '_.__proto__.constructor';
        } while (arguments[i].check === arguments[i].__proto__.constructor);

        console.log(i + ' : ' + res);
    }

    return nodId;
}

var node = nodeId (one, one_one, one_one_one, one_one_two, one_one_three, one_one_one_one, one_one_one_two, one_one_two_one, one_one_three_one);



// one_one_two.__proto__.constructor - origin
// one_one_two.__proto__.__proto__ - proto
//father.__proto__.constructor === father.__proto__.__proto__.constructor false
//first.__proto__.constructor === first.__proto__.__proto__.constructor true

//Object.getPrototypeOf(Object.getPrototypeOf(o))

// if(first.prototype.constructor = true) {
//     console.log('first')
// }

var arr = [(one.name + ' Privet'), (one_one.__proto__.name + 'Poka')];

console.log(arr);
