var str = 'aa bb ab aa bb bb';
var substr = 'aa bb';

str=str.split(' ');
var substrArray=substr.split(' ');

var counter = function(){
	this.rezult = 0;
	for(i=0; i<str.length; i++){
		var tempStr = str.slice(i, i+substrArray.length);
		tempStr = tempStr.join(' ');

		if(substr===tempStr){
			rezult++;
		}
		
	}
	return this;
}

var count = counter();
console.log(count.rezult);
