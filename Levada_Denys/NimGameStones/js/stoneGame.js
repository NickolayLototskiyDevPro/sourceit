function canIWin (n, min, max) {
	// n - number of stones
	// min - minimum number of stones to pull per turn
	// max - maximum number of stones to pull per turn
	if ((n % (min + max)) === 0){
		alert('You lose!');
	} else {
		alert('You can win!');
	}
}

var mn = 1;
var mx = 3;
var n = prompt('Input n');

canIWin (n, mn, mx);