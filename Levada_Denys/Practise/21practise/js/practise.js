class Item {
	constructor (value) {
		this.value = value;
		this.id;
		this.nextId;
	}

	push () {

	}
}

class LinkedList {
	constructor() {
		this.values = [];
	}

	push(item){
		let itemLast = this.getLastItem();
		if (itemLast) {
			itemLast.nextId = itemLast.id + 1;
			item.id = itemLast.nextId;
		} else {
			item.id = 1;
			item.nextId = null;
		}
		this.values.push(item);
	}

	getLastItem() {
		for (var i = 0; i < this.values.length; i++) {
			if (!(this.values[i].nextId)){
				return this.values[i] || 0;
			}
		}
		return null;
	}
}
