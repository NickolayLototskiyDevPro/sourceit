function Counter(mainString, currentString){
var i=0, Result=0;
while (i <= mainString.length) {
	var exit=false;
	
	if (mainString[i] == currentString[0]) {
	    var count=i+1;

		for (var j = 1; j <= currentString.length-1 ; j++,count++) {
		
			if (currentString[j] == mainString[count]){
				exit=true;
			} else {
				exit=false;
			}

		}
		
	}
	
	if (exit==true) {
		Result++;
	}

	i++;
}
return Result;
}

alert(Counter('aa aa ab aa bb bb aa bb aa','aa bb'));