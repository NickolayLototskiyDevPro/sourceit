"use strict";

$("#clear_button").click(function () {
    $("#name_area").val('').css("border","1px solid grey");
    $("#second_name_area").val('').css("border","1px solid grey");
    $("#email_area").val('').css("border","1px solid grey");
    $("#telephone_area").val('').css("border","1px solid grey");

});
////////////////////////////////////////////////////////////////////////

var inspect_values = function (obj) {

    var name = obj.first_name.value;
    var second_name = obj.second_name.value;
    var email = obj.email.value;
    var telephone = obj.telephone.value;

    var name_pattern = /([a-zA-Z])/;
    var second_name_pattern = /([a-zA-Z])/;
    var email_pattern =/\b[a-z0-9_]+@[a-z]+\.[a-z]{2,3}\b/i;
    var telephone_pattern = /^\(?([0-9+]{4})\)?[-]?([0-9]{2})[-]?([0-9]{2})$/;


    var test_name = name_pattern.test(name);
    var test_second_name = second_name_pattern.test(second_name);
    var test_email = email_pattern.test(email);
    var test_telephone =telephone_pattern.test(telephone);

    if (test_email == true){
        $("#email_area").css("border","solid 3px green");
    }else{
        $("#email_area").css("border","solid 3px red");
    };
    if (test_name == true){
        $("#name_area").css("border","solid 3px green");
    }else {
        $("#name_area").css("border","solid 3px red");
    }
    if (test_second_name == true){
        $("#second_name_area").css("border","solid 3px green");
    }else {
        $("#second_name_area").css("border","solid 3px red");
    }
    if (test_telephone == true){
        $("#telephone_area").css("border","solid 3px green");
    }else {
        $("#telephone_area").css("border", "solid 3px red");
    };
    if (test_email == true  && test_name == true  && test_second_name == true  && test_telephone == true){
        alert("Registration complite");
    };

};









