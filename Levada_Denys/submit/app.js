// It is not ES6 style. Please create class with methods instead of function with functions.
// You have a lot of duplicated functions.
// Please rework this
// General comment must be one return from each of your method! Multiple returns is not good style.

function submit() {
    checkName();
    checkSecondName()
    checkEmail();
    checkNumber();
}
//A lot of code duplicates! Maybe worse create one function thats would recieve jquery element and regex? 
function checkName() {
    let str = $("#name").val();
    let regExp = /^[A-z]{1,}$/;// Insert regex to global constant, this line repeat more twice
    if (regExp.test(str)) return $("#name").css('border', '2px solid green');
    else return $("#name").css('border', '2px solid red');
}

function checkSecondName() {
    let str = $("#secondName").val();
    let regExp = /^[A-z]{1,}$/;// Insert regex to global constant, this line repeat more twice
    if (regExp.test(str)) return $("#secondName").css('border', '2px solid green');// Use brackets in if. Or use ? statement.
    else return $("#secondName").css('border', '2px solid red');
}

function checkEmail() {
    let str = $("#email").val();
    let regExp = /^[A-z]{1,}@[A-z]{1,}.[A-z]{2,3}$/;// Insert regex to global constant, this line repeat more twice
    if (regExp.test(str)) return $("#email").css('border', '2px solid green');
    else return $("#email").css('border', '2px solid red');
}

function checkNumber() {
    let str = $("#telNumber").val();
    let regExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/// Insert regex to global constant, this line repeat more twice
    if (regExp.test(str)) return $("#telNumber").css('border', '2px solid green');
    else return $("#telNumber").css('border', '2px solid red');
}