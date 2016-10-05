var lengthPoly=function(textString){
	var obj={},
		maxEven=0,
		maxOdd=0;

	for (var i =0; i<textString.length ; i++) {
		if ( textString[i] in obj ) {
			obj[textString[i]]=obj[textString[i]]+1;
			}
			else {
				obj[textString[i]]=1;
			}
	
	}

	for ( key in obj ) {
		if (obj[key]%2==0){
			maxEven=maxEven+obj[key];
		} else {
			if (obj[key]>=maxOdd) {
				maxOdd=obj[key];
			}
		}
	}

	return maxOdd+maxEven;

}

console.log('abccccdd'+' '+'length='+lengthPoly('abccccdd'));
console.log('kazak'+' '+'length='+lengthPoly('kazak'));
console.log('hteolfeoleh'+' '+'length='+lengthPoly('hteolfeoleh'));














