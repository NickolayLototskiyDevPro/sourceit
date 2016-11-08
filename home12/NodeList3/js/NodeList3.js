 'use strict';

  function CreateNode(data, parentNode) {    //constructor
    if (parentNode) {
      this.upLink = parentNode;
      if (!parentNode.downLink) parentNode.downLink = [];
      parentNode.downLink.push(this);
    } else this.upLink = null;             //root node
    this.data = data;
    this.downLink = null;
  }

  CreateNode.prototype.revNodeList = function(func) {     //pass string to func
    var str = '';
    str += 'data: ' + this.data;
    str += ', upLink: ' + (this.upLink && this.upLink.data); //null or upLink.data
    str += ', downLink: ';
    if (this.downLink) for (var i = 0; i < this.downLink.length; i++) { 
      str += this.downLink[i].data + ' '; }
    else str += this.downLink;
    func(str);

    if (this.downLink) {
      for (var i = 0; i < this.downLink.length; i++) {
        this.revNodeList.call(this.downLink[i], func);
      }
    }
  };

  function NodeListJSON(data, parentNode) {
    CreateNode.apply(this, arguments);
  }

  NodeListJSON.prototype = Object.create(CreateNode.prototype);
  NodeListJSON.constructor = NodeListJSON;

  NodeListJSON._nodeCount = 1;
  NodeListJSON._tempJSONtoObject = {};


  NodeListJSON.prototype.toJSON = function() {
    this._nodeId = NodeListJSON._nodeCount;

    return {
      nodeId: NodeListJSON._nodeCount++,
      data: this.data,
      upLinkId: this.upLink && this.upLink._nodeId, //null or upLink._nodeId
      downLink: this.downLink
    };
  };

  function ParseJSONtoNodeList(JSONstr) { //constructor

    var obj = JSON.parse(JSONstr);
    // console.log(obj);

    var tempJSONtoObject = {};

    function createNodeArray(node) {
      node.__proto__ = Object.create(CreateNode.prototype);

      tempJSONtoObject[node.nodeId] = node;

      if (node.downLink)  for (var i = 0; i < node.downLink.length; i++) {
        createNodeArray(node.downLink[i]);
      }
    }

    createNodeArray(obj);
    // console.log(tempJSONtoObject);

    function createUpLink(node) {
      if (node.upLinkId) { node.upLink = tempJSONtoObject[node.upLinkId];}
      if (node.downLink)  for (var i = 0; i < node.downLink.length; i++) {
        createUpLink(node.downLink[i]);
      }
    }

    createUpLink(obj);

    function deleteIds(node) {
      delete node.upLinkId;
      delete node.nodeId;
      if (node.downLink) for (var i = 0; i < node.downLink.length; i++) {
        deleteIds(node.downLink[i]);
      }
    }

    deleteIds(obj);

    console.log(obj);

    this.data = obj.data;
    this.upLink = null;
    this.downLink = obj.downLink;
  }

  ParseJSONtoNodeList.prototype = Object.create(CreateNode.prototype);
  ParseJSONtoNodeList.constructor = ParseJSONtoNodeList;
