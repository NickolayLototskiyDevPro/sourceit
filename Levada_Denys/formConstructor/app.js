class FormConstructor {
    constructor() {
        this.form = {};

        this.addForm = function(name, regEx) {
            let badNameCheck = '\\b' + name + '\\b';
            this.clearConstructor();

            if (!(name === '' || /^[0-9]{1,}/.test(name) || Object.keys(this.form).length === 8 || //limit exceeded
                    new RegExp(badNameCheck, 'i').test((Object.keys(this.form)).join(' ')))) { //if unique
                this.form[name] = regEx;

                let lastFormId = Object.keys(this.form).length - 1;
                let newFormId = Object.keys(this.form)[lastFormId];
                $($.parseHTML('<li><label>' + newFormId + '</label> <input type="text" id =' + newFormId +
                    '> </li>')).appendTo("#spaceReservedForForms");
            }
        }

        this.validate = function() {
            let validCount = 0;
            $.each(this.form, function(locator, regex) {
                let newReg = new RegExp(regex);

                if (newReg.test($("#" + locator).val())) {
                    $("#" + locator).removeClass('red').addClass('green');
                    validCount++;
                } else {
                    $("#" + locator).removeClass('green').addClass('red');
                }
            });
            if (validCount === Object.keys(this.form).length) return true;
        }


        this.clearConstructor = function() {
            $("#idConstructor").val('');
            $("#regExpConstructor").val('');
        }
        this.clearForm = function() {
            $("#spaceReservedForForms").html('');
            this.form = {};
        }

    }
}

let form = new FormConstructor();

let add = function() {
    form.addForm($("#idConstructor").val(), $("#regExpConstructor").val());
}

let clear = function() {
    form.clearForm();
}

let validate = function() {
    form.validate();
}