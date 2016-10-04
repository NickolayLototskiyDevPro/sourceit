function findSingleNum (arr) {
    var repeatCheck = 0;
    var singleNum = 0;

    for (var counter1 = 0; counter1 < arr.length; counter1++) {
        repeatCheck = arr[counter1];
        for(var counter2 = counter1 + 1; counter2 < arr.length; counter2++) {
            if (repeatCheck === arr[counter2]){                
                arr.splice(counter1, 1);
                arr.splice( (counter2 - 1), 1);  // counter3 - 1, ибо к этмоу времени, arr уже короче на 1
                counter1 = -1;
            }
        }
    }
    singleNum = arr[0];
    return singleNum;
}

var arr = [1,2,3,4,5,5,4,3,2,1,22,44,22,55,44,55,7];
var singleNumber = findSingleNum(arr);
console.log (singleNumber);