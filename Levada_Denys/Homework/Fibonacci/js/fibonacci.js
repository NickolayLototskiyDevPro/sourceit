var a = parseFloat(prompt('Input a'));

function fibonacci () {
    var b = [0,1,1];
    if (a == 0) {
        alert('0,1,1,2');
    } else if (a == 1) {
        alert ('1,2,3,5')
    }   else {
        var i = 3;
            while (i <= 100) {
                b.push(((b[i - 2]) + (b[i - 1])));

                    if (a == b[i]) {
                        for (var z = i; z < (i+2); z++) {
                            b.push((b[z]) + (b[z-1]));
                        }
                        var b1 = (b[i-1]) + (b[i]);
                        var b2 = (b[i+1]) + (b[i]);
                        var b3 = (b[i+2]) + (b[i+1]);

                        alert((b[i]) + ', ' + b1 + ', ' + b2 + ', ' + b3 + '.' );
                       return;
                        }
                i++;
            }
        alert('This number is out of Fibonacci`s sequence');
    }
}
fibonacci();