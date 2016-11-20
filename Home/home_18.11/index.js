let a = [4,5,8,6,3,4];
let v = [61,1,6,8,9,6,9,5];
let n = [6,8,81,9];
let m = [6,9,7,2,5,4,3,6,4,6];
let merg = function () {
    let min = [];
    let maximum = 0;
    let mergArr = [];
    let arrEven = [];
    let odd = [];
    for( let i = 0; i < arguments.length; i++){
       min[i] = arguments[i];
    };
    for(let j = 0; j < min.length-1; j++){
        if(maximum < min[j+1].length){
            maximum = min[j+1].length;
        }
    };
    for(let l = 0; l<maximum; l++){
            for(let k = 0; k < min.length; k++){
                       if(min[k][l] == undefined){
                       min[k].length = 0;
                       }else{
                           mergArr.push(min[k][l]);    
                       }
            }
    }
    console.log(mergArr);//merge multiple arrays
//------------------------------------------------------------------------------------//
    for(let k = 0; k < mergArr.length; k++){
        if(mergArr[k] % 2){
            arrEven.push(mergArr[k]);
        }else{
            odd.push(mergArr[k]);
        }
    }
    console.log(arrEven);// even array
    console.log(odd);   // odd array
}
merg(a,v,n,m);




let arr1 = [4,5,8,6,3,4];
let arr2 = [61,1,6,8,9,6,9,5];
let arr3 = [6,8,81,9,7];
let arr4 = [6,9,7,2,5,4,3,4,6];
let arrEvnOdd = function () {
    let min2 = [];
    let arr_even = [];
    let arr_odd = [];
    for( let i = 0; i < arguments.length; i++){
       min2[i] = arguments[i];
        if(([i] % 2)==0){
            arr_even.push(min2[i]);
        }else{
            arr_odd.push(min2[i]);
        }
    };
    console.log(arr_even);// the even number arrays
    console.log(arr_odd);   // the odd number arrays

}
arrEvnOdd(arr1,arr2,arr3,arr4);



let maxArr = [5,9,8,7,6,22,5,6,58,8,45,5,5,2,5,5,2,55,5,652,6,5,82,7];
let maxArrFunc = function () {
    let even = [];
    let odd = [];
    for(let m = 0; m < maxArr.length; m++){
        if((maxArr[m] % 2) != 0){
            even.push(maxArr[m]);
        }else{
            odd.push(maxArr[m]);
        }
    }
    let buble = function (arg) {
        let min;
        for(let j=0; j<arg.length; j++){
          for(let i=j+1; i<arg.length; i++){
              if(arg[i]>arg[j]){
                 min = arg[i];
                 arg[i]=arg[j];
                 arg[j]= min;
              }
          }
      }
      console.log(arg[0]);
    };
   buble(even);
   buble(odd);
}
maxArrFunc(maxArr);// max even and max odd



