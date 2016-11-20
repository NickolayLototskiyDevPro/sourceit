
function getCountUpperLetter(str){
	var res = 0;
	for(var i = 0;i < str.length; i++){
		if(str[i] === str[i].toUpperCase()){
			res++;
		}
	}
	return res;
}

function biggest(arr){
	var max = getCountUpperLetter(arr[0]);
	var resultString = arr[0];
	
	for(var i = 1; i < arr.length; i++){
		var currentBigLetter = getCountUpperLetter(arr[i]);
		if(max < currentBigLetter){
			max = currentBigLetter;
			resultString = arr[i];
		}
	}
	console.log(resultString);
}

biggest(['FRTOPYyhuuuuuuuuuuUfff','HHHHHHHHHHHvv','jjjjjjjjj','yyyyyTTTTTTTT']);