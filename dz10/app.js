// This is not ES6  style. Use ES6.
var name, secondName, email, telephone, tmpEmail, tmpTelephone;

clear.onclick = function() {
    // Use ids instead of class names
    // a lot of duplicated code.
      $('.inputName').val('');
      $('.inputSecondName').val('');
      $('.inputEmail').val('');
      $('.inputTelephone').val('');
    };

submit.onclick = function() {
    // Use ids instead of class names
    // a lot of duplicated code.
     name = $('.inputName').val();
     secondName = $('.inputSecondName').val();
     email = $('.inputEmail').val();
     telephone = $('.inputTelephone').val();
     
tmpEmail = email.search(/\w[a-zA-Z]{1,}\w[@]{1}\w[a-zA-Z]{1,}\.\w[a-z]{1,3}/ig);

    if (tmpEmail >= 0){

	text3.style.color = 'green';// If you need use 100500 times green? What will you do?
    tmpEmail = true;
    }
    
    else {

         text3.style.color = 'red';// The same with green!
         tmpEmail = false;
    }

    setTimeout("text3.style.color = 'black'", 2000);// WTF???

tmpTelephone= telephone.search(/\d{3}\-\d{2}\-\d{2}/g);
     
    if (tmpTelephone >= 0){

	text4.style.color = 'green';
    tmpTelephone = true;
    }
    
    else {
         
         text4.style.color = 'red';
         tmpTelephone = false;
    }

    setTimeout("text4.style.color = 'black'", 2000);// WTF???
    // Keep debug functionality away from production code.
    console.log(tmpEmail);
    console.log(tmpTelephone);
};