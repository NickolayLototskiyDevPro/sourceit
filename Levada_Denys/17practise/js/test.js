describe ('Проверка на простое число', function () {
	it ('17', function () {
		assert.equal (checkSimple(17), true)
	});
	it ('1', function () {
		assert.equal (checkSimple(1), false)
	});
	it ('12', function () {
		assert.equal (checkSimple(12), false)
	});
	it ('0.1', function () {
		assert.equal (checkSimple(0.1), false)
	});
	it ('-1', function () {
		assert.equal (checkSimple(-1), false)
	});
	it ('str', function () {
		assert.equal (checkSimple('str'), false)
	});
	it ("'123'", function () {
		assert.equal (checkSimple('123'), false)
	});
	it ('[1,2,3]', function () {
		assert.equal (checkSimple([1,2,3]), false)
	});
});