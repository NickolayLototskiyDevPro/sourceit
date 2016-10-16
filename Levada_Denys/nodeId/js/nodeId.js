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
One_one_one_two.prototype.constructor = One_one_one_two;

var One_one_two_one = function () {
    One_one_two.call(this);
    this.one_one_two_one = true;
}
One_one_two_one.prototype = Object.create(One_one_two);
One_one_two_one.prototype.constructor = One_one_two_one;


var One_one_three_one = function () {
    One_one_three.call(this);
    this.one_one_three_one = true;

}
One_one_three_one.prototype = Object.create(One_one_three);
One_one_three_one.prototype.constructor = One_one_three_one;


var first = new One_one_three_one;

console.log(first.prototype.__proto__ = true) // key

var father = new One;

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
    var father = [];
    var fatherAndIdOfChild = [];

    for(var globeCount = 0; globeCount < arguments.length; globeCount++) {
        if (arguments[globeCount].__proto__.name === undefined){
            father.push ('This is the father');
        } else {
            
        father.push(arguments[globeCount].__proto__.name);
        }

        fatherAndIdOfChild.push('Id : ' + (globeCount + 1) + '. Object ' + arguments[globeCount].__proto__.constructor.name + ' father is : ' + father[globeCount]);
    }

    return fatherAndIdOfChild;
}
   
var node = nodeId (one, one_one, one_one_one, one_one_two, one_one_three, one_one_one_one, one_one_one_two, one_one_two_one, one_one_three_one);
console.log(node);

function findById (id) {
    var CHILDREN = [one, one_one, one_one_one, one_one_two, one_one_three, one_one_one_one, one_one_one_two, one_one_two_one, one_one_three_one];
    var child = 0;
    console.log(CHILDREN[id - 1]);

    child = CHILDREN[id - 1];
    return child;
}

var son = findById(5);