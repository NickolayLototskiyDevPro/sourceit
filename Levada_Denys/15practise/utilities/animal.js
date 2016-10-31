class Animal {
	constructor (w) {
		this.weight = w;
	}
	run () {
		console.log('Running!');
	}
}

class Cat extends Animal {
	constructor () {
		super(10);
		this.forceIsDark = true;
	}
}