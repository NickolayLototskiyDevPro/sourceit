'use strict'
function isPal(string){	
	var newstr;
	var newstrarr;
	var palidr

	if(typeof string !== "number"){
		newstr = string.toLowerCase();
	}else{
		newstr = string.toString();
	}

	newstrarr = newstr.split('');
	newstr = newstr.replace(/\s/g, '');

	newstrarr.reverse();

	palidr = newstrarr.join('').replace(/\s/g, '')

	if(+palidr !== NaN){
	  +palidr;
	}

	if(palidr === newstr){
	  	return true;
	}else{
		return false;
	}
}

alert(isPal('Анна'));
