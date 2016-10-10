var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6, 7, 8, 9, 10, 12];
var resultMass = [];
console.log('arr1 = ' + arr1);
console.log('arr2 = ' + arr2);

var totalLength = arr1.length + arr2.length;
console.log('totalLength = ' + totalLength);

var mixMass = function( arr1, arr2, totalLength ){

	for ( var count  = 0; count <= totalLength ; count++ ){

		if( count < arr1.length ){
			resultMass.push( arr1[count] );
			//console.log(arr1[count]);
		}
		

		if( count < arr2.length ){
			resultMass.push ( arr2[count] );
		}
	}
	return resultMass;
}

console.log ( mixMass(arr1, arr2, totalLength) );


