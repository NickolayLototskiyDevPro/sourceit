	var main_string = 'aa bb ab aa bvba av aa bb aa bb';
	var substring = 'aa bb';
	var sum = 0;
	var found = 0;
	var i = 0;

	function look_for_substring (main_string, substring) {

	while (main_string.indexOf(substring, i) !== (-1))
	{
		found = main_string.indexOf(substring, i);
		sum++;
		i = found+1;
	} 

		return sum;
		
	}

	console.log(look_for_substring (main_string, substring));
	