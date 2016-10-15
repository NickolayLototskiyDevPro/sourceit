function obj(value, name){

	this.new_pointer=value;
	this.name=name;
}

var 

	obj3=new obj(null, '3'),
	obj4=new obj(null, '4'),

	obj2=new obj([obj3, obj4], 'nod'),

	obj1=new obj(obj2, '1'),

	obj0=new obj(obj1, '0');