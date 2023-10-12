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
    return element;
  }

  //updates an element at the given position with provided value
  //@param {integer, *} position and value
  //@return {boolean} true if the node was updated and false otherwise
  set(position, val) {
    let node = this.get(position);
    if (node != null) {
      node.val = val;
      return true;
    }
    return false;
  }

  //adding a node in a ddl at a certain position
  //@param {integer, *} position and value
  //@return {boolean} true if successful inserted, otherwise return false
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let prev = this.get(index - 1);
    if (prev != null) {
      let newNode = new Node(val);
      newNode.next = prev.next;
      prev.next.prev = newNode;
      prev.next = newNode;
      newNode.prev = prev;
      this.length++;
      return true;
    }
    return false;
  }

  //removes an item at the index
  //@param {integer} index of the node to remove
  //@return {node} return the removed node or undefined
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let prev = removedNode.prev;
    let next = removedNode.next;

    prev.next = next;
    next.prev = prev;
    removedNode.prev = removedNode.next = null;
    this.length--;
    return removedNode;
  }

  print() {
    let arr = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push({ val: current.val, next: current.next, prev: current.prev });
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

let dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.print();
//console.log(dll.pop());
console.log(dll.shift());
dll.print();
//console.log(dll.pop());
console.log(dll.shift());
dll.print();
//console.log(dll.pop());
console.log(dll.shift());
dll.print();
//console.log(dll.pop());
console.log(dll.shift());
dll.print();
console.log(dll.unshift("two"));
console.log(dll.unshift("one"));
console.log(dll.unshift("zero"));
console.log(dll.get(1)); //one
console.log(dll.get(0)); //zero
console.log(dll.push("three"));
console.log(dll.get(2)); //two
console.log(dll.get(3)); //three
console.log(dll.get(4)); //null
console.log(dll.set(4, "abcd")); //false
console.log(dll.set(2, "two updated")); //true
console.log(dll.insert(2, "inserted at two")); //true
dll.print();
console.log(dll.remove(2)); //inserted at two
console.log(dll.remove(4)); //null
dll.print();
