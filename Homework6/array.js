var arr = [ 2, 6, 2, 5, 6, 5, 1 ];
var rezult;
arr.sort();
console.log(arr);
	function singleNumber(arr){

		for( var i = 1; i < arr.length; i += 2){
			if(arr[i] != arr[i-1]){
				rezult = arr[i-1];
				break;
			}
		}
	if(isNaN(rezult)){
		rezult = arr[arr.length - 1];
	}

	}
singleNumber(arr);
console.log(rezult);