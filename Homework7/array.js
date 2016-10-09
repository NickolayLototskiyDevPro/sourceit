var str1='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nobis natus illo? Illum ullam, sunt voluptatum quaerat beatae accusantium unde, iusto dolorem, rerum maiores assumenda, tenetur porro quisquam. Cumque, blanditiis.'
var str2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nobis natus illo? Illum ullam, sunt voluptatum quaerat beatae accusantium unde, iusto dolorem, rerum maiores assumenda, tenetur porro quisquam. Cumque, blanditiis.'
var str3='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nobis natus illo? Illum ullam, sunt voluptatum quaerat beatae accusantium unde, iusto dolorem, rerum maiores assumenda, tenetur porro quisquam. Cumque, blanditiis.'
var str4='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nobis natus illo? Illum ullam, sunt voluptatum quaerat beatae accusantium unde, iusto dolorem, rerum maiores assumenda, tenetur porro quisquam. Cumque, blanditiis.'
var str5='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nobis natus illo? Illum ullam, sunt voluptatum quaerat beatae accusantium unde, iusto dolorem, rerum maiores assumenda, tenetur porro quisquam. Cumque, blanditiis.'
var str6='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nobis natus illo? Illum ullam, sunt voluptatum quaerat beatae accusantium unde, iusto dolorem, rerum maiores assumenda, tenetur porro quisquam. Cumque, blanditiis.'
var str7='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nobis natus illo? Illum ullam, sunt voluptatum quaerat beatae accusantium unde, iusto dolorem, rerum maiores assumenda, tenetur porro quisquam. Cumque, blanditiis.'
var str8='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nobis natus illo? Illum ullam, sunt voluptatum quaerat beatae accusantium unde, iusto dolorem, rerum maiores assumenda, tenetur porro quisquam. Cumque, blanditiis.'
var str9='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nobis natus illo? Illum ullam, sunt voluptatum quaerat beatae accusantium unde, iusto dolorem, rerum maiores assumenda, tenetur porro quisquam. Cumque, blanditiis.'
var str10='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nobis natus illo? Illum ullam, sunt voluptatum quaerat beatae accusantium unde, iusto dolorem, rerum maiores assumenda, tenetur porro quisquam. Cumque, blanditiis.'

var currentdate = new Date(); 
var time_before = currentdate.getTime();


var arr = [ str1, str2, str3, str4, str5, str6, str7, str8, str9, str10 ];

function long_array(arr){
	var arr_rezult = [];

	for( i = 0; i < arr.length; i++ ){
		
		arr[i] = arr[i].split(' ');
		
		for( j = 0; j < arr[i].length; j++ ){
			arr_rezult.push(arr[i][j]);
		}
	}
		
	 return arr_rezult.sort().join(' ');
}

var rez = long_array(arr);

var currentdate1 = new Date();
var time_after = currentdate1.getTime();

console.log('time for operation = ' + (time_after - time_before));
console.log(rez);
