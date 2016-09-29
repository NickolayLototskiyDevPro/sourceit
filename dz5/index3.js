var a = [1, 5, 3, 3, 8, 11, 3], i, j, k, n = a.length;
console.log('Исходный массив - ' + a);
console.log('Количество эллементов в массиве - ' + n);
for(j = 0; j = n; j++){
for(i = 0; i < n - 1; i++){
	if(a[i] > a[i + 1]){
		k = a[i];
		a[i] = a[i + 1];
		a[i + 1] = k;
		console.log('Обработанный массив - ' + a);
		}
	}
}

