var Node = function(id, value, parentId, childrenIds) {
  this.id = id;
  this.value = value;
  this.parentId = parentId;
  this.childrenIds = childrenIds;
}

var rootNode = new Node(0, 'Root', null, [1,2]);

var node1 = new Node(1, 'Node 1', 0, [3, 4]);
var node2 = new Node(2, 'Node 2', 0, [5]);
var node3 = new Node(3, 'Node 3', 1, [8]);
var node4 = new Node(4, 'Node 4', 1, [6, 7]);
var node5 = new Node(5, 'Node 5', 2, []);
var node6 = new Node(6, 'Node 6', 4, []);
var node7 = new Node(7, 'Node 7', 4, []);
var node8 = new Node(8, 'Node 8', 3, []);

var arrNodes = [rootNode, node2, node3, node4, node5, node7, node8, node1, node6];
var currentNode = new Node(null, null, [0], null);

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


var objTree = [];

function sortNodes (arrNodes1, arrNodes2) {
  return arrNodes1.id - arrNodes2.id;
};

function createObjTree () {

  arrNodes.sort(sortNodes);
  console.log(arrNodes);

  for (var i = 1; i < arrNodes.length; i++) {
  arrNodes[arrNodes[i].parentId].childrenIds.push(arrNodes[i]);
  };
  objTree.push(arrNodes[0]);
};

createObjTree();

console.log(objTree);
console.log(JSON.stringify(objTree, null, '\t') );