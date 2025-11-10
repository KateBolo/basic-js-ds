const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class treeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
    this.root = null
  }
  root() {
    return this.root;
  }

  add(data) {
    const node = new treeNode(data)
    if (!this.root) {
      this.root = node;
      return
    }
    let currentNode = this.root;

    while (currentNode){
    if (data < currentNode.data) {
      !currentNode.left? currentNode.left = data : currentNode = currentNode.left
    }
    if (data > currentNode.data) {
      !currentNode.right? currentNode.right = data : currentNode = currentNode.right
    } else return
  }
  }

  find(data) {
    let currentNode = this.root;

    while (currentNode){
      if (data == currentNode) return currentNode
      if (data < currentNode.data) {
          currentNode = currentNode.left
      } else {
        currentNode = currentNode.right;
      }
      return null;
    }
  }

  has(data) {
    return !!this.find(data);
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  min() {
    let currentNode = this.root;
    while (currentNode) {
      currentNode = currentNode.left
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.root;
    while (currentNode) {
      currentNode = currentNode.right
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};