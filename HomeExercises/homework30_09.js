//Buble sort
	var BubleSort = [ 9, 4, 5, 2, 3, 1, 8, 7, 6, 5, 0, 0 ],
	i, j, k, n = BubleSort.length;
	console.log('Begin with this array : ' + BubleSort);
	console.log('Numbers of elements in array : ' + n);
	for (var j = 0; j < n; j++) {
	for ( i = 0; i < n - 1; i++) {
		if (BubleSort[i] > BubleSort[i + 1]){
			k = BubleSort[i];
			BubleSort[i] = BubleSort[i + 1];
			BubleSort[i + 1] = k;
		}	
	}
}
console.log('New array: ' + BubleSort);
//--------------------------------------------------------------------------
//Buble sort throw the function
	var BubleSort1 = function (arr) {
	var a, j, i;
	for ( j = 0; j < arr.length; j++) {
	for ( i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]){
			a = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = a;
				}	
			}
		}
	}
	var mass = [4,6,2,1,2,3,7,8,7,7];
	console.log('Begin with this array : ' + mass);
	console.log('Numbers of elements in array : ' + mass.length);
	console.log('New array: ' + BubleSort1(mass));
//--------------------------------------------------------------------------
//How to mark bad words
var str = 'The use of animals in research is not a new concept, for it began as early as in the second century by a Roman physician.It took nearly another eighteen hundred years for such experimentation to become a vital role in the advancement of both science and technology.Such advancements paved the way for the many experiments that are used in today’s generation as an investigative technique to explore the depths of the human body without actually exploiting the human.There are four principal reasons why animals continue to be a the first phase for any biomedical research project;those being to create a biological model from the animal only to further the knowledge of how a human body works, how a disease impacts the human body,how to create forms of treatment in relation to the human body, as well as testing the efficacy and safety of new drugs.';
//document.write('The paragraph that we have: ' + str);
var array = str.split(' ');
for (var i = 0; i < array.length; i++) {
	while (array[i] == 'animal'){
		array[i] = '******'
	}
	while (array[i]=='animals'){
		array[i]= '*******'
	}
}
var str = array.join(' ');    
document.write('The paragraph that we have done : ' + str);
//--------------------------------------------------------------------------
