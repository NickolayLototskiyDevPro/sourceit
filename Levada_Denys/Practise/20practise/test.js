describe('Проверка конструктора форм (Добавление форм)', function() {
    it('Name : asd, regEx : 123 (correct name)', function() {
        form.addForm('asd', '123');
        assert.equal('123', form.form.asd);
    });
    it('Name : as, regEx : as (correct name)', function() {
        form.addForm('as', 'as');
        assert.equal('as', form.form.as);
    });
    it('Name : a, regEx : a (correct name)', function() {
        form.addForm('a', 'a');
        assert.equal('a', form.form.a);
    });
    it('Name : q, regEx : ^asd$ (correct name)', function() {
        form.addForm('q', '^asd$');
        assert.equal('^asd$', form.form.q);
    });
    it('Name : 123, regEx : 123 (Not correct name)', function() {
        form.addForm('123', '123');
        assert.equal(false, form.form.hasOwnProperty('123'));
    });
    it('Name : 12Dog, regEx : 321 (Not correct name)', function() {
        form.addForm('12Dog', '321');
        assert.equal(false, form.form.hasOwnProperty('12Dog'));
    });
    it('Name : Dog12, regEx : \\w (correct name)', function() {
        form.addForm('Dog12', '\w');
        assert.equal('\w', form.form.Dog12);
    });
    it('Name : AAA, regEx : \\s\\w (correct name)', function() {
        form.addForm('AAA', '\s\w');
        assert.equal('\s\w', form.form.AAA);
    });
    it('Name : BBB, regEx : [A-z]{1,} (correct name)', function() {
        form.form = {};
        form.addForm('BBB', '[A-z]{1,}');
        assert.equal('[A-z]{1,}', form.form.BBB);
    });
    it('Name : CcC, regEx : ^[0-9]{1,3}$ (correct name)', function() {
        form.addForm('CcC', '^[0-9]{1,3}$');
        assert.equal('^[0-9]{1,3}$', form.form.CcC);
    });
    it('Not more then 8 forms', function() {
        form.form = {};
        let name = 'a';
        for (let i = 0; i < 9; i++) {
            form.addForm(name, '^[0-9]{1,3}$');
            name += 'a';
        }
        assert.equal(Object.keys(form.form).length, 8);
    });
});

describe('Проверка конструктора форм (Validation)', function() {
    it('Name : asd, regEx : 123, str : 123 (true)', function() {
        form.form = {};
        form.addForm('asd', '123');
        $("#asd").val('123');

        assert.equal(form.validate(), true);
    });

    it('Name : asd, regEx : 123, str: asd (false)', function() {
        form.form = {};
        form.addForm('asd', '123');
        $("#asd").val('asd');

        assert.equal(form.validate(), undefined);
    });
    it('Name : sd, regEx : [A-z]{1,3}, str: asd  (true)', function() {
        form.form = {};
        form.addForm('sd', '[A-z]{1,3}');
        $("#sd").val('asd');

        assert.equal(form.validate(), true);
    });
    it('Name : sd, regEx : [A-z]{1,3}, str: aSd  (true)', function() {
        form.form = {};
        form.addForm('sd', '[A-z]{1,3}');
        $("#sd").val('aSd');

        assert.equal(form.validate(), true);
    });
    it('Name : ssd, regEx : ^[A-z]{1,3}$, str: aSSSSd (false)', function() {
        form.form = {};
        form.addForm('ssd', '^[A-z]{1,3}$');
        $("#ssd").val('aSSSSd');

        assert.equal(form.validate(), undefined);
    });
    it('Name : sd, regEx : ^[A-z]{1,}$, str: aSSSSd (true)', function() {
        form.form = {};
        form.addForm('sd', '^[A-z]{1,}$');
        $("#sd").val('aSSSSd');

        assert.equal(form.validate(), true);
    });
    it('Name : dqwe, regEx : ^[0-9]{1,3}$, str: 057 (true)', function() {
        form.form = {};
        form.addForm('dqwe', '^[0-9]{1,3}$');
        $("#dqwe").val('057');

        assert.equal(form.validate(), true);
    });
    it('Name : dqdaswe, regEx : \\w, str: asda (true)', function() {
        form.form = {};
        $("#spaceReservedForForms").html('');
        form.addForm('dqdaswe', '\\w');
        $("#dqdaswe").val('asda');

        assert.equal(form.validate(), true);
    });
    it("Name : dqsssdaswe, regEx : \\s\\w, str: ' s' (true)", function() {
        form.form = {};
        $("#spaceReservedForForms").html('');
        form.addForm('dqsssdaswe', '\\s\\w');
        $("#dqsssdaswe").val(' s');

        assert.equal(form.validate(), true);
    });



});