// created 25.09.2016
//Hanna 

var n = prompt('Введите n','');
	if ((isNaN(n)) || n > 1000 ) {
		alert('Error');
	}
	else{
		for (var b = n-1, i = 0, a = ''; i <= b; i++) {
  a += 'a';
  console.log(a);} 
	}



	//Как создавался код, варианты решений. Хочу их сохранить, но это хлам
/*
for (var b = n-1, i = 0, a = ''; i <= b; i++) {
  a += 'a';
  console.log(a);} 
/*	for (var i = 1; i <= n; i ++){
		console.log(a);
	}
}
	for (var i = 1; i <= n; i ++){
		console.log(i + "  " + symbol(n));
	}
*/
