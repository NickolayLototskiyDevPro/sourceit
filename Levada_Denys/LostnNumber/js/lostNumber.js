// zadana posledovatelnost chsel, poryadok ne vazhen, vivesti propushennoe chislo, chisla ot 1 do n
var sequence = [1,3,2,5,7,6,8,9];
function findLost () {
	for (var a = 1; a <= (sequence.length + 1); a++) {
		var i = 0;
		while (sequence[i] != a) {
			i ++;
			if (i > sequence.length) {
				console.log(a);
				break;
			}
		}
		return;
	}