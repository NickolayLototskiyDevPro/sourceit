function chekingNumber(){
	var a = prompt("Input number");
	var x = Math.sqrt(a);
	if(x){
		console.log(x);
		alert(a + ' is positive number');
	}else{
		console.log(x);
		alert(a + ' is negative number');
	}
}
chekingNumber();