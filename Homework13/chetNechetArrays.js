function chetNechet(){
	var resChet = [];
	var resNechet = [];

	for( var i = 0; i < arguments.length; i++ ){
		if( i%2 ==0 ){
			resChet = resChet.concat(arguments[i]);
		}else{
			resNechet = resNechet.concat(arguments[i]);
		}

	}
	console.log('Chet: ', resChet);
	console.log('Nechet: ', resNechet);
}
	chetNechet( [1,3,5], [5,7,8], [9,4,5], [2], [2,7,9,14,25] );