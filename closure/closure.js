/*var a =function(){
    var count=0;
    return function(){
        console.log(count++);
    }
}
var b=a();
console.log(b());//0
console.log(b());//1
console.log(b());//2
var c=a();
console.log(c());//o
console.log(c());//1
console.log(c());//2*/

/*var fn=function(){
    this.a='str';
    this.b=1;
    return this;
}
var c = fn();
console.log(c.a);
console.log(c.b);*/

/*console.log('Hello 1');
setTimeout(
    function(){
        console.log('Hello 2');
    },1000);
console.log('Hello 3');*/

var a = [1, 2, 3];
var b = [2, 4, 6, 8, 9, 12];
var result = [];
var rest = [];
var min_lengs_array = 0;
if (a.length > b.length){
    min_lengs_array=b.length;
    rest = a.slice(b.length);
}
else{
    min_lengs_array=a.length;
    rest = b.slice(a.length);
}
     console.log(min_lengs_array);
    
for (var i = 0; i < min_lengs_array; i++){
    result.push(a[i]);
    result.push(b[i]);
}
    result=result.concat(rest);
    console.log(result);
    
//if (a.length > b.length){
//    a.slice(b.length);
//    rest.push(a);
//    consol.log('rest a= '+rest);
//}
//else{
//    b.slice(a.length);
//    rest.push(b);
//    consol.log('rest b= ');
//}
//    result.push(rest);
//    consol.log(result);