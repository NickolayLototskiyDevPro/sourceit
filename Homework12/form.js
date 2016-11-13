if(window.addEventListener){
	window.addEventListener('load', init, false);
}else if(window.attachEvent){
	window.attachEvent('onload', init);
}

//event handlers form elements

function init(){
	regform.firstname.onchange = firstnameOnChange;
	regform.secondname.onchange = secondnameOnChange;
	regform.email.onchange = emailOnChange;
	regform.usertel.onchange = userTelOnChange;
	regform.onsubmit = onsubmitHandler;
}

//check value in element 

function validate(elem, regex){
	var rezult = elem.value.search(regex);
	if(rezult == -1){
		elem.className = 'invalid'
		console.log('inv');
	}else{
		elem.className = 'valid';
		console.log('val');
	}
}

//event handlers for change value in elements

function firstnameOnChange(){
	var regex = /([a-zA-Z])/;
	validate(this,regex);
} 

function secondnameOnChange(){
	var regex = /([a-zA-Z])/;
	validate(this,regex);
}

function emailOnChange(){
	var regex = /\b[a-z]+@[a-z]+\.[a-z]{2,3}\b/i;
	validate(this,regex);
}

function userTelOnChange(){
	var regex = /^\(?([0-9]{3})\)?[-]?([0-9]{2})[-]?([0-9]{2})$/;
	validate(this,regex);
}

//event to submit the form
function onsubmitHandler(){
	var invalid = false;

	for(var i = 0; i<regform.elements.length; i++){
		var e = regform.elements[i];

		if(e.type=='text'&& e.onchange){
			e.onchange();
			if(e.className == 'invalid'){
				invalid = true;
			}
		}
	}

	if(invalid){
		alert('Form filled not right');
	return false;
	}
}
