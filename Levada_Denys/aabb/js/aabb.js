var str = 'aa bb cc aa bb aa bb cc bb aa cc bb aa aa bb'; //4
var subStr = 'aa bb';

function strCheck(str,subStr) {
	var strArr = str.split(' ');
	var subRes = '';
	var res = 0;
	for (var counter = 0; counter < strArr.length; counter++) {
		subRes = strArr[counter] + ' ' + strArr[counter + 1];
		console.log(subRes);
		if (subRes === subStr) {
			res += 1;
		}
	}
	return res;
}

var res = strCheck(str,subStr);

console.log(res);