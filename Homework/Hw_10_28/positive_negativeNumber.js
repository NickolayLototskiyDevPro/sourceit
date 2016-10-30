var numberToTest = -12;

var myRegExp = /(-)/;

function testPositive (numberToTest) {

	var tested = myRegExp.test(numberToTest);

	if(!tested) {
	console.log("Positive number");
	} else {
	console.log("Nevative number");	
	};
};

testPositive(numberToTest);

function testPositive2 (numberToTest) {
	
	var firstSymbol = '' + numberToTest;
	firstSymbol = firstSymbol.charAt(0);

	if(parseInt(firstSymbol) + 1) {
	console.log("Positive number");
	} else {
	console.log("Nevative number");	
	};
};

testPositive2(numberToTest);