var line = 'aa bb ab ba bb aa aa bb bb ba bb aa bb';
var line2 = 'aa bb ';
var mass = line.split(' ');
var mass2 = line2.split(' ');
var sample = function(){
    var summ = 0; 
    for(var i = 0; i < line.length; i++)
        if(mass[i] === mass2[0] && mass[i + 1] === mass2[1]){
            summ++;            
        }
    return summ;
}
console.log(sample());