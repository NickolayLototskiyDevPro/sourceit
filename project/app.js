$(document).ready(function(){
	$('#header').append(("<h1 id = 'headerText'></h1>"));
	headerText.innerText = "Hello!";
	// let sum12 = sum(1,2);
	// main.innerHTML = '<h2>$(sum12)</h2>';
	$('#footer').append(("<h1 id = 'footerText'></h1>"));
	footerText.innerText = "Copyright";

});
	action.onclick = function(){

	if(header.style.color == 'black') {

		header.style.color = 'red';
		}

	else {
		header.style.color = 'black';
		}
}

