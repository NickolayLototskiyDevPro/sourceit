class UsersInputs {
	constructor(id, value, regex) {
	this.value = value;
	this.regex = regex;
	this.id = id;
	}

	showRez(res) {
	let checked = document.createElement('p');
	checked.innerText = res;
	$(checked).insertAfter('#' + this.id);
	$('#' + this.id).toggleClass(res.toLowerCase() );
	}

	validate() {
	let regexSplitted = this.regex.split('/');
	regexSplitted = new RegExp(regexSplitted[1], regexSplitted[2]);

	let res = regexSplitted.test(this.value) ? 'Valid' : 'Invalid';
	this.showRez(res);
	}
}

let userInputs = [];

$('#add').on('click', function() {
	let id = 'input' + userInputs.length;
	let value = $('#mainInput').val();
	let regex = $('#regEx').val();

	let elem = document.createElement('input');

	elem.value = value + ' -> ' + regex;
	elem.id = id;
	elem.type = 'text';
	elem.disabled = true;

	$('#results').prepend(elem);

	userInputs.push(new UsersInputs(id, value, regex));
});
	
$('#validate').on('click', function() {
	userInputs[userInputs.length - 1].validate();
});

$('#clear').on('click', function() {
	userInputs = [];
	$('#results').empty();
});