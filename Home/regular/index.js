// We need to use ES6 style. You style is not this!
'use strict'
// Why do you use global variable?
// Make decomposition. Etc - create one or more validate function. 
// Now you have a lot of repeat code in your app.
// If you need validate 100500 fields what will you do?
var str;
$("#submit").click(function(){
    var str = $("#name").val(); // This line everywhere.
    var name = str.match(/\D\w+[^W 0-9]/ig);// Insert to constant. Multiple repeat!
    if(name !== null){
        $("#name").css("border-color", "green");
    }else{
    $("#name").css("border-color", "red");
}

str = $("#sName").val();// This line everywhere.
    var name = str.match(/\D\w+[^W 0-9]/ig);// Insert to constant.Multiple repeat.
    if(name !== null){
        $("#sName").css("border-color", "green");
    }else{
    $("#sName").css("border-color", "red");
}
str = $("#sName").val();// This line everywhere.
    var name = str.match(/\D\w+[^W 0-9]/ig);// Insert to constant.Multiple repeat.
    if(name !== null){
        $("#sName").css("border-color", "green");
    }else{
    $("#sName").css("border-color", "red");
}
str = $("#eMail").val();// This line everywhere.
    var name = str.match(/\w+\@\w+\.\w{2,3}\b/ig);// Insert to constant.Multiple repeat.
    if(name !== null){
        $("#eMail").css("border-color", "green");
    }else{
    $("#eMail").css("border-color", "red");
}
str = $("#number").val();// This line everywhere.
    var name = str.match(/\d\d\d\b\-\d\d\b\-\d\d\b/ig);// Insert to constant.Multiple repeat.
    if(name !== null){
        $("#number").css("border-color", "green");
    }else{
    $("#number").css("border-color", "red");
}
})