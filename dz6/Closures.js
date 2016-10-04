'use strict'	
// numb(30); //Enter number here
var fn = function numb(){
	var n = 30;
	var str = 'a';
	return function(){

		if(typeof n === 'number'){

			if(n <= 1000){

				for(var i = 1; i <= n; i++){

					console.log(str);
					str = str + 'a';
			}
	} else {
		alert('Your number is bigger than 1000');
		}
	} else {
		alert('Error');
	}
}
}
fn()();