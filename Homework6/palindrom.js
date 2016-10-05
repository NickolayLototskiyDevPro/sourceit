var str = 'abccccdd';

str = str.split('');
str.sort();

var longestPalindrome = function(){
	var rezult = 0;
	function add(){
		rezult++;
	}
	for( var i = 1; i < str.length; i+=2 ){
		if( str[i] != str[i-1] ){
			i--;
		} else {
			add();
			add();
		}
	}
	if( str.length - rezult > 0 ){
		add();
	}
	return rezult;
}
	
console.log(longestPalindrome());
