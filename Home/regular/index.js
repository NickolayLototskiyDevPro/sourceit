
$("#buttonSubm").click(function () {
    let registration = function(locator, regex){
        let meen = $(locator).val();
        let reg = meen.match(regex);
            if(reg !== null){
                $(locator).css("border-color", "green");
            }else{
                $(locator).css("border-color", "red");
            }
    };
      registration("#name", /\D\w+[^W 0-9\.\,\!\"\?\;\:\@\#\$]/ig);
      registration("#sName", /\D\w+[^W 0-9\.\,\!\"\?\;\:\@\#\$]/ig); 
      registration("#eMail", /\w+\@\w+\.\w{2,3}\b/ig); 
      registration("#number", /\d\d\d\b\-\d\d\b\-\d\d\b/ig);  
}
)
 