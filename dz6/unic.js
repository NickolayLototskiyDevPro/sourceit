'use strict'
var arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7];
var emp = [];
var j = 0, t = 0;
arr.sort();
console.log(arr);
function numb(arr){
for (var i = 1; i < arr.length + 1; i++){

    if (arr[i - 1] === arr[ i ]){ 
    t = arr[i - 1];
  	}

    if (arr[i - 1] !== t) {
    emp[j++] = arr[i - 1];
    }

     return emp;
}
}
console.log(emp);