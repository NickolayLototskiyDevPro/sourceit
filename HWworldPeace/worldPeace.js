
var str  = 'Миру мир миру мир';
console.log(str);

var Str2;
var arrStr = str.split(' ');
var arrStrLength = arrStr.length;
console.log(arrStr);

arrStr.splice();

var sort = function ()
{

	for (var eliment = 0; eliment <= arrStrLength; eliment++){
		
		if (arrStr[eliment] === 'мир') 
			arrStr[eliment] = '*****';
	}
	console.log(arrStr);
	Str2 = arrStr.join(' ');
	
	//console.log(Str2);
	return Str2;
}

sort();
console.log(Str2);