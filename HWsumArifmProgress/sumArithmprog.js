
var zero = 0;
var lastDigit = 10;


//formula calculation
console.log("formula calculation");

var formCalc = function(endDig) {
  return endDig * (endDig + 1) / 2;
}

console.log("the sum of an arithmetic progression where the last character is " + lastDigit + " = " + formCalc(lastDigit));
console.log("the sum of an arithmetic progression where the last character is " + zero + " = " + formCalc(zero));


// calculation using cycle
console.log("calculation using cycle");

var cyclCalc = function(endDig) {
  var sum = 0;
  for (var count = 1; count <= endDig; count++) {
    sum += count;
  }
  return sum;
}

console.log("the sum of an arithmetic progression where the last character is " + lastDigit + " = " + cyclCalc(lastDigit) );
console.log("the sum of an arithmetic progression where the last character is " + zero + " = " + cyclCalc(zero) );

