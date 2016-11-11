function submit() {
    checkName();
    checkSecondName()
    checkEmail();
    checkNumber();
}

function checkName() {
    let str = $("#name").val();
    let regExp = /^[A-z]{1,}$/;
    if (regExp.test(str)) return $("#name").css('border', '2px solid green');
    else return $("#name").css('border', '2px solid red');
}

function checkSecondName() {
    let str = $("#secondName").val();
    let regExp = /^[A-z]{1,}$/;
    if (regExp.test(str)) return $("#secondName").css('border', '2px solid green');
    else return $("#secondName").css('border', '2px solid red');
}

function checkEmail() {
    let str = $("#email").val();
    let regExp = /^[A-z]{1,}@[A-z]{1,}.[A-z]{2,3}$/;
    if (regExp.test(str)) return $("#email").css('border', '2px solid green');
    else return $("#email").css('border', '2px solid red');
}

function checkNumber() {
    let str = $("#telNumber").val();
    let regExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/
    if (regExp.test(str)) return $("#telNumber").css('border', '2px solid green');
    else return $("#telNumber").css('border', '2px solid red');
}