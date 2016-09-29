//'use strict'
/*var a = {a : 1, b : 2, c : true, obj : {a : 11, b : false}, a : 55};
console.log(a.a);
var b = {b : 5, c:8}
//console.log(b.l)
console.log('l' in b);
delete a.b;
console.log('b' in a);
var person = {name : 'Ivan', surname : 'Petrov', age : 30};
person.age = 20;
person.name = 'Petya';
person.surname = 'Ivanov';
console.log(person.age);
console.log(person.name);
console.log(person.surname);
delete person.name;	
console.log(person.name);
var a = ['tree','grass', 'bush','palm'];
console.log(a[2]);
console.log(a[0]);
console.log(a.length);
//a.length = 2;
a.push('forest');
a.pop();
console.log(a);
//shift unshift тоже самое что и поп, только с переди, работают медленно

	for (var i = 0; i < a.length; i++){
	console.log(a[i]);
}*/
/*var str = 'vasia,petiya,vava,nana,lula,pepa';
var arr = str.split(',');                           // split из массива делает строку
console.log(arr);
var str1 = arr.join(';');                    //join из строки делает массив
console.log(str1);
var arr1 = [1,2,3,4,5];
delete arr1[1];
console.log(arr1)
arr1.splice(0,2);
console.log(arr1);*/
 var str = 'Flies were flying in the sky';
 var arr = str.split(' ');
 console.log('Our arrau : ' + arr);
 for (var i=0; i<arr.length; i++){
    if(arr[i]=='Flies'){
        arr[i]='Birds';
        console.log('New array : ' + arr);
        var str2=arr.join(' ');
        console.log('Our new string : ' + str2);
    }
}
 