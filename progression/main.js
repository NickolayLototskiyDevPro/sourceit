var a_initial = 1;
var n_raz = 3;
var d = 2;
var i = 1;
console.log('d= '+d)
if (d!=0){
    console.log('A1= '+a_initial);
    while(i <= n_raz){
        i++;
        a_initial=a_initial+d;
        console.log('A'+i+'= '+a_initial);
    }
}
else{
    console.log('Error')
}