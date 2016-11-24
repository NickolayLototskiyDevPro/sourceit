'use strict'

function LinkedList() {

  this.head = null;
  this.id;
  this.value;

};

LinkedList.prototype.append = function(value) {

  let newNode = {
    data: value,
    next: null
  };

  if (this.isEmpty()) {
    this.head = newNode;
    return;
  };

  let current = this.head;

  while (current.next !== null) {
    current = current.next;
  };

  current.next = newNode;
};

LinkedList.prototype.remove = function(value) {

  if (this.head.data === value) {
    this.head = this.head.next;
    return;
  }

  let prev = null;
  let curr = this.head;

  while (curr.data !== value) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;

};

LinkedList.prototype.size = function() {

  let current = this.head;
  let count = 0;

  while (current !== null) {
    count++;
    current = current.next;
  };

  return console.log(count);

};

LinkedList.prototype.isEmpty = function() {

	let status;

	if(this.head === null){

		status = true;

		return true;
	}

	else {

		status = false;

		return false;
	}

	console.log(status);
};

LinkedList.prototype.showAll = function() {

  let output = '[';
  let current = this.head;

  while (current !== null) {
    output += current.data;
    if (current.next !== null) {
      output += ', ';
    }
    current = current.next;
  }

  output += ']';
  
  console.log(output);

};

let list = new LinkedList();

list.isEmpty();

list.append(10);
list.append(15);
list.append(20);
list.append(25);

list.showAll();
list.size();

list.remove(25);
list.showAll();
list.size();