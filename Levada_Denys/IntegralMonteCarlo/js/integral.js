function integral () {
    var y = 1;
    var x = 1;
    var k = 0; //принадлежат интегралу
    var n = 0; // всего точек
    var arrXY = [-2];
    var xy;

     while (arrXY.length < 10000) {
        x = Math.random ();
        //x = x.toFixed(2);
        y = (3* Math.random());
        //y = y.toFixed(2);
        xy = (x*100000) + y;
        for(var i = 0; i < arrXY.length;i++) {
            if(xy != arrXY[i] && i == (arrXY.length - 1)) {
                arrXY.push(xy);
                n++;
                if (y <= (3 * x)) {
                    k++;
                    break;
                }
            } else if (xy == arrXY[i]) {
                break;
            }
        }
    }
    var S = 3 * (k/n);
    S = S.toFixed(2);

    alert("S = " +S);
    alert(k + ' In');
    alert(n + ' Total');
    // alert(x);
    // alert(y);
    return;
    // создаем число
    //  првоеряем есть ли
    // добавляем
    // проверяем входит ли
    // вычислить площадь
    // с = с * к\н
}

integral();