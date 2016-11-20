function clear () {
	$("#first").val('');
	$("#second").val('');
}


function disableSecond() {
	$("#second").attr("disabled", true);
}



function validate () {

	// ax 556633
	var str = $("#first").val();
	var regExp = /^[a-z]{2}\s[1-5]{1}[0-9]{5}$/i;
	var res = '';
	console.log(str.match(regExp))
	if (str.match(regExp)){
		res = true;
		$("#second").val(res);
		return str;
	}
	res = false;
	$("#second").val(res);



	// var str = $("#first").val();
	// var regExp = /\b\d\s\w\b/i;
	// var res = '';
	// if (str.match(regExp)) {
	// 	res = true;
	// 	$("#second").val(res);
	// 	return str ;
	// }
	
	// res = false;
	// $("#second").val(res);

	// var str = $("#first").val();
	// var regExp = /[nm]ick/i;
	// var res = '';
	// if (str.match(regExp)) {
	// 	res = true;
	// 	$("#second").val(res);
	// 	return str ;
	// }
	
	// res = false;
	// $("#second").val(res);





	// var str = $("#first").val();
	// var regExp = /\d/g;
	// var arr = str.match(regExp);
	// 	if (arr === null) {
	// 	return clear();
	// }
	// var arrSum = 0;
	// for (var i = 0; i < arr.length; i++){
	// 		arrSum += +arr[i];
	// }

	// $("#second").val(arrSum);

	// var regExp = /^\d+$/i; // проверка чтоб все было только числами
	//$("#second").val(regExp.test(str));

	// var str = $("#first").val();
	// var regExp = /123/;
	// $("#second").val(regExp.test(str));

	return str
}