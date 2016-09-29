'use strict'
//var a={a:'str',b:1,c:true,'comlex type':12, obj:{a:1,b:2}}
//console.log(a.b);
//console.log(a['comlex type']);
//console.log(a.obj.b);

//var a={a:'str',b:1,c:true}
//console.log(a.n);
//console.log('l'in a);
//console.log(delete a.b);
//console.log('b'in a);

//var persona={name:'Ivan', surname:'Petrov', age:30}
//persona.second_name='Dima';
//console.log(persona['second_name']);
//console.log(delete persona.name);

var a=['tree','bush','grass','pulme'];
//console.log(a.length=2);
a.push('forest');
//console.log(a);
//a.pop();
//console.log(a);
//for(var i=0; i<5; i++){
//    console.log(a[i]);
//}
//var n=35
//var n=a.length;
//for(var i=0; i<n; i++){
//    if(n<35){
//      a.push('AA');
//    }
//    else{
//        break;
//    }
//}
//
//console.log(a.length);
//console.log(a);

//var str='vasia,petia,vana,luba,gala,vika';
//var arr=str.split(',');
//console.log(arr);
//var str2=arr.join(', ');
//console.log(str2);

//var arr=[1,8,3,4,5];
//console.log(arr);
//delete arr[1];
//console.log(arr);
//arr.splice(1.1);
//console.log(arr);

var str=' по небу Гуси летели'
var arr=str.split(' ');
console.log(arr);
for (var i=0; i<arr.length; i++){
    if(arr[i]=='Гуси'){
        arr[i]='Лебеди';
        console.log(arr);
        var str2=arr.join(' ');
        console.log(str2);
    }
    else{
        console.log('Error');
    }
}
//delete arr[0];
//console.log(arr);
//arr[0]='Лебеди';
//console.log(arr);
//var str2=arr.join(' ');
//console.log(str2);
