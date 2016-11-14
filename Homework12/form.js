// Check browser platforms instead of try use properties of window.
if(window.addEventListener){
	window.addEventListener('load', init, false);
}else if(window.attachEvent){
	window.attachEvent('onload', init);
}

//event handlers form elements
// Cool! But unfortunately you need rework it. We need use ES6 style.
function init(){
	regform.firstname.onchange = firstnameOnChange;
	regform.secondname.onchange = secondnameOnChange;
	regform.email.onchange = emailOnChange;
	regform.usertel.onchange = userTelOnChange;
	regform.onsubmit = onsubmitHandler;
}

//check value in element 

function validate(elem, regex){
	var rezult = elem.value.search(regex);// Result - not 'Rezult'
	if(rezult == -1){
		elem.className = 'invalid'
		console.log('inv');// it is not to be there! Keep logging info locally 
	}else{
		elem.className = 'valid';
		console.log('val');
	}
}

//event handlers for change value in elements
// A lot of duplicated code. 
function firstnameOnChange(){
	var regex = /([a-zA-Z])/;// Use constant. Insert to globals.
	validate(this,regex);
} 

function secondnameOnChange(){
	var regex = /([a-zA-Z])/;// Use constant. Insert to globals.
	validate(this,regex);
}

function emailOnChange(){
	var regex = /\b[a-z]+@[a-z]+\.[a-z]{2,3}\b/i;// Use constant. Insert to globals.
	validate(this,regex);
}

function userTelOnChange(){
	var regex = /^\(?([0-9]{3})\)?[-]?([0-9]{2})[-]?([0-9]{2})$/;// Use constant. Insert to globals.
	validate(this,regex);
}

//event to submit the form
function onsubmitHandler(){
	var invalid = false;

	for(var i = 0; i<regform.elements.length; i++){// Do you hate whitespaces after less than sign?
		var e = regform.elements[i];

		if(e.type=='text'&& e.onchange){
			e.onchange();
			if(e.className == 'invalid'){
				invalid = true;
			}
		}
	}

	if(invalid){
		alert('Form filled not right');// It is not thats required in HW
	return false;
	}
}
