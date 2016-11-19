'use strict'

$(document).ready(function(){


$("#clear").click(function(){ 
$("#name").val(''); 
$("#sname").val(''); 
$("#tel").val(''); 
$("#email").val(''); 
$("#comment").val(''); 
$("#quantity").val(''); 
}); 


$('#validation').click(function(){ 

var name = $('#name').val(); 
var sname = $('#sname').val(); 
var tel = $('#tel').val(); 
var email = $('#email').val(); 



var regexname = /[a-zA-z]/; 
var regexsname = /[a-zA-z]/i;
var regexstel = /^\(?([0-9+]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
var regexsemail = /\b[a-z0-9_]+@[a-z]+\.[a-z]{2,3}\b/i; 

 

if( result = name.match(regexname)) {
	$("#name").css("border","solid 2px green");
} else {$("#name").css("border","solid 2px red");}

if( result = sname.match(regexsname)) {
	$("#sname").css("border","solid 2px green");
} else {$("#sname").css("border","solid 2px red");}

if( result = email.match(regexsemail)) {
	$("#email").css("border","solid 2px green");
} else {$("#email").css("border","solid 2px red");alert('Wrong e-mail! example: obama@ukr.net');}

if( result = tel.match(regexstel)) {
	$("#tel").css("border","solid 2px green");
} else {$("#tel").css("border","solid 2px red");alert('Incorrcet phone number! example : +380666208454');}


}); 


});
