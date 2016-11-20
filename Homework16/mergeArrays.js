function merge(){
	var arr = [];
	var m = arguments[0];
		for(var i = 0; i < arguments.length; i++){
			if(arguments[i].length > m.length){
				m = arguments[i];
			}
		}
	var maxLength = m.length;
		for(var j = 0; j < maxLength; j++){
			for(var i = 0;i < arguments.length; i++) {
				if(arguments[i].length > j){
				arr.push(arguments[i][j]);
				}
			}
		}
		console.log(arr);
	return;
	}
merge([1, 4, 55, 87, 44], [8, 1, 6], [9, 2]);