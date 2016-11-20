function stringPlus() {
    var stringA = prompt('Input string A');
    var stringB = prompt('Input string B');
    var strArrA = stringA.split('');
    var strArrB = stringB.split('');
    var res = [];

    for (var i = 0; i < strArrA.length; i++) {
        res.push(strArrA[i]);
    }
    for (var j = 0; j < strArrB.length; j++) {
        res.push(strArrB[j]);
    }
    res = res.join('');
    return res;
}

var str = stringPlus();
console.log(str);