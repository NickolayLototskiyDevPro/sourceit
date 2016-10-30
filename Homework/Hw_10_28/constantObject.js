function addProperty (obj, propName, propValue) {

	Object.defineProperty(obj, propName, {
	value: propValue,
	writable: false,
	configurable: false
	});
};

var obj = {};

addProperty(obj, 'constObj', {});

//it's also possible to add constant properties
addProperty(obj.constObj, 'a', 1);
addProperty(obj.constObj, 'b', 2);

obj.constObj = null;//won't work

obj.constObj.a = 3;//won't work, 'a' = 1

console.log(obj);