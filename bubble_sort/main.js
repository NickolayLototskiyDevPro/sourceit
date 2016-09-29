var  a = [5, 4, 2, 3, 1, 6, 9, 8,23, 21, 7];
console.log(a);

for (var i = 0, len = a.length - 1; i < len; i++) {
    var swapped = false;
    var n = 0;
    while (n < len - i) {
        if (a[n] > a[n + 1]) {
            var c = a[n];
            a[n] = a[n + 1];
            a[n + 1] = c;
            swapped = true;
        }
        n++;
    }
    
    if(!swapped)
        break;
}
console.log(a);