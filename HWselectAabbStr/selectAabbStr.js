var str = "aa bb aa bb aa bb aa bb aa bb aa bb"; 
var target = "aa bb"; 
var sumCoincid = 0;
var pos = 0;

console.log("string = " + str);
console.log("target " + target);

var amountOfElements = function(str, target){
	while (1) {

	  var foundPos = str.indexOf(target, pos);
	  if (foundPos == -1) break;

	  //console.log( foundPos ); 	// found in this positions
	  pos = foundPos + 1; 		 	//continue, from next position 
	  console.log(sumCoincid +=1);	//

	}
}

amountOfElements(str, target);
console.log("number of coincidences = " + sumCoincid);