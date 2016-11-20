'use strict'

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

    let uniqueId = 1;

    function onClearHandler() {

      $('input').val('');
      $('.addUser').remove();
      $('#name').css('color','black');

      return uniqueId = 1;
};

    function onValidateHandler() {
	    
	let name = $('#name').val();
    	
	let regexp = $('#regexp').val();

    regexp = new RegExp(regexp);

	let tmpName = name.search(regexp);

        if (tmpName >= 0) {

	       $('#name').css('color','green');

        }

         else {
            
           $('#name').css('color','red');
        }
};
    
    function onAddHandler() {

        let name = $('#name').val();
        let regexp = $('#regexp').val();

        $('<div class="addUser">').appendTo("#childValidateForm");
        $('<input type="text" class="addUser" size="2" disabled>').attr('value',"ID - " +uniqueId++).appendTo('#childValidateForm');
        $('<input type="text" class="addUser" disabled>').attr('value', name).appendTo('#childValidateForm');
        $('<input type="text" class="addUser" disabled>').attr('value', regexp).appendTo('#childValidateForm');
    };