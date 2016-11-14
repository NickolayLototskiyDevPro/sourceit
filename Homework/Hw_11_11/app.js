// This is not ES6 style. Please rework you HW in ES6 coding style. Classes and etc....
$('#signUp').click(function(){

	// It global constant. Move to global object!
	var regex = {
	firstName: (/^[A-Z]{2,30}$/i),//This line repeats below 
	lastName: (/^[A-Z]{2,30}$/i),//This line repeats above.
	mail: (/^[a-zA-Z0-9_.-]{2,30}@[a-z]{2,5}\.[a-z]{2,3}$/),// If my email server domain starts from capital letter?
	phone: (/^[0]{1}[1-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/)// The same above
	};

	$.each(regex, function(i, re) {
	if(re.test( $('#' + i).val() )) {
	$('#' + i).css({"border-color": "#228B22", "box-shadow":"0 0 10px rgba(34,139,34,0.5)"});// Insert style to constants
	} else {
	$('#' + i).css({"border-color": "#8B0000", "box-shadow":"0 0 10px rgba(139,0,0,0.5)"});// Insert style to constants
	}
	});

});


//TODO : Remove this dead code! Do not push any commented line of code! This is bad coding style!


//alternative - validation on blur

/*$('input[type="text"]').blur(function(){

	var regex = {firstName: (/^[A-Z]{2,30}$/i),
	lastName: (/^[A-Z]{2,30}$/i),
	mail: (/^[a-zA-Z0-9_.-]{2,30}@[a-z]{2,5}\.[a-z]{2,3}$/),
	phone: (/^[0]{1}[1-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/)
	};

	if(regex[this.id].test($('#' + this.id).val() )) {
	$('#' + this.id).css({"border-color": "#228B22", "box-shadow":"0 0 10px rgba(34,139,34,0.5)"});
	} else {
	$('#' + this.id).css({"border-color": "#8B0000", "box-shadow":"0 0 10px rgba(139,0,0,0.5)"});
	}
})*/