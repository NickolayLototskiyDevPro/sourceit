function integral () {
    var k = 0;
    var n = 0;
    var S = 0;
    // y = 3x
    // S = s * (k / n)

    while (n < 10000) {
        var x = Math.random();
        var y = Math.random() * 3;

        if (y <= (3 * x)) {
            k++;
        }
        n++;
    }
    S = 3 * (k / n);
    S = S.toFixed(2);
    alert("S = " + S);
    alert(k + ' In');
    alert(n + ' Total');
    return;
}

integral();