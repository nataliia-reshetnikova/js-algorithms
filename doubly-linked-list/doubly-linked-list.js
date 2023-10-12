class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //@param {*} value to add to the end of the doubly linked list
  //@return {DoublyLinkedList} return the list with added node
  push(val) {
    if (!this.head) this.head = this.tail = new Node(val);
    else {
      let oldTail = this.tail;
      this.tail = new Node(val);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
    this.length++;
    return this;
  }

  //remove a node from the end of the list
  //@return {*} deleted node
  pop() {
    if (!this.head) return;
    let oldTail = this.tail;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  //remove the node from the beginning of the list
  //@return {*} the value from the start of the list
  shift() {
    if (!this.head) return;
    let oldHead = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  //add the node to the beginning of the list
  //@param {*} value to add to the list
  //@return {DoublyLinkedList} list with added node
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) this.head = this.tail = newHead;
    else {
      newHead.next = this.head;
      this.head.prev = newHead;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  //return an element at the given position
  //@param {integer} position
  //@return {*} value of the node at the given position
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let element = index <= this.length / 2 ? this.head : this.tail;
    let counter = index <= this.length / 2 ? 0 : this.length - 1;
    while (counter != index) {
      if (index <= this.length / 2) {
        //traverse from the head
        element = element.next;
        counter++;
      } else {
        //traverse from the tail
        element = element.prev;
        counter--;
      }
    }
    return element.val;
  }

  set() {}

  print() {
    let arr = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push({ val: current.val, next: current.next, prev: current.prev });
      //arr.push(current);
      current = current.next;
    }
    console.log(
      arr,
      `length: ${this.length}, head: ${this.head?.val || null}, tail: ${
        this.tail?.val || null
      }`
    );
  }
}

let myDLinkedList = new DoublyLinkedList();
myDLinkedList.push(1);
myDLinkedList.push(2);
myDLinkedList.push(3);
myDLinkedList.print();
//console.log(myDLinkedList.pop());
console.log(myDLinkedList.shift());
myDLinkedList.print();
//console.log(myDLinkedList.pop());
console.log(myDLinkedList.shift());
myDLinkedList.print();
//console.log(myDLinkedList.pop());
console.log(myDLinkedList.shift());
myDLinkedList.print();
//console.log(myDLinkedList.pop());
console.log(myDLinkedList.shift());
myDLinkedList.print();
console.log(myDLinkedList.unshift("two"));
console.log(myDLinkedList.unshift("one"));
console.log(myDLinkedList.unshift("zero"));
console.log(myDLinkedList.get(1)); //one
console.log(myDLinkedList.get(0)); //zero
console.log(myDLinkedList.push("three"));
console.log(myDLinkedList.get(2)); //two
console.log(myDLinkedList.get(3)); //three
console.log(myDLinkedList.get(4)); //null
