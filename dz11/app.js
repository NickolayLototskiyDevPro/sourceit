
if (window.addEventListener){

    window.addEventListener('load', init, false);
}

else if (window.attachEvent){

    window.attachEvent('onload', init);
};

function init(){

    add.onclick = onAddHandler;
    clear.onclick = onClearHandler;
    validate.onclick = onValidateHandler;

};

    function onAddHandler() {

    	let section = 1;
 		$('<div class="addUser"><p>Result: <input type="text"></p></div>').attr("id", "section" + section++).appendTo("#childValidateForm");
    };

    function onClearHandler() {

      $('input').val('');
      $('.addUser').remove();
};

    function onValidateHandler() {
	    
	let name = $('#name').val();
    	console.log(name);
    	
	let regexp = $('#regexp').val();
    	console.log(regexp);

	let tmpEmail = name.search(regexp);
		console.log(tmpEmail);

};
