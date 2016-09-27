var str2 = '*****';
var str1 = 'Всем мир даром, и пусть никто не уйдет обиженным!';
alert(str1);

function replacer(str){
  return str2.toLowerCase();
}
var result = str1.replace(/мир/gi, replacer);
alert(result);