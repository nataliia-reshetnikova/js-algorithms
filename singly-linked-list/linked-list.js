class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //@param {*} add value to the end of the list in constant time
  //@return {list}
  insert(val) {
    const node = new Node(val);
    if (!this.head) this.head = this.tail = node;
    else this.tail.next = this.tail = node;
  }
  // deletes a node
  //@param {*} node to remove
  //@returns val - return value of the node that was deleted
  remove(val) {
    //if empty return null
    if (!this.head) return null;
    let currentNode = this.head;
    let prev = this.head;
    if (this.tail.val === val) return myList.removeTail();
    if (this.head.val === val) {
      this.head = this.head.next;
      return currentNode;
    }
    while (!myList.isTail(currentNode)) {
      prev = currentNode;
      currentNode = currentNode.next;
      if (currentNode.val === val) {
        prev.next = currentNode.next;
        return currentNode;
      }
    }
    return null;
  }
  //checks if list has a node in constant time
  //@param {*} node to find
  //returns {boolean} true if there is  a value and false otherwise
  contains(val) {
    if (!this.head) return false;
    if (this.head.val === val) return true;
    let currentNode = this.head;
    while (!myList.isTail(currentNode)) {
      currentNode = currentNode.next;
      if (currentNode.val === val) return true;
    }
    return false;
  }
  //removes the node at the end of the list
  //@returns {*} the deleted value
  removeTail() {
    if (!this.head) return null;
    let prev = this.head;
    let currentNode = this.head;
    while (!myList.isTail(currentNode)) {
      prev = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = prev;
    this.tail.next = null;
    return currentNode;
  }
  //checks if node is a head
  //@param {node:{val:val,next:next}} val to check
  //@return {boolean} true if its a head, false if it's not
  isHead(node) {
    //if list is empty
    return this.head === node;
  }
  //checks if node is a last item in a list
  //@param {node:{val:val,next:next}} val to check
  //@return {boolean} true if its  a tail, false if it's not
  isTail(node) {
    return this.tail === node;
  }
  print() {
    let currentNode = this.head;
    let arr = [];
    while (currentNode) {
      arr.push({ val: currentNode.val, next: currentNode.next });
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
  reverse() {
    //swap the head and the tail
    //set current node to the head
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    //initialize prev and next
    let prev = null,
      next;
    //loop through until node is not null
    while (node) {
      //save next for later
      next = node.next;
      //reverse and set pointer
      node.next = prev;
      //move to the next element
      prev = node;
      node = next;
      //node = 1, next = 20, prev = null
      //node = 20, next = 21, prev = 1
    }
    return this;
  }
}

let myList = new LinkedList();
myList.print(); //{head = null, tail = null}
myList.insert(0); //{head = 0, tail = 0}
myList.print();
myList.insert(1); //{head = {val:0,next:1} tail = {val:1,next:null}}
//myList.print();
console.log(myList.isHead({ val: 0, next: myList.tail })); //false
//console.log(myList.isHead({ val: null, next: null })); //false
let oldHead = myList.head;
myList.insert(2);
//myList.print();
console.log("myList.isTail(oldHead)" + myList.isTail(oldHead)); //false
console.log(
  "myList.isTail({ val: 2, next: null })" +
    myList.isTail({ val: 2, next: null })
); //false because not pointing to the same object
console.log(myList.removeTail());
//myList.print();
myList.insert(20);
myList.insert(30);
myList.insert(4);
myList.print();
console.log(`contains 2 ${myList.contains(2)}`); //false
console.log(`contains 20 ${myList.contains(20)}`); //true
console.log(`contains 0 ${myList.contains(0)}`); //true
console.log(`contains 4 ${myList.contains(4)}`); //true
console.log(myList.remove(0));
myList.print();
console.log(myList.remove(30));
myList.print();
console.log(myList.remove(4));
myList.print();
myList.insert(21);
myList.insert(22);
myList.print();
myList.reverse(); //22->21->20->1
myList.print();
