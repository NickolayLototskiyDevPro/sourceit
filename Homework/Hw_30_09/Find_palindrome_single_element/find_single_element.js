	var myArr = [2, 4, 4, 3, 7, 7, 3, 6, 2];
	var myArrAlt = [2, 4, 4, 3, 7, 7, 3, 6, 2];
	var singleElement;
	var singleElementAlt;
	var i = 0;
	var j = 0;

	function look_for_singleElement (myArr) {
		myArr = myArr.sort();

		while (singleElement === undefined){
		if (myArr[i] != myArr[i + 1]) {
		singleElement = myArr[i];	
		}
		i +=2;
		}	

		return singleElement;
		
	}

	console.log('Main realization: ' + look_for_singleElement (myArr));

	function look_for_singleElement_alternative (myArr) {
	 
		while (singleElementAlt === undefined) { 
		if(myArr.indexOf(myArr[j], (j + 1) ) !== -1){
			
		myArr.splice(myArr.indexOf(myArr[j], (j + 1) ), 1);
		myArr.shift();

		} else{
		singleElementAlt = myArr[j];	
		}
		}
		return singleElementAlt;
		
	}

	console.log('Alternative realization: ' + look_for_singleElement_alternative (myArrAlt));

	