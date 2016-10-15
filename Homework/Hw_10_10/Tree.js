var Node = function(id, parentId, value){
  this.id = id;
  this.parentId = parentId;
  this.value = value;
}

var rootNode = new Node(0, null, 'Root');

var node1 = new Node(1, 0, 'Node 1');
var node2 = new Node(2, 0, 'Node 2');
var node3 = new Node(3, 1, 'Node 3');
var node4 = new Node(4, 1, 'Node 4');
var node5 = new Node(5, 2, 'Node 5');
var node6 = new Node(6, 4, 'Node 6');
var node7 = new Node(7, 4, 'Node 7');

var arrNodes = [rootNode, node1, node2, node3, node4, node5, node6, node7];
var currentNode = new Node(null, null, null);

function createTree (currentNode) {

  var  elem = '';
  var ul = '';

  for (var i = 0; i < arrNodes.length; i++) {
  if (currentNode.id === arrNodes[i].parentId){
  elem += '<li>' + arrNodes[i].value + createTree(arrNodes[i]) + '</li>';
  }  
  }
  
  if(elem != ''){
  ul = '<ul>' + elem + '</ul>';
  console.log(ul);}
  return ul;
  
}


var treeDiv = document.getElementById('treeDiv');
treeDiv.innerHTML = createTree(currentNode);