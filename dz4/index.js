'use strict'	
	numb(30); //Enter number here
	function numb(n){
			if(typeof n === 'number'){
			if(n <= 1000){
				var str = 'a';
			for(var i = 1; i <= n; i++){
				console.log(str);
				str = str + 'a';
			}
	} else{
		alert('Your number is bigger than 1000');
		}
	} else{
		alert('Error');
	}
}