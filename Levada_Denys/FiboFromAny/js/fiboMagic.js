function fibonacciFromAny () {
    var a = parseFloat(prompt('input a'));
    var b = [0,1,1];
    for (var i = 3; i <= 100; i++){
        b.push(((b[i - 2]) + (b[i - 1])));
        if (b[i] == a) {
            console.log (b);
            break;
        } else if (b[i] > a) {
            b.pop ();
            console.log (b);
            break;
        }
    }
}
fibonacciFromAny();