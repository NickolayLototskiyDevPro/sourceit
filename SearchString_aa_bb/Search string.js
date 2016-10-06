var main_string = prompt("Enter string")
var search_string = 'aa bb';
var sum = 0;
var found_value = 0;
var i = 0;

function Funk_Searchstring (main_string, search_string) {
    
  	while (main_string.indexOf(search_string, i) !== (-1))
 	{
 		found_value = main_string.indexOf(search_string, i);
 		sum++;
 		i = found_value+1;
 	} 
  		return sum;
 		 	}
 
 	console.log(Funk_Searchstring (main_string, search_string));
