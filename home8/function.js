
var findEl=function(valueArray){

		function CutArray(valueArray){
			for (i =0; i <= valueArray.length-1; i++) {
				if (typeof valueArray[i]!='undefined') 
					return valueArray[i]
				}
		}

	var i=0, j;
	do 	{
		j=0;
		do {
			if (i!=j) {
				if (valueArray[i]==valueArray[j]){
					delete valueArray[i];
					delete valueArray[j];
				}
			}
			j++;
		} while (j<=valueArray.length-1);
		i++;
	} while ( i<=valueArray.length-1 );

	return CutArray(valueArray);
	}


var newArray=findEl([2,3,5,2,4,3,5]);


console.log(newArray);


