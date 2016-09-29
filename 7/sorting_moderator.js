// sorting Method bubble
var numbers = [8,5,1,3,9,0,4,7,6,2,10];

function sortBubble(n) {
  for (var j = 0; j < numbers.length - 1; j++) {
    var a;
    var status = false;
    for (var i = 0; i < numbers.length - 1 - j; i++) {
      if (numbers[i] > numbers[i + 1]) {
        a = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = a;
        status = true;
      }
    }
    if (status === false) {
      break;
    }
  }
  console.log(numbers);
}

sortBubble(numbers);


// sorting Method max number
var numbers = [8,5,1,3,9,14,4,7,15,6,2,10,12,11,0,13];

function sortMaxNum(n) {
  for (var i = 0; i < numbers.length; i++) {
    var a;
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        a = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = a;
      }
    }
  }
  console.log(numbers);
}

sortMaxNum(numbers);


// moderator words
var str = 'Начать свой путь к карьере МИР программиста стоит МИР с ответа на вопрос: нужно ли Вам МИР программирование вообще?';

function moderator(k) {
  var dirtyWord1 = 'МИР';
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == dirtyWord1) {
      arr[i] = 'XXXXX';
    }
    console.log(str);
  }
  var strNew = arr.join(' ');
  console.log(strNew);
}

moderator(str);
