class Animal{
	constructor (w){
		this.weight = w;
	}
	run(){
	console.log('running')
	}
}
let cat = new Animal(30);
cat.run()