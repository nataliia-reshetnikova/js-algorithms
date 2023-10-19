class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (node.val === current.val) return undefined;
      if (node.val > current.val) {
        if (current.right) current = current.right;
        else {
          current.right = node;
          return this;
        }
      } else {
        if (current.left) current = current.left;
        else {
          current.left = node;
          return this;
        }
      }
    }
  }
  find(val) {
    if (this.root === null) return;
    let current = this.root;
    while (true) {
      if (val === current.val) return current;
      if (val < current.val) {
        if (current.left) current = current.left;
        else return;
      } else {
        if (current.right) current = current.right;
        else return;
      }
    }
  }
  breadthFirstTraverse() {
    if (!this.root) return;
    let queue = [this.root],
      visited = [],
      current;
    while (queue.length != 0) {
      current = queue.shift();
      visited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }
  deepFirstPreOrderTraverse() {
    let visited = [];
    function traverse(node) {
      if (node.val) visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
  deepFirstPostOrderTraverse() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (node.val) visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }
  deepFirstInOrderTraverse() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.val) visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(5);
tree.insert(3);
tree.insert(11);
tree.insert(11); //ignore duplicates
console.log(tree);
console.log(tree.find(5));
console.log(tree.find(2)); //undefined
console.log(tree.find(12));
console.log(tree.breadthFirstTraverse()); //[10,5,12,3,11]
//      10
//    5   12
//3     11
console.log(tree.deepFirstPreOrderTraverse()); //[10,5,3,12,11]
console.log(tree.deepFirstPostOrderTraverse()); //[3,5,11,12,10]
console.log(tree.deepFirstInOrderTraverse()); //[3,5,10,11,12]
