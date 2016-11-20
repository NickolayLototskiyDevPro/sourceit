function polindrom (str) {
    var lowCheck = 0;
    var upperCheck = 0;
    var repeatCheck = '';
    var polindromArr = [];
    var strArr = [];

    strArr = str.split('');

    if (strArr.length > 1010) {
        alert('Error. Your string is too long. Please, refresh your page and input new string');
    }

    for (var counter = 0; counter < strArr.length; counter++){
        if (strArr[counter] === strArr[counter].toLowerCase()) {
            lowCheck++;
        } else {
            upperCheck++;
        }
    }

    //Проверяем что бы строка была в одном регистре
    if (lowCheck != strArr.length && upperCheck != strArr.length) {
        alert('Error. Please, refresh your page and input string in one case (upper or lower)');
        return;
    }
    
    //Создаем полиндром
    for (var counter2 = 0; counter2 < strArr.length; counter2++) {
        repeatCheck = strArr[counter2];
        for(var counter3 = counter2 + 1; counter3 < strArr.length; counter3++) {
            if (repeatCheck === strArr[counter3]){
                polindromArr.unshift(repeatCheck);
                polindromArr.push(strArr[counter3]);
                strArr.splice(counter2, 1);
                strArr.splice( (counter3 - 1), 1);  // counter3 - 1, ибо к этмоу времени, arr уже короче на 1
                counter2 = -1;
            }
        }
    }

    if (strArr[0]) {
        polindromArr.splice( (polindromArr.length/2), 0, strArr[0]);
    }
    
    alert('Maximum polindrom length is : ' + polindromArr.length + '.\n\You can see this polindrom in your console.')
    console.log (polindromArr);
    return polindromArr;    
}

var string = prompt('Input string');
polindrom (string);