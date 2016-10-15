function Node(value, parent){
	this.value = value;
	this.parent = parent;
	this.children = []; 

	this.hasParent = function(){
		if(this.parent == undefined || this.parent == null){
			return false;
		}else{
			return true;
		}
	}

	this.getParent = function(){
		if(this.hasParent()){
			return this.parent;
		}else{
			alert('This node is head');
		}
	}

	this.getValue = function(){
		return this.value;
	}

	this.getChildrenCount = function(){
		return this.children.length;
	}

	this.setChild = function(value){
		this.children.push(new Node(value, this));
	}

	this.getChild = function(index){
		if(index>this.children.length-1){
			alert('This child is not exist');
		}else{
			return this.children[index];
		}
	}
}

var head = new Node(34, null);
console.log(head.hasParent());
console.log(head.getParent());
console.log(head.getValue());
console.log(head.getChildrenCount());
head.setChild(45);


var firstChild = head.getChild(0);
console.log(firstChild.hasParent());
