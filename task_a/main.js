'use strict'
var part='';
lot_a(5);
function lot_a(n){
    if (typeof n === 'number'){
        if(n <= 1000){
            //var part='a'; 
            for(var i=1; i<=n; i++){
                part=part+'a';
                console.log(part);
            }
//            var i=0;
//            do{
//                if(n<0){
//                    console.log("n<0");
//                    break;
//                }                    
//            }
//                
//            while(i<=n){                
//                part=part+'a';
//                console.log(part);
//                i++;
            //}            
        }
        else{
            console.log("Error (n more than 1000)");
        }
    }
    else{
        consol.log("it's not a number");
    }
}
//funcion temp (n){
//    var i = 0;
//    var output = '';
//    while(i < n){
//        output = output + 'a';
//        console.log(output);
//    }
//}
//temp(10);