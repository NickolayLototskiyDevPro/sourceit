function BigNechet(arr){
	var res =  Number.MIN_SAFE_INTEGER;
	for(i = 0; i < arr.length; i++){
		if(arr[i]%2 != 0){
			if(arr[i] > res){
				res = arr[i];
			}
		}
	}
	
	if(res == Number.MIN_SAFE_INTEGER){
		for(i = 0; i < arr.length; i++){
			if(arr[i]%2 == 0){
				if(arr[i] > res){
					res = arr[i];
				}
			}
		}
		console.log('Nechet not found, max chet =', res);
	}else{
		console.log('Max nechet =', res);
	}
}

BigNechet([0, 4, 4, 32, 92, 4]);