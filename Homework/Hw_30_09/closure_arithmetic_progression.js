	
function alotof_a (){
	var i = 0;
	var a_string = '';

	return function(){
	while(i < 6){
	console.log(a_string  = a_string+'a');
	i++;
	}		
	}
}

alotof_a()();


var a1 = 5;//first member of sequence
var d = 5;//difference
var n = 5;//sequence length
var aj  = 0;//any member of sequence
var sum = 0;

function arithmetic_progression_formula (a1, d, n){
	
	sum = (((2 * a1) + d * (n - 1))/ 2) * n;
	return sum;
}

console.log('Formula: ' + arithmetic_progression_formula(a1, d, n));

function arithmetic_progression_rec (a1, d, n) {
	aj = ((d*(n-1))+a1);

	if(aj === a1){
	return a1;
	}

	else{	
	return (aj + arithmetic_progression_rec(a1, d, (n-1)));
	}
}

console.log('Recursion: ' + arithmetic_progression_rec(a1, d, n));

function arithmetic_progression_for (a1, d, n){
	aj = a1;
	sum = a1;

	for (var i = 1; i < n; i++) {
	aj = aj + d;
	sum = sum + aj;
	}

	return sum;
}

console.log('Cycle: ' + arithmetic_progression_for(a1, d, n));