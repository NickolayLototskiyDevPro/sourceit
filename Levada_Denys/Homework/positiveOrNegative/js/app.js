function positiveOrNegative() {
    var a = parseFloat(prompt('Input a'));
    if (a >>> 31) {
        alert(a + ' is negative');
    } else {
        alert(a + ' is positive.');
    }
}