// It is not ES6 style. Please create class with methods instead of function with functions.
// You have a lot of duplicated functions.
// Please rework this
// General comment must be one return from each of your method! Multiple returns is not good style.

const regExpStr = /^[A-z]{1,}$/;
const regExpEmail = /^[A-z]{1,}@[A-z]{1,}.[A-z]{2,3}$/;
const regExpNum = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

class SubmitForm {
    constructor() {

    }

    checkName() {
        let str = $("#name").val();
        regExpStr.test(str) ? $("#name").css('border', '2px solid green') : $("#name").css('border', '2px solid red');
    }

    checkSecondName() {
        let str = $("#secondName").val();
        regExpStr.test(str) ? $("#secondName").css('border', '2px solid green') : $("#secondName").css('border', '2px solid red');
    }

    checkEmail() {
        let str = $("#email").val();
        regExpEmail.test(str) ? $("#email").css('border', '2px solid green') : $("#email").css('border', '2px solid red');
    }

    checkNumber() {
        let str = $("#telNumber").val();
        regExpNum.test(str) ? $("#telNumber").css('border', '2px solid green') : $("#telNumber").css('border', '2px solid red');
    }

    checkAll() {
        this.checkName();
        this.checkSecondName();
        this.checkEmail();
        this.checkNumber();
    }





}


var submitForm = new SubmitForm();

function checkForm() {
    submitForm.checkAll();
}

//A lot of code duplicates! Maybe worse create one function thats would recieve jquery element and regex?