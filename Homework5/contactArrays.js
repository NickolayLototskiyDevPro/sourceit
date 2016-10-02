var a = [ 1, 2, 3 ]
var b = [ 2, 4, 6, 8, 9, 12 ]

var concatArrays = function ( smallArray, bigArray ){
	var rezultArray=[];
	var i;
	for( i = 0; i < smallArray.length; i++ ){
		rezultArray.push( smallArray[i] );
		rezultArray.push( bigArray[i] );
	}
	var restOfArray = bigArray.slice( i, bigArray.length );
	rezultArray = rezultArray.concat( restOfArray );
	return( rezultArray );
}

if ( a.length > b.length ){
	console.log('first Array is bigger than second Array')
	console.log( concatArrays( b, a ) );
} else {
	console.log('second Array is bigger than first Array')
	console.log( concatArrays( a, b ) );
}
