// It is not ES6 style. Please create class with methods instead of function with functions.
// You have a lot of duplicated functions.
// Please rework this
// General comment must be one return from each of your method! Multiple returns is not good style.


const regExpStr = /^[A-z]{1,}$/;
const regExpEmail = /^[A-z,0-9]{1,}@[A-z,0-9]{1,}.[A-z]{2,3}$/;
const regExpNum = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;


class CheckForm {
    constructor() {
        const regExpObj = {
            name: regExpStr,
            secondName: regExpStr,
            email: regExpEmail,
            telNumber: regExpNum,
        }

        this.check = function() {
            let regExObjPropNames = Object.getOwnPropertyNames(regExpObj);
            let regExObjValues = Object.values(regExpObj);

            for (let i = 0; i < regExObjValues.length; i++) {
                regExObjValues[i].test($("#" + regExObjPropNames[i]).val()) ?
                    $("#" + regExObjPropNames[i]).removeClass('red').addClass('green') :
                    $("#" + regExObjPropNames[i]).removeClass('green').addClass('red');
            }


                /////---------jquery way-------------\\\\

            // $.each(regExpObj, function(locator, regex) {
            //     regex.test($("#" + locator).val()) ? $("#" + locator).removeClass('red').addClass('green') :
            //         $("#" + locator).removeClass('green').addClass('red');
            // });
        }
    }
}

var validateForm = new CheckForm();
//A lot of code duplicates! Maybe worse create one function thats would recieve jquery element and regex?