'use strict'
var str;
$("#submit").click(function(){
    var str = $("#name").val();
    var name = str.match(/\D\w+[^W 0-9]/ig);
    if(name !== null){
        $("#name").css("border-color", "green");
    }else{
    $("#name").css("border-color", "red");
}

str = $("#sName").val();
    var name = str.match(/\D\w+[^W 0-9]/ig);
    if(name !== null){
        $("#sName").css("border-color", "green");
    }else{
    $("#sName").css("border-color", "red");
}
str = $("#sName").val();
    var name = str.match(/\D\w+[^W 0-9]/ig);
    if(name !== null){
        $("#sName").css("border-color", "green");
    }else{
    $("#sName").css("border-color", "red");
}
str = $("#eMail").val();
    var name = str.match(/\w+\@\w+\.\w{2,3}\b/ig);
    if(name !== null){
        $("#eMail").css("border-color", "green");
    }else{
    $("#eMail").css("border-color", "red");
}
str = $("#number").val();
    var name = str.match(/\d\d\d\b\-\d\d\b\-\d\d\b/ig);
    if(name !== null){
        $("#number").css("border-color", "green");
    }else{
    $("#number").css("border-color", "red");
}
})