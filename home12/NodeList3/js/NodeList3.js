 'use strict';

  function NodeList(data, parentNode) {
    if (parentNode) {
      this.upLink = parentNode;
      if (!this.upLink.downLink) this.upLink.downLink = [];
      this.upLink.downLink.push(this);
    } else this.upLink = null;
    this.data = data;
    this.downLink = null;
  }

  NodeList.prototype.revNodeList = function(func) {
    var str = '';
    str += 'data: ' + this.data + ', upLink: ';
    if (this.upLink)  str += this.upLink.data; else str += this.upLink;
    str += ', downLink: ';
    if (this.downLink) for (var i = 0; i < this.downLink.length; i++) { str += this.downLink[i].data + ' '; }
    else str += this.downLink;
    func(str);

    if (this.downLink) {
      for (var i = 0; i < this.downLink.length; i++) {
        this.revNodeList.call(this.downLink[i], func);
      }
    }
  };

  function NodeListJSON(data, parentNode) {
    NodeList.apply(this, arguments);
  }

  NodeListJSON.prototype = Object.create(NodeList.prototype);
  NodeListJSON.constructor = NodeListJSON;

  NodeListJSON._nodeCount = 1;
  NodeListJSON._tempJSONtoObject = {};


  NodeListJSON.prototype.toJSON = function() {
    this._nodeId = NodeListJSON._nodeCount;

    var JSobject = {};
    JSobject.nodeId = NodeListJSON._nodeCount++;
    JSobject.data = this.data; 
    if (this.upLink) JSobject.upLinkId = this.upLink._nodeId;
    else JSobject.upLinkId = null;
    JSobject.downLink = this.downLink;

    return JSobject;
  };

  function ParseJSONtoNodeList(JSONstr) {
    //parser

    var obj = JSON.parse(JSONstr);
    // console.log(obj);

    var tempJSONtoObject = {};

    function createArrayNode(node) {
      node.__proto__ = Object.create(NodeList.prototype);
      tempJSONtoObject[node.nodeId] = node;

      if (node.downLink)  for (var i = 0; i < node.downLink.length; i++) {
        createArrayNode(node.downLink[i]);
      }
    }

    createArrayNode(obj);
    // console.log(tempJSONtoObject);

    function createUpLink(node) {
      if (node.upLinkId) { node.upLink = tempJSONtoObject[node.upLinkId];}
      if (node.downLink)  for (var i = 0; i < node.downLink.length; i++) {
        createUpLink(node.downLink[i]);
      }
    }

    createUpLink(obj);

    function deleteId(node) {
      delete node.upLinkId;
      delete node.nodeId;
      if (node.downLink) for (var i = 0; i < node.downLink.length; i++) {
        deleteId(node.downLink[i]);
      }
    }

    deleteId(obj);

    console.log(obj);

    this.data = obj.data;
    this.upLink = null;
    this.downLink = obj.downLink;
  }

  ParseJSONtoNodeList.prototype = Object.create(NodeList.prototype);
  ParseJSONtoNodeList.constructor = ParseJSONtoNodeList;






