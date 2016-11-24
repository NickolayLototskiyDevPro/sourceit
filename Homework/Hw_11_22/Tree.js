let arrMenu = [{id: 1, text: 'Rodents', parentId: '', childrenIds:[2, 5, 11, 12]},
{id: 2, text: 'Mice', parentId: '1', childrenIds:''},
{id: 8, text: 'Birds', parentId: '', childrenIds:[4, 6]},
{id: 4, text: 'Parrots', parentId: '8', childrenIds:[7, 3]},
{id: 5, text: 'Hamsters', parentId: '1', childrenIds:''},
{id: 6, text: 'Canaries', parentId: '8', childrenIds:''},
{id: 7, text: 'Dry food', parentId: '4', childrenIds:''},
{id: 3, text: 'Vitamines', parentId: '4', childrenIds:''},
{id: 9, text: 'Cats', parentId: '', childrenIds:''},
{id: 10, text: 'Dogs', parentId: '', childrenIds:''},
{id: 11, text: 'Rats', parentId: '1', childrenIds:''},
{id: 12, text: 'Chinchillas', parentId: '1', childrenIds:''}
];

let roots = [];

let findRoots = (arrMenu) => {
  for(let i = 0; i < arrMenu.length; i++) {
    if(!arrMenu[i].parentId) {
    roots.push(arrMenu[i]);
    };
  };
  return roots;
};

findRoots(arrMenu);

let createBranches = (currentNode) => {
  
  if(currentNode.childrenIds !== ''){
  let children = [];
 
  for(let i = 0; i < currentNode.childrenIds.length; i++) {
  for(let j = 0; j < arrMenu.length; j++) {

  if(arrMenu[j].id === currentNode.childrenIds[i]){   
    children.push(arrMenu[j]);
    createBranches(children[children.length - 1]);
  };

  };
  };
  currentNode.childrenIds = children;
  };
};

let formTree = (roots) => {
  for(let i = 0; i < roots.length; i++){
  createBranches(roots[i]);
  };
  return roots;
};

let rawMenu = formTree(roots);

let menu = JSON.stringify(rawMenu, null, '\t');
console.log(menu);

let createUL = (currentNode) => {
  let  elem = '';
  let ul = '';

  for (let i = 0; i < currentNode.length; i++) {

  if(currentNode[i].nodes !== '') {
    elem += '<li>' + currentNode[i].text + createUL(currentNode[i].childrenIds) + '</li>';
  } else {
    elem += '<li>' + currentNode[i].text + '</li>';
  };

  };
  if(elem != ''){
    ul = '<ul>' + elem + '</ul>';
  };
  return ul;
};

let tree = createUL(rawMenu);
$('#main-nav').append(tree);

$('#main-nav > ul').dropotron({
baseZIndex: 1000,
menuClass: 'dropotron',
expandMode: 'click',
hoverDelay: 150,
hideDelay: 250,
openerClass: 'opener',
openerActiveClass: 'active',
submenuClassPrefix: 'level-',
mode: 'fade',
speed: 'fast',
easing: 'swing',
alignment: 'left' 
});