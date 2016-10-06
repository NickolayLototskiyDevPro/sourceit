	var myString = 'Gcfglbaajaabllll';
	var longestPalindrome = 0;
	var longestPalindromeAlt = 0;
	var plusOne = 0;

	function longest_palindrome (myString) {
		if (myString.length > 1010) {
		return 'Please, shorten string.';
		} else{

		myArr = myString.split('');
		myArr = myArr.sort();
		console.log(myArr);

		for (var i = 0; i < myArr.length; i++) {

		if (myArr[i] === myArr[i + 1]) {
		longestPalindrome +=2;
		i++;	
		}
		else{
		plusOne = 1;	
		}
		}

		return longestPalindrome + plusOne;
		}
	}

	console.log('Main realization: ' + longest_palindrome (myString));

	function longest_palindrome_alternative (myString) {
		if (myString.length > 1010) {
		return 'Please, shorten string.';
		} else{

		var i = 0;	
		myArr = myString.split('');

		while (myArr.length != 0) {

		if (myArr.indexOf(myArr[i], i + 1) == -1){
		plusOne = 1;
		myArr.shift();
		}
		else{
		longestPalindromeAlt +=2;
		myArr.splice(myArr.indexOf(myArr[i], (i + 1) ), 1);
		myArr.shift();
		} 

		}
		}
		return longestPalindromeAlt + plusOne;
	}	
	
	console.log('Alternative realization: ' + longest_palindrome_alternative (myString));