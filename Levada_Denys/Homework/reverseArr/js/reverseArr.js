function reverseArr (str) {
    var strArr = str.split('');
    var newArr = [];
    var newStr = '';

    for (var counter = strArr.length; counter >= 0; counter--) {
        newArr.push(strArr[counter]);
    }
    newStr = newArr.join('');

    
    return newStr;
}

var str = prompt('Input string');

var reversedStr = reverseArr (str);

alert(reversedStr);