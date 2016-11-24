let str = [
    { "id": "1", "val": "Dogs" },
    { "id": "2", "val": "Cats" },
    { "id": "3", "val": "Retriever", "parentId": "1" },
    { "id": "4", "val": "Bulldog", "parentId": "1" },
    { "id": "5", "val": "Husky", "parentId": "1" },
    { "id": "6", "val": "Sphynx", "parentId": "2" },
    { "id": "7", "val": "Persian", "parentId": "2" },
    { "id": "8", "val": "Scotish", "parentId": "2" },
    { "id": "9", "val": "Retriever Food", "parentId": "3" },
    { "id": "10", "val": "Retriever Clothes", "parentId": "3" },
    { "id": "11", "val": "Bulldog muzzle`s", "parentId": "4" },
    { "id": "12", "val": "Husky Songs", "parentId": "5" },
    { "id": "13", "val": "Sphynx beds", "parentId": "6" },
    { "id": "14", "val": "Persian food", "parentId": "7" },
    { "id": "15", "val": "Persian toys", "parentId": "7" },
    { "id": "16", "val": "Scotish whisky", "parentId": "8" },
    { "id": "17", "val": "Scotish food", "parentId": "8" }
];


// let strFromJson = JSON.parse($.ajax("./domMenu.json"));   // error - cross-origin request. google plugin doesn`t works.
// console.log(strFromJson);

let dom = [];

function buildDom(domJson, parent) {
    for (var i = 0; i < domJson.length; i++) {
        if (!domJson[i].parentId && !parent) {
            dom.push(domJson[i]);
            let papa = dom[dom.length - 1];
            papa.children = [];
            buildDom(domJson, papa);
        }
        if (!!(parent) && domJson[i].parentId === parent.id) {
            parent.children.push(domJson[i]);
            let child = parent.children[parent.children.length - 1];
            child.children = [];
            buildDom(domJson, child);

        }
    }
}



buildDom(str);
console.log(dom);

function buildMenu(domMenu, parent) {
    for (let i = 0; i < domMenu.length; i++) {

        let current_li = document.createElement('li');
        let current_div = document.createElement('div');
        current_div.id = domMenu[i].id;
        current_div.innerHTML = domMenu[i].val;
        current_li.appendChild(current_div);
        parent.appendChild(current_li);
        if (!!domMenu[i].children[0]) {
            let current_ul = document.createElement('ul');
            current_ul.id = 'subMenu: ' + domMenu[i].id;
            parent.appendChild(current_ul);

            let children = domMenu[i].children;

            buildMenu(children, document.getElementById(current_ul.id));
        }

    }
}


let menu = document.createElement('ul');
menu.id = 'menu';
document.getElementById('wrapper').appendChild(menu);



buildMenu(dom, document.getElementById(menu.id));