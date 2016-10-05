/* Вывод колличества строк указанного пользователем,
каждая последующая строка +1 символ. Через цикл for*/

    function let3(q) {
        var a = 'a';
        var z = a;

        if ((typeof q === 'number') && (q <= 1000)) {
            console.log(a);
            for (var i = 0; i < q; i++) {
                z = z + a;
                console.log(z);
            }
        } else if (typeof q === 'string') {
            console.log('Enter a number!');
        } else {
            console.log('The number is too large!!! Enter ф number less 1000!');
        }
    }


/* Вывод колличества строк указанного пользователем,
каждая последующая строка +1 символ. Через цикл while*/
        function let4(q) {
        var a = 'x';
        var z = a;

        if ((typeof q === 'number') && (q <= 1000)) {
            console.log(z);
            var w = 0;
            while (w < q) {
                z = z + a;
                w++;
                console.log(z);
            }
        } else if (typeof q === 'string') {
            console.log("Please enter the number!");
        } else {
            console.log('The number is too large!!! Enter a number less 1000!');
        }
    }



// Сортировка методом пузырьков


    var massive = [3, 6, 2, 4, 1, 8, 5, 9, 7];


    function bubble(a) {
        for (var i = 0; i < a.length-1; i++) {

            for (var x = 0; x < a.length-1; x++) {

                if (a[x + 1] < a[x]) {
                    var t = a[x + 1]; a[x + 1] = a[x]; a[x] = t;
                } 
            }
        }
        alert(a);
    }



//Замена слова 'мир' на '*****'

    var world = 'Слово мир слово мир мир слово Мир слово мир';


    function fun2(a) {

    var arr = world.split(' ');

        for ( var i = 0; i < arr.length; i++) {
            if (arr[i] === "мир" || arr[i] === "Мир") {
                arr[i] = '*****';
            }
        }
        var str = arr.join(' ');
        alert(str);
    }




// Добавление значений из двух массивов в третий по очереди
        var q = [1, 3, 5];
        var a = [2, 4, 6, 8, 9, 12];
        var c = [];


        function fun(q,a) {
            var maxLen = q.length > a.length ? q.length : a.length;

            for (var i = 0; i < maxLen; i++) {
                if (q[i]) {
                    c.push(q[i]);
                }

                if (a[i]) {
                    c.push(a[i]);
                }
            }

            alert(c);
        }




// Алгебраическая прогрессия

        var a = 8;
        var b = 12;
        var c = 80;
        var x = a;

        function algebraicProgression() {
            for (var i = 0; i < c-1; i++) {
                    a = a + b;
                    x = x + a;
            }

            alert(x);
        }



//Вывод количества вложений маленькой строки в большую

var bigStr = "маленькая короткая строка большая длинная строка большая длинная строка маленькая короткая строка большая длинная строка маленькая короткая строка большая длинная строка большая длинная строка маленькая короткая строка маленькая короткая строка маленькая короткая строка"

var smallStr = "маленькая короткая строка";

function fun1() {
  var massivBig = bigStr.split(' ');
  var massivSmall = smallStr.split(' ');
  var x = 0;

  for (var i = 0; i < massivBig.length; i++) {
    if (massivBig[i] == massivSmall[0]) {

      var contr = massivBig.slice(i, (i + massivSmall.length));
      var contrStr = contr.join(' ');
        if (smallStr == contrStr) {
            x = x + 1;
        }
    }
  }

  alert(x);

}